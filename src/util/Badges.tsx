// util/Badges.tsx
const badgeConfigs: Record<string, { name: string; color: string; icon: string }> = {
  'c#': { name: 'C#', color: '239120', icon: 'dotnet' },
  'csharp': { name: 'Csharp', color: '239120', icon: 'dotnet' },
  'typescript': { name: 'TypeScript', color: '3178C6', icon: 'typescript' },
  'javascript': { name: 'JavaScript', color: 'F7DF1E', icon: 'javascript' },
  'python': { name: 'Python', color: '3C78A9', icon: 'python' },
  'html5': { name: 'HTML', color: 'E34F26', icon: 'html5' },
  'css3': { name: 'CSS', color: '1572B6', icon: 'css' },
  'react': { name: 'React', color: '61DAFB', icon: 'react' },
  'sql': { name: 'SQL', color: '4479A1', icon: 'mysql' },
  '.net/.maui': { name: '.NET MAUI', color: '512BD4', icon: 'dotnet' },
  '.net / .maui': { name: '.NET MAUI', color: '512BD4', icon: 'dotnet' },
  '.maui': { name: '.NET MAUI', color: '512BD4', icon: 'dotnet' },
  'xml': { name: 'XML', color: 'FFA500', icon: 'xml' },
  'xaml': { name: 'XAML', color: '0078D7', icon: 'visualstudio' }
};

export function Badge({ tech }: { tech: string }) {
  const config = badgeConfigs[tech.toLowerCase().trim()];

  // Fallback om tekniken inte finns i din lista
  if (!config) return <li className="px-2 py-1 bg-gray-800 rounded text-xs" > {tech} </li>;

  const url = `https://cdn.simpleicons.org/${encodeURIComponent(config.icon)}/${config.color}`;

  return (
    <li className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 px-3 py-1 rounded-full text-sm" >
      <img src={url} width="16" height="16" alt={config.name} className="inline" />
      <span>{config.name} </span>
    </li>
  );
}
// Format: https://cdn.simpleicons.org/{icon}/{color}