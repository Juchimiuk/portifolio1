/**
 * Conteúdo da página técnica do Ritza (/projetos/ritza/).
 * Números levantados do código em 19/11/2026 — atualize quando mudarem.
 */

type Img = { src: string; width: number; height: number; alt: string };

export const ritza = {
  name: "Ritza",
  tagline: "App para assessorias de corrida",
  summary:
    "O treinador monta a planilha, o aluno registra o treino e os dois acompanham a evolução, no celular e no computador.",
  solo: "Projeto solo. Do produto à interface, do app à API e ao banco de dados, tudo foi pensado, desenhado e programado por mim.",
  period: "Desde julho de 2026",
  icon: "/projetos/ritza-icon.png",
  links: [
    { label: "Ver o site", href: "https://ritza.com.br" },
    { label: "Abrir a web do treinador", href: "https://web.ritza.com.br" },
  ],

  numbers: [
    { value: "4", label: "aplicações: app, web do treinador, painel admin e API" },
    { value: "89 mil", label: "linhas de TypeScript" },
    { value: "34", label: "tabelas no PostgreSQL, com 51 migrations" },
    { value: "166", label: "testes automatizados na API" },
    { value: "400+", label: "commits em cerca de quatro meses" },
  ],

  roles: [
    { title: "Produto", text: "Definição do problema, das funcionalidades e das prioridades." },
    { title: "Design", text: "Identidade visual, telas do app e da web, e a landing page." },
    { title: "Mobile", text: "App do aluno para iPhone e Android em React Native." },
    { title: "Front-end web", text: "Painel do treinador e painel administrativo em React." },
    { title: "Back-end", text: "API, regras de negócio, autenticação, tempo real e tarefas agendadas." },
    { title: "Dados e integrações", text: "Modelagem do banco, pagamentos e conexão com Strava e Garmin." },
  ],

  architecture: {
    clients: [
      { name: "App do aluno", tech: "React Native + Expo" },
      { name: "Web do treinador", tech: "React + Vite" },
      { name: "Painel admin", tech: "React + Vite" },
      { name: "Site", tech: "HTML, CSS e JS" },
    ],
    api: {
      name: "API Ritza",
      tech: "Node.js + Express + TypeScript",
      pieces: ["REST", "Socket.IO", "Jobs agendados"],
    },
    data: { name: "PostgreSQL", tech: "Prisma ORM" },
    services: ["Stripe", "Strava", "Garmin", "Google Cloud Storage", "Resend", "Expo Push"],
  },

  parts: [
    {
      name: "App do aluno",
      stack: ["React Native", "Expo", "TypeScript", "Reanimated", "Socket.IO"],
      size: "49 mil linhas",
      points: [
        "Planilha da semana, registro do treino e histórico de atividades",
        "Mapa do percurso importado do Strava ou do Garmin",
        "Chat com a turma e com o treinador, com fotos, reações e menções",
        "Notificações push, widgets na tela inicial e troca entre contas",
      ],
    },
    {
      name: "Web do treinador",
      stack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "React Router"],
      size: "17 mil linhas",
      points: [
        "Painel com constância da turma e quem precisa de atenção",
        "Ficha de cada aluno, montagem de treinos e agenda",
        "Chat em tempo real com indicador de presença e de digitação",
        "Exportação de dados em CSV e mapas das atividades",
      ],
    },
    {
      name: "Painel admin",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      size: "6 mil linhas",
      points: [
        "Visão geral de assessorias, usuários e assinaturas",
        "Atendimento dos chamados de suporte",
        "Saúde da API e logs de requisições",
      ],
    },
    {
      name: "API",
      stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "JWT"],
      size: "17 mil linhas, 17 módulos",
      points: [
        "Módulos por domínio: autenticação, assessorias, turmas, treinos, cobrança, suporte…",
        "Validação de toda entrada com Zod e autenticação com JWT",
        "Tempo real com Socket.IO e tarefas agendadas no próprio processo",
        "Geração de PDF, upload de fotos e envio de e-mails transacionais",
      ],
    },
  ],

  decisions: [
    {
      title: "Tempo real sem complicar o cliente",
      text: "O chat usa Socket.IO com uma sala por turma. A API emite presença e “digitando” só para quem está na sala, e a mesma conexão avisa o app e a web quando um treino é registrado, sem ficar consultando o servidor.",
    },
    {
      title: "Treinos que chegam sozinhos",
      text: "Integrei Strava e Garmin para importar as atividades automaticamente e ligar cada uma ao treino planejado. No Garmin, o caminho também é o inverso: o treino montado pelo treinador vai direto para o relógio do aluno.",
    },
    {
      title: "Cobrança que acompanha o tamanho da assessoria",
      text: "Assinaturas no Stripe com cobrança de vagas extras: uma tarefa periódica compara o número de alunos com o plano e gera a cobrança das vagas excedentes, com testes cobrindo as regras de cálculo.",
    },
    {
      title: "Lembretes sem fila externa",
      text: "Lembrete de fim de dia, aviso antes do treino e alerta de inatividade rodam como tarefas agendadas dentro da própria API. Para o volume atual, evita a infraestrutura de uma fila e mantém tudo em um deploy só.",
    },
    {
      title: "Segurança e privacidade desde o começo",
      text: "Limite de requisições no formulário público, moderação de conteúdo, códigos de ativação, recuperação de senha e exclusão de conta com os dados do usuário, de acordo com a política de privacidade.",
    },
    {
      title: "Observabilidade feita em casa",
      text: "A API registra métricas por minuto e logs das requisições no próprio banco, e o painel admin mostra a saúde do sistema.",
    },
  ],

  testing: {
    title: "Qualidade",
    text: "166 testes com o runner nativo do Node (node:test) cobrem as regras que mais custam caro se quebrarem: cobrança, cálculo de ritmo e períodos, convites, conquistas, importação de atividades e limites de uso. O banco evolui por migrations versionadas com Prisma, e o banco local sobe com Docker.",
  },

  gallery: [
    {
      src: "/projetos/ritza-web-chat.png",
      width: 1916,
      height: 940,
      alt: "Chat da assessoria na web do treinador, com a lista de conversas e mensagens da turma",
      caption: "Chat em tempo real na web do treinador",
    },
    {
      src: "/projetos/ritza-treino-strava.jpg",
      width: 600,
      height: 1299,
      alt: "Treino importado do Strava no app do aluno, com mapa do percurso, distância, tempo e ritmo",
      caption: "Treino importado do Strava",
    },
    {
      src: "/projetos/ritza-web-agenda.png",
      width: 1917,
      height: 938,
      alt: "Agenda de treinos na web do treinador",
      caption: "Agenda de treinos da turma",
    },
    {
      src: "/projetos/ritza-turma-treinador.jpg",
      width: 600,
      height: 1299,
      alt: "Tela da turma no app, vista pelo treinador",
      caption: "A turma vista pelo treinador no app",
    },
  ] satisfies (Img & { caption: string })[],

  hero: {
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
};
