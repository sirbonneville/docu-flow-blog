
export const Hero = () => {
  return (
    <section className="py-12 lg:py-16 animate-fade-in" style={{ paddingBottom: '32px' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-space-md" style={{ lineHeight: '1.2', margin: 0, marginBottom: 'var(--space-md)' }}>
          <span className="text-foreground">Hi, I'm</span>{" "}
          <span className="text-primary">Judson</span>
        </h1>
        
        {/* Professional pill badge positioned under the name */}
        <div className="flex justify-center mb-space-lg" style={{ margin: 0, marginBottom: 'var(--space-lg)' }}>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border/50 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">
              Writing software docs @ Pieces for Developers
            </span>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-space-md" style={{ lineHeight: '1.2', margin: 0, marginBottom: 'var(--space-md)' }}>
          I write about documentation leadership
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: '1.5', margin: '0 auto' }}>
          Thoughts on technical writing, documentation strategy, 
          and leading documentation teams in the modern software landscape.
        </p>
      </div>
    </section>
  );
};
