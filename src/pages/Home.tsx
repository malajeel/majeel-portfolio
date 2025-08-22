import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-8 relative">
      {/* Social Links - Right Side */}
      <div className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col space-y-6 z-10">
        <a
          href="mailto:malajeel@uwaterloo.ca"
          className="flex items-center text-nav-text hover:text-coral transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://linkedin.com/in/maryam-alajeel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-nav-text hover:text-coral transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight text-left">
            Hi, I'm <span className="text-coral">Maryam :)</span>
          </h1>
        </div>

        {/* Professional Summary */}
        <div className="mb-16 max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-left">
            As a certified product manager with a strong engineering background, I combine creativity 
            and technical expertise to drive product vision, agile development, and data-driven improvements.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-left space-y-4">
          <div>
            <Link to="/about">
              <Button 
                variant="ghost"
                className="text-coral hover:text-coral/80 text-lg font-bold p-0 h-auto group"
              >
                About me
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/portfolio">
              <Button 
                variant="ghost"
                className="text-coral hover:text-coral/80 text-lg font-bold p-0 h-auto group"
              >
                Explore portfolio
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;