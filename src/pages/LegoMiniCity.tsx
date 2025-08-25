import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioProgress from "@/components/PortfolioProgress";

const LegoMiniCity = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    "Project Summary",
    "Industry Gap",
    "Target Audience",
    "Physical Product", 
    "Digital Companion App",
    "Value Proposition",
    "Market Opportunity",
    "GTM Strategy",
    "User Research & Insights",
    "Skills"
  ];

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) => 
        document.getElementById(`section-${index}`)
      );
      
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection(sections.length - 1); // Set to last section (Skills)
        return;
      }
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen py-20 px-6 sm:px-8 lg:pl-48">
      <PortfolioProgress sections={sections} activeSection={activeSection} onSectionClick={scrollToSection} />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link to="/portfolio" className="inline-flex items-center text-coral hover:text-coral/80 transition-colors mb-6 font-bold">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-section-title mb-6">LEGO Mini City</h1>
          <div className="w-16 h-1 bg-coral mb-6"></div>
        </div>

        {/* Project Summary */}
        <section id="section-0" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Project Summary</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The LEGO Mini City is a new line of collectible, location-specific LEGO builds that redefine the souvenir market. Addressing the industry gap of generic, low-quality, and overpriced mementos, this product combines the premium quality of the LEGO brand with a compelling, interactive experience. The solution is a series of compact, high-quality sets representing global cities, augmented by a gamified digital companion app.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The product's core value lies in its geo-exclusive availability, which transforms a simple purchase into a meaningful, hands-on, and collectible journey. This project aims to increase LEGO's market share in the global souvenir industry, deepen emotional connections with a new segment of fans, and foster a vibrant community of "LEGO Travellers."
            </p>
          </div>
        </section>

        {/* Industry Gap */}
        <section id="section-1" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Industry Gap</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The current souvenir market struggles with a lack of authenticity and value. Generic items like mass-produced keychains, t-shirts, and mugs often feel impersonal and are of poor quality. Decorative options, while sometimes more meaningful, are often fragile, expensive, and not universally appealing.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Even LEGO's existing travel-themed sets, such as the Creator Postcards and Architecture Skylines, suffer from widespread availability that diminishes their value as personal mementos. Because a Tokyo postcard set can be ordered online from Canada without ever visiting the country, it lacks the personal connection that a true souvenir provides.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              There is a clear gap for a unique, high-quality, and interactive souvenir that is both easy to transport and exclusive to the location it represents. It can create a lasting and meaningful memory for travellers, whether they choose to purchase it for themselves or as a thoughtful gift to share with others.
            </p>
          </div>
        </section>

        {/* Target Audience */}
        <section id="section-2" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Target Audience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Primary Users</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Millennial & Gen-Z Travellers:</strong> Seeking creative, city-themed keepsakes with digital bragging rights</li>
                <li><strong>LEGO Enthusiasts & Collectors:</strong> Looking to expand LEGO collection, valuing exclusivity and a good design</li>
                <li><strong>Families with Kids:</strong> Seeking meaningful souvenirs that connect LEGO play to real-world travel memories</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Secondary Users</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Locals:</strong> Expanding personal collections through a hobby that offers a sense of accomplishment and community</li>
                <li><strong>Gift Givers:</strong> Finding thoughtful gifts that are portable and durable</li>
                <li><strong>Education Programs:</strong> Hands-on learning that stimulates creativity and imagination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Physical Product */}
        <section id="section-3" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Physical Product</h2>
          <div className="mb-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Designed by myself to balance detail and simplicity, LEGO Mini City sets appeal to both LEGO enthusiasts and casual tourists, and are available exclusively at the LEGO store in their respective cities, offering a unique, location-specific collectible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <img 
              src="/lovable-uploads/a76770f3-e4b0-46b2-8c61-d153be028eba.png" 
              alt="LEGO Mini Toronto - Features CN Tower, streetcar, and downtown buildings" 
              className="w-full h-auto rounded-lg border"
            />
            <img 
              src="/lovable-uploads/a3ae69c4-c028-47da-8d81-d5097aa29a4e.png" 
              alt="LEGO Mini Tokyo - Features Tokyo Tower, cherry blossom tree, and traditional buildings" 
              className="w-full h-auto rounded-lg border"
            />
            <img 
              src="/lovable-uploads/4eda6c5b-2de9-4ded-a50c-8fa1241a9ba6.png" 
              alt="LEGO Mini Rome - Features Colosseum, Trevi Fountain, and chef minifigure" 
              className="w-full h-auto rounded-lg border"
            />
            <img 
              src="/lovable-uploads/2682f92a-2060-4b9e-aaad-7b83c9046234.png" 
              alt="LEGO Mini Dubai - Features Burj Khalifa, modern skyline, and palm trees" 
              className="w-full h-auto rounded-lg border"
            />
            <img 
              src="/lovable-uploads/5ea4a930-d271-4d67-a12f-505959f312e3.png" 
              alt="LEGO Mini Bangkok - Features golden temples, tuk-tuk, and traditional architecture" 
              className="w-full h-auto rounded-lg border"
            />
            <img 
              src="/lovable-uploads/db2f8f91-b6b7-440f-bbdf-1e819934aaa8.png" 
              alt="LEGO Mini London - Features London Eye, Big Ben, red double-decker bus, and royal guard" 
              className="w-full h-auto rounded-lg border"
            />
          </div>
          
          <p className="text-xs text-muted-foreground/70 italic mb-6">
            The visual mockups were conceptualized and directed by myself, and brought to life with AI support.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Compact Design:</strong> Bite-sized builds that are easy to carry and perfect for travel.</li>
              <li>• <strong>High-Quality Construction:</strong> Durable LEGO pieces that provide a premium building experience.</li>
              <li>• <strong>City-Specific Detail:</strong> Intricately represents landmarks and cultural icons of specific cities.</li>
              <li>• <strong>Portable Keepsakes:</strong> Small and lightweight, ideal for collecting multiple souvenirs.</li>
              <li>• <strong>Affordable Price Point:</strong> Priced at $15-$20 CAD, offering excellent value compared to generic souvenirs.</li>
              <li>• <strong>Unique and Memorable:</strong> Offers a meaningful alternative to typical mass-produced souvenirs.</li>
            </ul>
          </div>
        </section>

        {/* Digital Companion App */}
        <section id="section-4" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Digital Companion App</h2>
          <div className="mb-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              To enhance the product's value and foster a global community, the LEGO Mini City line is tied to a companion mobile app. To bridge the physical and digital experience, a unique QR code is included within each set's instruction manual, which serves as a key to unlock the digital features in the companion app.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-2">Interactive Figma Prototype</h3>
                  <p className="text-muted-foreground text-sm">
                    Explore the medium-fidelity user interface and experience flow
                  </p>
                </div>
                <Button variant="outline" className="group" asChild>
                  <a href="https://www.figma.com/proto/xiQDEpCMfLPzBmsdCPButL/LEGO-Mini-City?node-id=78-388&t=Q3RiJo1nC0ya6cuO-1" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Figma
                  </a>
                </Button>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The app is a central hub for the digital experience, designed to track collections, reward progress, and connect users. The app features four key tabs:
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Profile Tab:</h4>
                <p className="text-muted-foreground">A personalized "Traveller LEGO Profile" where users can view and display their overall collection progress and earned digital badges.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Shelf Tab:</h4>
                <p className="text-muted-foreground">A virtual display case that allows collectors to digitally arrange their owned Mini City sets, mirroring their physical collection.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Map Tab:</h4>
                <p className="text-muted-foreground">An interactive map that highlights LEGO stores in cities where Mini City sets are available. It also displays community acquisition data, such as how many users have collected a Mini City set from a particular LEGO store, fostering a sense of shared experience.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Leaderboard Tab:</h4>
                <p className="text-muted-foreground">A competitive (we only do friendly competitions) feature that ranks top collectors based on the size of their collection, incentivizing repeat purchases and continued engagement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="section-5" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Value Proposition</h2>
          <div className="bg-coral/5 border border-coral/20 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-coral mb-3">Unique Selling Proposition Statement</h3>
            <p className="text-foreground leading-relaxed">
              "LEGO Mini City: Relive Your Adventures, Brick by Brick."
            </p>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            LEGO Mini City is a unique product that transforms a simple souvenir into a meaningful, hands-on, and collectible experience. It is the only LEGO series offering exclusive city-themed sets that are available only in the regions they represent.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-coral font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Addresses Pain Points</h4>
              <p className="text-muted-foreground text-sm">It directly addresses the customer pain points of generic, low-quality, and overpriced souvenirs by offering a premium, high-quality alternative that provides significantly enhanced value.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-coral font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Creates Tangible & Emotional Value</h4>
              <p className="text-muted-foreground text-sm">The act of building the set, combined with the geo-exclusive availability, creates a deeper emotional connection and a stronger memory of a trip.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-coral font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Offers Portability</h4>
              <p className="text-muted-foreground text-sm">The compact size and inherent durability of LEGO solve the common issue of fragile souvenirs that are difficult to transport.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-coral font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Gamifies the Experience</h4>
              <p className="text-muted-foreground text-sm">The companion app turns collecting into a rewarding quest, complete with badges, a digital display shelf, and a leaderboard that drives continuous engagement and repeat purchases.</p>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="section-6" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Market Opportunity & Strategic Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Market Size</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Global Souvenir Market: ~$131.88 billion USD annually.</li>
                <li>• Serviceable Available Market (LEGO fans): ~$6.59 billion USD.</li>
                <li>• Serviceable Obtainable Market (In pilot cities*): ~$1.23 billion USD.</li>
              </ul>
              <p className="text-xs text-muted-foreground/70 mt-3 italic">
                *Pilot cities are London, Rome, Paris, Tokyo, Bangkok, Dubai, and New York City, selected for their status as leading global tourist hubs over the past several years.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Strategic Impact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Diversifying portfolio into experiential collectibles.</li>
                <li>• Addressing rising consumer demand for meaningful travel mementos.</li>
                <li>• Leveraging brand strength to deliver premium, collectible experiences.</li>
                <li>• Strengthening brand loyalty through an integrated digital platform.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GTM Strategy */}
        <section id="section-7" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Go-to-Market Strategy</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 1: Pre-Launch (Months 1-6)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Finalize physical and app designs, develop core app features.</li>
                <li>• Teaser campaigns with targeted messaging (social media, billboards, emails, "Coming Soon" page on the LEGO site).</li>
                <li>• Influencer & media partnerships.</li>
                <li>• Early reveal for LEGO Insiders.</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 2: Launch (Week 1-8)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Global announcement, vibrant in-store displays in pilot cities.</li>
                <li>• "Collect Your City" campaign (exclusive badges to be earned on the app).</li>
                <li>• "Making Of" digital content series.</li>
                <li>• Limited-time in-app challenges.</li>
                <li>• Geo-fenced mobile ads in tourist hubs.</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 3: Post-Launch Optimization and Expansion (Ongoing)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Continuous monitoring of sales, app engagement, UGC, customer feedback.</li>
                <li>• Adjust production, optimize packaging.</li>
                <li>• Introduce new digital features & rewards.</li>
                <li>• Expand to new cities based on demand.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Research & Insights */}
        <section id="section-8" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">User Research & Insights</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              To validate the product concept, a user research study was conducted via a survey across diverse demographics. The key findings directly informed subsequent product decisions.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Key Insights</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>High Product Appeal:</strong> The concept was met with overwhelming interest, with 96% of respondents finding the idea of a LEGO souvenir either "Very appealing" or "Slightly appealing."</li>
                <li>• <strong>Core Value Drivers:</strong> The most valued aspects of a souvenir, according to the survey, were that it represents the destination well (84%) and is easy to pack/transport (84%). This validated the focus on compact, landmark/culture-centric builds.</li>
                <li>• <strong>Primary Concern:</strong> Price was the top concern (76%). Although the survey suggested a range of $20–$25 CAD, we set the target at $15–$20 CAD to strengthen value perception, broaden accessibility, and still ensure profitability for LEGO.</li>
                <li>• <strong>Gift-Giving Potential:</strong> The survey revealed a strong potential for gift sales, with 88% of respondents "Extremely likely" and "Likely" to purchase a set as a gift, which informed the messaging targeting the "Gift Givers."</li>
                <li>• <strong>Distribution:</strong> Although some respondents are open to visiting LEGO stores, accessibility and proximity of the stores to tourist areas are critical.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="section-9" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Key competencies and tools demonstrated throughout this project:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Product Management</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Product Strategy</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Market Research</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">GTM Strategy</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">PRD</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Strategic Planning</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">User Research</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Data-Informed Decision Making</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Design & Development</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">UX Design</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Prototyping</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">User Research</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Agile Development</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Figma</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">BrickLink</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">MS Paint (yes some people still use it)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-start items-center pt-8 border-t border-border">
          <Link to="/portfolio" className="inline-flex items-center text-coral hover:text-coral/80 transition-colors font-bold">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegoMiniCity;