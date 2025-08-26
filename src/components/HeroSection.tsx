import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import SkillCard from "./SkillCard";
import heroImage from "@/assets/hero-image.jpg";
import cvFile from "@/assets/M Ammar Aziz.pdf";

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'M_Ammar_Aziz_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-24 pb-8 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="animate-fade-up text-center lg:text-left">
              <h2 className="text-lg sm:text-xl text-muted-foreground mb-3 sm:mb-4 font-medium">
                Hello, I&apos;m
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-tight">
                MUHAMMAD
                <br />
                <span className="text-accent">AMMAR</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                Full Stack Developer & UI/UX Enthusiast
              </p>
            </div>
            
            <div className="animate-fade-up-delayed text-center lg:text-left">
              <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
                Passionate MERN Stack Developer from Lahore, Pakistan. Creating 
                dynamic, scalable web applications with clean code and exceptional 
                user experiences.
              </p>
            </div>
            
            <div className="animate-fade-up-delayed flex justify-center lg:justify-start">
              <SocialLinks />
            </div>
            
            <div className="animate-fade-up-delayed flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/works">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-card"
                >
                  View My Work
                </Button>
              </Link>
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-6 rounded-full transition-all duration-300 hover:scale-105"
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Right Content - Image and Floating Cards */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 animate-fade-up">
              <img 
                src={heroImage} 
                alt="Muhammad Ammar Aziz - Full Stack Developer"
                className="w-64 sm:w-80 lg:w-full max-w-md mx-auto rounded-3xl shadow-card object-cover aspect-[3/4]"
              />
            </div>
            
            {/* Floating Skill Cards - Desktop */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 z-20 hidden xl:block">
              <SkillCard 
                icon="💻" 
                title="MERN Stack" 
                subtitle="MongoDB, Express, React, Node.js"
                delay={0}
              />
            </div>
            
            <div className="absolute top-1/2 -left-4 sm:-left-8 z-20 hidden xl:block">
              <SkillCard 
                icon="🚀" 
                title="Next.js Expert" 
                subtitle="Full Stack Applications"
                delay={1}
              />
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden xl:block">
              <SkillCard 
                icon="🎨" 
                title="UI/UX Design" 
                subtitle="Modern & Responsive"
                delay={2}
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:hidden mt-8 lg:mt-12">
          <SkillCard 
            icon="💻" 
            title="MERN Stack" 
            subtitle="Full Stack Development"
          />
          <SkillCard 
            icon="🚀" 
            title="Next.js" 
            subtitle="Modern React Framework"
            delay={0.2}
          />
          <SkillCard 
            icon="🎨" 
            title="UI/UX" 
            subtitle="Design & Development"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;