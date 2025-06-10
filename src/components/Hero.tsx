
export const Hero = () => {
  return (
    <section className="py-20 lg:py-28 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Hi, I'm</span>{" "}
          <span className="text-primary">Judson</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
          I write about documentation leadership
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Thoughts on technical writing, documentation strategy, 
          and leading documentation teams in the modern software landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
              writing software docs @ pieces for developers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
