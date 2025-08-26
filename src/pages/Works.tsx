import PageLayout from "@/components/PageLayout";
import ProjectCard from "@/components/ProjectCard";

const Works = () => {
  const projects = [
    {
      title: "Mystery Bites - AI Food Recommendation",
      description: "Final year project utilizing machine learning for real-time mood analysis via image processing to provide personalized meal recommendations based on emotional state and dietary preferences.",
      technologies: ["Machine Learning", "Image Processing", "Python", "AI Algorithms"],
      delay: 0
    },
    {
      title: "1StopBedrooms E-commerce",
      description: "Comprehensive online furniture store built with Next.js featuring responsive UI, optimized performance, user authentication, shopping cart functionality, and admin dashboard.",
      technologies: ["Next.js", "React", "Node.js", "E-commerce", "Responsive Design"],
      delay: 0.2
    },
    {
      title: "Genee Coaching App",
      description: "Educational platform for managing student-teacher sessions, assignments, schedules, and progress tracking. Built with modern web technologies for seamless user experience.",
      technologies: ["Next.js", "Education", "Session Management", "React"],
      delay: 0.4
    },
    {
      title: "Subscription Management App",
      description: "Full-featured subscription platform with Stripe payment integration, role-based access control, subscription plan management, and secure user authentication.",
      technologies: ["MERN Stack", "Stripe", "Authentication", "Payment Gateway"],
      delay: 0.1
    },
    {
      title: "Real-time Auction Platform",
      description: "Backend auction system with real-time bidding functionality using WebSockets, user management, bid tracking, and secure transaction processing.",
      technologies: ["Node.js", "WebSockets", "Real-time", "API Development"],
      delay: 0.3
    },
    {
      title: "E-commerce Clothing Store",
      description: "Modern clothing store web application with user roles, shopping cart system, inventory management, order processing, and comprehensive admin dashboard.",
      technologies: ["MERN Stack", "E-commerce", "Admin Panel", "User Management"],
      delay: 0.5
    },
    {
      title: "Real-time Chat Application",
      description: "Instant messaging platform with WebSocket implementation, group chats, file sharing, message history, and real-time notifications.",
      technologies: ["WebSockets", "Real-time", "Chat", "Node.js"],
      delay: 0.2
    },
    {
      title: "Budget Management System",
      description: "Personal finance application with expense tracking APIs, budget planning, financial analytics, spending categorization, and user-friendly dashboard.",
      technologies: ["Node.js", "Financial APIs", "Dashboard", "Analytics"],
      delay: 0.4
    },
    {
      title: "Secure Authentication System",
      description: "JWT-based authentication platform with secure login/registration, role-based routing, password encryption, and session management for web applications.",
      technologies: ["JWT", "Security", "MERN Stack", "Authentication"],
      delay: 0.6
    }
  ];

  return (
    <PageLayout 
      title="My Work Portfolio" 
      subtitle="Showcasing innovative projects in web development, machine learning, and full-stack applications"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              delay={project.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/ammar128536" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              View GitHub Profile
            </a>
            <a 
              href="mailto:chammaraziz786@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Works;