import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2-new.jpg";
import product3 from "@/assets/collection-product-3.jpg";
import product4Video from "@/assets/product-4-video.mp4";
import product5Video from "@/assets/product-5-video.mp4";
import product6Video from "@/assets/product-6-video.mp4";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const allProducts = [
  {
    id: 1,
    name: "Клатч из акриловых бусин",
    category: "Вечерние",
    description: "Классическая элегантность в каждой бусине. Идеально подходит для свадеб и торжеств.",
    image: product1,
  },
  {
    id: 2,
    name: "Бирюзовый Шарм",
    category: "Вечерние",
    description: "Жемчужная сумочка на фоне изумрудного шёлка. Идеальное сочетание элегантности и роскоши.",
    image: product2,
  },
  {
    id: 3,
    name: "Чёрный Оникс",
    category: "Вечерние",
    description: "Изысканная сумочка из чёрных бусин с винтажной застёжкой. Воплощение утончённой роскоши.",
    image: product3,
  },
  {
    id: 4,
    name: "Видео-презентация",
    category: "Вечерние",
    description: "Посмотрите наши изделия в движении. Эксклюзивная демонстрация мастерства.",
    video: product4Video,
  },
  {
    id: 5,
    name: "Видео-обзор",
    category: "Классические",
    description: "Посмотрите классические модели нашей коллекции в движении.",
    video: product5Video,
  },
  {
    id: 6,
    name: "Нежность Рассвета",
    category: "Вечерние",
    description: "Роскошная сумочка из переливающихся кристаллов с золотой фурнитурой. Ослепительный аксессуар для торжественных вечеров.",
    image: product6,
  },
  {
    id: 7,
    name: "Нежность Рассвета",
    category: "Повседневные",
    description: "Мягкие розовые переливы для романтических натур.",
    image: product3,
  },
  {
    id: 8,
    name: "Нежность Рассвета",
    category: "Вечерние",
    description: "Изысканная жемчужная сумочка с золотой фурнитурой. Нежный аксессуар для романтических вечеров.",
    image: product7,
  },
  {
    id: 9,
    name: "Слоновая Кость",
    category: "Классические",
    description: "Изящная сумочка из кремовых жемчужин. Безупречная классика для утончённых натур.",
    image: product8,
  },
];

const categories = ["Все", "Вечерние", "Повседневные", "Классические"];

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredProducts = activeCategory === "Все" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-pearl text-center">
          <div className="container mx-auto px-4 md:px-8">
            <span className="text-rose-gold font-body text-sm tracking-[0.3em] uppercase">
              Наши работы
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-light mt-4 mb-6">
              Коллекция <span className="italic font-medium">изделий</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждая сумочка в нашей коллекции — это уникальное произведение искусства, 
              созданное вручную с любовью и вниманием к деталям.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-body text-sm tracking-wide transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-rose-gold text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-champagne hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProducts.map((product, index) => (
                <article
                  key={product.id}
                  className="group animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-5 shadow-soft">
                    {'video' in product && product.video ? (
                      <video
                        src={product.video}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={'image' in product ? product.image : ''}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-pearl-shimmer/90 backdrop-blur-sm text-foreground text-xs tracking-widest uppercase px-3 py-1.5 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-pearl-shimmer/90 backdrop-blur-sm text-foreground font-display text-lg font-medium rounded-full shadow-soft">
                        {product.id}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium group-hover:text-rose-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-ivory">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-light mb-4">
              Хотите <span className="italic font-medium">индивидуальный</span> заказ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Мы создаём сумочки по индивидуальным эскизам. 
              Свяжитесь с нами для обсуждения вашей уникальной идеи.
            </p>
            <a
              href="/about"
              className="inline-block bg-rose-gold text-primary-foreground px-8 py-4 rounded-lg font-body tracking-wide hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Связаться с нами
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collection;
