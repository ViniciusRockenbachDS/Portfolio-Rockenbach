import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import architectureImage from "../assets/developer-architecture.jpg";
import portraitAsset from "../assets/vinicius-rockenbach.jpg.asset.json";
import { CursorTrail } from "../components/CursorTrail";
import { portfolio, portfolioEn } from "../data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinícius Rockenbach — Programador" },
      {
        name: "description",
        content:
          "Portfólio de Vinícius Rockenbach dos Santos, programador e estudante de Engenharia de Software em Campo Alegre, SC.",
      },
      { property: "og:title", content: "Vinícius Rockenbach — Programador" },
      {
        property: "og:description",
        content: "Projetos, experiência, formação e habilidades em desenvolvimento de software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const copy = {
  pt: {
    nav: [["Início", "inicio"], ["Sobre", "sobre"], ["Habilidades", "habilidades"], ["Experiência", "experiencia"], ["Projetos", "projetos"], ["Contato", "contato"]] as const,
    talk: "Vamos conversar",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    availability: "Estou sempre em busca de conhecimento e oportunidades na área de desenvolvimento/TI!",
    sideLabel: "PROGRAMADOR · SC, BRASIL",
    projectsLink: "Ver projetos",
    sections: {
      about: ["Sobre mim", "Tecnologia com propósito e visão prática."],
      skills: ["Habilidades", "Ferramentas para transformar ideias em soluções."],
      journey: ["Trajetória", "Experiência que conecta indústria e software."],
      projects: ["Projetos", "Soluções nascidas de desafios reais."],
    },
    quote: "“Aprender, construir e evoluir — um projeto de cada vez.”",
    languages: "Idiomas",
    experience: "Experiência",
    education: "Formação",
    certificates: "Certificados & reconhecimento",
    contact: "Contato",
    contactTitle: ["Vamos trabalhar ", "juntos?"],
    contactText: "Estou aberto a oportunidades, colaborações e boas conversas sobre tecnologia.",
    email: "E-mail",
    whatsapp: "WhatsApp",
    fields: { name: "Seu nome", namePlaceholder: "Como posso te chamar?", email: "Seu e-mail", message: "Sua mensagem", messagePlaceholder: "Conte um pouco sobre sua ideia ou oportunidade...", send: "Enviar mensagem" },
    top: "Voltar ao topo",
    photoAlt: "Vinícius Rockenbach em uma trilha com paisagem montanhosa",
    theme: "Alternar tema claro ou escuro",
    language: "Switch website language to English",
  },
  en: {
    nav: [["Home", "inicio"], ["About", "sobre"], ["Skills", "habilidades"], ["Experience", "experiencia"], ["Projects", "projetos"], ["Contact", "contato"]] as const,
    talk: "Let's talk",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    availability: "I am always seeking knowledge and opportunities in development and IT!",
    sideLabel: "DEVELOPER · SC, BRAZIL",
    projectsLink: "View projects",
    sections: {
      about: ["About me", "Technology with purpose and practical insight."],
      skills: ["Skills", "Tools to turn ideas into solutions."],
      journey: ["Journey", "Experience connecting industry and software."],
      projects: ["Projects", "Solutions born from real challenges."],
    },
    quote: "“Learn, build, and evolve — one project at a time.”",
    languages: "Languages",
    experience: "Experience",
    education: "Education",
    certificates: "Certificates & recognition",
    contact: "Contact",
    contactTitle: ["Let's work ", "together?"],
    contactText: "I am open to opportunities, collaborations, and great conversations about technology.",
    email: "Email",
    whatsapp: "WhatsApp",
    fields: { name: "Your name", namePlaceholder: "What should I call you?", email: "Your email", message: "Your message", messagePlaceholder: "Tell me about your idea or opportunity...", send: "Send message" },
    top: "Back to top",
    photoAlt: "Vinícius Rockenbach on a trail overlooking the mountains",
    theme: "Switch light or dark theme",
    language: "Mudar o idioma do site para português",
  },
} as const;

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading reveal">
      <div className="section-kicker"><span>{number}</span>{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState<"pt" | "en">("pt");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const text = copy[locale];
  const content = locale === "pt" ? portfolio : portfolioEn;

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale");
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedLocale === "pt" || savedLocale === "en") setLocale(savedLocale);
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.documentElement.dataset["theme"] = theme;
    window.localStorage.setItem("portfolio-locale", locale);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [locale, theme]);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <div className="star-field" aria-hidden="true" />
      <CursorTrail />
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Ir ao início">
          <span>VR</span><strong>Vinícius<br />Rockenbach</strong>
        </a>
        <div className="header-preferences">
          <button className="language-toggle" type="button" onClick={() => setLocale(locale === "pt" ? "en" : "pt")} aria-label={text.language} title={text.language}>
            <span className={locale === "pt" ? "active" : ""}>PT</span><i>/</i><span className={locale === "en" ? "active" : ""}>ENG</span>
          </button>
          <button className="theme-toggle" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={text.theme} title={text.theme} aria-pressed={theme === "light"}>
            <Moon size={17} />
          </button>
        </div>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {text.nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="header-contact" href={`mailto:${portfolio.email}`}>{text.talk} <ArrowUpRight size={16} /></a>
        <button className="menu-button" aria-label={menuOpen ? text.menuClose : text.menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação móvel">
            {text.nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
        )}
      </header>

      <section id="inicio" className="hero">
        <img className="hero-image" src={architectureImage} alt="Arquitetura abstrata de sistemas conectados" width={1400} height={1000} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="availability"><span /> {text.availability}</p>
          <h1>Vinícius<br /><em>Rockenbach.</em></h1>
          <div className="hero-bottom">
            <p>{content.intro}</p>
            <a className="circle-link" href="#projetos" aria-label={text.projectsLink}><ArrowDownRight /></a>
          </div>
        </div>
        <div className="hero-side-label">{text.sideLabel}</div>
      </section>

      <section id="sobre" className="section about-section">
        <SectionHeading number="01" eyebrow={text.sections.about[0]} title={text.sections.about[1]} />
        <div className="about-grid">
          <div className="portrait-card reveal">
            <img className="portrait-image" src={portraitAsset.url} alt={text.photoAlt} width={360} height={360} />
            <div className="portrait-shade" />
            <div className="portrait-meta"><MapPin size={16} /> {content.location}</div>
          </div>
          <div className="about-copy reveal">
            <p>{content.about}</p>
            <blockquote>{text.quote}</blockquote>
            <div className="stats">
              {content.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="section skills-section">
        <SectionHeading number="02" eyebrow={text.sections.skills[0]} title={text.sections.skills[1]} />
        <div className="skills-grid">
          {content.skillGroups.map((group, index) => (
            <article className="skill-group reveal" key={group.title}>
              <div className="skill-icon">{index === 0 ? <Code2 /> : index === 1 ? <Sparkles /> : <BriefcaseBusiness />}</div>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="languages reveal">
          <h3>{text.languages}</h3>
          {content.languages.map((language) => (
            <div className="language" key={language.name}>
              <div><strong>{language.name}</strong><span>{language.level}</span></div>
              <div className="progress"><i style={{ width: `${language.value}%` }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="experiencia" className="section experience-section">
        <SectionHeading number="03" eyebrow={text.sections.journey[0]} title={text.sections.journey[1]} />
        <div className="timeline">
          <div className="timeline-column reveal">
            <h3><BriefcaseBusiness /> {text.experience}</h3>
            {content.experience.map((item) => <TimelineItem key={item.company} {...item} title={item.company} subtitle={item.role} />)}
          </div>
          <div className="timeline-column reveal">
            <h3><GraduationCap /> {text.education}</h3>
            {content.education.map((item) => <TimelineItem key={item.institution + item.course} {...item} title={item.institution} subtitle={item.course} />)}
          </div>
        </div>
        <div className="certificates reveal">
          <Award />
          <div><span>{text.certificates}</span><strong>{content.certificates.join("  ·  ")}</strong></div>
        </div>
      </section>

      <section id="projetos" className="section projects-section">
        <SectionHeading number="04" eyebrow={text.sections.projects[0]} title={text.sections.projects[1]} />
        <div className="projects-list">
          {content.projects.map((project) => (
            <article className="project-row reveal" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-title"><span>{project.context}</span><h3>{project.title}</h3></div>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <ArrowUpRight className="project-arrow" />
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div className="contact-intro reveal">
          <div className="section-kicker"><span>05</span>{text.contact}</div>
          <h2>{text.contactTitle[0]}<em>{text.contactTitle[1]}</em></h2>
          <p>{text.contactText}</p>
          <div className="contact-links">
            <a href={`mailto:${portfolio.email}`}><Mail /> <span><small>{text.email}</small>{portfolio.email}</span></a>
            <a href={portfolio.whatsapp} target="_blank" rel="noreferrer"><Phone /> <span><small>{text.whatsapp}</small>{portfolio.phone}</span></a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin /> <span><small>LinkedIn</small>Vinícius Rockenbach</span></a>
            <a href={portfolio.github} target="_blank" rel="noreferrer"><Github /> <span><small>GitHub</small>ViniciusRockenbachDS</span></a>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={sendEmail}>
          <label>{text.fields.name}<input required maxLength={100} name="name" autoComplete="name" placeholder={text.fields.namePlaceholder} /></label>
          <label>{text.fields.email}<input required maxLength={255} type="email" name="email" autoComplete="email" placeholder="voce@email.com" /></label>
          <label>{text.fields.message}<textarea required maxLength={2000} name="message" rows={5} placeholder={text.fields.messagePlaceholder} /></label>
          <button type="submit">{text.fields.send} <Send size={18} /></button>
        </form>
      </section>

      <footer>
        <span>© 2026 Vinícius Rockenbach</span>
        <a href="#inicio">{text.top} <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}

function TimelineItem({ period, title, subtitle, description }: { period: string; title: string; subtitle: string; description: string }) {
  return <article className="timeline-item"><span>{period}</span><div><h4>{title}</h4><strong>{subtitle}</strong><p>{description}</p></div></article>;
}