import FloatingCard from "./FloatingCard";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ icon, title, description, features, delay = 0 }: ServiceCardProps) => {
  return (
    <FloatingCard delay={delay} className="text-center h-full hover:shadow-card">
      <div className="space-y-4">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </FloatingCard>
  );
};

export default ServiceCard;