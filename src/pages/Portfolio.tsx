import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-section-title mb-6">Portfolio</h1>
          <div className="w-16 h-1 bg-coral mx-auto mb-6"></div>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            A selection of projects highlighting the process of product design and management, from concept to launch.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {/* Lego Mini City Project */}
          <div className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-coral transition-colors">
                    LEGO Mini City
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A comprehensive product development project featuring both physical product design and a digital companion app. The LEGO Mini City reimagines souvenirs through collectible, geo-exclusive LEGO sets paired with an interactive app, transforming traditional keepsakes into meaningful, hands-on experiences. This project showcases end-to-end product strategy, market research, and go-to-market planning.
                  </p>
                </div>
                <div className="md:ml-8">
                  <Link to="/portfolio/lego-mini-city">
                    <Button variant="outline" className="group/btn">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Facebook Marketplace Makers Project */}
          <div className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-coral transition-colors">
                    Facebook Marketplace Makers
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A new commerce experience is proposed for Facebook Marketplace to overcome its reputation as a transactional platform for commodity goods. The Marketplace Makers feature is designed to connect individuals who create unique, handmade products with an audience eager to discover and purchase them. This initiative will transform the platform into a curated marketplace, strengthening its role in the broader commerce ecosystem.
                  </p>
                </div>
                <div className="md:ml-8">
                  <Link to="/portfolio/marketplace-makers">
                    <Button variant="outline" className="group/btn">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* EyeFly Project */}
          <div className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-coral transition-colors">
                    EyeFly Drone Solution
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    EyeFly is an easy-to-operate drone solution designed to enhance Canadian provincial 
                    ground search and rescue (SAR) operations. It aims to improve the efficiency and safety 
                    of locating distressed individuals by utilizing mounted cameras and sensors for autonomous 
                    navigation and scanning of large or hazardous areas.
                  </p>
                </div>
                <div className="md:ml-8">
                  <Link to="/portfolio/eyefly">
                    <Button variant="outline" className="group/btn">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in working together or learning more about my projects?
          </p>
          <Link to="/contact">
            <Button className="bg-coral hover:bg-coral/90 text-coral-foreground">
              Let's Connect
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;