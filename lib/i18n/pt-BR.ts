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
    { label: "Ferramentas", href: "#tools" },
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
      name: "Craftance",
      role: "Projeto da stellift",
      text:
        "Marketplace onde o desenvolvedor monta perfil, vende produto digital e " +
        "pega projeto como freelancer. O dinheiro de cada etapa fica em escrow " +
        "até a entrega ser aprovada.",
      stack: "Elixir, Phoenix, Next.js, PostgreSQL, React Native, Rust",
      shot: "/shots/craftance.webp",
    },
    {
      name: "HeartBit",
      role: "Projeto da stellift",
      text:
        "App de relacionamento para cristãos brasileiros, com verificação feita " +
        "pela própria igreja. Oito perfis por dia, três conversas abertas no " +
        "máximo, e um padrinho da comunidade vê que você está conversando, nunca " +
        "o conteúdo.",
      stack: "Elixir, Phoenix, React, TanStack Router, Vue 3, PostgreSQL",
      shot: "/shots/heartbit.webp",
    },
    {
      name: "ZapZap",
      role: "Experimento pessoal",
      text:
        "Cliente alternativo do WhatsApp Desktop em Rust, com a meta de caber em " +
        "10 MB. A interface desenha direto no X11 por chamadas de sistema, sem " +
        "toolkit gráfico, e o escopo é estreito de propósito: só Brasil, só o " +
        "lado do cliente.",
      stack: "Rust, X11 por syscalls, whatsapp-rust",
      href: "https://github.com/criskell/zapzap",
      shot: "/shots/zapzap.webp",
    },
    {
      name: "Neohor",
      role: "Projeto pessoal",
      text:
        "Loja de contas de jogos, com busca, carrinho, pedidos e entrega. " +
        "Cobrança por Pix e cartão, login social e atualização em tempo real " +
        "por WebSocket.",
      stack: "Next.js, NestJS, Prisma, PostgreSQL, TurboRepo, Terraform, AWS",
      shot: "/shots/neohor.webp",
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

  tools: {
    title: "As contas que vêm antes do orçamento",
    lead:
      "Nenhuma delas é difícil, e é raro alguém ter feito antes de assinar. " +
      "Aí o SLA vira surpresa, a hora sai mais cara que o combinado e o " +
      "processo manual continua cobrando o ano inteiro. Rodam no seu " +
      "navegador, sem cadastro.",
    cta: "Abrir ferramenta",
    backLabel: "Voltar para a stellift",
    allLabel: "Todas as ferramentas",
    rangeJoin: "a",
    units: { day: "dias", hour: "h", minute: "min", second: "s" },
    items: {
      sla: {
        name: "Calculadora de SLA",
        tagline: "Quanto tempo fora do ar cabe em cada nível de uptime.",
        metaTitle: "Calculadora de SLA: quanto de queda cabe em 99,9% de uptime",
        metaDescription:
          "Converta um SLA de uptime em tempo real de indisponibilidade por dia, " +
          "semana, mês e ano. Descubra quanto 99%, 99,9% ou 99,99% permitem de queda.",
        intro:
          "Ninguém assina um contrato pensando em porcentagem. Pensa em quanto " +
          "tempo o sistema pode passar fora do ar antes de o acordo furar, que é " +
          "o número que esta página devolve.",
        fields: [
          { key: "uptime", label: "Uptime contratado (%)", hint: "Ex.: 99,9" },
        ],
        results: [
          { key: "day", label: "Por dia" },
          { key: "week", label: "Por semana" },
          { key: "month", label: "Por mês (30 dias)" },
          { key: "year", label: "Por ano (365 dias)" },
        ],
        note:
          "A janela mensal usa mês de 30 dias e a anual, 365 dias. Contratos reais " +
          "costumam medir por mês civil e descontar janelas de manutenção.",
      },
      "downtime-cost": {
        name: "Quanto custa ficar fora do ar",
        tagline: "O preço de uma queda, em reais.",
        metaTitle: "Quanto custa ficar fora do ar: calculadora de prejuízo por downtime",
        metaDescription:
          "Transforme minutos de indisponibilidade em prejuízo. Informe o faturamento " +
          "do mês, as horas em que a operação roda e a duração da queda.",
        intro:
          "Discutir uptime em porcentagem adia a pergunta que o financeiro faz. " +
          "Esta conta traduz a queda para a moeda em que a decisão é tomada.",
        fields: [
          { key: "revenue", label: "Faturamento no mês (R$)" },
          { key: "openHours", label: "Horas de operação por mês", hint: "24x7 dá 720" },
          { key: "minutes", label: "Duração da queda (minutos)" },
        ],
        results: [
          { key: "minute", label: "Por minuto parado" },
          { key: "hour", label: "Por hora parada" },
          { key: "total", label: "Nessa queda" },
        ],
        note:
          "A conta assume faturamento distribuído por igual nas horas de operação. " +
          "Pico de venda e multa contratual ficam de fora e costumam pesar mais.",
      },
      "team-cost": {
        name: "Custo de um time de projeto",
        tagline: "O que um time custa do começo ao fim.",
        metaTitle: "Calculadora de custo de time de projeto de software",
        metaDescription:
          "Some o custo de um time de projeto por semana, por pessoa e no total, a " +
          "partir do tamanho do time, do custo-hora e da duração prevista.",
        intro:
          "Orçamento de software some em dois lugares: no tamanho do time e na " +
          "duração. Mexa nos dois aqui antes de prometer uma data.",
        fields: [
          { key: "people", label: "Pessoas no time" },
          { key: "cost", label: "Custo por hora (R$)", hint: "Use o resultado da outra calculadora" },
          { key: "hours", label: "Horas por semana, por pessoa" },
          { key: "weeks", label: "Semanas de projeto" },
        ],
        results: [
          { key: "total", label: "Custo total" },
          { key: "week", label: "Por semana" },
          { key: "person", label: "Por pessoa, no projeto" },
        ],
        note:
          "Só mão de obra. Licença, infraestrutura e o tempo de quem acompanha do " +
          "lado do cliente entram por fora.",
      },
      estimate: {
        name: "Estimativa de prazo (PERT)",
        tagline: "Três palpites viram uma faixa defensável.",
        metaTitle: "Calculadora de estimativa PERT de três pontos",
        metaDescription:
          "Converta cenário otimista, provável e pessimista em uma estimativa PERT " +
          "com desvio padrão e faixa de confiança. Fórmula clássica de três pontos.",
        intro:
          "Um número só esconde o risco. A estimativa de três pontos pesa o cenário " +
          "provável quatro vezes mais que os extremos e devolve o desvio junto.",
        fields: [
          { key: "optimistic", label: "Otimista", hint: "Dias, se tudo der certo" },
          { key: "likely", label: "Provável" },
          { key: "pessimistic", label: "Pessimista" },
        ],
        results: [
          { key: "expected", label: "Estimativa PERT" },
          { key: "range", label: "Faixa de 68%" },
          { key: "safe", label: "Faixa de 95%" },
        ],
        note:
          "Fórmula: (otimista + 4 × provável + pessimista) ÷ 6, com desvio padrão " +
          "(pessimista − otimista) ÷ 6. Vale por tarefa, não pelo projeto inteiro.",
      },
      "hourly-cost": {
        name: "Custo-hora de desenvolvedor",
        tagline: "O que uma hora de engenharia custa de verdade.",
        metaTitle: "Calculadora de custo-hora de desenvolvedor",
        metaDescription:
          "Calcule o custo real de uma hora de desenvolvimento a partir do salário " +
          "mensal, dos encargos e das horas produtivas no mês. O cálculo roda no navegador.",
        intro:
          "Encargos, férias e reunião entram na conta do mesmo jeito. Divida o " +
          "custo mensal cheio pelas horas que viraram trabalho entregue no mês " +
          "passado e você chega no número que importa na hora de orçar.",
        fields: [
          { key: "monthly", label: "Custo mensal (R$)", hint: "Salário ou valor do contrato" },
          { key: "charges", label: "Encargos e benefícios (%)", hint: "Sobre o valor mensal" },
          { key: "hours", label: "Horas produtivas por mês", hint: "Descontando reuniões e férias" },
        ],
        results: [
          { key: "hour", label: "Custo por hora" },
          { key: "day", label: "Custo por dia de 6h" },
          { key: "month", label: "Custo mensal com encargos" },
        ],
        note:
          "Os percentuais de encargo variam por regime de contratação e por acordo " +
          "coletivo. Use os números do seu caso, não uma média de mercado.",
      },
      automation: {
        name: "Economia com automação",
        tagline: "Quanto um trabalho manual custa por ano.",
        metaTitle: "Calculadora de economia com automação de processos",
        metaDescription:
          "Estime quanto um processo manual custa por mês e por ano a partir das " +
          "horas gastas e do custo-hora da equipe, e quanto sobra ao automatizá-lo.",
        intro:
          "Todo processo manual tem um preço anual, e quase ninguém calculou o " +
          "dele. Some as horas que ele consome por mês e multiplique pelo " +
          "custo-hora de quem senta para fazer.",
        fields: [
          { key: "hours", label: "Horas por mês no processo" },
          { key: "cost", label: "Custo por hora (R$)" },
          { key: "reduction", label: "Redução esperada (%)", hint: "Quanto do trabalho some" },
        ],
        results: [
          { key: "month", label: "Custo atual por mês" },
          { key: "saveMonth", label: "Economia por mês" },
          { key: "saveYear", label: "Economia por ano" },
        ],
        note:
          "A redução esperada é uma hipótese sua. A conta não estima custo de " +
          "construção nem de manutenção da automação.",
      },
    },
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
