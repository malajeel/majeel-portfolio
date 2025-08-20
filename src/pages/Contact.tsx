import { Mail, Linkedin } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-section-title mb-6">Contact</h1>
          <div className="w-16 h-1 bg-coral mx-auto mb-6"></div>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium mb-4">
              Let's connect and make things happen!
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md animate-slide-up">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to collaborate on a product, discuss new opportunities, or just want to connect, I'm always happy to chat :)
                </p>
              </div>

              <div className="space-y-4 flex flex-col items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:malajeel@uwaterloo.ca"
                      className="text-muted-foreground hover:text-coral transition-colors"
                    >
                      malajeel@uwaterloo.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/maryam-alajeel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-coral transition-colors"
                    >
                      linkedin.com/in/maryam-alajeel
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;