import { Heart, Gift, Cake, Star, Home, Users } from "lucide-react";

const occasions = [
  {
    icon: Heart,
    title: "День святого Валентина",
    description: "Романтическая картина с признанием в любви, которое появляется в AR"
  },
  {
    icon: Cake,
    title: "День рождения",
    description: "Персонализированное поздравление, скрытое в дополненной реальности"
  },
  {
    icon: Gift,
    title: "Новый год",
    description: "Зимний пейзаж, в котором оживают снежинки и появляется Дед Мороз"
  },
  {
    icon: Star,
    title: "Годовщина",
    description: "Совместные фотографии и воспоминания, зашифрованные в картине"
  },
  {
    icon: Home,
    title: "Новоселье",
    description: "Картина с секретным посланием для нового дома"
  },
  {
    icon: Users,
    title: "Корпоративный подарок",
    description: "Брендированная анимация и послание от компании"
  }
];

const GiftSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">🎁</div>
        <div className="absolute bottom-20 right-10 text-8xl">❤️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Идеальный подарок
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Поводы <span className="text-gradient-gold">для подарка</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AR-картина — это не просто подарок, это эмоция, которая будет удивлять снова и снова
          </p>
        </div>

        {/* Occasions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <occasion.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {occasion.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {occasion.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-card border border-primary/20 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Хотите создать <span className="text-gradient-gold">уникальную картину</span>?
          </h3>
          <p className="text-muted-foreground mb-6">
            Мы можем создать персональную картину с вашим уникальным AR-слоем — фотографии, послания, воспоминания
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors font-medium"
          >
            Обсудить персональный заказ →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
