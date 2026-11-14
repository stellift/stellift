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
    { label: "Serviços", href: "#services" },
    { label: "Contribuições", href: "#clients" },
    { label: "Nossos talentos", href: "#talent" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Ferramentas", href: "#tools" },
    { label: "Sobre", href: "#about" },
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
        "Contribuições para o [[v8]], o motor de JavaScript do [[chrome]], " +
        "e para o Flutter.",
    },
    {
      name: "Mozilla",
      logo: "mozilla",
      featured: true,
      note:
        "Contribuições para o [[servo]] (Servo), motor de navegador escrito " +
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
    },
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
      "nem júnior aprendendo no seu projeto. A diferença é de " +
      "responsabilidade, não de tamanho de equipe.",
  },

  mission: {
    title: "Fazer software com amor",
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
      "Os melhores talentos para dirigir IA são os que conseguem ler o que " +
      "ela escreve. Os nossos têm contribuição aceita no V8 do Chrome, no " +
      "Servo da Mozilla e no GHC de Haskell, e são eles que revisam o código " +
      "antes de ele virar o seu sistema.",
    hiring: {
      eyebrow: "Trabalhe com a gente",
      title: "Procuramos gente assim",
      text:
        "Se você mexe com compilador, runtime, banco ou sistema que não pode " +
        "cair, manda o seu GitHub e conta no que você trabalhou.",
      cta: "Enviar meu GitHub",
      subject: "Quero trabalhar na stellift",
    },
  },

  contact: {
    heading: "Vamos tirar a ideia do solo",
    lead: "Escreva contando o que você quer construir.",
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
        metaTitle: "Quanto custa ficar fora do ar: calculadora de downtime",
        metaDescription:
          "Transforme minutos de indisponibilidade em prejuízo. Informe o faturamento " +
          "do mês, as horas em que a operação roda e a duração da queda.",
        intro:
          "Toda queda de sistema termina na mesma pergunta: quanto a gente " +
          "deixou de faturar? Com o faturamento do mês e as horas em que a operação " +
          "vende, a resposta sai em reais, não em palpite.",
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

  blog: {
    eyebrow: "Blog",
    title: "Notas técnicas",
    lead:
      "Problemas que apareceram em projetos da stellift, com o código que resolveu.",
    metaTitle: "Notas técnicas | stellift",
    metaDescription:
      "Notas técnicas da stellift sobre CSS, geometria computacional e " +
      "ferramentas de desenvolvimento.",
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
    contact: { title: "Vamos tirar a ideia do solo" },
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
