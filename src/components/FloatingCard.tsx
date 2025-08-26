import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard = ({ children, className = "", delay = 0 }: FloatingCardProps) => {
  return (
    <div 
      className={`glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl animate-float hover:scale-105 transition-all duration-300 cursor-pointer ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default FloatingCard;