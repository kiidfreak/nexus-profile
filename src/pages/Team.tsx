import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";
import team1 from '../assets/team/Shei.png';
import team2 from '../assets/team/Manu.png';
import team3 from '../assets/team/Ian.jpg';

const teamMembers = [
  {
    name: "Shei",
    role: "Frontend & UI/UX Designer",
    bio: "Creative frontend developer and UI/UX specialist with 8+ years crafting beautiful, user-centered digital experiences with modern design principles.",
    imageUrl: team1,
    location: "TRM Roysambu, Nairobi",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
  },
  {
    name: "Manu",
    role: "Frontend & IoT Solutions Developer",
    bio: "Versatile developer with 6+ years bridging frontend technologies with IoT hardware integration, creating seamless digital-physical experiences.",
    imageUrl: team2,
    location: "TRM Roysambu, Nairobi", 
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
  },
  {
    name: "Ian",
    role: "Fullstack Developer", 
    bio: "Complete stack engineer with 7+ years building robust applications from database to user interface, ensuring scalable and maintainable solutions.",
    imageUrl: team3,
    location: "TRM Roysambu, Nairobi",
    socials: {
      linkedin: "#",
      twitter: "#", 
      github: "#"
    },
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-deep-blue via-green-900 to-purple-900">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6 animate-fade-in-up">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Meet the brilliant minds pioneering Africa's digital future from our innovation hub in TRM Roysambu, Nairobi.
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-brand-cream">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-deep-blue mb-4 animate-fade-in-up">
            Based in the Heart of Innovation
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our team operates from TRM Roysambu, Nairobi - a vibrant tech ecosystem where African innovation meets global standards.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4">
              Futuristic African Innovators
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Diverse expertise, unified vision - building tomorrow's technology today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full flex flex-col overflow-hidden bg-brand-cream shadow-xl hover:shadow-2xl transition-all duration-300 group border-transparent hover:border-brand-gold/50 text-center">
                  <CardHeader className="p-0 items-center pt-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-gold/50 mb-4 group-hover:border-brand-gold transition-colors duration-300">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <CardTitle className="text-2xl font-serif font-semibold text-brand-deep-blue mb-1">{member.name}</CardTitle>
                    <p className="text-sm text-brand-gold font-medium mb-2">{member.role}</p>
                    <p className="text-xs text-foreground/60 mb-3">{member.location}</p>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <p className="text-foreground/70 leading-relaxed text-sm mb-4">
                      {member.bio}
                    </p>
                    <div className="flex justify-center space-x-3">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-deep-blue/70 hover:text-brand-gold transition-colors">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-brand-deep-blue/70 hover:text-brand-gold transition-colors">
                          <Twitter size={20} />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-brand-deep-blue/70 hover:text-brand-gold transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 md:py-24 bg-brand-light-gray">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4 animate-fade-in-up">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Be part of shaping Africa's technological future. We're always looking for passionate innovators.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="/contact" 
              className="inline-block bg-brand-gold text-brand-deep-blue hover:bg-yellow-500 text-lg px-8 py-4 rounded-md font-medium transition-colors duration-300"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
