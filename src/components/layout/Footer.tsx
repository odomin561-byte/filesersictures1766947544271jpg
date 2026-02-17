import { Link } from "react-router-dom";
import towerSilhouette from "@/assets/tower-silhouette.png";

const Footer = () => {
  return (
    <footer className="bg-ivory border-t border-border/50 py-12 md:py-16 relative overflow-hidden">
      {/* Tower silhouette background with text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
        <div className="flex items-center gap-2 mb-2 font-display text-2xl md:text-3xl font-medium text-foreground">
          <span>Я</span>
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 text-red-500 fill-current" 
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span>Белорецк</span>
        </div>
        <img 
          src={towerSilhouette} 
          alt="" 
          className="h-[70%] w-auto opacity-100 object-contain"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link 
              to="/" 
              className="font-display text-2xl font-medium tracking-wide text-foreground"
            >
              Pearl<span className="text-rose-gold">Elegance</span>
            </Link>
            <p className="mt-4 text-muted-foreground font-body text-sm leading-relaxed">
              Ручная работа с любовью. Каждая сумочка — это уникальное произведение искусства из жемчуга и бусин.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-rose-gold transition-colors text-sm">
                Главная
              </Link>
              <Link to="/collection" className="text-muted-foreground hover:text-rose-gold transition-colors text-sm">
                Коллекция
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-rose-gold transition-colors text-sm">
                О нас
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4">Контакты</h4>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm">
              <div className="flex gap-4 mt-0">
                <a href="https://www.instagram.com/my.crystal_bag?igsh=MTA2dHQ3eWd0emVyZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-rose-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-rose-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-xs">
            © 2024 PearlElegance. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
