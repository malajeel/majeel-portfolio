import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioProgress from "@/components/PortfolioProgress";

const SpotifySingIt = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    "Product Summary",
    "The Problem / Opportunity",
    "User Personas",
    "Market Opportunity",
    "Product Vision",
    "Product Overview & Key Features",
    "Design & User Flow",
    "Go-to-Market (GTM) Strategy",
    "Success Metrics",
    "Future Roadmap",
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
          <h1 className="text-section-title mb-6">Spotify Sing It!</h1>
          <div className="w-16 h-1 bg-coral mb-6"></div>
        </div>

        {/* Product Summary */}
        <section id="section-0" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Product Summary</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Spotify Sing It! is a new in-app feature designed to increase premium user engagement and retention by turning music into a fun, social game. By leveraging a user's personal playlists, it offers a fresh way for friends to connect and compete on a single device, creating memorable, shared experiences that reinforce Spotify's value as a social platform.
            </p>
          </div>
        </section>

        {/* The Problem / Opportunity */}
        <section id="section-1" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">The Problem / Opportunity</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              While Spotify is the world's leading music streaming service, there's a significant opportunity to deepen user engagement beyond passive listening. Many users create and curate playlists for personal enjoyment, but there's no interactive feature that leverages this existing library in a social, competitive way. The success of popular online games and the cultural phenomenon of "Song Association" with celebrities highlights a clear demand for this type of casual, music-based gaming experience, which Spotify is uniquely positioned to fulfill.
            </p>
          </div>
        </section>

        {/* User Personas */}
        <section id="section-2" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">User Personas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-coral">Alex</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Name:</strong> Alex, 20</p>
                <p><strong>Occupation:</strong> Student</p>
                <p><strong>Goal:</strong> Wants to find new ways to interact with friends and their favorite music.</p>
                <p><strong>Pain Point:</strong> Finds it difficult to find engaging, low-friction social games that don't require downloading a new app.</p>
                <p><strong>Bio:</strong> Alex is a loyal Spotify user with several meticulously organized playlists. He often hangs out with his university friends and is always looking for simple, fun activities to do together. He appreciates clever design and enjoy casual competitive games.</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-coral">Maria</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Name:</strong> Maria, 42</p>
                <p><strong>Occupation:</strong> Project Manager</p>
                <p><strong>Goal:</strong> Wants to de-stress and reconnect with her favorite music in a fun, engaging way.</p>
                <p><strong>Pain Point:</strong> Has a busy schedule and limited time for leisure. Finds herself listening to the same playlists on repeat and wants a low-effort way to rediscover her music library.</p>
                <p><strong>Bio:</strong> Maria is a dedicated professional who spends her days managing projects and her evenings with her family. Music is a constant in her life, but it's often a passive experience. She has a deep and diverse music library from her high school and college years, and she would love a way to tap into that nostalgia. For Maria, this feature isn't about competition; it's about a moment of personal enjoyment and a mental break.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="section-3" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Market Opportunity</h2>
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-muted-foreground leading-relaxed">
              The global mobile gaming market is a multi-billion dollar industry with a massive and growing user base, presenting a significant opportunity for platform-integrated features.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Market Size & Growth</h3>
              <p className="text-muted-foreground">
                The mobile gaming market is projected to be valued at $121 billion in 2025, with a significant portion of this growth being driven by the casual and social gaming segments. The demand for simple, engaging, and low-friction games continues to rise as consumers look for quick entertainment and ways to connect with friends.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Built-in Audience</h3>
              <p className="text-muted-foreground">
                Spotify's user base of nearly 700 million monthly active users provides an unparalleled built-in audience. Rather than spending resources on user acquisition, this feature can be promoted directly to an already engaged user base. This significantly lowers the cost of customer acquisition and allows for faster adoption.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Engagement & Retention</h3>
              <p className="text-muted-foreground">
                Currently, a portion of Spotify's user base's leisure time is spent on other platforms, like social media apps or standalone casual games. By integrating a game directly into the app, Spotify can capture a portion of this "time spent" and attention. This directly impacts key business metrics like Daily Active Users (DAU), Monthly Active Users (MAU), and overall session length. A more engaged user is also a more loyal user, which directly contributes to lower churn rates and increased lifetime value (LTV).
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Viral Potential</h3>
              <p className="text-muted-foreground">
                The in-person, pass-the-phone format of the game naturally encourages a viral loop. Users playing with friends will introduce the feature to people who may not be frequent Spotify users, creating a powerful word-of-mouth marketing channel. This low barrier to entry and organic sharing mechanism presents a strong opportunity for a high return on investment (ROI).
              </p>
            </div>
          </div>
        </section>

        {/* Product Vision */}
        <section id="section-4" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Product Vision</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The product vision is for Spotify Sing It! to become a core part of the Spotify experience, evolving from a simple game to a foundational platform for all music-based social games. The product will not only increase session length and engagement but also create a new, sticky social layer that strengthens user retention and differentiates Spotify from its competitors. In the future, this feature could expand to include real-time multiplayer challenges, collaborative game modes, and cross-device integration.
            </p>
          </div>
        </section>

        {/* Product Overview & Key Features */}
        <section id="section-5" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Product Overview & Key Features</h2>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Value Proposition</h3>
              <p className="text-muted-foreground">
                Exclusive to Premium Spotify subscribers, this unique feature turns your playlists into a game, encouraging both playful rivalry with friends and personal rediscovery. Whether you're in a musical showdown with your group or challenging your own memory on a solo mission, it's a new, engaging way to connect with the music you love.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Core Mechanics</h3>
              <p className="text-muted-foreground mb-4">
                The core mechanics of the game are designed to be flexible, supporting both a social, group-based experience and a personal, solo one.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Group play:</h4>
                  <p className="text-muted-foreground">
                    The game is a shared-screen experience on a single phone, using one player's playlists as the song catalog for a personalized group vibe. Gameplay is turn-based: each player keeps the phone until they've completed all their words, then passes it to the next person. This setup encourages in-person social interaction and adds an element of playful, real-time competition.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solo play:</h4>
                  <p className="text-muted-foreground">
                    When playing alone, the mechanics stay the same, but the goal shifts to a personal challenge. The user plays against the timer with their own playlists, testing memory and focus. At the end, a leaderboard highlights their personal best or provides a breakdown of their performance, giving a sense of accomplishment rather than a competitive ranking against others.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Customizable Game Setup:</strong> Users can choose playlists, set a timer duration, and enter player names.</li>
                <li>• <strong>Interactive Gameplay:</strong> A turn-based system with a countdown timer and dynamic word generation.</li>
                <li>• <strong>"Aha!" Moment:</strong> A scrollable card stack that shows the exact lyric and provides a play button to start the song at the correct moment. This delivers a delightful and educational experience.</li>
                <li>• <strong>Visual Leaderboard:</strong> A celebratory, confetti-filled podium that ranks players at the end of the game, creating a rewarding end-of-game experience.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design & User Flow */}
        <section id="section-6" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Design & User Flow</h2>
          
          <div className="mb-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              This project was meticulously designed in Figma to create a seamless and intuitive user experience for both solo and group play. The visual design is clean and familiar, aligning with Spotify's existing brand identity, while the user flow is optimized for a simple, engaging game.
            </p>
            
            <div className="bg-coral/5 border border-coral/20 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-2">Interactive Figma Prototype</h3>
                  <p className="text-muted-foreground text-sm">
                    Explore the medium-fidelity user interface and experience flow
                  </p>
                </div>
                <Button variant="outline" className="group" asChild>
                  <a href="https://www.figma.com/proto/irznWxfDr1LvJKHGBXt6Du/Sing-It-?node-id=1-288&t=cFada5JTCd3oDOog-1" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Figma
                  </a>
                </Button>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              A user begins their journey by discovering "Spotify Sing It!" through a featured ad on the Home screen or a dedicated card in the Search tab. Upon tapping, they are taken to a Welcome screen that also outlines the game rules. From there, they can initiate a new game and begin the customization process by selecting one or more playlists, deciding on the number of words per player, setting the timer duration, and choosing whether to allow repeat words.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              Once the game starts, a player's turn begins with a new word and a countdown. Their turn lasts until they have completed all of their assigned words. After the timer runs out for each word, the user is asked if they found a song. If they answer "yes," they get a point, and the game moves to the next word. If they answer "no," they are taken to a scrollable card stack that reveals the exact lyric for songs they could have used from the playlists they pre-selected.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              The player then passes the phone to the next person. The game concludes after all players have completed their turns, culminating in a confetti-filled End-Game screen that displays a podium-style leaderboard. From here, users can view a summary of all the words used, share their results on social media, or start a new game.
            </p>
          </div>
        </section>

        {/* Go-to-Market (GTM) Strategy */}
        <section id="section-7" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Go-to-Market (GTM) Strategy</h2>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 1: Alpha Testing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Goal:</strong> Validate core game mechanics and identify critical bugs.</li>
                <li>• <strong>Target Audience:</strong> A small, internal group of Spotify employees.</li>
                <li>• <strong>Key Activities:</strong> Distribute an early build of the feature, collect bug reports, and gather qualitative feedback on the game's flow.</li>
                <li>• <strong>Success Metric:</strong> The game is stable and enjoyable for a small, controlled group.</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 2: Public Beta</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Goal:</strong> Test user engagement and behavior in a real-world environment.</li>
                <li>• <strong>Target Audience:</strong> 5-10% of Spotify's Premium user base in key markets.</li>
                <li>• <strong>Key Activities:</strong> Conduct A/B tests on entry points and timer lengths, monitor user journeys, and analyze initial gameplay data.</li>
                <li>• <strong>Success Metric:</strong> The game achieves a target adoption rate and shows promising engagement metrics.</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 3: Full Launch</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Goal:</strong> Roll out the feature to the entire user base.</li>
                <li>• <strong>Target Audience:</strong> All Spotify Premium users.</li>
                <li>• <strong>Key Activities:</strong> Announce the feature through in-app notifications, email, and social media. Display a prominent card on the Home screen, and ensure server infrastructure can handle the new traffic.</li>
                <li>• <strong>Success Metric:</strong> The game's user base scales rapidly, with a consistent increase in DAU.</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 4: Marketing & Promotion</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Goal:</strong> Drive widespread awareness and organic growth.</li>
                <li>• <strong>Target Audience:</strong> Existing and potential Spotify users, especially those who enjoy social media and gaming.</li>
                <li>• <strong>Key Activities:</strong> Launch social media campaigns with popular music influencers or artists, create official "Sing It!" playlists to seed the game, and encourage users to share their leaderboard results.</li>
                <li>• <strong>Success Metric:</strong> Significant growth in social media mentions and user-generated content related to the game.</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 5: Optimization & Iteration</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Goal:</strong> Refine the user experience using data-driven insights.</li>
                <li>• <strong>Target Audience:</strong> Active players of the game.</li>
                <li>• <strong>Key Activities:</strong> Analyze key performance indicators (KPIs) like average session length and game completion rate, implement fixes for pain points identified in user feedback, and A/B test new features.</li>
                <li>• <strong>Success Metric:</strong> Increased user retention and higher engagement metrics.</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Phase 6: Strategic Expansion</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Goal:</strong> Expand the product's value and explore new revenue streams by enhancing the experience for Premium users.</li>
                <li>• <strong>Target Audience:</strong> Existing and potential Spotify users.</li>
                <li>• <strong>Key Activities:</strong> Increase Premium user retention by introducing new, exclusive content and a rewarding progression system. This includes launching "Official" game packs based on popular Spotify playlists and artist-themed packs for new album releases. A system of badges and achievements will be implemented to reward player engagement.</li>
                <li>• <strong>Success Metric:</strong> A measurable increase in Premium subscription upgrades and a higher retention rate among existing Premium users.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section id="section-8" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Success Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Primary Metrics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Session Length:</strong> Average time spent in the app.</li>
                <li>• <strong>Feature Adoption Rate:</strong> Percentage of users who play at least one game per week.</li>
                <li>• <strong>User Retention Rate:</strong> Percentage of users who return to play the game after 30 days.</li>
                <li>• <strong>Premium Upgrade Rate:</strong> Percentage of non-Premium users who subscribed to Spotify Premium in order to access the feature.</li>
                <li>• <strong>Cross-Platform Premium Conversion:</strong> Percentage of users from other music platforms who joined Spotify and subscribed to Premium after learning about or interacting with the feature.</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Secondary Metrics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Game Completion Rate:</strong> Percentage of games played to completion.</li>
                <li>• <strong>Social Sharing Rate:</strong> Number of leaderboards shared to social media.</li>
                <li>• <strong>Playlist Creation/Engagement:</strong> Increase in the number of new playlists created or existing playlists being used for the game.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section id="section-9" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Future Roadmap</h2>
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-muted-foreground leading-relaxed">
              After a successful launch and optimization of the core game, the next phase of development will focus on scaling the product's social capabilities and exploring innovative new technologies.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Real-Time Challenges</h3>
              <p className="text-muted-foreground">
                Multiplayer mode for one-on-one battles with live leaderboards, allowing friends to compete even when they're not physically together.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Collaborative Game Modes</h3>
              <p className="text-muted-foreground">
                Team-based modes where players guess lyrics together or co-create playlists matching a theme or mood.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Cross-Device Play</h3>
              <p className="text-muted-foreground">
                Expand the game beyond mobile with a web version for desktops and laptops, Smart TV integration, and hands-free voice commands on smart speakers for quick, casual, and accessible gameplay.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">New Games Development</h3>
              <p className="text-muted-foreground">
                Additional formats like "Guess the Song in 1 Second" or "Guess the Lyric" to diversify gameplay and attract more music fans.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="section-10" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex flex-wrap gap-3">
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Product Strategy</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Roadmap & Feature Prioritization</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Success Metrics Definition</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Market Research</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Competitive Benchmarking</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Data-Driven Decision Making</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">UX & User Journey Mapping</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">User-Centered Design Thinking</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">User Research</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Wireframing</span>
              <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm">Figma</span>
            </div>
          </div>
        </section>

        {/* Back to Portfolio */}
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

export default SpotifySingIt;