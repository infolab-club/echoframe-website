import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Анна К.",
    location: "Москва",
    rating: 5,
    text: "Заказала мотивационную картину — каждое утро новая цитата поднимает настроение! Это стало моим ритуалом перед работой. Спасибо за такой креативный продукт!",
    date: "Январь 2025"
  },
  {
    id: 2,
    name: "Михаил Д.",
    location: "Санкт-Петербург",
    rating: 5,
    text: "Подарил девушке картину со счётчиком дней вместе. Она была в восторге! Каждый день видеть, сколько времени мы вместе — это невероятно романтично.",
    date: "Февраль 2025"
  },
  {
    id: 3,
    name: "Елена В.",
    location: "Казань",
    rating: 5,
    text: "Купили с мужем картину для посланий. Теперь оставляем друг другу милые записки через AR — это добавило романтики в нашу жизнь. Лучший подарок на годовщину!",
    date: "Январь 2025"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Отзывы
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Что говорят <span className="text-gradient-gold">наши клиенты</span>
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative bg-gradient-card p-8 rounded-2xl border border-border/50 shadow-card"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "20+", label: "Довольных клиентов" },
            { value: "4.9", label: "Средняя оценка" },
            { value: "100%", label: "Уникальных работ" },
            { value: "1.5 года", label: "На рынке" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
