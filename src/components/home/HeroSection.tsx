import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Изысканная жемчужная сумочка ручной работы" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-rose-gold/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-champagne/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-rose-gold font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Ручная работа
          </span>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            Изящество <br />
            <span className="font-medium italic text-rose-gold">жемчуга</span>
            <br />в каждой детали
          </h1>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
            Уникальные сумочки из жемчуга и изысканных бусин, 
            созданные с любовью вручную для особенных моментов вашей жизни.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <Button asChild variant="elegant" size="xl">
              <Link to="/collection">Смотреть коллекцию</Link>
            </Button>
            <Button asChild variant="pearl" size="xl">
              <Link to="/about">О мастерской</Link>
            </Button>
            <Button asChild variant="pearl" size="xl">
              <a href="https://www.instagram.com/my.crystal_bag?igsh=MTA2dHQ3eWd0emVyZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Прокрутите</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-rose-gold to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
