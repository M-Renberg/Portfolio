import { useState, useEffect } from 'react';
import type { ProjectInterface } from '../util/projectInterface';
import fetchJson from './fetchJson';

export default function useProjectDetail(id: string | undefined) {
  const [project, setProject] = useState<ProjectInterface | null>(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (!id) {
        if (isMounted) {
          setLoading(false);
        }
        return;
      }

      try {
        const [workData, personalData, schoolData] = await Promise.all([
          fetchJson<ProjectInterface[]>('/data/employerwork.json'),
          fetchJson<ProjectInterface[]>('/data/myprojects.json'),
          fetchJson<ProjectInterface[]>('/data/schoolprojects.json'),
        ]);

        const allProjects: ProjectInterface[] = [
          ...(workData || []),
          ...(personalData || []),
          ...(schoolData || []),
        ];

        const targetId = decodeURIComponent(id).trim().toLowerCase();
        const found = allProjects.find(
          (p) =>
            String(p.id).toLowerCase() === targetId ||
            (p.slug && p.slug.toLowerCase() === targetId)
        );

        if (isMounted) {
          setProject(found || null);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Kunde inte läsa in projektet.');
          setLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { project, loading, error };
}

