import type { Dictionary } from "./types";

export const ptBR: Dictionary = {
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",

  site: {
    name: "stellift",
    tagline: "Boutique de software",
    description: "Boutique de software. Web, mobile, infraestrutura e dados.",
    metaDescription:
      "Boutique de software: produtos web, aplicativos mobile, cloud e dados. "+
      "Sistema pronto para começar rápido, ou software sob demanda quando o "+
      "caso é seu mesmo.",
    email: "ola@stellift.dev",
    linkedin: "https://www.linkedin.com/company/stellift",
    github: "https://github.com/stellift",
  },

  nav: [
    { label: "Serviços", href: "#services" },
    { label: "Onde contribuiu", href: "#clients" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ],

  services: [
    {
      code: "WEB",
      category: "Desenvolvimento",
      title: "Produtos web",
      text: "Sites, sistemas e produtos digitais para web.",
    },
    {
      code: "MOB",
      category: "Mobile",
      title: "Aplicativos mobile",
      text: "Aplicativos para iOS e Android.",
    },
    {
      code: "CLD",
      category: "Infraestrutura e dados",
      title: "Cloud e dados",
      text: "Infraestrutura na nuvem e trabalho com dados.",
    },
  ],

  clients: [
    { name: "Google", logo: "google", note: "Contribuições para o V8" },
    { name: "Mozilla", logo: "mozilla", note: "Contribuições para o Servo" },
    { name: "Woovi", logo: "woovi" },
    { name: "Flop Robux", logo: "floprobux" },
  ],

  portfolio: [
    {
      name: "BloxHarbor",
      role: "Projeto da stellift",
      text: "Ecommerce de contas de Roblox, com entrega rápida e compra protegida.",
      stack: "Next.js",
      href: "https://bloxharbor.com",
      shot: "/shots/bloxharbor.webp",
    },
    {
      name: "PDV",
      role: "Projeto da stellift",
      text:
        "PDV de desktop para loja de material de construção, com app de " +
        "escaneamento no celular. Catálogo nas unidades do setor, venda " +
        "fracionada, caixa por turno, clientes e fiado, emissão de NFC-e, e " +
        "cobrança de Pix na tela ou na maquininha.",
      stack: "C++20, Qt6, SQLite, Go, Spring Boot, React Native, Next.js",
      href: "https://stellift.dev/pivenda",
      shot: "/shots/pdv.webp",
    },
    {
      name: "orce.me",
      role: "Projeto da stellift",
      text:
        "Sistema de orçamentos para pequenos negócios. Reúne produtos, " +
        "serviços e dados do cliente em uma proposta em PDF com a marca de " +
        "quem envia, sem refazer planilha a cada pedido.",
      stack: "Nuxt, Vue, TypeScript",
      shot: "/shots/orce.webp",
    },
    {
      name: "LumniHub",
      role: "Desenvolvimento de boa parte do produto",
      text:
        "Plataforma para criar, vender e afiliar cursos e ebooks. Tem loja, " +
        "construtor de checkout, módulos com aulas e quizzes, programa de " +
        "afiliados com split de pagamento, e painel de financeiro e relatórios " +
        "para o produtor.",
      stack: "React, Vite, React Router, React Aria, Supabase, Zod",
      href: "https://app.lumnihub.com",
      shot: "/shots/lumnihub.webp",
    },
    {
      name: "ServeCommand",
      role: "Desenvolvimento do produto",
      text:
        "Software de gestão para prestadores de serviço. Regras de preço, " +
        "registros de serviço conectados, planos de assinatura e pagamentos " +
        "num fluxo só.",
      href: "https://servecommand.com",
      shot: "/shots/servecommand.webp",
    },
  ],

  about: {
    text:
      "A stellift é uma boutique de software, e a gente gosta de fazer software " +
      "do jeito certo. Tem sistema pronto, para começar rápido sem projeto " +
      "longo, e software sob demanda, quando o caso é seu mesmo.",
  },

  contact: {
    heading: "Vamos tirar a ideia do solo",
    lead: "Escreva contando o que você quer construir.",
    channels: [
      { kind: "email", label: "E-mail", value: "ola@stellift.dev", href: "mailto:ola@stellift.dev" },
      {
        kind: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/company/stellift",
        href: "https://www.linkedin.com/company/stellift",
      },
      { kind: "code", label: "Código", value: "github.com/stellift", href: "https://github.com/stellift" },
    ],
  },

  ui: {
    header: {
      cta: "Iniciar conversa",
      toLightTheme: "Mudar para o tema claro",
      toDarkTheme: "Mudar para o tema escuro",
      menu: "Menu",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      switchLabel: "Idioma",
    },
    hero: {
      title: "Software sob medida,",
      titleAccent: "da ideia à órbita.",
      fieldStart: "IDEIA",
      fieldEnd: "ÓRBITA",
      primary: "Vamos conversar",
      secondary: "Ver serviços",
    },
    services: { title: "O que fazemos" },
    clients: {
      title: "Empresas que contribuímos",
      hint: "Deslize para ver mais empresas.",
      footnote:
        "Google, Mozilla e demais nomes citados são marcas de seus respectivos " +
        "proprietários. As logomarcas aparecem apenas para identificar as organizações.",
      pause: "Pausar o carrossel",
      play: "Reproduzir o carrossel",
      previous: "Empresa anterior",
      next: "Próxima empresa",
    },
    portfolio: {
      title: "Projetos e experiência",
      cta: "Ver projeto",
      footnote:
        "O papel em cada projeto está indicado no próprio card. Nomes e marcas " +
        "citados são de seus respectivos proprietários.",
    },
    about: { title: "A stellift" },
    contact: { title: "Vamos tirar a ideia do solo" },
    card: { action: "Falar sobre isso" },
    footer: {
      description:
        "Boutique de software: projetamos, construímos e sustentamos produtos " +
        "digitais ambiciosos.",
      ariaLabel: "Rodapé",
      navigate: "Navegar",
      contact: "Contato",
    },
    form: {
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "E-mail",
      emailPlaceholder: "voce@empresa.com",
      messageLabel: "O que você quer construir?",
      messagePlaceholder: "O desafio de hoje, o que já existe, o prazo ideal.",
      nameError: "Escreva seu nome para sabermos como chamar você.",
      emailError: "Confira o e-mail: parece faltar alguma coisa.",
      messageError: "Conte um pouco mais: o contexto muda a resposta.",
      submit: "Revisar e enviar",
      note:
        "Ao revisar, abrimos seu e-mail com a mensagem montada. Nada sai sem " +
        "você ver antes.",
      readyBadge: "Mensagem pronta",
      readyText:
        "Revise abaixo. Abrimos seu cliente de e-mail com tudo escrito; se " +
        "preferir, copie o texto e mande pelo canal que quiser.",
      openEmail: "Abrir no meu e-mail",
      copy: "Copiar mensagem",
      copied: "Copiado",
      edit: "Editar",
      bodyName: "Nome",
      bodyEmail: "E-mail",
      bodyMessage: "Mensagem",
      subject: "Contato pelo site",
    },
  },
};
