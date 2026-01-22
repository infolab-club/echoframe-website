const logoIcon = "/favicon.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/30">
      <div className="container mx-auto px-4">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-3">
            <img src={logoIcon} alt="Эхофрейм" className="w-7 h-7" />
            <span className="font-heading text-2xl font-bold text-foreground">Эхофрейм</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Искусство, которое выходит за рамки
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <a href="#product" className="text-muted-foreground hover:text-primary transition-colors">
            О продукте
          </a>
          <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
            Коллекция
          </a>
          <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">
            Отзывы
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Контакты
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mb-8" />

        {/* Foundation support */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-background/50 border border-border/30">
            <p className="text-sm text-muted-foreground max-w-2xl">
              Проект создан при поддержке Федерального государственного бюджетного учреждения{" "}
              <span className="text-foreground font-medium">
                Фонд содействия развитию малых форм предприятий в научно-технической сфере
              </span>{" "}
              в рамках программы «Студенческий стартап» федерального проекта{" "}
              <span className="text-foreground font-medium">
                Платформа университетского технологического предпринимательства
              </span>
            </p>
          </div>
        </div>

        {/* Company info */}
        <div className="text-center mb-6 space-y-1">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">ООО «Эхофрейм»</span> | ИНН: 7806624896
          </p>
          <p className="text-xs text-muted-foreground">
            Юридический адрес: 198206, город Санкт-Петербург, ул. Пионерстроя, д. 23 литера Б, помещ. 4-н
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Эхофрейм. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
