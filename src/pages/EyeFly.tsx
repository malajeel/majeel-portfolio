import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioProgress from "@/components/PortfolioProgress";

const EyeFly = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    "High-Level Description",
    "Industry Gap", 
    "Target Audience",
    "Physical Product",
    "Detection",
    "Data Visualization", 
    "Value Proposition",
    "Skills"
  ];

  const scrollToSection = (index: number) => {
    const sectionId = `section-${index}`;
    const element = document.getElementById(sectionId);
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
      <PortfolioProgress 
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link to="/portfolio" className="inline-flex items-center text-coral hover:text-coral/80 transition-colors mb-6 font-bold">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-section-title mb-6">EyeFly Drone Solution</h1>
          <div className="w-16 h-1 bg-coral mb-6"></div>
          <p className="text-body-large text-muted-foreground">
            An easy-to-operate drone solution designed to enhance Canadian provincial ground search and rescue (SAR) operations.
          </p>
        </div>

        {/* High-Level Description */}
        <section id="section-0" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">High-Level Description</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              EyeFly is a drone-based search and rescue (SAR) system designed to locate and assist distressed individuals in dangerous or inaccessible environments, such as natural disaster zones or areas with toxic chemicals. It directly addresses the critical need for a safer and more efficient alternative to traditional on-foot SAR methods conducted on a provincial level in Canada, which are time-consuming and pose significant risks to rescue personnel. The product improves on these methods by creating an easy-to-operate solution that is cost-effective, requires less manpower, and scans larger areas in significantly shorter times. Through this, EyeFly aims to be the next step to enhancing SAR operations and saving more lives.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My role as product manager was to lead this product from concept to a successful prototype. I was responsible for defining the product vision, conducting user and market research to understand the core problem, and translating those insights into a detailed set of functional and non-functional specifications. A key part of my role was to facilitate critical design trade-offs, such as prioritizing detection accuracy over speed when selecting the machine learning model, as this was deemed essential for ensuring the product's effectiveness in a critical situation.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The final prototype successfully validated the product's core objectives. It demonstrated a continuous flight time that exceeded the essential requirement and achieved object recognition with a high degree of accuracy. The team also validated its payload delivery capability by having the drone transport a care package. These results prove the viability and value of EyeFly as a powerful tool for modernizing SAR missions.
            </p>
            <div className="bg-card border border-border rounded-lg p-8 mt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                  <p className="text-muted-foreground">
                    Traditional on-foot SAR is slow, inefficient, and sometimes dangerous for personnel, often taking days to locate distressed individuals. This outdated approach is ill-suited for large, hazardous environments, which can result in delayed and potentially fatal outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Solution Approach</h3>
                  <p className="text-muted-foreground">
                    The approach was to create an autonomous system that uses on-board sensors and machine learning to quickly and safely scan large, inaccessible areas. By transmitting real-time data, EyeFly provides a faster and more efficient way to locate and assist individuals, reducing risk to rescue teams and ultimately saving lives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Product Objective</h3>
                  <p className="text-muted-foreground">
                    To design a drone that will scout for distressed individuals in areas including outdoor settings and buildings that pose a risk to SAR personnel. Examples include toxic chemicals on site, natural disasters, national parks, and explosive ordinances. Additionally, it will deliver food, radios, maps, or essential medical supplies to them until dispatchers' arrival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Gap */}
        <section id="section-1" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Industry Gap</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Inefficiency and Risk</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Traditional SAR methods are slow, dangerous, and resource-intensive. They rely on human teams on foot or in manned aircraft, which limits the area they can cover and puts rescuers at risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Lack of Real-Time Data</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Existing methods often lack a centralized, real-time system to monitor the search area, share live updates, or coordinate multiple teams. This creates communication gaps and delays.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section id="section-2" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Target Audience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Primary Users</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>SAR teams, first responders, and volunteer rescue organizations:</strong> They are the ones who will operate the drone and use the data to make life-saving decisions.</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Secondary Users</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Training and Certification Bodies:</strong> Organizations that would develop and offer training programs for SAR teams to learn how to operate the drone and interpret the data. They need to understand the product's capabilities to build a curriculum.</li>
                <li><strong>Academic and Research Institutions:</strong> Researchers who might use the de-identified data (e.g., flight logs, detection accuracy metrics) from past missions to conduct studies on SAR optimization and the effectiveness of drone technology.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Physical Product */}
        <section id="section-3" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Physical Product</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The physical product can be described as follows:
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Robust and Modular System</h3>
            <p className="text-muted-foreground mb-6">
              EyeFly is a drone built on a durable, lightweight carbon-fiber frame. Its design is modular for easy assembly and maintenance.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Advanced Hardware</h3>
            <p className="text-muted-foreground mb-6">
              The drone's core includes a powerful computing controller for real-time processing and a flight controller for stable, autonomous flight. It is equipped with an array of sensors, including high-resolution cameras for visual inspection and a GPS module for precise location tracking.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Safety and Visibility</h3>
            <p className="text-muted-foreground mb-8">
              The final design includes safety modifications like a fuse for hardware protection and bright LED lights for enhanced visibility during nighttime operations.
            </p>
              
            <h3 className="text-xl font-semibold mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-coral font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-3">Autonomous Flight and Navigation</h4>
                <p className="text-muted-foreground text-sm">
                  The drone can operate in GPS-denied environments using a visual inertial odometry (VIO) system. It supports waypoint navigation for pre-planned missions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-coral font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-3">Real-Time Data Transmission</h4>
                <p className="text-muted-foreground text-sm">
                  It maintains a stable, long-range connection via an LTE module and WiFi, transmitting live video feeds, telemetry, and location data back to ground control.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-coral font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-3">Care Package Delivery</h4>
                <p className="text-muted-foreground text-sm">
                  The drone can carry and deliver a small care package with essential supplies to a stranded individual.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-coral font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-3">Safe Landing</h4>
                <p className="text-muted-foreground text-sm">
                  Drone is able to safely land itself from at least 2m above ground if communication is lost.
                </p>
              </div>
            </div>
              
            <div className="text-center mt-8">
              <img 
                src="/lovable-uploads/5406ffa1-36eb-48f8-9c91-e25703986d51.png" 
                alt="Final Design of EyeFly drone"
                className="mx-auto rounded-lg shadow-lg max-w-xl w-4/5"
              />
              <p className="text-muted-foreground mt-4 text-lg">Final Design of EyeFly</p>
            </div>
          </div>
        </section>

        {/* Detection */}
        <section id="section-4" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Detection</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The drone's target identification capability is powered by advanced object detection technologies:
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Machine Learning-Powered Object Recognition</h3>
            <p className="text-muted-foreground mb-6">
              The drone uses an on-board deep learning model to automatically detect people and other objects in real-time. This reduces the cognitive load on operators and accelerates the search process.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Optimized for Performance</h3>
            <p className="text-muted-foreground mb-8">
              The model was specifically chosen after a trade-off analysis that prioritized detection accuracy over speed, ensuring reliable identification in critical situations.
            </p>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/33e4f992-031d-4d49-8bc5-d474fcf71e08.png" 
                alt="Outdoor Object Recognition system interface"
                className="mx-auto rounded-lg shadow-lg max-w-2xl w-3/5"
              />
              <p className="text-muted-foreground mt-4 text-lg">Outdoor Object Recognition</p>
            </div>
          </div>
        </section>

        {/* Data Visualization */}
        <section id="section-5" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Data Visualization</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Information collected by the drone is delivered to the operators through clear, user-focused and easy-to-interpret visualization tools:
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Intuitive Ground Control Interface</h3>
            <p className="text-muted-foreground mb-6">
              All data, including live video feeds, drone telemetry such as battery and CPU temperature, and GPS coordinates, is streamed to a user-friendly ground control station on a user-friendly UI.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Location Mapping</h3>
            <p className="text-muted-foreground mb-8">
              A key feature is the real-time mapping of detection points. When the drone identifies a person, it automatically plots their precise location on a map, providing an immediate and clear reference for rescue teams. This is a critical improvement over manual methods.
            </p>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/f5cd0863-4f60-419f-9900-8d84816aefc0.png" 
                alt="Screenshot from the User Interface"
                className="mx-auto rounded-lg shadow-lg max-w-3xl w-3/4"
              />
              <p className="text-muted-foreground mt-4 text-lg">Screenshot from the User Interface</p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="section-6" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Value Proposition</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              EyeFly is designed to go beyond simple aerial surveillance and delivers tangible, mission-critical benefits that directly support rescue operations:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Enhanced Safety and Efficiency</h3>
                <p className="text-muted-foreground">
                  EyeFly significantly reduces the risk to human rescuers and minimizes the manpower needed for a search.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Accelerated Rescue Time</h3>
                <p className="text-muted-foreground">
                  By rapidly scanning large areas and providing real-time location data, the drone can find distressed individuals much faster than traditional methods, ultimately increasing the chance of survival.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Operational Intelligence</h3>
                <p className="text-muted-foreground">
                  It provides a common operating picture for all stakeholders, enabling better-informed decisions and improved coordination in high-stress situations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="section-7" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
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
        <div>
          <Link to="/portfolio" className="inline-flex items-center text-coral hover:text-coral/80 transition-colors font-bold">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EyeFly;