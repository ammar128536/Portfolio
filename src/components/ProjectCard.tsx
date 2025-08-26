import FloatingCard from "./FloatingCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  githubUrl, 
  liveUrl,
  delay = 0 
}: ProjectCardProps) => {
  return (
    <FloatingCard delay={delay} className="h-full hover:shadow-card group">
      <div className="space-y-4">
        {imageUrl && (
          <div className="aspect-video rounded-xl overflow-hidden bg-muted">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-2">
            {githubUrl && (
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button 
                size="sm"
                className="flex items-center gap-2 bg-accent hover:bg-accent/90"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </FloatingCard>
  );
};

export default ProjectCard;