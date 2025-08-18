import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-hero">
            Hi, I'm <span className="text-coral">Maryam</span>
          </h1>
        </div>

        {/* Professional Summary */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-body-large text-muted-foreground">
            With a Professional Product Management Certificate and a strong engineering background, 
            I bring a unique blend of creativity and technical expertise to the table. 
            I excel at driving product vision, agile development, and data-driven improvements.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-16">
          <Link to="/portfolio">
            <Button 
              size="lg" 
              className="bg-coral hover:bg-coral/90 text-coral-foreground px-8 py-6 text-lg font-medium group"
            >
              Explore my work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
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

        {/* Company Logos Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Experience with leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-medium text-muted-foreground">WalterFedy</div>
            <div className="text-lg font-medium text-muted-foreground">EyeFly</div>
            <div className="text-lg font-medium text-muted-foreground">Arcadis IBI Group</div>
            <div className="text-lg font-medium text-muted-foreground">TTC</div>
            <div className="text-lg font-medium text-muted-foreground">FleetCarma</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;