/**
 * Todo o conteúdo do site mora aqui.
 * Para atualizar uma informação, mude só este arquivo — os componentes leem daqui.
 *
 * Itens marcados com TODO são placeholders: confirme ou reescreva com a sua voz.
 */

export const profile = {
  name: "Juchimiuk",
  role: "Desenvolvedor de Software",
  headline:
    "Construo aplicações web com React e TypeScript, do desenho da interface à integração com APIs.",
  // TODO: troque pelo que você está buscando de verdade (CLT, PJ, freela, remoto…).
  availability: "Aberto a novas oportunidades",
  location: "Santa Catarina, Brasil",
  photo: "/juckIcon2.png",
  // TODO: salve o PDF em public/curriculo.pdf — hoje o arquivo não existe.
  cv: "/curriculo.pdf",
};

export type Contact = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export const contacts = {
  email: {
    label: "E-mail",
    value: "juchimiukdev@gmail.com",
    href: "mailto:juchimiukdev@gmail.com",
  },
  // TODO: confirme o número COM DDD. Formato do link: https://wa.me/55DDNUMERO
  whatsapp: {
    label: "WhatsApp",
    value: "(+55) 98847-8664",
    href: "https://wa.me/55988478664",
    external: true,
  },
  github: {
    label: "GitHub",
    value: "github.com/Juchimiuk",
    href: "https://github.com/Juchimiuk",
    external: true,
  },
  // TODO: confirme a URL real do seu perfil.
  linkedin: {
    label: "LinkedIn",
    value: "linkedin.com/in/juchimiuk",
    href: "https://www.linkedin.com/in/juchimiuk",
    external: true,
  },
} satisfies Record<string, Contact>;

export const about = {
  paragraphs: [
    "Desenvolvedor full stack com foco em front-end, com 2 anos de experiência na construção de aplicações web e mobile com React, TypeScript e Node.js.",
    "Na Index Administração de Condomínios, desenvolvo interfaces e sistemas internos que transformam processos complexos em experiências simples e intuitivas, que dispensam treinamento. Em paralelo, crio o Ritza, aplicativo para treinadores de corrida, no qual atuo desde o design da experiência até a integração com serviços externos.",
    "Técnico em Desenvolvimento de Sistemas pelo SESI SENAI e concluindo Análise e Desenvolvimento de Sistemas na Univali.",
  ],
  facts: [
    { label: "Trabalho atual", value: "Index Administração de Condomínios" },
    { label: "Projeto paralelo", value: "Ritza, app para treinadores de corrida" },
    { label: "Concluindo", value: "Análise e Desenvolvimento de Sistemas, Univali" },
    { label: "Formação", value: "Técnico em Desenvolvimento de Sistemas, SESI SENAI" },
  ],
};

// Curado pelo que as vagas full stack (React + Node) pedem e que tem prova nos seus projetos.
// Não liste o que vem "de brinde" (JavaScript, Vite, Postman): dilui o que importa.
export const stack = [
  {
    group: "Front-end e mobile",
    items: ["React", "React Native (Expo)", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Back-end e dados",
    items: ["Node.js e Express", "PostgreSQL", "Prisma ORM", "APIs REST", "Testes automatizados"],
  },
  {
    group: "Ferramentas e integrações",
    items: ["Git e GitHub", "Docker", "Pagamentos com Stripe", "Integrações com APIs"],
  },
];

type Img = { src: string; width: number; height: number; alt: string };

/** Resumo do projeto na home. O detalhe técnico fica na página do estudo de caso. */
export type Project = {
  id: string;
  title: string;
  kind: string;
  summary: string;
  role: string;
  tags: string[];
  images: { desktop: Img; mobile?: Img };
  host?: string;
  icon?: string;
  caseUrl: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "ritza",
    title: "Ritza",
    kind: "App para assessorias de corrida",
    summary:
      "O treinador monta a planilha, o aluno registra o treino e os dois acompanham a evolução, no celular e no computador.",
    role: "Projeto solo: app, painel web, API e banco de dados, do design ao código.",
    tags: ["React Native", "React", "Node.js", "PostgreSQL", "Stripe"],
    images: {
      desktop: {
        src: "/projetos/ritza-web.png",
        width: 1917,
        height: 941,
        alt: "Painel web do treinador no Ritza, com alunos ativos, constância e treinos do dia",
      },
      mobile: {
        src: "/projetos/ritza-app.jpg",
        width: 600,
        height: 1299,
        alt: "Tela inicial do app do aluno no Ritza, com o treino do dia e os próximos treinos",
      },
    },
    host: "web.ritza.com.br",
    icon: "/projetos/ritza-icon.png",
    caseUrl: "/projetos/ritza/",
    live: "https://ritza.com.br",
  },
];

export type JourneyItem = {
  id: string;
  period: string;
  title: string;
  place: string;
  type: "Trabalho" | "Formação";
  description: string;
  points?: string[];
};

// Ordem: do mais antigo ao mais recente.
export const journey: JourneyItem[] = [
  {
    id: "senai",
    period: "2023 — 2024",
    title: "Técnico em Desenvolvimento de Sistemas",
    place: "SESI SENAI",
    type: "Formação",
    description: "Algoritmos, estruturas de dados e engenharia de software.",
  },
  {
    id: "univali",
    period: "2025 — hoje",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Univali",
    type: "Formação",
    description: "Graduação em andamento.",
  },
  {
    id: "index",
    period: "2025 — hoje",
    title: "Desenvolvedor de Software",
    place: "Index Administração de Condomínios",
    type: "Trabalho",
    description:
      "Desenvolvimento e manutenção das aplicações web internas da empresa com React e TypeScript.",
    // TODO: 2–3 coisas concretas que você entregou lá.
    points: [
      "Integração das aplicações com APIs internas e externas",
      "Melhorias de desempenho em telas usadas no dia a dia da equipe",
    ],
  },
];

export const navItems = [
  { label: "Sobre", id: "sobre" },
  { label: "Projetos", id: "projetos" },
  { label: "Trajetória", id: "trajetoria" },
  { label: "Contato", id: "contato" },
];

/**
 * Link de um item do menu. Na home é âncora (#sobre); nas outras páginas volta
 * para a home (/#sobre) — menos "Contato", que é o rodapé e existe em todas.
 */
export const navHref = (id: string, home: boolean) =>
  home || id === "contato" ? `#${id}` : `/#${id}`;
