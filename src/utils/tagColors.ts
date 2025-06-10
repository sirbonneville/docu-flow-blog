
// Predefined color combinations for light and dark modes
const TAG_COLORS = [
  {
    light: 'bg-blue-100 text-blue-800 border-blue-200',
    dark: 'dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
  },
  {
    light: 'bg-green-100 text-green-800 border-green-200',
    dark: 'dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
  },
  {
    light: 'bg-purple-100 text-purple-800 border-purple-200',
    dark: 'dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800'
  },
  {
    light: 'bg-orange-100 text-orange-800 border-orange-200',
    dark: 'dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800'
  },
  {
    light: 'bg-red-100 text-red-800 border-red-200',
    dark: 'dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
  },
  {
    light: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    dark: 'dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800'
  },
  {
    light: 'bg-pink-100 text-pink-800 border-pink-200',
    dark: 'dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800'
  },
  {
    light: 'bg-teal-100 text-teal-800 border-teal-200',
    dark: 'dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800'
  }
];

// Map to store tag to color index assignments
const tagColorMap = new Map<string, number>();
let nextColorIndex = 0;

export function getTagColor(tag: string): string {
  // Normalize tag name for consistent mapping
  const normalizedTag = tag.toLowerCase().trim();
  
  // Check if we already have a color assigned to this tag
  if (!tagColorMap.has(normalizedTag)) {
    tagColorMap.set(normalizedTag, nextColorIndex % TAG_COLORS.length);
    nextColorIndex++;
  }
  
  const colorIndex = tagColorMap.get(normalizedTag)!;
  const colorScheme = TAG_COLORS[colorIndex];
  
  return `${colorScheme.light} ${colorScheme.dark}`;
}
