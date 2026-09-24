export const portfolio = {
  name: "Vinícius Rockenbach dos Santos",
  initials: "VR",
  role: "Programador",
  location: "Campo Alegre, Santa Catarina",
  email: "vinirockenbachs@gmail.com",
  phone: "+55 47 98858-1614",
  phoneHref: "tel:+5547988581614",
  whatsapp: "https://wa.me/5547988581614",
  linkedin: "https://www.linkedin.com/in/vinicius-rockenbach-dos-santos-953baa354/",
  github: "https://github.com/ViniciusRockenbachDS",
  intro:
    "Desenvolvedor em formação, motivado a ser um futuro engenheiro de dados",
  about:
    "Atualmente, estou estudando diversas áreas de tecnologia e programação, como Python, SQL, AWS, Docker, Power BI, entre outros, para aprimorar minhas habilidades e buscar uma carreira sólida como engenheiro de dados, mas sempre aberto a outras oportunidades. Meu foco é criar projetos de dados que sejam escaláveis, automatizados e eficientes, garantindo a alta disponibilidade e a qualidade dos dados de ponta a ponta. Atualmente, estou cursando Engenharia de Software, além de outras disciplinas extracurriculares.",
  stats: [
    { value: "2025", label: "Início na indústria" },
    { value: "16+", label: "Tecnologias e ferramentas" },
    { value: "2", label: "Idiomas além do português" },
  ],
  skillGroups: [
    {
      title: "Desenvolvimento",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C", "PHP", "Desenvolvimento Web"],
    },
    {
      title: "Dados & Cloud",
      items: ["SQL", "PostgreSQL", "MySQL", "PySpark", "Power BI", "Databricks", "AWS"],
    },
    {
      title: "Ferramentas & Suporte",
      items: ["Git", "Docker", "Pacote Office", "Suporte técnico", "phpMyAdmin"],
    },
  ],
  languages: [
    { name: "Inglês", level: "Avançado", value: 85 },
    { name: "Espanhol", level: "Intermediário", value: 62 },
  ],
  experience: [
    {
      period: "JAN — DEZ 2025",
      company: "Whirlpool Corporation",
      role: "Desenvolvedor / Manutenção",
      description:
        "Atuação como jovem aprendiz em parceria com o SESI SENAI. Início no apoio a ferramenteiros e mecânicos na manutenção, seguido pela transição para desenvolvimento de sites, funções e softwares.",
    },
  ],
  education: [
    {
      period: "FEV 2025 — ATUAL",
      institution: "UNIASSELVI",
      course: "Bacharelado em Engenharia de Software",
      description: "Formação em andamento, ampliando competências técnicas e profissionais em desenvolvimento de software.",
    },
    {
      period: "JAN — DEZ 2025",
      institution: "SESI SENAI",
      course: "Programador de Sistemas da Informação",
      description: "Aprendizagem industrial com práticas em JavaScript, C, Python, front-end e bancos de dados.",
    },
    {
      period: "2022 — 2024",
      institution: "Escola Católica Machado de Assis",
      course: "Ensino médio completo",
      description: "Formação com itinerário extracurricular semanal no contraturno.",
    },
  ],
  projects: [
    {
      number: "01",
      title: "Gestão de peças",
      context: "Máquinas Whirlpool",
      description:
        "Projeto voltado à organização e ao acompanhamento de peças utilizadas em máquinas, conectando a rotina da manutenção a uma solução digital mais clara.",
      tags: ["Gestão", "Indústria", "Desenvolvimento"],
    },
    {
      number: "02",
      title: "Automação de planilhas",
      context: "Whirlpool Corporation",
      description:
        "Automação aplicada a planilhas do ambiente industrial, reduzindo tarefas repetitivas e apoiando um fluxo de informação mais consistente.",
      tags: ["Automação", "Dados", "Produtividade"],
    },
    {
      number: "03",
      title: "Sistemas de informação",
      context: "Estudo técnico",
      description:
        "Práticas de desenvolvimento full stack e banco de dados construídas durante a aprendizagem no SESI SENAI e a graduação em Engenharia de Software.",
      tags: ["Front-end", "Banco de dados", "Software"],
    },
  ],
  certificates: [
    "ACIJ — Associação Empresarial de Joinville",
    "SESI SENAI — Programador de Sistemas da Informação",
    "Udemy — Java Completo",
  ],
} as const;

export const portfolioEn = {
  ...portfolio,
  role: "Developer",
  location: "Campo Alegre, Santa Catarina, Brazil",
  intro: "Developer in training, motivated to become a data engineer",
  about:
    "I am currently studying several areas of technology and programming, including Python, SQL, AWS, Docker, and Power BI, to improve my skills and build a solid career as a data engineer, while remaining open to other opportunities. My goal is to create scalable, automated, and efficient data projects, ensuring high availability and end-to-end data quality. I am pursuing a degree in Software Engineering, along with additional extracurricular studies.",
  stats: [
    { value: "2025", label: "Industry career start" },
    { value: "16+", label: "Technologies and tools" },
    { value: "2", label: "Languages beyond Portuguese" },
  ],
  skillGroups: [
    {
      title: "Development",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C", "PHP", "Web Development"],
    },
    {
      title: "Data & Cloud",
      items: ["SQL", "PostgreSQL", "MySQL", "PySpark", "Power BI", "Databricks", "AWS"],
    },
    {
      title: "Tools & Support",
      items: ["Git", "Docker", "Microsoft Office", "Technical Support", "phpMyAdmin"],
    },
  ],
  languages: [
    { name: "English", level: "Advanced", value: 85 },
    { name: "Spanish", level: "Intermediate", value: 62 },
  ],
  experience: [
    {
      period: "JAN — DEC 2025",
      company: "Whirlpool Corporation",
      role: "Developer / Maintenance",
      description:
        "Worked as a young apprentice in partnership with SESI SENAI. Started by supporting toolmakers and mechanics in maintenance, then transitioned into developing websites, functions, and software.",
    },
  ],
  education: [
    {
      period: "FEB 2025 — PRESENT",
      institution: "UNIASSELVI",
      course: "Bachelor’s Degree in Software Engineering",
      description: "Ongoing degree focused on expanding technical and professional software development skills.",
    },
    {
      period: "JAN — DEC 2025",
      institution: "SESI SENAI",
      course: "Information Systems Programmer",
      description: "Industrial apprenticeship with practical work in JavaScript, C, Python, front-end, and databases.",
    },
    {
      period: "2022 — 2024",
      institution: "Escola Católica Machado de Assis",
      course: "High School Diploma",
      description: "High school education with weekly extracurricular studies.",
    },
  ],
  projects: [
    {
      number: "01",
      title: "Parts management",
      context: "Whirlpool machinery",
      description:
        "A project focused on organizing and tracking parts used in machinery, connecting maintenance routines to a clearer digital solution.",
      tags: ["Management", "Industry", "Development"],
    },
    {
      number: "02",
      title: "Spreadsheet automation",
      context: "Whirlpool Corporation",
      description:
        "Automation applied to spreadsheets in an industrial environment, reducing repetitive tasks and supporting a more consistent information flow.",
      tags: ["Automation", "Data", "Productivity"],
    },
    {
      number: "03",
      title: "Information systems",
      context: "Technical studies",
      description:
        "Full-stack and database development exercises completed during my SESI SENAI apprenticeship and Software Engineering degree.",
      tags: ["Front-end", "Databases", "Software"],
    },
  ],
  certificates: [
    "ACIJ — Joinville Business Association",
    "SESI SENAI — Information Systems Programmer",
    "Udemy — Complete Java Course",
  ],
} as const;