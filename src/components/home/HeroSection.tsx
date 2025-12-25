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
            Уникальные сумочки из натурального жемчуга и изысканных бусин, 
            созданные с любовью вручную для особенных моментов вашей жизни.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <Button asChild variant="elegant" size="xl">
              <Link to="/collection">Смотреть коллекцию</Link>
            </Button>
            <Button asChild variant="pearl" size="xl">
              <Link to="/about">О мастерской</Link>
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
