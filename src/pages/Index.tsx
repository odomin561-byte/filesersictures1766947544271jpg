import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import AboutPreview from "@/components/home/AboutPreview";

import heroImage from "@/assets/hero-pearl-bag.jpg";
import product1 from "@/assets/product-1.jpg";
import product7 from "@/assets/product-7.jpg";
import product3 from "@/assets/product-3.jpg";
import craftImage from "@/assets/craft-process.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Клатч из акриловых бусин",
    description: "Классическая элегантность в каждой бусине",
    image: product1,
  },
  {
    id: 2,
    name: "Перламутровая Грация",
    description: "Изысканный жемчуг с золотым акцентом",
    image: product7,
  },
  {
    id: 3,
    name: "Розовая Мечта",
    description: "Яркий акцент для смелых образов",
    image: product3,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection heroImage={heroImage} />
        <FeaturedSection products={featuredProducts} />
        <AboutPreview craftImage={craftImage} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
