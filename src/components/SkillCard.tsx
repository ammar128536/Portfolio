import FloatingCard from "./FloatingCard";

interface SkillCardProps {
  icon: string;
  title: string;
  subtitle: string;
  delay?: number;
}

const SkillCard = ({ icon, title, subtitle, delay = 0 }: SkillCardProps) => {
  return (
    <FloatingCard delay={delay} className="text-center min-w-[160px] sm:min-w-[200px] hover:shadow-card">
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
      <h3 className="font-semibold text-primary mb-1 text-sm sm:text-base">{title}</h3>
      <p className="text-muted-foreground text-xs sm:text-sm">{subtitle}</p>
    </FloatingCard>
  );
};

export default SkillCard;