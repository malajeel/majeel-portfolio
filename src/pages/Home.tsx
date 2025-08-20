import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-8 relative">
      {/* Social Links - Right Side */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-10">
        <a
          href="mailto:maryam.alajeel@example.com"
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
            Hi, I'm <span className="text-coral">Maryam</span>
          </h1>
        </div>

        {/* Professional Summary */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-left">
            With 5 years of experience as a certified Product Manager, I bring a 
            unique blend of engineering expertise and product vision to the table.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-left">
          <Link to="/portfolio">
            <Button 
              variant="ghost"
              className="text-coral hover:text-coral/80 text-lg font-medium p-0 h-auto group"
            >
              Let's Collaborate
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;