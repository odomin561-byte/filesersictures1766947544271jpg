import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface AboutPreviewProps {
  craftImage: string;
}

const AboutPreview = ({ craftImage }: AboutPreviewProps) => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={craftImage}
                alt="Мастер за работой над жемчужной сумочкой"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border-l-2 border-t-2 border-rose-gold/30 rounded-tl-lg pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border-r-2 border-b-2 border-rose-gold/30 rounded-br-lg pointer-events-none" />
          </div>

          <div>
            <span className="text-rose-gold font-body text-sm tracking-[0.3em] uppercase">
              Наша история
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mt-4 leading-tight">
              Искусство, рождённое <span className="italic font-medium">любовью</span>
            </h2>
            <div className="w-16 h-[1px] bg-rose-gold mt-6 mb-8" />

            <p className="text-muted-foreground leading-relaxed mb-6">
              Каждая наша сумочка — это не просто аксессуар, это произведение искусства. 
              Мы вручную отбираем каждую жемчужину и бусину, чтобы создать неповторимый 
              узор, который подчеркнёт вашу индивидуальность.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              За годы работы мы разработали уникальные техники плетения, которые 
              обеспечивают не только красоту, но и прочность изделия. Наши сумочки 
              станут верным спутником на важных мероприятиях и в повседневной жизни.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <span className="font-display text-4xl font-light text-rose-gold">150+</span>
                <p className="text-muted-foreground text-sm mt-1">Уникальных работ</p>
              </div>
              <div>
                <span className="font-display text-4xl font-light text-rose-gold">5</span>
                <p className="text-muted-foreground text-sm mt-1">Лет мастерства</p>
              </div>
              <div>
                <span className="font-display text-4xl font-light text-rose-gold">100%</span>
                <p className="text-muted-foreground text-sm mt-1">Ручная работа</p>
              </div>
            </div>

            <Button asChild variant="elegant" size="lg">
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
