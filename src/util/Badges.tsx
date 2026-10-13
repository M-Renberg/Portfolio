// util/Badges.tsx
const badgeConfigs: Record<string, { name: string; color: string; icon: string }> = {
  'c#': { name: 'C#', color: '239120', icon: 'dotnet' },
  'csharp': { name: 'C#', color: '239120', icon: 'dotnet' },
  '.net': { name: '.NET', color: '512BD4', icon: 'dotnet' },
  '.net maui': { name: '.NET MAUI', color: '512BD4', icon: 'dotnet' },
  '.net/.maui': { name: '.NET MAUI', color: '512BD4', icon: 'dotnet' },
  '.net / .maui': { name: '.NET MAUI', color: '512BD4', icon: 'dotnet' },
  '.maui': { name: '.NET MAUI', color: '512BD4', icon: 'dotnet' },
  'typescript': { name: 'TypeScript', color: '3178C6', icon: 'typescript' },
  'javascript': { name: 'JavaScript', color: 'F7DF1E', icon: 'javascript' },
  'python': { name: 'Python', color: '3C78A9', icon: 'python' },
  'html5': { name: 'HTML5', color: 'E34F26', icon: 'html5' },
  'css3': { name: 'CSS3', color: '1572B6', icon: 'css' },
  'react': { name: 'React', color: '61DAFB', icon: 'react' },
  'tailwind': { name: 'Tailwind CSS', color: '06B6D4', icon: 'tailwindcss' },
  'tailwind css': { name: 'Tailwind CSS', color: '06B6D4', icon: 'tailwindcss' },
  'vite': { name: 'Vite', color: '646CFF', icon: 'vite' },
  'sql': { name: 'SQL', color: '4479A1', icon: 'mysql' },
  'mysql': { name: 'MySQL', color: '4479A1', icon: 'mysql' },
  'azure': { name: 'Azure', color: '0089D6', icon: 'microsoftazure' },
  'rest apis': { name: 'REST APIs', color: '2DD4BF', icon: 'postman' },
  'xml': { name: 'XML', color: 'FFA500', icon: 'xml' },
  'xaml': { name: 'XAML', color: '0078D7', icon: 'visualstudio' },
  'fastapi': { name: 'FastAPI', color: '009688', icon: 'fastapi' },
  'streamlit': { name: 'Streamlit', color: 'FF4B4B', icon: 'streamlit' },
  'pandas': { name: 'Pandas', color: '150458', icon: 'pandas' },
  'pytorch': { name: 'PyTorch', color: 'EE4C2C', icon: 'pytorch' },
  'torch': { name: 'PyTorch', color: 'EE4C2C', icon: 'pytorch' },
  'transformers': { name: 'Transformers', color: 'FFD21E', icon: 'huggingface' },
  'hugging face': { name: 'Hugging Face', color: 'FFD21E', icon: 'huggingface' },
  'huggingface': { name: 'Hugging Face', color: 'FFD21E', icon: 'huggingface' },
  'scikit-learn': { name: 'Scikit-Learn', color: 'F7931E', icon: 'scikitlearn' },
  'machine learning': { name: 'Machine Learning', color: '2DD4BF', icon: 'scikitlearn' },
  'pydantic': { name: 'Pydantic', color: 'E92063', icon: 'pydantic' },
  'supabase': { name: 'Supabase', color: '3ECF8E', icon: 'supabase' }
};

export function Badge({ tech }: { tech: string }) {
  const config = badgeConfigs[tech.toLowerCase().trim()];

  // Fallback if technology is not in the configuration map
  if (!config) {
    return (
      <li className="px-2.5 py-1 bg-[#061211] border border-[#045757]/80 rounded-full text-xs font-mono text-[#B0E4CC]">
        {tech}
      </li>
    );
  }

  const url = `https://cdn.simpleicons.org/${encodeURIComponent(config.icon)}/${config.color}`;

  return (
    <li className="flex items-center gap-1.5 bg-[#061211]/90 border border-[#045757]/80 hover:border-[#2DD4BF]/60 px-3 py-1 rounded-full text-xs sm:text-sm font-mono text-[#F0F5F0] transition-colors">
      <img src={url} width="14" height="14" alt={config.name} className="inline flex-shrink-0" />
      <span>{config.name}</span>
    </li>
  );
}