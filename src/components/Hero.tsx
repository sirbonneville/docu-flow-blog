
export const Hero = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16" style={{ paddingBottom: '8px' }}>
      <div className="max-w-4xl mx-auto text-center px-6 sm:px-6">
        {/* Main title with fade-in animation - increased mobile spacing */}
        <h1 
          className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 md:mb-space-md opacity-0 animate-fade-in" 
          style={{ 
            lineHeight: '1.6', 
            margin: 0, 
            marginBottom: '2rem',
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}
        >
          <span className="text-foreground">Hi, I'm</span>{" "}
          <span className="text-primary">Judson</span>
        </h1>
        
        {/* Professional pill badge - slides in from top - enhanced mobile styling */}
        <div 
          className="flex justify-center mb-8 md:mb-space-lg opacity-0 animate-slide-down" 
          style={{ 
            margin: 0, 
            marginBottom: '2rem',
            animationDelay: '0.6s',
            animationFillMode: 'forwards'
          }}
        >
          <div className="inline-flex items-center px-4 sm:px-4 py-3 sm:py-2 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 max-w-full">
            <div className="w-3 h-3 sm:w-2 sm:h-2 bg-primary rounded-full mr-3 sm:mr-3 animate-pulse flex-shrink-0"></div>
            <span className="text-sm sm:text-sm font-semibold text-foreground text-center leading-tight">
              <span className="block sm:inline">Writing software docs @</span>
              <span className="block sm:inline sm:ml-1 text-primary">Pieces for Developers</span>
            </span>
          </div>
        </div>
        
        {/* Subtitle - slides in from top with delay - increased mobile spacing */}
        <h2 
          className="text-2xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-8 md:mb-space-md opacity-0 animate-slide-down" 
          style={{ 
            lineHeight: '1.6', 
            margin: 0, 
            marginBottom: '2rem',
            animationDelay: '1s',
            animationFillMode: 'forwards'
          }}
        >
          I write about documentation leadership
        </h2>
        
        {/* Desktop description - hidden on mobile */}
        <p 
          className="hidden md:block text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-slide-down" 
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
        
        {/* Mobile description - shown only on mobile */}
        <p 
          className="block md:hidden text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed opacity-0 animate-slide-down px-4" 
          style={{ 
            lineHeight: '1.6', 
            margin: '0 auto',
            animationDelay: '1.8s',
            animationFillMode: 'forwards'
          }}
        >
          Technical writing & documentation leadership insights
        </p>
        
        {/* Mobile-specific "What you'll find here" section */}
        <div 
          className="block md:hidden mt-8 p-6 rounded-2xl border border-border/30 bg-gradient-to-br from-card/80 to-background/50 backdrop-blur-sm opacity-0 animate-fade-in"
          style={{ 
            animationDelay: '2.4s',
            animationFillMode: 'forwards'
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-3">What you'll find here</h3>
          <ul className="text-sm text-muted-foreground space-y-2 text-left">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              Documentation strategy insights
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              Technical writing best practices
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              Team leadership guidance
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
