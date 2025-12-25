import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/collection", label: "Коллекция" },
    { path: "/about", label: "О нас" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="font-display text-2xl md:text-3xl font-medium tracking-wide text-foreground hover:text-rose-gold transition-colors"
          >
            Pearl<span className="text-rose-gold">Elegance</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body text-sm tracking-widest uppercase transition-all duration-300 relative py-2",
                  location.pathname === link.path
                    ? "text-rose-gold"
                    : "text-muted-foreground hover:text-foreground",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-rose-gold after:origin-left after:transition-transform after:duration-300",
                  location.pathname === link.path 
                    ? "after:scale-x-100" 
                    : "after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
