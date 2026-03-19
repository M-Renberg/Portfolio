interface BadgeConfig {
  name: string;
  color: string;
  icon: string;
}

// Vi använder Record<string, BadgeConfig> för att tillåta dynamisk uppslagning via strängar
const badgeConfigs: Record<string, BadgeConfig> = {
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

export function initBadges(): void {
  // QuerySelectorAll returnerar en NodeListOf<Element>
  const techItems = document.querySelectorAll<HTMLLIElement>(
    '.stack-category li, .mp-myprojects-box li, .mp-schoolprojects-box li'
  );

  if (techItems.length === 0) return;

  techItems.forEach((li: HTMLLIElement) => {
    // Kontrollera om bilden redan finns
    if (li.querySelector('img')) return;

    // Hämta textinnehåll säkert
    const techText: string = li.textContent?.toLowerCase().trim() || '';
    const config = badgeConfigs[techText];

    if (config) {
      const img = document.createElement('img');

      // Använd encodeURIComponent för att hantera specialtecken
      const safeIcon = encodeURIComponent(config.icon);

      // Inställningar för bilden
      img.src = `https://cdn.simpleicons.org/${safeIcon}/${config.color}`;
      img.width = 16;
      img.height = 16;
      img.style.marginRight = "8px";
      img.style.verticalAlign = "middle";
      img.alt = config.name;

      li.prepend(img);
    }
  });
}
// Format: https://cdn.simpleicons.org/{icon}/{color}