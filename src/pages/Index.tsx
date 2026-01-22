import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProductSection from "@/components/landing/ProductSection";
import GallerySection from "@/components/landing/GallerySection";
import GiftSection from "@/components/landing/GiftSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="product">
          <ProductSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <GiftSection />
        <section id="reviews">
          <ReviewsSection />
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
