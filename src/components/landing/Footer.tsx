import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/30">
      <div className="container mx-auto px-4">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-heading text-2xl font-bold text-foreground">AR Paintings</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Искусство, которое выходит за рамки
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Каталог
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            О нас
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Доставка
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Контакты
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mb-8" />

        {/* Foundation support */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border/30">
            <span className="text-sm text-muted-foreground">
              Проект создан при поддержке{" "}
              <span className="text-foreground font-medium">
                Фонда содействия инновациям
              </span>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AR Paintings. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
