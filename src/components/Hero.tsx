
export const Hero = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 animate-fade-in" style={{ paddingBottom: '8px' }}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-space-md" style={{ lineHeight: '1.2', margin: 0, marginBottom: 'var(--space-md)' }}>
          <span className="text-foreground">Hi, I'm</span>{" "}
          <span className="text-primary">Judson</span>
        </h1>
        
        {/* Professional pill badge positioned under the name - Responsive sizing */}
        <div className="flex justify-center mb-space-lg" style={{ margin: 0, marginBottom: 'var(--space-lg)' }}>
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full border border-border/50 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 max-w-full">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3 animate-pulse flex-shrink-0"></div>
            <span className="text-xs sm:text-sm font-medium text-foreground/80 text-center leading-tight">
              <span className="block sm:inline">Writing software docs @</span>
              <span className="block sm:inline sm:ml-1">Pieces for Developers</span>
            </span>
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-space-md" style={{ lineHeight: '1.2', margin: 0, marginBottom: 'var(--space-md)' }}>
          I write about documentation leadership
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ lineHeight: '1.5', margin: '0 auto' }}>
          Thoughts on technical writing, documentation strategy, 
          and leading documentation teams in the modern software landscape.
        </p>
      </div>
    </section>
  );
};
