import PageLayout from "@/components/PageLayout";
import FloatingCard from "@/components/FloatingCard";
import SkillCard from "@/components/SkillCard";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Programming Languages", items: ["JavaScript", "TypeScript", "C", "C++", "Python"] },
    { category: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "WebSockets"] },
    { category: "Databases", items: ["MongoDB", "SupaBase", "MySQL", "Database Design"] },
    { category: "Tools & Others", items: ["Git", "Machine Learning", "Image Processing", "Stripe Integration"] }
  ];

  const experiences = [
    {
      title: "Full Stack Developer – Associate",
      company: "Webbugs Software House",
      period: "February 2024 – Present",
      location: "Lahore, Pakistan",
      description: "Contributing to full-stack development of multiple real-world applications using MERN stack and Next.js. Leading development of e-commerce platforms, coaching apps, and subscription services.",
      achievements: [
        "Developed 8+ production applications including e-commerce, coaching, and auction platforms",
        "Implemented real-time features using WebSockets for chat and bidding systems",
        "Integrated payment gateways (Stripe) and authentication systems",
        "Built responsive UI components with modern design principles"
      ]
    },
    {
      title: "MERN Stack Developer (Intern)",
      company: "Systems Limited",
      period: "July 2024 – October 2024",
      location: "Lahore, Pakistan",
      description: "Developed comprehensive web applications focusing on student management systems and e-commerce solutions using React, Express, Node.js, and JavaScript.",
      achievements: [
        "Built Student Dashboard with comprehensive functionality",
        "Developed e-commerce clothing store with focus on UX",
        "Gained expertise in full-stack development lifecycle",
        "Collaborated effectively with development teams"
      ]
    },
    {
      title: "PHP Developer",
      company: "WEBBUGGS",
      period: "March 2020 – July 2024",
      location: "Lahore, Pakistan",
      description: "Developed and maintained PHP-based web applications while building foundation in web development principles and team collaboration.",
      achievements: [
        "Maintained and enhanced PHP web applications",
        "Demonstrated professionalism and reliability",
        "Received recognition for contributions and dependability",
        "Developed strong problem-solving skills"
      ]
    }
  ];

  return (
    <PageLayout 
      title="About Me" 
      subtitle="Get to know the person behind the code - my journey, passions, and what drives me to create exceptional digital experiences"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Personal Introduction */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <FloatingCard className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m Muhammad Ammar Aziz, a passionate Full Stack Developer based in Lahore, Pakistan. 
                My journey in technology began with curiosity about how digital experiences are created, 
                leading me to pursue a Bachelor&apos;s in Computer Science from the University of Central Punjab.
              </p>
              <p>
                What started as fascination with code has evolved into a career focused on building 
                innovative web applications that solve real-world problems. I specialize in the MERN stack 
                and have a keen eye for UI/UX design, believing that great functionality deserves equally great design.
              </p>
              <p>
                Beyond coding, I&apos;m passionate about continuous learning, exploring new technologies, 
                and contributing to projects that make a positive impact. I believe in writing clean, 
                efficient code and creating user experiences that truly matter.
              </p>
            </div>
          </FloatingCard>

          <FloatingCard delay={0.2} className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Quick Facts</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent" size={20} />
                <span className="text-muted-foreground">Near Bharia, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-accent" size={20} />
                <span className="text-muted-foreground">BSCS, University of Central Punjab</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="text-accent" size={20} />
                <span className="text-muted-foreground">2+ Years in Web Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-accent" size={20} />
                <span className="text-muted-foreground">Available for new opportunities</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-primary mb-3">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {["Technology Trends", "UI/UX Design", "Problem Solving", "Continuous Learning", "Team Collaboration", "Innovation"].map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillSet, index) => (
              <FloatingCard key={index} delay={index * 0.1} className="p-6">
                <h3 className="font-semibold text-primary mb-4">{skillSet.category}</h3>
                <div className="space-y-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span className="text-muted-foreground text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FloatingCard key={index} delay={index * 0.2} className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div>
                  <h4 className="font-medium text-primary mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <FloatingCard className="text-center p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities, innovative projects, 
            or simply connect with fellow developers and entrepreneurs. 
            Let&apos;s create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-card"
              asChild
            >
              <a href="mailto:chammaraziz786@gmail.com">
                Send Email
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://www.linkedin.com/in/ammar-aziz112/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </FloatingCard>
      </div>
    </PageLayout>
  );
};

export default About;