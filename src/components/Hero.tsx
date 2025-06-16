
export const Hero = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16" style={{ paddingBottom: '8px' }}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Main title with fade-in animation */}
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-space-md opacity-0 animate-fade-in mobile-title" 
          style={{ 
            lineHeight: '1.2', 
            margin: 0, 
            marginBottom: 'var(--space-md)',
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}
        >
          <span className="text-foreground">Hi, I'm</span>{" "}
          <span className="text-primary">Judson</span>
        </h1>
        
        {/* Professional pill badge - slides in from top */}
        <div 
          className="flex justify-center mb-space-lg opacity-0 animate-slide-down mobile-badge" 
          style={{ 
            margin: 0, 
            marginBottom: 'var(--space-lg)',
            animationDelay: '0.6s',
            animationFillMode: 'forwards'
          }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full border border-border/50 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 max-w-full mobile-dev-badge">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3 animate-pulse flex-shrink-0"></div>
            <span className="text-xs sm:text-sm font-medium text-foreground/80 text-center leading-tight">
              <span className="block sm:inline">Writing software docs @</span>
              <span className="block sm:inline sm:ml-1 mobile-pieces-text">Pieces for Developers</span>
            </span>
          </div>
        </div>
        
        {/* Subtitle - slides in from top with delay */}
        <h2 
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-space-md opacity-0 animate-slide-down mobile-subtitle" 
          style={{ 
            lineHeight: '1.2', 
            margin: 0, 
            marginBottom: 'var(--space-md)',
            animationDelay: '1s',
            animationFillMode: 'forwards'
          }}
        >
          I write about documentation leadership
        </h2>
        
        {/* Desktop description - slides in from top with longer delay */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-slide-down desktop-only mobile-description" 
          style={{ 
            lineHeight: '1.5', 
            margin: '0 auto',
            animationDelay: '1.8s',
            animationFillMode: 'forwards'
          }}
        >
          Thoughts on technical writing, documentation strategy, 
          and leading documentation teams in the modern software landscape.
        </p>

        {/* Mobile-only description */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-slide-down mobile-only mobile-description" 
          style={{ 
            lineHeight: '1.5', 
            margin: '0 auto',
            animationDelay: '1.8s',
            animationFillMode: 'forwards'
          }}
        >
          Technical writing & documentation leadership insights
        </p>

        {/* Mobile-only value proposition section */}
        <div className="mobile-only mobile-value-section opacity-0 animate-fade-in" 
             style={{ 
               animationDelay: '2.2s',
               animationFillMode: 'forwards'
             }}>
          <div className="mobile-content-break"></div>
          <h3 className="mobile-value-title">What you'll find here</h3>
          <div className="mobile-value-points">
            <div className="mobile-value-item">
              <span className="mobile-value-icon">📝</span>
              <span>Technical writing best practices</span>
            </div>
            <div className="mobile-value-item">
              <span className="mobile-value-icon">🚀</span>
              <span>Documentation strategy insights</span>
            </div>
            <div className="mobile-value-item">
              <span className="mobile-value-icon">👥</span>
              <span>Team leadership guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
