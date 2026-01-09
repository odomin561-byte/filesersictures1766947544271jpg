import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import craftImage from "@/assets/craft-process.jpg";
import product1 from "@/assets/product-1.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-pearl">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-rose-gold font-body text-sm tracking-[0.3em] uppercase">
                О нас
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-light mt-4 mb-6">
                История <span className="italic font-medium">мастерства</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Мы создаём уникальные сумочки из жемчуга и бусин, 
                сочетая традиционное мастерство с современным дизайном.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={craftImage}
                    alt="Процесс создания жемчужной сумочки"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-champagne/30 rounded-full blur-3xl -z-10" />
              </div>

              <div>
                <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
                  Каждая <span className="italic font-medium text-rose-gold">бусина</span> имеет значение
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Наша история началась с любви к красоте жемчуга. 
                    Первая сумочка была создана как подарок для близкого человека, 
                    и именно тогда родилась идея делиться этой красотой с другими.
                  </p>
                  <p>
                    Сегодня каждое наше изделие — это результат кропотливого труда, 
                    где каждая бусина вручную подбирается и нанизывается мастером. 
                    Мы используем только натуральный жемчуг и качественные бусины 
                    от проверенных поставщиков.
                  </p>
                  <p>
                    Нам важно, чтобы каждая женщина, выбирающая нашу сумочку, 
                    чувствовала себя особенной и уникальной. Поэтому мы ограничиваем 
                    количество изделий каждой модели.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-ivory">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-light">
                Наши <span className="italic font-medium">ценности</span>
              </h2>
              <div className="w-20 h-[1px] bg-rose-gold mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Качество",
                  description: "Мы используем только лучшие материалы и уделяем внимание каждой детали изделия.",
                  icon: "✦",
                },
                {
                  title: "Уникальность",
                  description: "Каждая сумочка создаётся вручную и имеет свой неповторимый характер.",
                  icon: "◇",
                },
                {
                  title: "Забота",
                  description: "Мы ценим каждого клиента и стремимся создать лучший сервис.",
                  icon: "♡",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 bg-pearl-shimmer rounded-lg shadow-soft animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-4xl text-rose-gold mb-4 block">{value.icon}</span>
                  <h3 className="font-display text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
                  Как <span className="italic font-medium text-rose-gold">создаётся</span> сумочка
                </h2>
                
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Дизайн", desc: "Создаём эскиз и подбираем цветовую палитру" },
                    { step: "02", title: "Материалы", desc: "Отбираем жемчуг и бусины вручную" },
                    { step: "03", title: "Плетение", desc: "Кропотливая работа над каждым узлом" },
                    { step: "04", title: "Финиш", desc: "Добавляем фурнитуру и проверяем качество" },
                  ].map((item, index) => (
                    <div
                      key={item.step}
                      className="flex gap-6 items-start animate-fade-in-up opacity-0"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <span className="font-display text-3xl text-champagne">{item.step}</span>
                      <div>
                        <h3 className="font-display text-lg font-medium">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={product1}
                    alt="Готовая жемчужная сумочка"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 md:py-28 bg-gradient-pearl">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-light mb-4">
                Свяжитесь <span className="italic font-medium">с нами</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Будем рады ответить на ваши вопросы и обсудить индивидуальный заказ.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-pearl-shimmer p-6 rounded-lg shadow-soft">
                  <h3 className="font-display text-lg font-medium mb-2">Email</h3>
                  <a href="mailto:o.artemova2011@yandex.ru" className="text-rose-gold hover:underline">
                    o.artemova2011@yandex.ru
                  </a>
                </div>
                <div className="bg-pearl-shimmer p-6 rounded-lg shadow-soft">
                  <h3 className="font-display text-lg font-medium mb-2">Телефон</h3>
                  <a href="tel:+79991234567" className="text-rose-gold hover:underline">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex justify-center gap-6">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-pearl-shimmer flex items-center justify-center text-foreground hover:bg-champagne hover:text-rose-gold transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-pearl-shimmer flex items-center justify-center text-foreground hover:bg-champagne hover:text-rose-gold transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-pearl-shimmer flex items-center justify-center text-foreground hover:bg-champagne hover:text-rose-gold transition-all duration-300"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
