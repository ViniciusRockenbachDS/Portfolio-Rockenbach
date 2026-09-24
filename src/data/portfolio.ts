export const portfolio = {
  name: "Vinicius Rockenbach dos Santos",
  initials: "VR",
  role: "Programador",
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
  
  skillGroups: [
    {
      title: "Desenvolvimento",
      items: ["JavaScript", "TypeScript", "Python", "Java", "Desenvolvimento Web"],
    },
    {
      title: "Dados & Cloud",
      items: ["SQL", "PostgreSQL", "MySQL", "PySpark", "Power BI", "Databricks", "AWS"],
    },
    {
      title: "Ferramentas & Suporte",
      items: ["Git", "Docker", "Pacote Office", "Suporte técnico", "Pacote Office"],
    },
  ],
  languages: [
    { name: "Inglês", level: "Avançado", value: 70 },
    { name: "Espanhol", level: "Básico", value: 20 },
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
        "Projeto voltado à organização, ao acompanhamento e armazenamento de peças/itens utilizadas em máquinas, conectando a rotina da manutenção a uma solução digital mais clara.",
      tags: ["Gestão", "Indústria", "Desenvolvimento"],
    },
    {
      number: "02",
      title: "Automação de planilhas",
      context: "Whirlpool Corporation",
      description:
        "Automação aplicada a planilhas do ambiente industrial, reduzindo tarefas repetitivas e apoiando um fluxo de informação mais consistente.",
      tags: ["Automação", "Dados", "Produtividade"],
    }
  ],  
   certificatesDetailed: [
    {
      title: "ACIJ — Associação Empresarial de Joinville",
      description: "Participei de um programa de geração empreendedora em 2023 que promoveu minha educação e qualidade no empreendedorismo"
    },
    {
      title: "SESI SENAI — Programador de Sistemas da Informação",
      description: "Junto ao período que trabalhei na whirlpool tive a oportunidade de realizar uma aprendizagem no curso de programador de sistemas da informação. Dentro dessa aprendizagem aumentei meu desempenho em diversas etapas, vivências em uma empresa, qualidade e produtividade e diversas linguagens de programação como; Java Script, C, Python,  Front end e Banco de dados sendo eles PHPMyAdmin e Mysql."
    },
    {
      title: "Udemy — Java Completo",
      description: "Sua descrição sobre o curso da Udemy aqui..."
    }
  ]
};

export const portfolioEn = {
  ...portfolio,
  role: "Developer",
  intro: "Developer in training, motivated to become a data engineer",
  about:
    "I am currently studying several areas of technology and programming, including Python, SQL, AWS, Docker, and Power BI, to improve my skills and build a solid career as a data engineer, while remaining open to other opportunities. My goal is to create scalable, automated, and efficient data projects, ensuring high availability and end-to-end data quality. I am pursuing a degree in Software Engineering, along with additional extracurricular studies.",

  skillGroups: [
    {
      title: "Development",
      items: ["JavaScript", "TypeScript", "Python", "Java", "Web Development"],
    },
    {
      title: "Data & Cloud",
      items: ["SQL", "PostgreSQL", "MySQL", "PySpark", "Power BI", "Databricks", "AWS"],
    },
    {
      title: "Tools & Support",
      items: ["Git", "Docker", "Microsoft Office", "Technical Support", "Office package"],
    },
  ],
  languages: [
    { name: "English", level: "Advanced", value: 70 },
    { name: "Spanish", level: "Basic", value: 20 },
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
  certificatesDetailed: [
    {
      title: "ACIJ — Joinville Business Association",
      description: "I participated in an entrepreneurial development program in 2023 that enhanced my education and the quality of my entrepreneurship."
    },
    {
      title: "SESI SENAI — Information Systems Programmer",
      description: "During my time at Whirlpool, I had the opportunity to complete an apprenticeship program focused on information systems programming. Through this experience, I improved my performance across various areas—including corporate operations, quality, and productivity—and gained proficiency in several programming languages ​​and technologies, such as JavaScript, C, Python, front-end development, and databases (specifically phpMyAdmin and MySQL)."
    },
    {
      title: "Udemy — Complete Java Course",
      description: "Your description about the Udemy course in English here..."
    }
  ]
} as const;