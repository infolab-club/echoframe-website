import { Smartphone, Image, Sparkles } from "lucide-react";

const ProductSection = () => {
  const features = [
    {
      icon: Image,
      title: "Физическая картина",
      description: "Высококачественный холст с профессиональной печатью, готовый украсить любой интерьер"
    },
    {
      icon: Smartphone,
      title: "AR-слой",
      description: "Наведите камеру смартфона — и картина оживёт, раскрывая скрытый анимированный слой"
    },
    {
      icon: Sparkles,
      title: "Уникальный опыт",
      description: "Каждый просмотр — это новое открытие. Идеальный подарок для ценителей искусства и технологий"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            О продукте
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Два измерения
            <br />
            <span className="text-gradient-gold">в одной картине</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Наши картины — это симбиоз классического искусства и современных технологий. 
            На первый взгляд это обычная картина, но направьте на неё камеру смартфона — 
            и она откроет свой секрет.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-gold"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            {["Выберите картину", "Получите заказ", "Воспользуйтесь AR-сервисом", "Наслаждайтесь магией"].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground">{step}</span>
                </div>
                {index < 3 && (
                  <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
