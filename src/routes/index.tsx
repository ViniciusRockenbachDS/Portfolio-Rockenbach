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
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import architectureImage from "../assets/developer-architecture.jpg";
import { CursorTrail } from "../components/CursorTrail";
import { portfolio } from "../data/portfolio";

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

const navItems = [
  ["Início", "inicio"],
  ["Sobre", "sobre"],
  ["Habilidades", "habilidades"],
  ["Experiência", "experiencia"],
  ["Projetos", "projetos"],
  ["Contato", "contato"],
] as const;

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

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contato pelo portfólio — ${String(form.get("name") ?? "")}`);
    const body = encodeURIComponent(
      `Nome: ${String(form.get("name") ?? "")}\nE-mail: ${String(form.get("email") ?? "")}\n\n${String(form.get("message") ?? "")}`,
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
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="header-contact" href={`mailto:${portfolio.email}`}>Vamos conversar <ArrowUpRight size={16} /></a>
        <button className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação móvel">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
        )}
      </header>

      <section id="inicio" className="hero">
        <img className="hero-image" src={architectureImage} alt="Arquitetura abstrata de sistemas conectados" width={1400} height={1000} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="availability"><span /> Disponível para novos desafios</p>
          <h1>Vinícius<br /><em>Rockenbach.</em></h1>
          <div className="hero-bottom">
            <p>{portfolio.intro}</p>
            <a className="circle-link" href="#projetos" aria-label="Ver projetos"><ArrowDownRight /></a>
          </div>
        </div>
        <div className="hero-side-label">PROGRAMADOR · SC, BRASIL</div>
      </section>

      <section id="sobre" className="section about-section">
        <SectionHeading number="01" eyebrow="Sobre mim" title="Tecnologia com propósito e visão prática." />
        <div className="about-grid">
          <div className="portrait-card reveal">
            <div className="portrait-lines" />
            <span className="portrait-initials">VR</span>
            <div className="portrait-meta"><MapPin size={16} /> {portfolio.location}</div>
          </div>
          <div className="about-copy reveal">
            <p>{portfolio.about}</p>
            <blockquote>“Aprender, construir e evoluir — um projeto de cada vez.”</blockquote>
            <div className="stats">
              {portfolio.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="section skills-section">
        <SectionHeading number="02" eyebrow="Habilidades" title="Ferramentas para transformar ideias em soluções." />
        <div className="skills-grid">
          {portfolio.skillGroups.map((group, index) => (
            <article className="skill-group reveal" key={group.title}>
              <div className="skill-icon">{index === 0 ? <Code2 /> : index === 1 ? <Sparkles /> : <BriefcaseBusiness />}</div>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="languages reveal">
          <h3>Idiomas</h3>
          {portfolio.languages.map((language) => (
            <div className="language" key={language.name}>
              <div><strong>{language.name}</strong><span>{language.level}</span></div>
              <div className="progress"><i style={{ width: `${language.value}%` }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="experiencia" className="section experience-section">
        <SectionHeading number="03" eyebrow="Trajetória" title="Experiência que conecta indústria e software." />
        <div className="timeline">
          <div className="timeline-column reveal">
            <h3><BriefcaseBusiness /> Experiência</h3>
            {portfolio.experience.map((item) => <TimelineItem key={item.company} {...item} title={item.company} subtitle={item.role} />)}
          </div>
          <div className="timeline-column reveal">
            <h3><GraduationCap /> Formação</h3>
            {portfolio.education.map((item) => <TimelineItem key={item.institution + item.course} {...item} title={item.institution} subtitle={item.course} />)}
          </div>
        </div>
        <div className="certificates reveal">
          <Award />
          <div><span>Certificados & reconhecimento</span><strong>{portfolio.certificates.join("  ·  ")}</strong></div>
        </div>
      </section>

      <section id="projetos" className="section projects-section">
        <SectionHeading number="04" eyebrow="Projetos" title="Soluções nascidas de desafios reais." />
        <div className="projects-list">
          {portfolio.projects.map((project) => (
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
          <div className="section-kicker"><span>05</span>Contato</div>
          <h2>Vamos construir algo <em>incrível?</em></h2>
          <p>Estou aberto a oportunidades, colaborações e boas conversas sobre tecnologia.</p>
          <div className="contact-links">
            <a href={`mailto:${portfolio.email}`}><Mail /> <span><small>E-mail</small>{portfolio.email}</span></a>
            <a href={portfolio.phoneHref}><Phone /> <span><small>Telefone</small>{portfolio.phone}</span></a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin /> <span><small>LinkedIn</small>Vinícius Rockenbach</span></a>
            <a href={portfolio.github} target="_blank" rel="noreferrer"><Github /> <span><small>GitHub</small>ViniciusRockenbachDS</span></a>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={sendEmail}>
          <label>Seu nome<input required name="name" placeholder="Como posso te chamar?" /></label>
          <label>Seu e-mail<input required type="email" name="email" placeholder="voce@email.com" /></label>
          <label>Sua mensagem<textarea required name="message" rows={5} placeholder="Conte um pouco sobre sua ideia ou oportunidade..." /></label>
          <button type="submit">Enviar mensagem <Send size={18} /></button>
        </form>
      </section>

      <footer>
        <span>© 2026 Vinícius Rockenbach</span>
        <a href="#inicio">Voltar ao topo <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}

function TimelineItem({ period, title, subtitle, description }: { period: string; title: string; subtitle: string; description: string }) {
  return <article className="timeline-item"><span>{period}</span><div><h4>{title}</h4><strong>{subtitle}</strong><p>{description}</p></div></article>;
}