import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioProgress from "@/components/PortfolioProgress";

const EyeFly = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    "About the Project",
    "Case Studies", 
    "Key Artifacts & Deliverables",
    "Skills"
  ];

  const scrollToSection = (index: number) => {
    const sectionId = `section-${index}`;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) => 
        document.getElementById(`section-${index}`)
      );
      
      const scrollPosition = window.scrollY + 100;
      
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
  }, [sections]);

  return (
    <div className="min-h-screen py-20 px-6 sm:px-8">
      <PortfolioProgress 
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-section-title mb-6">EyeFly Drone Solution</h1>
          <div className="w-16 h-1 bg-coral mx-auto mb-6"></div>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            An easy-to-operate drone solution designed to enhance Canadian provincial ground search and rescue (SAR) operations.
          </p>
        </div>

        {/* About the Project */}
        <section id="section-0" className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-center">About the Project</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              EyeFly addresses the critical challenges faced by Canadian provincial ground search and rescue operations. Traditional SAR missions often involve dangerous terrain, limited visibility, and time-sensitive situations where every minute counts in locating distressed individuals.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our solution combines cutting-edge drone technology with intuitive operation interfaces, allowing SAR teams to efficiently scan large or hazardous areas while maintaining operator safety. The system utilizes advanced cameras and sensors for autonomous navigation, reducing the learning curve and operational complexity typically associated with drone technology.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                <p className="text-muted-foreground">
                  Traditional SAR operations face challenges with terrain accessibility, time constraints, and operator safety in hazardous environments.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Solution Approach</h3>
                <p className="text-muted-foreground">
                  Autonomous drone technology with simplified controls, advanced sensors, and real-time data transmission capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="section-1" className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Mountain Rescue Operations</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                In mountainous terrain where traditional ground teams face significant risks, EyeFly enables comprehensive area scanning from safe distances. The drone's advanced sensors can detect heat signatures and movement patterns, significantly reducing search times.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Terrain Mapping</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Heat Detection</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Risk Reduction</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Wilderness Search Scenarios</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                For large wilderness areas, EyeFly's autonomous navigation capabilities allow for systematic grid searches while operators coordinate from a central command post. Real-time data transmission ensures immediate response to any findings.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Grid Search</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Real-time Data</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Coordination</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Artifacts & Deliverables */}
        <section id="section-2" className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Artifacts & Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Technical Specifications</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive documentation of drone capabilities, sensor specifications, and operational parameters.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Flight range and battery specifications</li>
                  <li>• Camera and sensor technical details</li>
                  <li>• Weather resistance ratings</li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">User Interface Design</h3>
                <p className="text-muted-foreground mb-4">
                  Intuitive control interface designed for rapid deployment and ease of use by SAR personnel.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Simplified control layouts</li>
                  <li>• Real-time data visualization</li>
                  <li>• Emergency protocols integration</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Training Materials</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive training programs for SAR teams to ensure effective deployment and operation.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Quick-start operation guides</li>
                  <li>• Scenario-based training modules</li>
                  <li>• Maintenance and troubleshooting</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Operational Protocols</h3>
                <p className="text-muted-foreground mb-4">
                  Standard operating procedures for integration with existing SAR workflows and emergency response.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Deployment decision matrices</li>
                  <li>• Communication protocols</li>
                  <li>• Data handling and privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="section-3" className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Product Strategy</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Market Research</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">User Needs Analysis</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Competitive Analysis</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Technical Design</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Systems Integration</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Prototyping</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Project Management</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Stakeholder Management</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Risk Assessment</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Documentation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Portfolio */}
        <div className="text-center">
          <Link to="/portfolio">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EyeFly;