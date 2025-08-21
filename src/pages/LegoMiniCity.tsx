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
          <Link to="/portfolio" className="inline-flex items-center text-coral hover:text-coral/80 transition-colors mb-6 font-bold ml-4">
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
                <li><strong>Children (6-14 years):</strong> Creative builders seeking engaging, educational play experiences</li>
                <li><strong>Parents:</strong> Value educational toys that promote STEM learning and creativity</li>
                <li><strong>Educators:</strong> Teachers looking for hands-on learning tools for classroom use</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Secondary Users</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Adult Builders:</strong> Hobbyists and collectors interested in complex building challenges</li>
                <li><strong>Institutions:</strong> Libraries, museums, and learning centers</li>
                <li><strong>Gift Purchasers:</strong> Extended family and friends seeking meaningful presents</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Physical Product */}
        <section id="section-3" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Physical Product</h2>
          <div className="mb-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The physical component of Lego Mini City focuses on creating modular, educational 
              building experiences that promote creativity, problem-solving, and spatial awareness. 
              The design emphasizes sustainability, safety, and compatibility with existing Lego systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Placeholder for 6 product images */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="aspect-square bg-muted rounded-lg flex items-center justify-center border">
                <span className="text-muted-foreground">Product Image {num}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Modular design for endless customization possibilities</li>
              <li>• Sustainable materials and eco-friendly packaging</li>
              <li>• Age-appropriate safety standards and testing</li>
              <li>• Cross-compatibility with existing Lego collections</li>
              <li>• Educational value focusing on STEM concepts</li>
            </ul>
          </div>
        </section>

        {/* Digital Companion App */}
        <section id="section-4" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Digital Companion App</h2>
          <div className="mb-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The digital companion app enhances the physical building experience through interactive 
              guides, augmented reality features, and community sharing capabilities. The app serves 
              as a bridge between traditional play and digital engagement.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-2">Interactive Figma Prototype</h3>
                  <p className="text-muted-foreground text-sm">
                    Explore the complete user interface and experience flow
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">App Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Step-by-step building instructions</li>
                <li>• AR visualization for complex builds</li>
                <li>• Progress tracking and achievements</li>
                <li>• Community sharing and challenges</li>
                <li>• Parent dashboard and controls</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Technical Stack</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React Native for cross-platform compatibility</li>
                <li>• ARKit/ARCore for augmented reality</li>
                <li>• Firebase for real-time data sync</li>
                <li>• Machine learning for build recognition</li>
                <li>• Cloud storage for user-generated content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="section-5" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Value Proposition</h2>
          <div className="bg-coral/5 border border-coral/20 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-coral mb-3">Core Value Statement</h3>
            <p className="text-foreground leading-relaxed">
              "Lego Mini City transforms traditional building play into an immersive, educational journey 
              that adapts to each child's learning pace while fostering creativity, problem-solving, 
              and digital literacy in one integrated experience."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-coral font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Educational Excellence</h4>
              <p className="text-muted-foreground text-sm">STEM-focused learning through hands-on building and digital interaction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-coral font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Growing Engagement</h4>
              <p className="text-muted-foreground text-sm">Adaptive difficulty and content that evolves with user skill development</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-coral font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Community Connection</h4>
              <p className="text-muted-foreground text-sm">Social features that encourage sharing, collaboration, and friendly competition</p>
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
                <li>• Global educational toys market: $17.4B (2023)</li>
                <li>• Building toys segment: 23% market share</li>
                <li>• Digital integration growth: 15% CAGR</li>
                <li>• STEM education focus driving demand</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Strategic Impact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Enhanced brand loyalty through digital engagement</li>
                <li>• Subscription revenue from app features</li>
                <li>• Data insights for product development</li>
                <li>• Educational partnerships and licensing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GTM Strategy */}
        <section id="section-7" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Go-to-Market Strategy</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 1: Market Validation (Months 1-3)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Beta testing with target families and educational institutions</li>
                <li>• Partnerships with toy specialty retailers</li>
                <li>• Social media campaigns targeting parent communities</li>
                <li>• Educational conference demonstrations</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 2: Scaled Launch (Months 4-8)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Major retail partnerships (Target, Amazon, specialty stores)</li>
                <li>• Influencer collaborations with family and education content creators</li>
                <li>• Trade show presence at toy and education industry events</li>
                <li>• Content marketing focusing on educational benefits</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 3: Growth & Expansion (Months 9-12)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• International market expansion</li>
                <li>• Educational curriculum partnerships</li>
                <li>• Product line extensions and advanced sets</li>
                <li>• Community-driven content and challenges</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Research & Insights */}
        <section id="section-8" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">User Research & Insights</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Research Methodology</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comprehensive user research was conducted through surveys with 200+ parents, 
                focus groups with children aged 6-14, and observational studies in educational settings. 
                This research informed product design decisions and validated market assumptions.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Parent interviews (n=50) to understand purchasing motivations</li>
                <li>• Child play sessions to observe engagement patterns</li>
                <li>• Educator surveys on classroom integration preferences</li>
                <li>• Competitive analysis of existing digital-physical toy products</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3">Key Insights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 78% of parents prioritize educational value over entertainment</li>
                  <li>• Children showed 40% higher engagement with AR-assisted building</li>
                  <li>• Social sharing features were requested by 65% of test users</li>
                  <li>• Screen time concerns addressed through balanced physical-digital play</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3">Design Implications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Simplified onboarding for younger users</li>
                  <li>• Parental controls integrated from app launch</li>
                  <li>• Progressive difficulty to maintain long-term engagement</li>
                  <li>• Offline functionality for situations without connectivity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="section-9" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Product Management</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  Product Strategy
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  Market Research
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  GTM Strategy
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  Stakeholder Management
                </span>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Design & Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  UX Design
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  Prototyping
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  User Research
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  Agile Development
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-start items-center pt-8 border-t border-border">
          <Link to="/portfolio" className="inline-flex items-center text-coral hover:text-coral/80 transition-colors font-bold ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegoMiniCity;