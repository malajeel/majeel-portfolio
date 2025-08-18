interface PortfolioProgressProps {
  sections: string[];
  activeSection: number;
}

const PortfolioProgress = ({ sections, activeSection }: PortfolioProgressProps) => {
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-40">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-progress-line"></div>
        
        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="relative flex items-center">
              {/* Circle indicator */}
              <div 
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  index === activeSection 
                    ? 'bg-progress-active border-progress-active' 
                    : 'bg-background border-progress-line'
                }`}
              ></div>
              
              {/* Section title */}
              <span 
                className={`ml-4 text-sm transition-all duration-300 whitespace-nowrap ${
                  index === activeSection 
                    ? 'font-semibold text-foreground' 
                    : 'text-muted-foreground'
                }`}
              >
                {section}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProgress;