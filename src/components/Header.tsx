import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-primary">
          ammar<span className="text-accent">.dev</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-colors duration-300 font-medium ${
                isActive(item.path)
                  ? "text-accent"
                  : "text-foreground hover:text-accent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="default"
            className="hidden sm:block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 sm:px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </Button>
          
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-1 mx-4 rounded-2xl p-4">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-300 font-medium py-2 ${
                  isActive(item.path)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 w-full mt-4"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;