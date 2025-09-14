import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioProgress from "@/components/PortfolioProgress";

const MarketplaceMakers = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    "Project Overview",
    "Market Opportunity", 
    "Strategic Impact",
    "Target Audience & Value Proposition",
    "The Product: Marketplace Makers",
    "Design & User Flow",
    "Success Metrics",
    "Next Steps"
  ];

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) => 
        document.getElementById(`section-${index}`)
      );
      
      const currentSection = sectionElements.findIndex(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

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
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-coral hover:text-coral/80 transition-colors mb-6 font-bold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-section-title mb-6">Facebook Marketplace Makers</h1>
          <div className="w-16 h-1 bg-coral mb-6"></div>
        </div>

        {/* Project Overview */}
        <section id="section-0" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Facebook Marketplace is perceived primarily as a transactional platform for commodity goods, lacking a curated identity for unique, high-quality artisanal products. This limits its ability to attract and retain a valuable segment of creators and buyers who seek out handmade items.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To address this gap, "Facebook Marketplace Makers" is a new feature designed to transform Facebook Marketplace from a purely transactional tool into a curated, discovery-driven commerce destination for handmade and unique products. It gives creators a platform to showcase their craft, while offering buyers a seamless shopping experience centered on craftsmanship and authenticity.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Introducing Marketplace Makers will increase user engagement, unlock new revenue streams, and strengthen the broader Meta ecosystem by driving activity across Facebook, Messenger, and Meta Pay.
            </p>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="section-1" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Market Opportunity</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The design and development of Marketplace Makers are rooted in a clear and compelling market opportunity. The global handmade goods market is a high-growth sector, projected to reach over $1 trillion by 2025, with a compound annual growth rate (CAGR) of 10.15%. This rapid expansion is driven by a fundamental shift in consumer values, with Gen Z and Millennials increasingly prioritizing authenticity, sustainability, and unique products with a story over mass-produced goods.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              While Facebook's core user base tilts toward older users, Marketplace Makers offers an opportunity to engage younger, socially conscious audiences by creating a dedicated space for artisanal goods. This trend has been validated by the success of niche platforms like Etsy, which has a reported ~88.5 million active buyers.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              With over 25 million users already active in crafting and creative groups on Facebook, internal Meta data points to a strong, untapped community ready for a commerce platform centered on handmade and unique products. These insights collectively indicate significant demand and potential for Marketplace Makers to capture a valuable segment of younger, purpose-driven consumers while expanding Facebook Marketplace's overall reach.
            </p>
          </div>
        </section>

        {/* Strategic Impact */}
        <section id="section-2" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Strategic Impact</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              This product represents a strategic move for Meta to:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">Diversify Revenue Streams:</strong> Capture a share of the high-value artisanal market, which typically has higher Average Order Values (AOV).
              </li>
              <li>
                <strong className="text-foreground">Strengthen the Meta Ecosystem:</strong> The feature's success is designed to have a direct, positive impact on other Meta products:
                <ul className="ml-6 mt-2 space-y-2">
                  <li>• <strong>Meta Pay:</strong> Increases the number of users who link their payment information and complete a transaction.</li>
                  <li>• <strong>Messenger:</strong> Drives a significant increase in business-to-consumer (B2C) communication as buyers and sellers connect.</li>
                  <li>• <strong>Facebook Platform:</strong> Boosts overall DAU and user retention by offering a new, compelling reason to engage with the core platform and its commerce features.</li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">Enhance Brand Perception:</strong> Shift the Marketplace brand from a "secondhand" feel to a trusted, high-quality destination.
              </li>
            </ul>
          </div>
        </section>

        {/* Target Audience & Value Proposition */}
        <section id="section-3" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Target Audience & Value Proposition</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Marketplace Makers is built to serve a two-sided marketplace, with a distinct value proposition for each user group: the creators and the buyers.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Creators:</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Who they are:</strong> Independent artists and small business owners who are passionate about their work. They range from established creators looking for new sales channels to hobbyists seeking to monetize their craft.
                </p>
                <div>
                  <strong className="text-foreground">What they need:</strong>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>• <strong>A built-in audience:</strong> They need a platform with a large, engaged user base to find customers without having to spend heavily on marketing and advertising.</li>
                    <li>• <strong>Simplified tools:</strong> They require user-friendly tools to easily list products, manage inventory, and handle transactions, allowing them to focus on their craft.</li>
                    <li>• <strong>Brand storytelling:</strong> They want a way to share the unique story behind their products, from the materials and process to the inspiration, to set themselves apart from mass-produced goods.</li>
                  </ul>
                </div>
                <p>
                  <strong className="text-foreground">Value proposition:</strong> Marketplace Makers provides a powerful, ready-made audience for creators. It empowers them with specialized listing tools that highlight their unique story and offers a seamless way to manage sales, fulfillment, and payments, all within a familiar and established ecosystem.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Buyers:</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Who they are:</strong> A blend of existing Facebook Marketplace users and a strategic growth audience of younger, purpose-driven consumers (Gen Z and younger millennials).
                </p>
                <div>
                  <strong className="text-foreground">What they need:</strong>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>• <strong>A curated experience:</strong> They are tired of sifting through low-quality items. They want a trusted and established space to discover unique and authentic handmade products.</li>
                    <li>• <strong>Ethical shopping:</strong> They seek transparency and want to support independent artists and small businesses. They are willing to pay a premium for items that align with their values of sustainability and authenticity.</li>
                    <li>• <strong>Seamless interaction:</strong> They value direct connection and communication with the creator to ask questions or request custom items.</li>
                  </ul>
                </div>
                <p>
                  <strong className="text-foreground">Value proposition:</strong> The product offers a curated, discovery-driven shopping experience that connects them directly to the creators they're interested in. Marketplace Makers simplifies the process of discovering and buying ethically made products, giving buyers a direct connection to a creator's vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Product: Marketplace Makers */}
        <section id="section-4" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">The Product: Marketplace Makers</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Marketplace Makers is seamlessly integrated into the existing Facebook Marketplace experience, while offering a distinct, elevated journey for buyers seeking handmade items.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features:</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Curated "Handmade & Unique" feed:</strong> A dedicated feed uses algorithmic curation to surface artisanal products based on search prompts, making discovery feel intentional and personalized.
                </li>
                <li>
                  <strong className="text-foreground">Enhanced seller tools:</strong> Creators are empowered with specialized listing templates that go beyond standard e-commerce fields. They can include an "Item Story" detailing the product's origin and creative process, which enriches the buyer's connection to the item.
                </li>
                <li>
                  <strong className="text-foreground">Flexible fulfillment:</strong> The feature supports both local pickup and shipping, allowing sellers to choose the method that works best for their business, from small, local makers to larger-scale creators.
                </li>
                <li>
                  <strong className="text-foreground">Seamless payments with Meta Pay & other options:</strong> Buyers can complete their purchase using Meta Pay for a quick, on-platform transaction, or they can use a standard credit or debit card. This multi-option approach reduces friction by providing choice and encouraging conversions.
                </li>
                <li>
                  <strong className="text-foreground">Direct communication via messenger:</strong> All buyer-seller communication, from inquiries about a product to arranging a local pickup, is facilitated through Messenger, keeping the entire transaction within the Meta ecosystem.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design & User Flow */}
        <section id="section-5" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Design & User Flow</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The following low-fidelity Figma mockups illustrate the seamless user journey, highlighting a clean and intuitive design. The flow is designed to be straightforward, guiding both buyers and sellers through the enhanced experience.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Discovery & Curation:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The main Marketplace Makers page is designed for visual appeal and easy navigation, showcasing high-quality product photos and highlighting featured creators. It also includes filters for pickup vs. shipping and categories to tailor the experience to the user's needs.
              </p>
              <div className="text-center mb-4">
                <img 
                  src="/lovable-uploads/marketplace-makers-mainpage.png" 
                  alt="Marketplace Makers Main Page"
                  className="w-full max-w-3xl mx-auto rounded-lg border"
                  style={{ width: '85%' }}
                />
                <p className="text-sm text-muted-foreground italic mt-2">Marketplace Makers Main Page</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Product Details & Storytelling:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Clicking on a product takes the user to a dedicated details page. This view emphasizes the unique story behind the item, with specific fields for materials and the "Item Story", which is a key differentiator for the brand. The layout subtly changes to reflect whether the item is for shipping or local pickup.
              </p>
              <div className="space-y-6">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/marketplace-makers-bracelet-productpage.png" 
                    alt="Local Pick Up Only Product Details"
                    className="w-full max-w-3xl mx-auto rounded-lg border"
                    style={{ width: '85%' }}
                  />
                  <p className="text-sm text-muted-foreground italic mt-2">Local Pick Up Only Product Details</p>
                </div>
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/marketplace-makers-scarf-productpage.png" 
                    alt="Shippable Product Details"
                    className="w-full max-w-3xl mx-auto rounded-lg border"
                    style={{ width: '85%' }}
                  />
                  <p className="text-sm text-muted-foreground italic mt-2">Shippable Product Details</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Shopping Cart & Checkout:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The checkout process is designed for simplicity and security. A unified shopping cart allows users to manage both shippable and local pickup items.
              </p>
              <div className="text-center mb-6">
                <img 
                  src="/lovable-uploads/marketplace-makers-scarf-cart.png" 
                  alt="Shopping Cart"
                  className="w-full max-w-3xl mx-auto rounded-lg border"
                  style={{ width: '85%' }}
                />
                <p className="text-sm text-muted-foreground italic mt-2">Shopping Cart</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From there, the checkout pages are strategically designed based on the fulfillment method. For both shippable and local pickup, Meta Pay is the default, pre-selected payment option. This design choice provides a one-click checkout experience and encourages the adoption of Meta Pay. However, for flexibility, a secondary option allows users to pay with a credit or debit card.
              </p>
              <div className="text-center mb-6">
                <img 
                  src="/lovable-uploads/marketplace-makers-scarf-checkout.png" 
                  alt="Checkout Page for Shippable Product"
                  className="w-full max-w-3xl mx-auto rounded-lg border"
                  style={{ width: '85%' }}
                />
                <p className="text-sm text-muted-foreground italic mt-2">Checkout Page for Shippable Product</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For local pickup items, the checkout flow also includes additional options for an in-person transfer or cash payment, acknowledging the unique nature of these transactions. This distinction in the checkout flow ensures a smooth and tailored experience, regardless of how the buyer chooses to receive their item.
              </p>
              <div className="text-center">
                <img 
                  src="/lovable-uploads/marketplace-makers-bracelet-checkout.png" 
                  alt="Checkout Page for a Pick Up Only Product"
                  className="w-full max-w-3xl mx-auto rounded-lg border"
                  style={{ width: '85%' }}
                />
                <p className="text-sm text-muted-foreground italic mt-2">Checkout Page for a Pick Up Only Product</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section id="section-6" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Success Metrics</h2>
          <div className="prose prose-lg max-w-none">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Primary Metrics (Engagement & Business):</h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li><strong>DAU on the Marketplace Makers Feed:</strong> Our North Star metric, measuring daily engagement with the new feature.</li>
                <li><strong>Conversion Rate:</strong> The percentage of users who make a purchase after viewing an item in the Marketplace Makers feed.</li>
                <li><strong>Gross Merchandise Value (GMV) of Artisanal Goods:</strong> Tracking the total sales volume of unique and handmade items to measure market penetration.</li>
                <li><strong>Average Order Value (AOV):</strong> Measuring the average amount spent per transaction, which is anticipated to be higher for curated, unique goods.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Ecosystem Impact Metrics:</h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li><strong>Meta Pay Adoption Rate:</strong> The increase in the number of new users who complete a transaction using Meta Pay.</li>
                <li><strong>Messenger Commerce Conversations:</strong> The growth in the number of unique conversations initiated between buyers and sellers.</li>
                <li><strong>Facebook Profile Engagement:</strong> Increased DAU on the core Facebook app, driven by the requirement for users to have a profile to engage in commerce.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section id="section-7" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              While this initial MVP provides a strong foundation, a full-scale product roadmap would include several key phases of development and iteration.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Phase 2: Creator Empowerment & Community Building:</h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li><strong>Creator Profiles:</strong> Launch dedicated mini-storefronts where makers can build their brand, showcase all their products, and tell their story. This would foster repeat buyers and brand loyalty.</li>
                <li><strong>Review & Rating System:</strong> Introduce a specialized review system for both products and creators to build trust and social proof within the community.</li>
                <li><strong>Creator Analytics Dashboard:</strong> Provide makers with data on their shop performance, including views, clicks, conversions, and customer demographics, empowering them to optimize their listings and marketing efforts.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Phase 3: Discovery & Personalization:</h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li><strong>Advanced AI Curation:</strong> Enhance the algorithm to offer highly personalized product recommendations based on a user's browsing history, interests, and past purchases.</li>
                <li><strong>Custom Order Functionality:</strong> Add in-app messaging tools that allow buyers to easily request custom-made items from creators, opening up a new revenue stream and strengthening the buyer-seller relationship.</li>
                <li><strong>In-App Marketing Tools:</strong> Enable creators to run targeted ad campaigns and promotions within the Facebook ecosystem to drive traffic to their Marketplace storefront.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Phase 4: Scalability & Expansion:</h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li><strong>Logistics & Fulfillment Partnerships:</strong> Explore partnerships with third-party logistics providers to offer discounted shipping rates and simplify the fulfillment process for creators.</li>
                <li><strong>Global Expansion:</strong> Scale the feature to international markets, ensuring a localized experience that accounts for different payment methods, shipping preferences, and regional craft cultures.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="border-t border-border pt-8">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-coral hover:text-coral/80 transition-colors font-bold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceMakers;