import type { Dictionary } from "./types";

export const ptBR: Dictionary = {
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",

  site: {
    name: "stellift",
    metaTitle:
      "Software sob medida para web, mobile e cloud | stellift",
    tagline: "Software sob medida",
    description: "Software sob medida para web, mobile e cloud.",
    metaDescription:
      "Desenvolvimento de software sob medida: web, mobile, cloud e " +
      "dados. Time pequeno, com contribuições ao V8 do Chrome e ao " +
      "Servo da Mozilla.",
    email: "ola@stellift.dev",
    linkedin: "https://www.linkedin.com/company/stellift",
    github: "https://github.com/stellift",
  },

  nav: [
    { label: "Contribuições", href: "#clients" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#about" },
    { label: "Ferramentas", href: "#tools" },
    { label: "Nossos talentos", href: "#talent" },
    { label: "Missão", href: "#mission" },
    { label: "Contato", href: "#contact" },
  ],

  services: [
    {
      code: "WEB",
      category: "Desenvolvimento",
      title: "Produtos web",
      text: 
        "Loja, checkout, painel e marketplace. Pagamento por Pix e " +
        "cartão, pedido que atualiza na tela, relatório para quem decide.",
    },
    {
      code: "MOB",
      category: "Mobile",
      title: "Aplicativos mobile",
      text: 
        "iOS e Android, e também o app que vira braço de um sistema " +
        "maior, como o leitor de código que fecha a venda no balcão.",
    },
    {
      code: "CLD",
      category: "Infraestrutura e dados",
      title: "Cloud e dados",
      text: 
        "AWS com Terraform, banco, fila e deploy. Infraestrutura descrita " +
        "em código, para subir de novo igual depois.",
    },
  ],

  servicesExtra: {
    label: "Também fazemos",
    note: "Normalmente entra junto com um projeto, mas dá para contratar à parte.",
    items: [
      {
        title: "Documentação técnica",
        text:
          "Manual de API, documento de arquitetura e aquele README que " +
          "ninguém nunca escreveu.",
      },
      {
        title: "Revisão de código",
        text: "A gente lê o código que já existe e diz o que está perigoso.",
      },
      {
        title: "Performance",
        text:
          "Sistema lento. A gente mede onde ele trava antes de mexer em " +
          "qualquer coisa.",
      },
      {
        title: "Migração de legado",
        text:
          "Tirar o sistema da versão que ninguém atualiza há anos, sem " +
          "parar a operação.",
      },
      {
        title: "Automação e WhatsApp",
        text:
          "Bot de WhatsApp que responde cliente e avisa quando o pedido " +
          "anda. E sistema que passa a conversar com o outro sem ninguém " +
          "no meio.",
      },
      {
        title: "Consultoria técnica",
        text: "Segunda opinião antes de você fechar com alguém.",
      },
    ],
  },

  clients: [
    {
      name: "Google",
      logo: "google",
      featured: true,
      note:
        "Contribuições para o V8, o motor de JavaScript do Google Chrome, " +
        "e para o Flutter.",
    },
    {
      name: "Mozilla",
      logo: "mozilla",
      featured: true,
      note:
        "Contribuições para o Servo, motor de navegador escrito " +
        "em Rust.",
    },
    {
      name: "Woovi",
      logo: "woovi",
      featured: true,
      note: "Gente do nosso time já trabalhou lá.",
    },
    {
      name: "Haskell",
      logo: "haskell",
      note:
        "Contribuições para o compilador GHC, da linguagem Haskell, usada " +
        "pela Meta/Facebook.",
    },
    { name: "Flop Robux", logo: "floprobux" },
    { name: "ServeCommand", logo: "servecommand" },
  ],

  portfolio: [
    {
      name: "Pivenda",
      tags: ["desktop", "mobile"],
      role: "Projeto, código e operação",
      text:
        "PDV de desktop para loja de material de construção, com app de " +
        "escaneamento no celular. O catálogo trabalha nas unidades que o " +
        "setor usa e aceita venda fracionada. Fecha o caixa por turno, " +
        "guarda o cadastro do cliente com o fiado no nome dele, emite " +
        "NFC-e e cobra Pix na tela ou manda para a maquininha.",
      stack: "C++20, Qt6, SQLite, Go, Spring Boot, React Native, Next.js",
      href: "https://pivenda-demo.vercel.app",
      shot: "/shots/pivenda.webp",
      detail: {
        summary:
          "Feito para loja de material de construção, onde o cimento sai por " +
          "saco, o piso por metro quadrado e o prego por quilo, e onde " +
          "cliente conhecido compra fiado. Roda no computador do caixa e " +
          "guarda os dados ali mesmo, então a loja continua vendendo quando " +
          "a internet cai.",
        ctaLabel: "Abrir a demonstração",
        gallery: [
          {
            src: "/shots/pivenda/01.webp",
            caption:
              "Venda aberta. Dá para buscar o produto pelo nome, pelo SKU ou " +
              "pelo código de barras.",
          },
          {
            src: "/shots/pivenda/02.webp",
            caption:
              "Fechamento de uma venda paga com mais de uma forma de " +
              "pagamento.",
          },
          {
            src: "/shots/pivenda/03.webp",
            caption:
              "Relatório do período, separado por forma de pagamento.",
          },
          {
            src: "/shots/pivenda/04.webp",
            caption:
              "Cadastro de produto na unidade que a loja usa, com estoque " +
              "mínimo.",
          },
        ],
        facts: [
          { label: "Onde roda", value: "Linux, Windows, macOS e FreeBSD" },
          { label: "Base", value: "C++20, Qt6 e SQLite, no computador da loja" },
          { label: "Internet", value: "Não é obrigatória" },
          { label: "Fiscal", value: "NFC-e, NFS-e e CT-e pela Focus NFe" },
        ],
        highlights: [
          {
            title: "Pix e maquininha no caixa",
            text:
              "O QR do Pix aparece na tela do caixa, a maquininha Stone é " +
              "acionada pelo número de série e o boleto sai pelo Asaas. Se o " +
              "pagamento não fecha, o estorno é feito automaticamente.",
          },
          {
            title: "Pedidos pelo WhatsApp",
            text:
              "Quando o cliente manda a lista pelo WhatsApp, o sistema " +
              "converte a mensagem em itens do catálogo e marca os que " +
              "ficaram em dúvida. O caixa revisa e confirma.",
          },
          {
            title: "Assistente de obra",
            text:
              "O vendedor digita algo como \"revestir 20m² de piso\" e " +
              "recebe uma sugestão de produto e quantidade. Roda no próprio " +
              "computador, sem internet e sem custo por consulta.",
          },
          {
            title: "Celular como leitor de código de barras",
            text:
              "Pelo app, o vendedor lê o código no celular e o item entra na " +
              "venda aberta no caixa, pela Wi-Fi da loja.",
          },
          {
            title: "Confirmação do Pix em 12 ms",
            text:
              "Com o backend ligado, o aviso de pagamento chega por webhook. " +
              "Medimos 12 milissegundos entre o aviso e a confirmação " +
              "aparecer na tela do caixa.",
          },
          {
            title: "Balança na porta serial",
            text:
              "O peso vem direto da balança. Toledo, Filizola, Urano e " +
              "Micheletti mandam os dados em formatos diferentes, por isso o " +
              "formato é configurável.",
          },
        ],
      },
    },
    {
      name: "Charita",
      tags: ["web"],
      role: "Projeto, código e operação",
      text:
        "Plataforma de doações para ONGs verificadas, sem taxa da " +
        "plataforma. Aceita Pix, cartão e doação mensal, em mais de uma " +
        "moeda, e também recebe livros, computadores e alimentos. Tem ainda " +
        "um módulo que paga exames e consultas em clínicas parceiras para " +
        "pacientes encaminhados por ONGs.",
      stack: "Elixir, Phoenix, PostgreSQL, Nuxt, Vue, Reka UI, Valibot, Caddy",
      shot: "/shots/charita.webp",
      detail: {
        summary:
          "A Charita não cobra taxa das campanhas, e dá para conferir isso " +
          "na contabilidade: existe uma conta para a taxa da plataforma e " +
          "ela nunca recebeu um lançamento. Todo dinheiro que entra ou sai é " +
          "registrado em partidas dobradas, e o banco de dados não deixa " +
          "alterar nem apagar registros. A página de transparência mostra " +
          "esse livro-caixa diretamente, sem números digitados à mão.",
        gallery: [
          {
            src: "/shots/charita/01.webp",
            caption:
              "Lista de campanhas. Dá para filtrar por causa e informar " +
              "quanto você quer doar.",
          },
          {
            src: "/shots/charita/02.webp",
            caption:
              "Página de uma campanha, com o valor arrecadado, a meta e a " +
              "taxa da plataforma.",
          },
          {
            src: "/shots/charita/03.webp",
            caption:
              "Doação por Pix, com QR code e código copia e cola.",
          },
          {
            src: "/shots/charita/04.webp",
            caption:
              "Página de transparência. O extrato fecha em zero em cada moeda.",
          },
          {
            src: "/shots/charita/05.webp",
            caption:
              "Números da página inicial, calculados a partir do livro-caixa.",
          },
          {
            src: "/shots/charita/06.webp",
            caption:
              "Pedidos de livros, com filtro por assunto, país de envio e " +
              "idioma.",
          },
          {
            src: "/shots/charita/07.webp",
            caption:
              "Exames e consultas oferecidos por clínicas, com preço e " +
              "código SIGTAP.",
          },
          {
            src: "/shots/charita/08.webp",
            caption:
              "Fila do time, com uma ONG, uma campanha e uma conta de saque " +
              "esperando aprovação.",
          },
        ],
        facts: [
          { label: "API", value: "Elixir e Phoenix" },
          { label: "Front", value: "Nuxt. O navegador não fala direto com a API" },
          { label: "Pagamentos", value: "Woovi para Pix, Stripe para cartão e Asaas para repasses" },
          { label: "Idiomas", value: "Português, inglês e espanhol" },
        ],
        highlights: [
          {
            title: "Registros que não podem ser alterados",
            text:
              "Cada movimentação de dinheiro é registrada em partidas " +
              "dobradas. Um gatilho no Postgres bloqueia update e delete, " +
              "então um estorno entra como um lançamento novo, com o sinal " +
              "invertido.",
          },
          {
            title: "Campanhas só por convite",
            text:
              "Uma ONG só abre campanha depois que o time verifica a " +
              "organização e manda um convite. O link vale uma vez e fica " +
              "guardado apenas como hash. É uma forma de dificultar o uso da " +
              "plataforma para lavar dinheiro.",
          },
          {
            title: "Verificação das ONGs",
            text:
              "Antes da aprovação, o sistema consulta o registro de empresas " +
              "e as listas públicas de sanções e de pessoas politicamente " +
              "expostas, pelo nome da organização e pelo nome de quem a " +
              "dirige.",
          },
          {
            title: "Gateways de pagamento trocáveis",
            text:
              "Woovi, Stripe e Asaas ficam atrás de uma interface própria e " +
              "passam pelos mesmos testes de contrato. Trocar de gateway é " +
              "uma mudança de configuração.",
          },
          {
            title: "Doação de livros, computadores e alimentos",
            text:
              "Essas doações têm um histórico separado e ficam fora da " +
              "contabilidade em dinheiro. O endereço da ONG só é mostrado ao " +
              "doador depois que ela aceita a oferta.",
          },
          {
            title: "Pagamento de exames e consultas",
            text:
              "O módulo de saúde paga, com o dinheiro de uma campanha, uma " +
              "conta que a clínica já emitiu. O paciente aparece só como um " +
              "código definido pela ONG que fez o encaminhamento, sem nome " +
              "nem documento.",
          },
        ],
      },
    },
    {
      name: "LumniHub",
      tags: ["web", "ecommerce"],
      role: "Boa parte do produto",
      text:
        "Plataforma para criar, vender e afiliar cursos e ebooks. O " +
        "produtor monta o curso em módulos com aulas e quizzes, desenha " +
        "o próprio checkout e abre a loja. Os afiliados que ele recruta " +
        "recebem por split no pagamento, e o financeiro e os relatórios " +
        "ficam num painel só.",
      stack: "React, Vite, React Router, React Aria, Supabase, Zod",
      href: "https://app.lumnihub.com",
      shot: "/shots/lumnihub.webp",
    },
    {
      name: "Craftance",
      tags: ["web", "mobile", "ecommerce"],
      role: "Projeto, código e operação",
      text:
        "Marketplace onde o desenvolvedor monta perfil, vende produto digital e " +
        "pega projeto como freelancer. O dinheiro de cada etapa fica em escrow " +
        "até a entrega ser aprovada.",
      stack: "Elixir, Phoenix, Next.js, PostgreSQL, React Native, Rust",
      shot: "/shots/craftance.webp",
      detail: {
        summary:
          "Marketplace com duas frentes. Quem precisa de um projeto publica " +
          "o pedido e recebe propostas de freelancers, e quem programa " +
          "também pode vender template, script e código pronto. No trabalho " +
          "por projeto, o cliente deposita o valor de cada etapa, o dinheiro " +
          "fica retido e só vai para o freelancer quando a entrega é " +
          "aprovada.",
        gallery: [
          {
            src: "/shots/craftance/01.webp",
            caption:
              "Página inicial.",
          },
          {
            src: "/shots/craftance/02.webp",
            caption:
              "Como funciona, visto pelo cliente e pelo freelancer.",
          },
          {
            src: "/shots/craftance/03.webp",
            caption:
              "Projetos abertos na página inicial.",
          },
          {
            src: "/shots/craftance/04.webp",
            caption:
              "Lista de projetos, com filtro por categoria.",
          },
          {
            src: "/shots/craftance/05.webp",
            caption:
              "Pedido de um cliente, com orçamento, habilidades pedidas e " +
              "número de propostas.",
          },
          {
            src: "/shots/craftance/06.webp",
            caption:
              "Lista de freelancers, com valor por hora e disponibilidade.",
          },
          {
            src: "/shots/craftance/07.webp",
            caption:
              "Perfil de freelancer, com os serviços oferecidos.",
          },
          {
            src: "/shots/craftance/08.webp",
            caption:
              "Serviço vendido em pacotes, com preço e prazo fechados.",
          },
          {
            src: "/shots/craftance/09.webp",
            caption:
              "Catálogo de templates e scripts, com filtro por categoria.",
          },
          {
            src: "/shots/craftance/10.webp",
            caption:
              "Página de um produto, com preço, versão e licença.",
          },
          {
            src: "/shots/craftance/11.webp",
            caption:
              "Conversa entre cliente e freelancer.",
          },
          {
            src: "/shots/craftance/12.webp",
            caption:
              "Contrato dividido em etapas: uma já paga e outra entregue, " +
              "esperando aprovação.",
          },
          {
            src: "/shots/craftance/13.webp",
            caption:
              "Saldo do freelancer, já descontada a comissão da plataforma.",
          },
          {
            src: "/shots/craftance/14.webp",
            caption:
              "Limpeza de código escrito por IA.",
          },
          {
            src: "/shots/craftance/15.webp",
            caption:
              "Tipos de problema que a limpeza de IA cobre.",
          },
        ],
        facts: [
          { label: "Backend", value: "Elixir e Phoenix, com Oban para filas" },
          { label: "Web", value: "Next.js" },
          { label: "Apps", value: "Expo no celular e Rust com Slint no desktop" },
          { label: "Pagamentos", value: "Stripe Connect para cartão e repasse, Mercado Pago para Pix e boleto" },
        ],
        highlights: [
          {
            title: "Dinheiro retido por etapa",
            text:
              "O contrato é dividido em etapas com valor e prazo. O cliente " +
              "deposita cada etapa, o freelancer entrega e o valor só é " +
              "liberado depois da aprovação. A comissão de 10% sai da parte " +
              "de quem recebe.",
          },
          {
            title: "Livro-caixa próprio",
            text:
              "Cada depósito, liberação e estorno vira um lançamento em " +
              "partidas dobradas. Um job diário compara o saldo de cada " +
              "freelancer no livro-caixa com o saldo na Stripe.",
          },
          {
            title: "Pix e boleto",
            text:
              "Além do cartão pela Stripe, o checkout aceita Pix e boleto " +
              "pelo Mercado Pago. Quando o webhook chega, o sistema consulta " +
              "o pagamento de novo na API antes de dar baixa.",
          },
          {
            title: "Venda de código pronto",
            text:
              "Templates e scripts são vendidos com licença e chave de " +
              "ativação, e o download sai por um link temporário.",
          },
          {
            title: "Limpeza de código feito por IA",
            text:
              "O cliente aponta o repositório e uma varredura lista os " +
              "problemas com arquivo e linha. Cada tipo de problema vira um " +
              "lote com preço fechado. Na entrega a varredura roda de novo " +
              "e, se os problemas sumiram sem aparecer outros iguais ou " +
              "piores, o pagamento é liberado sem ninguém precisar aprovar.",
          },
          {
            title: "Conversa em tempo real",
            text:
              "Mensagens e notificações chegam na hora pelos canais do " +
              "Phoenix. Também existe um cliente de desktop nativo, em Rust, " +
              "só para as conversas.",
          },
        ],
      },    },
    {
      name: "Neohor",
      tags: ["web", "ecommerce"],
      role: "Projeto, código e operação",
      text:
        "Loja de contas de jogos. O comprador busca, põe no carrinho e " +
        "paga no Pix ou no cartão, e acompanha o pedido até a entrega " +
        "com a tela atualizando sozinha por WebSocket. Entra com login " +
        "social, sem inventar senha.",
      stack: "Next.js, NestJS, Prisma, PostgreSQL, TurboRepo, Terraform, AWS",
      shot: "/shots/neohor.webp",
    },
    {
      name: "HeartBit",
      tags: ["web", "mobile"],
      role: "Projeto, código e operação",
      text:
        "App de relacionamento para cristãos brasileiros, com verificação feita " +
        "pela própria igreja. Oito perfis por dia, três conversas abertas no " +
        "máximo, e um padrinho da comunidade vê que você está conversando, nunca " +
        "o conteúdo.",
      stack: "Elixir, Phoenix, React, TanStack Router, Vue 3, PostgreSQL",
      shot: "/shots/heartbit.webp",
    },
    {
      name: "BloxHarbor",
      tags: ["web", "ecommerce"],
      role: "Projeto, código e operação",
      text:
        "Ecommerce de contas de Roblox. A conta cai na hora e a compra " +
        "é protegida.",
      stack: "Next.js",
      href: "https://bloxharbor.com",
      shot: "/shots/bloxharbor.webp",
    },
    {
      name: "ZapZap",
      tags: ["desktop"],
      role: "Experimento, sem cliente",
      text:
        "Cliente alternativo do WhatsApp Desktop em Rust, com a meta de caber em " +
        "10 MB. A interface desenha direto no X11 por chamadas de sistema, sem " +
        "toolkit gráfico, e o escopo é estreito de propósito: só Brasil, só o " +
        "lado do cliente.",
      stack: "Rust, X11 por syscalls, whatsapp-rust",
      href: "https://github.com/stellift/zapzap",
      shot: "/shots/zapzap.webp",
    },
    {
      name: "ServeCommand",
      tags: ["web"],
      role: "Construção do produto",
      text:
        "Software de gestão para prestadores de serviço. O prestador " +
        "define as regras de preço e registra cada serviço prestado, " +
        "com um registro puxando o outro. Assinatura e cobrança correm " +
        "no mesmo fluxo.",
      href: "https://servecommand.com",
      shot: "/shots/servecommand.webp",
    },
    {
      name: "orce.me",
      tags: ["web"],
      role: "Projeto, código e operação",
      text:
        "Sistema de orçamentos para pequenos negócios. Reúne produtos, " +
        "serviços e dados do cliente em uma proposta em PDF com a marca de " +
        "quem envia, sem refazer planilha a cada pedido.",
      stack: "Nuxt, Vue, TypeScript",
      shot: "/shots/orce.webp",
    },
  ],

  about: {
    text:
      "O sênior que desenha o sistema é o mesmo que escreve o código e " +
      "que opera ele em produção. Não tem camada de aprovação no meio, " +
      "nem júnior aprendendo no seu projeto.",
  },

  mission: {
    title: "Como a gente trabalha",
    lead: "Quatro coisas que a gente leva a sério.",
    values: [
      {
        title: "Honestidade",
        text: "Se o prazo não dá, a gente fala antes de começar.",
      },
      {
        title: "Qualidade",
        text:
          "Nada entra em produção sem outra pessoa ter olhado o código.",
      },
      {
        title: "Compromisso",
        text:
          "A gente só pega projeto que cabe na agenda. E entrega o que " +
          "combinou.",
      },
      {
        title: "Respeito",
        text:
          "A gente explica o que está fazendo em português, sem enrolação.",
      },
    ],
  },

  talent: {
    title: "A gente entende o que a IA escreveu",
    lead:
      "A gente usa IA para escrever código, e quem revisa esse código antes " +
      "de ele ir para o seu sistema tem contribuição aceita no V8 do Chrome, " +
      "no Servo da Mozilla e no GHC de Haskell.",
    team: {
      eyebrow: "Nosso time",
      title: "Esse é o time que vai trabalhar no seu projeto",
      text:
        "Gente que já trabalhou em compilador, runtime, banco de dados e " +
        "sistema que não pode cair. Conta o que você precisa construir e a " +
        "gente responde com quem do time faz sentido para isso.",
      cta: "Falar com o time",
      subject: "Quero falar com o time da stellift",
    },
  },

  contact: {
    heading: "Conta o que você quer construir",
    lead: "Uma descrição curta já serve para começar a conversa.",
    scarcity: "Poucos projetos por vez",
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
      "São contas simples que costumam ficar para depois de assinar o " +
      "contrato, quando o SLA já foi aceito e a hora já foi combinada. " +
      "Rodam no seu navegador, sem cadastro.",
    cta: "Abrir ferramenta",
    backLabel: "Voltar para a stellift",
    allLabel: "Todas as ferramentas",
    rangeJoin: "a",
    units: { day: "dias", hour: "h", minute: "min", second: "s" },
    utilitiesTitle: "Utilitários para desenvolvedores",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
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
          "A janela mensal usa mês de 30 dias e a anual, 365 dias. Confira no seu " +
          "contrato se a medição é por mês civil e se a manutenção programada conta.",
      },
      "downtime-cost": {
        name: "Quanto custa ficar fora do ar",
        tagline: "O preço de uma queda, em reais.",
        metaTitle: "Quanto custa ficar fora do ar: calculadora de downtime",
        metaDescription:
          "Transforme minutos de indisponibilidade em prejuízo. Informe o faturamento " +
          "do mês, as horas em que a operação roda e a duração da queda.",
        intro:
          "Com o faturamento do mês e as horas em que a operação vende, dá para " +
          "estimar em reais quanto uma queda custou.",
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
          "Pico de venda e multa contratual ficam de fora da conta.",
      },
      "team-cost": {
        name: "Custo de um time de projeto",
        tagline: "O que um time custa do começo ao fim.",
        metaTitle: "Calculadora de custo de time de projeto de software",
        metaDescription:
          "Some o custo de um time de projeto por semana, por pessoa e no total, a " +
          "partir do tamanho do time, do custo-hora e da duração prevista.",
        intro:
          "O custo de um projeto depende de quantas pessoas trabalham nele e por " +
          "quanto tempo. Mexa nos dois aqui antes de prometer uma data.",
        fields: [
          { key: "people", label: "Pessoas no time" },
          { key: "cost", label: "Custo por hora (R$)", hint: "Dá para tirar da calculadora de custo-hora" },
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
        tagline: "Três estimativas de prazo viram uma faixa.",
        metaTitle: "Calculadora de estimativa PERT de três pontos",
        metaDescription:
          "Converta cenário otimista, provável e pessimista em uma estimativa PERT " +
          "com desvio padrão e faixa de confiança. Fórmula clássica de três pontos.",
        intro:
          "Uma estimativa de um número só não mostra o risco. A de três pontos pesa o cenário " +
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
        tagline: "Quanto custa uma hora de trabalho de um desenvolvedor.",
        metaTitle: "Calculadora de custo-hora de desenvolvedor",
        metaDescription:
          "Calcule o custo real de uma hora de desenvolvimento a partir do salário " +
          "mensal, dos encargos e das horas produtivas no mês. O cálculo roda no navegador.",
        intro:
          "Encargos, férias e reunião entram na conta do mesmo jeito. Divida o " +
          "custo mensal cheio pelas horas que viraram trabalho entregue no mês " +
          "passado. Esse é o valor para usar no orçamento.",
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
          "Some as horas que o processo consome por mês e multiplique pelo " +
          "custo-hora de quem faz. O resultado é quanto ele custa por ano.",
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
      cpf: {
        name: "Gerador de CPF",
        tagline: "Gera CPF válido para teste e confere se um CPF é válido.",
        metaTitle: "Gerador de CPF válido e validador de CPF online",
        metaDescription:
          "Gere CPF válido para testes de software e valide qualquer CPF pelos " +
          "dígitos verificadores. Roda no navegador, sem cadastro.",
        intro:
          "Gera números que passam no cálculo dos dígitos verificadores, para " +
          "preencher formulário e testar sistema. Um número gerado pode " +
          "coincidir com o CPF de uma pessoa real, então use só em ambiente de " +
          "teste.",
        fields: [],
        results: [],
        note:
          "A validação confere só os dígitos verificadores. Ela não diz se o CPF " +
          "existe nem se está regular na Receita Federal.",
        labels: {
          generated: "CPF gerado",
          generate: "Gerar outro",
          punctuation: "Com pontuação",
          input: "CPF para validar",
          inputHint: "Com ou sem pontuação",
          valid: "Válido",
          invalid: "Inválido",
          empty: "Digite um CPF para validar.",
        },
      },
      cnpj: {
        name: "Gerador de CNPJ",
        tagline: "Gera CNPJ válido, numérico ou alfanumérico, e valida qualquer CNPJ.",
        metaTitle: "Gerador e validador de CNPJ, inclusive alfanumérico",
        metaDescription:
          "Gere CNPJ válido para testes, no formato numérico ou no alfanumérico " +
          "de 2026, e valide qualquer CNPJ pelos dígitos verificadores.",
        intro:
          "Desde julho de 2026 a Receita Federal emite CNPJ com letras. O " +
          "validador aceita os dois formatos, e o gerador cria números de teste " +
          "em qualquer um deles. Um número gerado pode coincidir com o CNPJ de " +
          "uma empresa real, então use só em ambiente de teste.",
        fields: [],
        results: [],
        note:
          "O cálculo segue as perguntas e respostas da Receita Federal sobre o " +
          "CNPJ alfanumérico. A validação confere só os dígitos verificadores, " +
          "não se a empresa existe.",
        labels: {
          generated: "CNPJ gerado",
          generate: "Gerar outro",
          punctuation: "Com pontuação",
          alphanumeric: "Alfanumérico",
          input: "CNPJ para validar",
          inputHint: "Com ou sem pontuação, com ou sem letras",
          valid: "Válido",
          invalid: "Inválido",
          empty: "Digite um CNPJ para validar.",
        },
      },
      password: {
        name: "Gerador de senha",
        tagline: "Senha aleatória com o tamanho e os caracteres que você escolher.",
        metaTitle: "Gerador de senha forte e aleatória online",
        metaDescription:
          "Gere senhas fortes escolhendo o tamanho e os tipos de caractere. A " +
          "senha é criada no seu navegador e não vai para nenhum servidor.",
        intro:
          "A senha é gerada no seu navegador com crypto.getRandomValues, o " +
          "gerador de números aleatórios feito para criptografia. Ela não passa " +
          "por nenhum servidor.",
        fields: [],
        results: [],
        note:
          "Cada tipo de caractere marcado aparece pelo menos uma vez na senha.",
        labels: {
          length: "Tamanho",
          upper: "Letras maiúsculas",
          lower: "Letras minúsculas",
          digits: "Números",
          symbols: "Símbolos",
          generate: "Gerar outra",
          result: "Senha",
          pickOne: "Marque pelo menos um tipo de caractere.",
          sets: "Tipos de caractere",
        },
      },
      uuid: {
        name: "Gerador de UUID",
        tagline: "UUID v4 ou v7, um ou vários de uma vez.",
        metaTitle: "Gerador de UUID v4 e v7 online",
        metaDescription:
          "Gere UUID versão 4, aleatório, ou versão 7, ordenado pelo horário, um " +
          "por vez ou vários de uma vez. Roda no navegador.",
        intro:
          "O v4 é todo aleatório. O v7 começa com o horário em milissegundos, " +
          "então os UUIDs gerados em sequência ficam em ordem, o que costuma " +
          "deixar índice de banco de dados mais eficiente.",
        fields: [],
        results: [],
        note:
          "Os dois seguem a RFC 9562, e a parte aleatória vem de " +
          "crypto.getRandomValues. No v7, um contador mantém a ordem quando vários saem no " +
          "mesmo milissegundo.",
        labels: {
          version: "Versão",
          amount: "Quantidade",
          generate: "Gerar",
          result: "UUIDs",
        },
      },
      base64: {
        name: "Base64",
        tagline: "Codifica texto em Base64 e decodifica de volta.",
        metaTitle: "Codificar e decodificar Base64 online",
        metaDescription:
          "Converta texto para Base64 e Base64 para texto, com acento e emoji " +
          "(UTF-8) e opção de Base64 para URL.",
        intro:
          "O texto vira UTF-8 antes de ser codificado, então acento e emoji " +
          "funcionam. A opção para URL troca + e / por - e _, e tira o = do " +
          "final.",
        fields: [],
        results: [],
        note:
          "Para decodificar, a ferramenta aceita os dois formatos e completa o = " +
          "que estiver faltando.",
        labels: {
          input: "Texto ou Base64",
          encode: "Codificar",
          mode: "Modo",
          decode: "Decodificar",
          urlSafe: "Base64 para URL",
          result: "Resultado",
          invalid: "Isso não é Base64 válido, ou o conteúdo não é texto em UTF-8.",
        },
      },
      json: {
        name: "Formatador de JSON",
        tagline: "Formata, minifica e mostra onde está o erro de sintaxe.",
        metaTitle: "Formatador e validador de JSON online",
        metaDescription:
          "Cole um JSON para formatar com indentação, minificar numa linha só ou " +
          "descobrir onde está o erro de sintaxe. Roda no navegador.",
        intro:
          "Cole o JSON e escolha a indentação ou a versão minificada. Se houver erro de " +
          "sintaxe, aparece a mensagem de erro do navegador.",
        fields: [],
        results: [],
        note:
          "O JSON é processado no seu navegador e não é enviado para nenhum " +
          "servidor.",
        labels: {
          input: "JSON",
          mode: "Saída",
          indent2: "2 espaços",
          indent4: "4 espaços",
          minify: "Minificar",
          result: "Resultado",
          invalid: "JSON inválido:",
        },
      },
      counter: {
        name: "Contador de caracteres",
        tagline: "Caracteres, palavras, linhas e bytes de um texto.",
        metaTitle: "Contador de caracteres e palavras online",
        metaDescription:
          "Conte caracteres, caracteres sem espaço, palavras, linhas e bytes de " +
          "qualquer texto enquanto você digita.",
        intro:
          "Os números mudam enquanto você digita. Emoji e letra acentuada contam " +
          "como um caractere, do jeito que aparecem na tela.",
        fields: [],
        results: [],
        note:
          "Os bytes são contados em UTF-8.",
        labels: {
          input: "Texto",
          characters: "Caracteres",
          noSpaces: "Sem espaços",
          words: "Palavras",
          lines: "Linhas",
          bytes: "Bytes (UTF-8)",
        },
      },
      hash: {
        name: "Gerador de hash",
        tagline: "MD5, SHA-1, SHA-256, SHA-384 e SHA-512 de qualquer texto.",
        metaTitle: "Gerador de hash MD5, SHA-1 e SHA-256 online",
        metaDescription:
          "Gere o hash MD5, SHA-1, SHA-256, SHA-384 e SHA-512 de um texto " +
          "enquanto você digita. O texto não sai do seu navegador.",
        intro:
          "Digite ou cole o texto e os cinco hashes aparecem na hora. O texto " +
          "vira UTF-8 antes do cálculo, então o resultado bate com o de md5sum e " +
          "sha256sum no terminal.",
        fields: [],
        results: [],
        note:
          "MD5 e SHA-1 servem para conferir arquivo e gerar chave de cache, mas " +
          "não são seguros para guardar senha. Para senha, use bcrypt, scrypt ou " +
          "Argon2.",
        labels: {
          input: "Texto",
          upper: "Letras maiúsculas",
        },
      },
      url: {
        name: "URL encode e decode",
        tagline: "Codifica e decodifica texto para usar em URL.",
        metaTitle: "URL encode e decode online",
        metaDescription:
          "Codifique texto para URL (percent-encoding) e decodifique de volta, " +
          "com acento e espaço. Roda no navegador.",
        intro:
          "Codificar troca espaço, acento e símbolo por %20, %C3%A7 e assim por " +
          "diante. Por padrão a ferramenta codifica tudo, que é o certo para o " +
          "valor de um parâmetro. Marque URL completa para manter :, /, ? e & " +
          "como estão.",
        fields: [],
        results: [],
        note:
          "Usa encodeURIComponent e encodeURI, as mesmas funções do JavaScript.",
        labels: {
          mode: "Modo",
          encode: "Codificar",
          decode: "Decodificar",
          input: "Texto",
          whole: "URL completa",
          plus: "Tratar + como espaço",
          result: "Resultado",
          invalid: "Esse texto tem uma sequência % que não forma um caractere válido.",
        },
      },
      timestamp: {
        name: "Conversor de timestamp",
        tagline: "Timestamp Unix para data e data para timestamp.",
        metaTitle: "Conversor de timestamp Unix para data online",
        metaDescription:
          "Converta timestamp Unix em segundos ou milissegundos para data e " +
          "hora, e data para timestamp. Mostra o horário local e o UTC.",
        intro:
          "Cole um timestamp em segundos ou em milissegundos e veja a data no " +
          "seu fuso e em UTC. Também dá para escolher uma data e ver o timestamp " +
          "dela.",
        fields: [],
        results: [],
        note:
          "Números a partir de 100.000.000.000 são lidos como milissegundos. A " +
          "data é mostrada no fuso horário do seu navegador.",
        labels: {
          input: "Timestamp",
          inputHint: "Em segundos ou milissegundos",
          date: "Data e hora",
          now: "Agora",
          local: "Data local",
          iso: "ISO 8601 (UTC)",
          seconds: "Segundos",
          milliseconds: "Milissegundos",
          invalid: "Isso não parece um timestamp. Use só números.",
        },
      },
      jwt: {
        name: "Decodificador de JWT",
        tagline: "Mostra o header e o payload de um token JWT.",
        metaTitle: "Decodificador de JWT online",
        metaDescription:
          "Cole um token JWT para ver o header, o payload e as datas de emissão " +
          "e expiração. O token não sai do seu navegador.",
        intro:
          "Cole o token e o header e o payload aparecem formatados. Se o payload " +
          "tiver iat, nbf ou exp, as datas aparecem embaixo do campo.",
        fields: [],
        results: [],
        note:
          "A ferramenta só decodifica. Ela não confere a assinatura, então não " +
          "diz se o token é legítimo. O token é lido no seu navegador e não vai " +
          "para nenhum servidor.",
        labels: {
          input: "Token",
          header: "Header",
          payload: "Payload",
          iat: "Emitido em (iat)",
          nbf: "Válido a partir de (nbf)",
          exp: "Expira em (exp)",
          invalid: "Isso não parece um JWT. O token tem três partes separadas por ponto.",
        },
      },
      case: {
        name: "Conversor de maiúsculas e minúsculas",
        tagline: "Maiúsculas, minúsculas, título, camelCase, snake_case e mais.",
        metaTitle: "Converter texto para maiúsculas, minúsculas e camelCase",
        metaDescription:
          "Converta texto para maiúsculas, minúsculas, primeira letra maiúscula, " +
          "camelCase, PascalCase, snake_case e kebab-case de uma vez.",
        intro:
          "Digite o texto e todas as versões aparecem juntas, cada uma com botão " +
          "de copiar. Nos formatos de código, como camelCase e snake_case, os " +
          "acentos saem.",
        fields: [],
        results: [],
        note:
          "Maiúsculas, minúsculas, título e frase mantêm a pontuação e os " +
          "acentos do texto.",
        labels: {
          input: "Texto",
          upper: "MAIÚSCULAS",
          lower: "minúsculas",
          title: "Título",
          sentence: "Frase",
          camel: "camelCase",
          pascal: "PascalCase",
          snake: "snake_case",
          kebab: "kebab-case",
          constant: "CONSTANT_CASE",
        },
      },
      lorem: {
        name: "Gerador de lorem ipsum",
        tagline: "Texto de preenchimento para layout e protótipo.",
        metaTitle: "Gerador de lorem ipsum online",
        metaDescription:
          "Gere parágrafos de lorem ipsum para preencher layout, protótipo e " +
          "banco de dados de teste. Escolha quantos e copie.",
        intro:
          "Escolha quantos parágrafos quer e copie. As frases são montadas com " +
          "palavras do lorem ipsum tradicional, e o primeiro parágrafo pode " +
          "começar com o clássico Lorem ipsum dolor sit amet.",
        fields: [],
        results: [],
        note:
          "Cada clique gera um texto diferente.",
        labels: {
          paragraphs: "Parágrafos",
          classic: "Começar com Lorem ipsum",
          generate: "Gerar outro",
          result: "Texto",
        },
      },
    },
  },

  blog: {
    eyebrow: "Blog",
    title: "Notas técnicas",
    lead:
      "Problemas que apareceram em projetos da stellift, com o código que resolveu.",
    metaTitle: "Notas técnicas | stellift",
    metaDescription:
      "Notas técnicas da stellift sobre problemas de projetos reais em " +
      "Elixir, PostgreSQL e Next.js, com o código que resolveu.",
    feedLabel: "Assinar o RSS",
    publishedLabel: "Publicado em",
    updatedLabel: "Atualizado em",
    backLabel: "Todas as notas",
    moreLabel: "Outras notas",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    draftLabel: "Rascunho",
    empty: "Nada publicado ainda.",
    navLabel: "Notas técnicas",
  },

  ui: {
    a11y: { skipToContent: "Pular para o conteúdo" },
    header: {
      cta: "Iniciar conversa",
      lightTheme: "Tema claro",
      darkTheme: "Tema escuro",
      menu: "Menu",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      switchLabel: "Idioma",
      themeLabel: "Tema",
    },
    hero: {
      title: "A gente faz software",
      titleAccent: "como se fosse nosso.",
      fieldStart: "IDEIA",
      fieldEnd: "ÓRBITA",
      primary: "Vamos conversar",
      secondary: "Ver serviços",
    },
    services: { title: "O que fazemos" },
    clients: {
      title: "Onde contribuímos",
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
      filterLabel: "Filtrar projetos por tipo",
      allLabel: "Todos",
      filters: [
        { id: "web", label: "Web" },
        { id: "mobile", label: "Mobile" },
        { id: "desktop", label: "Desktop" },
        { id: "ecommerce", label: "Ecommerce" },
      ],
      openLabel: "Ver detalhes",
      closeLabel: "Fechar",
      dialogLabel: "detalhes do projeto",
      galleryLabel: "Telas do projeto",
      prevLabel: "Tela anterior",
      nextLabel: "Próxima tela",
    },
    about: { title: "A stellift" },
    contact: { title: "Conta o que você quer construir" },
    notFound: {
      title: "Essa página não existe",
      text: "O endereço pode ter mudado ou ter sido digitado errado.",
      home: "Ir para a página inicial",
      contact: "Falar com a gente",
    },
    card: { action: "Falar sobre isso" },
    footer: {
      description:
        "Projetamos, construímos e operamos software sob medida para web, " +
        "mobile e cloud.",
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
