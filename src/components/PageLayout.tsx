import { ReactNode } from "react";
import Header from "./Header";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen hero-gradient">
      <Header />
      <main className="pt-24 pb-12">
        {title && (
          <div className="container mx-auto px-4 sm:px-6 mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 animate-fade-up">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up-delayed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default PageLayout;