import { Button } from "@/components/ui/button";
import { Send, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Контакты
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Свяжитесь <span className="text-gradient-gold">с нами</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Готовы ответить на ваши вопросы и помочь с выбором идеальной картины
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Telegram */}
          <a
            href="https://t.me/DenisBall"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-gold"
          >
            <div className="w-16 h-16 rounded-full bg-[#2AABEE]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Send className="w-8 h-8 text-[#2AABEE]" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Telegram
            </h3>
            <p className="text-muted-foreground text-center mb-4">
              Быстрые ответы и консультации
            </p>
            <span className="text-primary font-medium">@DenisBall</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@echoframe.ru"
            className="group flex flex-col items-center p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-gold"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Email
            </h3>
            <p className="text-muted-foreground text-center mb-4">
              Для деловых предложений
            </p>
            <span className="text-primary font-medium">info@echoframe.ru</span>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-primary/20">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-foreground">
              Отвечаем в течение <span className="text-primary font-semibold">2 часов</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
