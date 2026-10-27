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
    "Engenheiro de dados fullstack com foco em python, SQL, Power BI, AWS, PySpark, Databricks; Também com boa experiência em Java, JavaScript e dentre outras tecnologias Meu foco é criar projetos de dados que sejam escaláveis, automatizados e eficientes, garantindo a alta disponibilidade e a qualidade dos dados de ponta a ponta, estou sempre em busca de conhecimento e oportunidades na área de desenvolvimento/TI!.",
  
  skillGroups: [
    {
      title: "Desenvolvimento",
      items: ["JavaScript", "TypeScript", "React", "Python", "Java", "Desenvolvimento Web"],
    },
    {
      title: "Dados & Cloud",
      items: ["SQL", "PostgreSQL", "MySQL", "PySpark", "Power BI", "Databricks", "AWS", "AirFlow"],
    },
    {
      title: "Ferramentas & Suporte",
      items: ["Git", "Docker", "Pacote Office", "Suporte técnico", "Aprendizado contínuo", "Figma","N8N" ],
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
        "Projeto voltado à organização, ao acompanhamento e armazenamento de peças/itens utilizadas em máquinas, criando um estoque digital de peças a uma soluções mais rapidas.",
      tags: ["Python", "HTML", "CSS","React", "SupaBase"],
    },
    {
      number: "02",
      title: "Automação de planilhas",
      context: "Whirlpool Corporation",
      description:
        "Automação aplicada a planilhas do ambiente industrial, reduzindo tarefas repetitivas e apoiando um fluxo de informação mais consistente, diminuindo o tempo de tarefas.",
      tags: ["Python", "Pandas", "Excel", "PowerQuery"],
    },
    {
      number: "03",
      title: "Analizador de HTML",
      context: "Teste para a empresa de CyberSegurança Axur",
      description:
        "Desenvoli um pequeno compilador em Java que analiza o HTML da página selecionada e fala a profundidade e carecterização dos textos.",
      tags: ["Java"],
    },
    {
      number: "04",
      title: "MyMetas",
      context: "Sistema de organização de metas pessoais",
      description:
        "O sistema ajuda o usuário a registrar metas com prazo, visualizar o progresso e manter a motivação com um sistema de recompensas inspirado em jogos.",
      tags: ["Java", "PostgreSQL", "HTML", "CSS", "Docker","SpringBoot","React","Vite"],
    },
    {
      number: "05",
      title: "MyHair",
      context: "Sistema de criação de sites e paineis de gerenciamento para salões de beleza e barbearias",
      description:
        "Projeto para criação de sites e paineis administrativos para salões de beleza e barbearias, focado para administrar o estabelecimento e em agendamento rápido com automatização.",
      tags: ["Java", "JavaScript", "HTML", "CSS", "Docker","PLpgSQL","Spring Boot","Maven","React","Vite"],
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
      description: "Neste curso completo de Java avançado, dominei a lógica de programação, sintaxe da linguagem e os pilares da Programação Orientada a Objetos, como herança e polimorfismo. Aprendi a manipular estruturas de dados, arquivos, exceções e programação funcional com a Stream API. Também adquiri experiência prática com bancos de dados relacionais e NoSQL usando JDBC, JPA/Hibernate, Spring Boot e MongoDB."
    }
  ]
};

export const portfolioEn = {
  ...portfolio,
  role: "Developer",
  intro: "Developer in training, motivated to become a data engineer",
  about:
    "Full-stack data engineer with a focus on Python, SQL, Power BI, AWS, PySpark, and Databricks. I also have solid experience with Java, JavaScript, and various other technologies. My primary focus is building scalable, automated, and efficient data projects, ensuring high availability and end-to-end data quality. I am constantly seeking new knowledge and opportunities within the field of software development and IT!",

  skillGroups: [
    {
      title: "Development",
      items: ["JavaScript", "TypeScript", "React", "Python", "Java", "Web Development"],
    },
    {
      title: "Data & Cloud",
      items: ["SQL", "PostgreSQL", "MySQL", "PySpark", "Power BI", "Databricks", "AWS", "AirFlow"],
    },
    {
      title: "Tools & Support",
      items: ["Git", "Docker", "Microsoft Office", "Technical Support", "continuous learning", "Figma", "N8N"],
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
        "A project focused on the organization, tracking, and storage of machine parts and components, creating a digital inventory to enable faster solutions.",
      tags: ["Python", "HTML", "CSS", "React", "Supabase"],
    },
    {
      number: "02",
      title: "Spreadsheet automation",
      context: "Whirlpool Corporation",
      description:
        "Automation applied to spreadsheets in an industrial environment, reducing repetitive tasks and supporting a more consistent information flow, reducing task time.",
      tags: ["Python", "Pandas", "Excel", "PowerQuery"],
    },
    {
      number: "03",
      title: "HTML Analyzer",
      context: "Test for the cybersecurity company Axur",
      description:
        "I developed a small Java compiler that analyzes the HTML of a selected page and reports on text depth and quality.",
      tags: ["Java"],
    },
    {
      number: "04",
      title: "MyMetas",
      context: "Personal goal organization system",
      description:
        "The system helps the user register goals with deadlines, view progress, and maintain motivation with a reward system inspired by games.",
      tags: ["Java", "PostgreSQL", "HTML", "CSS", "Docker","SpringBoot","React","Vite"],
    },
    {
      number: "05",
      title: "MyHair",
      context: "Website creation and management dashboard system for beauty salons and barbershops",
      description:
        "Project for creating websites and administrative dashboards for beauty salons and barbershops, focused on establishment management and fast, automated appointment scheduling.",
      tags: ["Java", "JavaScript", "HTML", "CSS", "Docker","PLpgSQL","Spring Boot","Maven","React","Vite"],
    }
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