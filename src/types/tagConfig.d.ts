declare module '@/config/tagConfig.json' {
  interface TagDefinition {
    color: string;
    description?: string;
  }
  
  interface TagConfig {
    tags: Record<string, TagDefinition>;
  }
  
  const config: TagConfig;
  export default config;
}