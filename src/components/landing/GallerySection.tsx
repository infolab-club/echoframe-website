import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const paintings = [
  {
    id: 1,
    image: painting1,
    title: "Мотивационная картина",
    arDescription: "Каждый день новая вдохновляющая цитата — ваш ежедневный источник мотивации и позитивной энергии",
    price: "3 000 ₽"
  },
  {
    id: 2,
    image: painting2,
    title: "Счётчик любви",
    arDescription: "Отсчитывает дни вашей совместной истории — романтичный подарок для второй половинки",
    price: "4 000 ₽"
  },
  {
    id: 3,
    image: painting3,
    title: "Послания любви",
    arDescription: "Оставляйте друг другу романтические послания, которые появляются при наведении камеры",
    price: "5 500 ₽"
  }
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Коллекция
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Наши <span className="text-gradient-gold">работы</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Каждая картина — это уникальное произведение искусства с персональной AR-анимацией
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <div
              key={painting.id}
              className="group relative bg-gradient-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-gold"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                  <div className="text-center">
                    <Eye className="w-10 h-10 text-primary mx-auto mb-4 animate-pulse" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {painting.arDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {painting.title}
                  </h3>
                  <span className="text-primary font-semibold">
                    {painting.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
