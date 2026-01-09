import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface FeaturedSectionProps {
  products: Product[];
}

const FeaturedSection = ({ products }: FeaturedSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-gradient-pearl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-gold font-body text-sm tracking-[0.3em] uppercase">
            Избранное
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-light mt-4">
            Мои <span className="italic font-medium">лучшие</span> работы
          </h2>
          <div className="w-20 h-[1px] bg-rose-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to="/collection"
              className="group animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6 shadow-soft">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block bg-pearl-shimmer/90 backdrop-blur-sm text-foreground text-xs tracking-widest uppercase px-4 py-2 rounded-full">
                    Подробнее
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-medium group-hover:text-rose-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mt-2">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
