import { launchSchema } from "@/app/exemplos/lancamento-imobiliario/schema";
import type { Niche } from "@/app/[lang]/_landing/types";

export const realEstate: Niche = {
  id: "realestate",
  slug: "landing-page-para-imobiliarias",
  metaTitle: "Landing page para imobiliárias e lançamentos imobiliários",
  metaDescription:
    "Landing page para imobiliária, corretor e lançamento de alto padrão: CRECI " +
    "no tamanho certo, registro da incorporação, planta e agendamento de visita.",
  title: "Landing page para imobiliárias e lançamentos",
  eyebrow: "Para imobiliárias, corretores e incorporadoras",
  audience: "Imobiliárias, corretores de imóveis e incorporadoras",
  lead:
    "Uma página por empreendimento ou por imóvel, feita para quem pesquisou o " +
    "bairro e quer ver planta, ficha técnica e como visitar. Com o CRECI e o " +
    "registro da incorporação do jeito que a lei e o COFECI pedem.",
  mailSubject: "Landing page para imobiliária",
  card: {
    name: "Imobiliárias e lançamentos",
    summary:
      "Planta, ficha técnica e visita ao decorado, com CRECI e registro da " +
      "incorporação onde a lei manda.",
  },
  demo: {
    path: "/exemplos/lancamento-imobiliario",
    label: "exemplo · lançamento residencial",
    image: "/shots/exemplo-imobiliario.webp",
    ogImage: "/shots/exemplo-imobiliario.jpg",
    imageAlt:
      "Topo da página de exemplo de um lançamento: título com metragem e suítes, desenho da fachada e botão de visita",
    schema: launchSchema,
    schemaText:
      "Este é o trecho de dados estruturados que está na página de exemplo. Ele " +
      "descreve o empreendimento, com endereço e número de unidades, e a " +
      "imobiliária responsável pela venda, com o CRECI.",
  },
  questions: {
    title: "O que o comprador quer ver antes de visitar",
    lead:
      "A página responde estas quatro coisas sem obrigar ninguém a pedir " +
      "material por e-mail ou esperar retorno.",
    items: [
      {
        title: "Quanto mede e como é a planta?",
        text:
          "Área privativa, número de suítes e vagas, e a planta da unidade. As " +
          "medidas saem do memorial descritivo.",
      },
      {
        title: "Onde fica?",
        text:
          "Endereço do terreno e do decorado, com mapa e horário de visita.",
      },
      {
        title: "Quem constrói e quem vende?",
        text:
          "Nome da incorporadora, registro da incorporação no cartório e a " +
          "imobiliária com o CRECI.",
      },
      {
        title: "Como visito?",
        text:
          "Botão de agendar visita sempre à vista, que no celular fica preso no " +
          "rodapé da tela.",
      },
    ],
  },
  anatomy: [
    {
      x: 11.2,
      y: 36.7,
      text: "Título com o que o comprador procura: unidades por andar, suítes e metragem.",
      source: null,
    },
    {
      x: 73.4,
      y: 7.6,
      text: "Botão para falar com corretor no topo da página.",
      source: null,
    },
    {
      x: 60,
      y: 25,
      text: "Fachada marcada como ilustrativa, para não prometer o que o projeto não entrega.",
      source: "CDC, art. 37, §1º",
    },
    {
      x: 11,
      y: 78.6,
      text: "Dois caminhos: agendar a visita ou ver a planta antes.",
      source: null,
    },
  ],
  rules: {
    title: "Dentro da lei, do COFECI e do CDC",
    lead:
      "Anúncio de imóvel tem regra em quatro lugares: a lei dos corretores, o " +
      "decreto que a regulamenta, as resoluções do COFECI e, para lançamento, " +
      "a lei de incorporações. Cada item leva a norma de onde saiu.",
    includes: [
      {
        text: "Número de inscrição no CRECI em toda propaganda.",
        source: "Decreto 81.871/78, art. 4º",
      },
      {
        text:
          "Imobiliária com CRECI seguido da letra J, num tamanho de pelo menos " +
          "25% do nome da empresa.",
        source: "Res. COFECI 1.065/07, art. 5º",
      },
      {
        text:
          "Corretor pessoa física com a expressão \"corretor de imóveis\" e o " +
          "número do CRECI depois do nome.",
        source: "Res. COFECI 1.065/07, art. 2º",
      },
      {
        text:
          "Em lançamento, o número do registro da incorporação e o cartório " +
          "onde ele foi feito.",
        source: "Lei 4.591/64, art. 32, §3º",
      },
    ],
    avoids: [
      {
        text:
          "Anunciar imóvel sem contrato de mediação ou autorização escrita do " +
          "dono.",
        source: "Decreto 81.871/78, art. 5º",
      },
      {
        text: "Omitir detalhe que deprecie o imóvel.",
        source: "Res. COFECI 326/92, art. 4º, II",
      },
      {
        text: "Anunciar de forma capciosa.",
        source: "Res. COFECI 326/92, art. 6º, XVII",
      },
      {
        text:
          "Publicidade enganosa, inclusive por omissão de dado essencial do " +
          "imóvel.",
        source: "CDC, art. 37, §1º e §3º",
      },
    ],
    note:
      "Toda informação precisa de um anúncio passa a fazer parte da oferta e do " +
      "contrato (CDC, art. 30). Por isso metragem, vagas e prazo de entrega " +
      "saem do memorial e do contrato, e você aprova cada número antes de " +
      "publicar.",
  },
  checklist: {
    lead:
      "Abra a página do empreendimento ou o anúncio atual ao lado e marque o " +
      "que ele já faz. Nada do que você marcar sai do seu navegador.",
    items: [
      {
        id: "creci",
        text: "O número do CRECI aparece no anúncio.",
        source: "Decreto 81.871/78, art. 4º",
      },
      {
        id: "creci-j",
        text: "A imobiliária aparece com CRECI e a letra J depois do número.",
        source: "Res. COFECI 1.065/07, art. 5º, a",
      },
      {
        id: "creci-size",
        text: "O CRECI tem pelo menos um quarto do tamanho do nome da empresa.",
        source: "Res. COFECI 1.065/07, art. 5º, b",
      },
      {
        id: "registry",
        text: "Em lançamento, aparece o número do registro da incorporação e o cartório.",
        source: "Lei 4.591/64, art. 32, §3º",
      },
      {
        id: "authorization",
        text: "Existe autorização escrita ou contrato de mediação para cada imóvel anunciado.",
        source: "Decreto 81.871/78, art. 5º",
      },
      {
        id: "measures",
        text: "Metragem, vagas e prazo de entrega batem com o memorial e o contrato.",
        source: "CDC, art. 30",
      },
      {
        id: "illustrative",
        text: "Perspectivas e plantas decoradas estão marcadas como ilustrativas.",
        source: "CDC, art. 37, §1º",
      },
      {
        id: "omission",
        text: "O anúncio não esconde nada que deprecie o imóvel.",
        source: "Res. COFECI 326/92, art. 4º, II",
      },
    ],
    disclaimer:
      "O checklist cobre só uma parte das normas e não substitui consulta ao " +
      "CRECI da sua região nem ao jurídico da incorporadora.",
  },
  seo: [
    {
      title: "Uma página por empreendimento",
      text:
        "Cada lançamento ou imóvel de alto padrão ganha a própria página, com o " +
        "nome do empreendimento e do bairro que o comprador digita.",
    },
    {
      title: "Dados estruturados",
      text:
        "Marcação schema.org do empreendimento e da imobiliária, com endereço, " +
        "número de unidades e CRECI.",
    },
    {
      title: "Planta que abre no celular",
      text:
        "Planta desenhada em vetor, que fica nítida em qualquer tela e não " +
        "obriga ninguém a baixar um PDF.",
    },
    {
      title: "Página pronta para anúncio",
      text:
        "O destino dos anúncios no Google e no Instagram, com medição de quantas " +
        "pessoas clicaram para agendar visita.",
    },
  ],
  privacy: {
    title: "Contato sem cadastro longo",
    text:
      "Para agendar visita, a página pede nome e telefone. Renda, CPF e " +
      "documentos ficam para a conversa com o corretor, quando houver uma " +
      "proposta.",
  },
  steps: [
    {
      title: "Conversa",
      text:
        "Qual empreendimento ou imóvel, quem é o comprador e o que já existe de " +
        "material: memorial, plantas, imagens, tabela.",
    },
    {
      title: "Texto e números",
      text:
        "A gente escreve a partir do memorial. Você confere cada medida, porque " +
        "o que está no anúncio vira parte da oferta.",
    },
    {
      title: "Construção",
      text:
        "Design, planta em vetor e teste em celulares diferentes, numa página de " +
        "revisão antes de ir ao ar.",
    },
    {
      title: "No ar",
      text:
        "A página vai para o seu domínio, com medição de cliques em agendar " +
        "visita e em falar no WhatsApp.",
    },
  ],
  bring: [
    "CRECI da imobiliária e dos corretores que vão aparecer.",
    "Em lançamento, o número do registro da incorporação e o cartório.",
    "Memorial descritivo e plantas da unidade.",
    "Imagens do projeto, já com a informação de quais são ilustrativas.",
    "Endereço do terreno e do decorado, com horário de visita.",
    "Autorização escrita do proprietário, quando for imóvel de terceiro.",
    "Domínio e acesso ao Perfil da Empresa no Google, se já existirem.",
  ],
  faq: [
    {
      question: "O CRECI precisa aparecer na landing page?",
      answer:
        "Precisa. O Decreto 81.871/78 manda o número de inscrição constar de " +
        "toda propaganda (art. 4º), e a Resolução COFECI 1.065/07 vale para " +
        "qualquer tipo de divulgação (art. 7º).",
    },
    {
      question: "Tem tamanho mínimo para o CRECI?",
      answer:
        "Tem. A sigla CRECI, o número e a letra J não podem ter tamanho menor que " +
        "25% do nome ou da razão social da imobiliária (Res. COFECI 1.065/07, " +
        "art. 5º, b).",
    },
    {
      question: "O que precisa aparecer num lançamento?",
      answer:
        "O número do registro da incorporação e o cartório onde ele foi feito " +
        "(Lei 4.591/64, art. 32, §3º). A lei dos corretores também proíbe " +
        "anunciar imóvel em condomínio sem esse número (Lei 6.530/78, art. 20, V).",
    },
    {
      question: "Sou obrigado a mostrar o preço?",
      answer:
        "Nenhuma lei ou resolução do COFECI obriga a mostrar preço no anúncio. " +
        "Se mostrar, ele passa a fazer parte da oferta (CDC, art. 30).",
    },
    {
      question: "E se o rádio ou o vídeo falar do imóvel?",
      answer:
        "Em mídia falada, o número do CRECI tem de ser dito em voz alta (Res. " +
        "COFECI 1.065/07, art. 7º).",
    },
  ],
  sources: [
    {
      label: "Decreto nº 81.871/1978",
      href: "https://www.planalto.gov.br/ccivil_03/decreto/antigos/d81871.htm",
    },
    {
      label: "Resolução COFECI nº 1.065/2007",
      href: "https://intranet.cofeci.gov.br/arquivos/legislacao/resolucao_1065_07_nova.pdf",
    },
    {
      label: "Resolução COFECI nº 326/1992",
      href: "https://intranet.cofeci.gov.br/arquivos/legislacao/resolucao_326_1992.pdf",
    },
    {
      label: "Lei nº 4.591/1964",
      href: "https://www.planalto.gov.br/ccivil_03/leis/l4591.htm",
    },
    {
      label: "Código de Defesa do Consumidor",
      href: "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm",
    },
  ],
  cta: {
    title: "Conte qual é o empreendimento",
    text:
      "Bairro, tipo de unidade e o material que já existe. A resposta vem com " +
      "uma proposta de estrutura para a página e o orçamento.",
  },
};
