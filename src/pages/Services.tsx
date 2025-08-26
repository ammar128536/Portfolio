import PageLayout from "@/components/PageLayout";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Full Stack Web Development",
      description: "Complete web application development using modern MERN stack technologies with scalable architecture and responsive design.",
      features: [
        "MERN Stack Development (MongoDB, Express, React, Node.js)",
        "Next.js & Modern React Applications",
        "RESTful API Development",
        "Database Design & Optimization",
        "Responsive Web Design",
        "Performance Optimization"
      ],
      delay: 0
    },
    {
      icon: "🚀",
      title: "Frontend Development",
      description: "Modern, interactive user interfaces with cutting-edge technologies and exceptional user experience design principles.",
      features: [
        "React & Next.js Development",
        "JavaScript & TypeScript",
        "HTML5, CSS3, Tailwind CSS",
        "Responsive Design Implementation",
        "UI/UX Design Integration",
        "Cross-browser Compatibility"
      ],
      delay: 0.2
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Robust server-side applications with secure APIs, database management, and scalable architecture for enterprise solutions.",
      features: [
        "Node.js & Express.js Development",
        "RESTful API Design",
        "Database Management (MongoDB, MySQL)",
        "Authentication & Authorization",
        "Real-time Applications (WebSockets)",
        "Cloud Integration & Deployment"
      ],
      delay: 0.4
    },
    {
      icon: "🎨",
      title: "UI/UX Design & Implementation",
      description: "User-centered design approach creating intuitive interfaces that enhance user engagement and conversion rates.",
      features: [
        "User Interface Design",
        "User Experience Optimization",
        "Wireframing & Prototyping",
        "Design System Development",
        "Responsive Design Principles",
        "Accessibility Standards (WCAG)"
      ],
      delay: 0.1
    },
    {
      icon: "💡",
      title: "Machine Learning Integration",
      description: "Implementing AI and ML solutions in web applications for enhanced user experiences and intelligent automation.",
      features: [
        "Image Processing & Analysis",
        "Recommendation Systems",
        "Data Analysis & Visualization",
        "AI-powered Features",
        "Predictive Analytics",
        "Machine Learning Model Integration"
      ],
      delay: 0.3
    },
    {
      icon: "🛠️",
      title: "Technical Consulting",
      description: "Strategic technology consulting to help businesses choose the right tech stack and development approach for their goals.",
      features: [
        "Technology Stack Consultation",
        "Code Review & Optimization",
        "Performance Auditing",
        "Scalability Planning",
        "Best Practices Implementation",
        "Team Training & Mentoring"
      ],
      delay: 0.5
    }
  ];

  return (
    <PageLayout 
      title="My Services" 
      subtitle="Comprehensive development solutions from concept to deployment, specializing in modern web technologies and user-centric design"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center glass-card p-8 sm:p-12 rounded-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help bring your ideas to life with modern web technologies 
            and exceptional user experiences. From initial concept to final deployment, 
            I&apos;ll be with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:chammaraziz786@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-card"
            >
              Start a Project
            </a>
            <a 
              href="tel:+923317207711"
              className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;