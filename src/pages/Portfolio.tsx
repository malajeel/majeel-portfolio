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
                    LEGO Mini City reimagines souvenirs through collectible, geo-exclusive LEGO sets paired with an interactive companion app, transforming traditional keepsakes into meaningful, hands-on experiences that bridge the physical and digital worlds.
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

          {/* Spotify Sing It! Project */}
          <div className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-coral transition-colors">
                    Spotify Sing It!
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Spotify Sing It! is an in-app game that turns personal playlists into a social music challenge, boosting Premium engagement. By blending friendly competition with personal rediscovery, it transforms passive listening into a fun, interactive, gamified experience and lays the groundwork for a new portfolio of music-based games.
                  </p>
                </div>
                <div className="md:ml-8">
                  <Link to="/portfolio/spotify-sing-it">
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
                    A new commerce experience for Facebook Marketplace aims to move beyond its reputation as a platform for commodity transactions. Marketplace Makers connects creators of unique, handmade products with audiences eager to discover and purchase them, transforming Marketplace into a curated destination and strengthening its role in the broader commerce ecosystem.
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
                    EyeFly
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    An easy-to-operate drone solution designed to enhance Canadian provincial search and rescue (SAR) operations. It can operate autonomously using cameras and sensors to scan large or hazardous areas, or be manually piloted, improving both the efficiency and safety of locating distressed individuals.
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