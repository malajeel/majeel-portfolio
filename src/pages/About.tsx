import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const skills = [
    "Market Research", "User Research", "Go-to-Market Strategy", "Agile/Scrum",
    "User Stories", "Product Strategy", "A/B Testing", "PRD", "Data-Informed Decision Making", 
    "Roadmap & Feature Prioritization", "Success Metrics Definition", "User Journey Mapping", 
    "User-Centered Design Thinking", "Wireframing", "Stakeholder Management", "Jira", 
    "Confluence", "Figma", "Miro", "Asana", "Notion", "Tableau", "SQL"
  ];

  const experiences = [
    "WalterFedy - Product development and technical solutions",
    "EyeFly - Drone technology for search and rescue operations", 
    "Arcadis IBI Group - Integrated design and technology solutions for infrastructure and software",
    "TTC - Public transportation systems improvement",
    "FleetCarma - Fleet management and automotive technology",
    "University of Waterloo Alternative Fuels Team - Sustainable transportation research"
  ];

  return (
    <div className="min-h-screen py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-section-title mb-6">About Me</h1>
          <div className="w-16 h-1 bg-coral mx-auto"></div>
        </div>

        {/* Bio Section */}
        <div className="mb-16 animate-slide-up">
          <p className="text-body-large text-muted-foreground leading-relaxed">
            I'm Maryam Al-Ajeel, a product manager with a strong engineering background and a passion for building impactful, user-centered products. With a Professional Product Management Certificate and hands-on experience leading product lifecycles in technical environments, I excel at driving product vision, agile development, and data-driven improvements. Skilled in stakeholder collaboration, user research, and roadmap execution, I'm dedicated to delivering innovative solutions that balance business goals with exceptional user experiences.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <GraduationCap className="mr-3 h-6 w-6 text-coral" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-coral pl-4">
              <h3 className="font-semibold text-lg">Professional Product Management Certificate</h3>
              <p className="text-muted-foreground">University of Toronto School of Continuing Studies</p>
              <p className="text-sm text-muted-foreground">Aug 2025</p>
              <a 
                href="https://www.credly.com/badges/425ac327-f14b-4602-b117-aa4b11e5c758"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-coral hover:text-coral/80 transition-colors"
              >
                View Credential
              </a>
            </div>
            <div className="border-l-2 border-coral pl-4">
              <h3 className="font-semibold text-lg">Bachelor of Applied Science, Electrical Engineering</h3>
              <p className="text-muted-foreground">University of Waterloo</p>
              <p className="text-sm text-muted-foreground">Apr 2022 (Graduated with Distinction)</p>
              <p className="text-sm text-muted-foreground">Activities: UW Alternative Fuels Team Core Member, Women in Engineering Member, Engineering Ambassador, ECE Society Social VP, First-Year ECE Students Mentor, ECE Peer Wellness Volunteer.</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Briefcase className="mr-3 h-6 w-6 text-coral" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          <div className="grid gap-4">
            {experiences.map((experience, index) => (
              <div key={index} className="p-4 bg-card border border-border rounded-lg">
                <p className="text-card-foreground">{experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="flex items-center mb-6">
            <Award className="mr-3 h-6 w-6 text-coral" />
            <h2 className="text-2xl font-semibold">Key Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;