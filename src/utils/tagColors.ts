import tagConfig from '@/config/tagConfig.json';

// Predefined color combinations for light and dark modes
const TAG_COLORS = {
  blue: {
    light: 'bg-blue-100 text-blue-800 border-blue-200',
    dark: 'dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
  },
  green: {
    light: 'bg-green-100 text-green-800 border-green-200',
    dark: 'dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
  },
  purple: {
    light: 'bg-purple-100 text-purple-800 border-purple-200',
    dark: 'dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800'
  },
  orange: {
    light: 'bg-orange-100 text-orange-800 border-orange-200',
    dark: 'dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800'
  },
  red: {
    light: 'bg-red-100 text-red-800 border-red-200',
    dark: 'dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
  },
  indigo: {
    light: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    dark: 'dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800'
  },
  pink: {
    light: 'bg-pink-100 text-pink-800 border-pink-200',
    dark: 'dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800'
  },
  teal: {
    light: 'bg-teal-100 text-teal-800 border-teal-200',
    dark: 'dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800'
  }
};

// Available color names for automatic assignment
const COLOR_NAMES = Object.keys(TAG_COLORS);

// Map to store tag to color index assignments for automatic colors
const autoAssignedColors = new Map<string, number>();
let nextColorIndex = 0;

// Cache for computed tag colors
const tagColorCache = new Map<string, string>();

interface TagColorOptions {
  frontmatterColors?: Record<string, string>;
}

/**
 * Get the color classes for a tag using the three-tier priority system:
 * 1. Frontmatter color override (highest priority)
 * 2. Central config color (tagConfig.json)
 * 3. Automatic color assignment (fallback)
 */
export function getTagColor(tag: string, options: TagColorOptions = {}): string {
  // Normalize tag name for consistent mapping
  const normalizedTag = tag.trim();
  
  // Check cache first
  const cacheKey = `${normalizedTag}-${JSON.stringify(options.frontmatterColors || {})}`;
  if (tagColorCache.has(cacheKey)) {
    return tagColorCache.get(cacheKey)!;
  }
  
  let colorName: string;
  
  // Priority 1: Check frontmatter color override
  if (options.frontmatterColors && options.frontmatterColors[normalizedTag]) {
    colorName = options.frontmatterColors[normalizedTag].toLowerCase();
  }
  // Priority 2: Check central config
  else if (tagConfig.tags[normalizedTag]?.color) {
    colorName = tagConfig.tags[normalizedTag].color.toLowerCase();
  }
  // Priority 3: Automatic assignment
  else {
    // Check if we already assigned a color to this tag
    if (!autoAssignedColors.has(normalizedTag)) {
      autoAssignedColors.set(normalizedTag, nextColorIndex % COLOR_NAMES.length);
      nextColorIndex++;
    }
    
    const colorIndex = autoAssignedColors.get(normalizedTag)!;
    colorName = COLOR_NAMES[colorIndex];
  }
  
  // Get the color scheme or fallback to first color if invalid
  const colorScheme = TAG_COLORS[colorName as keyof typeof TAG_COLORS] || TAG_COLORS.blue;
  const result = `${colorScheme.light} ${colorScheme.dark}`;
  
  // Cache the result
  tagColorCache.set(cacheKey, result);
  
  return result;
}

/**
 * Get tag description from central config
 */
export function getTagDescription(tag: string): string | undefined {
  const normalizedTag = tag.trim();
  return tagConfig.tags[normalizedTag]?.description;
}

/**
 * Clear the color cache (useful for hot reloading)
 */
export function clearTagColorCache(): void {
  tagColorCache.clear();
}