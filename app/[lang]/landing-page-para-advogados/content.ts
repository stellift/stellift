import { lawFirmSchema } from "@/app/exemplos/escritorio-advocacia/schema";
import type { Niche } from "@/app/[lang]/_landing/types";

export const lawyers: Niche = {
  id: "lawyers",
  slug: "landing-page-para-advogados",
  metaTitle: "Landing page para advogados, dentro do Provimento 205",
  metaDescription:
    "Landing page para escritório de advocacia: sóbria, informativa e dentro do " +
    "Provimento 205/2021 da OAB, com áreas de atuação, OAB à vista e SEO local.",
  title: "Landing page para advogados e escritórios",
  eyebrow: "Para advogados e escritórios",
  audience: "Advogados e sociedades de advogados",
  lead:
    "Uma página sóbria e informativa, do jeito que o Provimento 205/2021 da OAB " +
    "pede: o que o escritório faz, quem são os advogados e como falar com eles. " +
    "Sem valor de honorários, sem promessa de resultado e sem lista de casos " +
    "ganhos.",
  mailSubject: "Landing page para escritório de advocacia",
  card: {
    name: "Advogados e escritórios",
    summary:
      "Áreas de atuação, OAB de cada advogado e conteúdo jurídico informativo, " +
      "sem nada do que o Provimento 205/2021 veda.",
  },
  demo: {
    path: "/exemplos/escritorio-advocacia",
    label: "exemplo · escritório de família e sucessões",
    image: "/shots/exemplo-advocacia.webp",
    ogImage: "/shots/exemplo-advocacia.jpg",
    imageAlt:
      "Topo da página de exemplo: áreas de atuação, nome do escritório, registro na OAB e advogados com OAB",
    schema: lawFirmSchema,
    schemaText:
      "Este é o trecho de dados estruturados que está na página de exemplo. Ele " +
      "diz que ali existe um escritório que atua em família e sucessões, com " +
      "endereço, horário, telefone e registro da sociedade na OAB.",
  },
  questions: {
    title: "O que a pessoa quer saber antes de ligar",
    lead:
      "A página responde estas quatro coisas sem pressionar ninguém, que é o " +
      "tom sóbrio que o provimento exige.",
    items: [
      {
        title: "Esse escritório cuida do meu tipo de caso?",
        text:
          "Áreas de atuação descritas com o nome que a pessoa usa: inventário, " +
          "testamento, divórcio, partilha.",
      },
      {
        title: "Quem vai me atender?",
        text:
          "Nome e número da OAB de cada advogado, com títulos acadêmicos que " +
          "possam ser comprovados.",
      },
      {
        title: "Como é o primeiro contato?",
        text:
          "WhatsApp, telefone ou e-mail. O provimento trata aplicativos de " +
          "mensagem como dado de contato, igual ao e-mail.",
      },
      {
        title: "Onde fica e em que língua atende?",
        text:
          "Endereço, horário de atendimento e idiomas, que o Código de Ética " +
          "lista entre o que pode constar na publicidade.",
      },
    ],
  },
  anatomy: [
    {
      x: 11.2,
      y: 31,
      text: "Título que só informa as áreas de atuação, sem incitar ninguém a entrar com ação.",
      source: "Prov. 205, art. 3º, §1º",
    },
    {
      x: 56.4,
      y: 35.5,
      text: "Nome da sociedade e número de registro na OAB.",
      source: "CED, art. 44",
    },
    {
      x: 56.4,
      y: 46,
      text: "Cada advogado com o número da OAB.",
      source: "CED, art. 44",
    },
    {
      x: 56.4,
      y: 56.7,
      text: "Horário e idiomas de atendimento.",
      source: "CED, art. 44, §1º",
    },
    {
      x: 11,
      y: 72.7,
      text: "Botão para agendar conversa, sem preço, sem gratuidade e sem desconto.",
      source: "Prov. 205, art. 3º, I",
    },
  ],
  rules: {
    title: "Dentro do Provimento 205/2021 da OAB",
    lead:
      "É a norma da OAB sobre publicidade e marketing jurídico, junto com o " +
      "capítulo de publicidade do Código de Ética e Disciplina. Cada item leva o " +
      "artigo de onde saiu.",
    includes: [
      {
        text: "Nome do advogado ou da sociedade e o número de inscrição na OAB.",
        source: "CED, art. 44",
      },
      {
        text:
          "Títulos acadêmicos, endereço, e-mail, site, horário de atendimento e " +
          "idiomas.",
        source: "CED, art. 44, §1º",
      },
      {
        text: "Fotos dos advogados e do escritório, e a identidade visual do escritório.",
        source: "Prov. 205, art. 5º, §2º",
      },
      {
        text: "WhatsApp e redes sociais como canal de contato.",
        source: "Prov. 205, art. 4º, §3º",
      },
      {
        text:
          "Conteúdo jurídico informativo, sem citar resultados, clientes, " +
          "valores ou gratuidade.",
        source: "Prov. 205, Anexo Único",
      },
    ],
    avoids: [
      {
        text: "Valor de honorários, forma de pagamento, gratuidade ou desconto.",
        source: "Prov. 205, art. 3º, I",
      },
      {
        text: "Promessa de resultado ou uso de caso concreto para oferecer serviço.",
        source: "Prov. 205, art. 6º",
      },
      {
        text: "Menção a decisões judiciais e resultados obtidos nos casos do escritório.",
        source: "Prov. 205, art. 4º, §2º",
      },
      {
        text: "Expressões de autoengrandecimento ou de comparação com outros escritórios.",
        source: "Prov. 205, art. 3º, IV",
      },
      {
        text:
          "Anúncio de especialidade sem título certificado ou notória " +
          "especialização.",
        source: "Prov. 205, art. 3º, III",
      },
      {
        text: "Logomarca e símbolos oficiais da OAB.",
        source: "Prov. 205, art. 5º, §2º",
      },
    ],
    note:
      "A OAB abriu uma revisão do provimento em 2025. Até sair um texto novo, " +
      "vale este, e a página acompanha a mudança quando ela vier. A " +
      "responsabilidade ética pela publicidade continua sendo do advogado, por " +
      "isso nenhum texto vai ao ar sem a sua aprovação.",
  },
  checklist: {
    lead:
      "Abra o site ou o perfil do escritório ao lado e marque o que ele já faz. " +
      "Nada do que você marcar sai do seu navegador.",
    items: [
      {
        id: "oab",
        text: "Cada advogado aparece com nome e número de inscrição na OAB.",
        source: "CED, art. 44",
      },
      {
        id: "society",
        text: "Se é sociedade, aparece o nome dela com o número de registro na OAB.",
        source: "CED, art. 44",
      },
      {
        id: "fees",
        text: "Não há valor de honorários, parcelamento, consulta grátis ou desconto.",
        source: "Prov. 205, art. 3º, I",
      },
      {
        id: "results",
        text: "Não há menção a causas ganhas, decisões obtidas ou valores recuperados.",
        source: "Prov. 205, art. 4º, §2º e art. 6º",
      },
      {
        id: "best",
        text: "Não há \"o melhor\", \"referência\" nem comparação com outros escritórios.",
        source: "Prov. 205, art. 3º, IV",
      },
      {
        id: "specialist",
        text: "A palavra especialista só aparece onde há título certificado.",
        source: "Prov. 205, art. 3º, III",
      },
      {
        id: "symbols",
        text: "A página não usa a logomarca nem os símbolos oficiais da OAB.",
        source: "Prov. 205, art. 5º, §2º",
      },
      {
        id: "incite",
        text: "Nenhuma chamada empurra a pessoa a processar alguém ou a contratar já.",
        source: "Prov. 205, art. 3º, §1º",
      },
    ],
    disclaimer:
      "O checklist cobre só uma parte do provimento e do Código de Ética e não " +
      "substitui consulta ao Tribunal de Ética da sua seccional.",
  },
  seo: [
    {
      title: "Busca, não anúncio ostensivo",
      text:
        "O provimento permite comprar palavra-chave quando o anúncio responde a " +
        "uma busca que a própria pessoa começou. A página é o destino desse " +
        "anúncio.",
    },
    {
      title: "Uma página por área",
      text:
        "Inventário, divórcio e testamento são buscas diferentes. Cada área pode " +
        "ganhar uma página própria, com conteúdo informativo.",
    },
    {
      title: "Dados estruturados",
      text:
        "Marcação schema.org de LegalService com endereço, horário e áreas, " +
        "que diz aos buscadores o que o escritório faz e onde.",
    },
    {
      title: "Busca local",
      text:
        "Endereço e telefone iguais aos do Perfil da Empresa no Google, para " +
        "quem procura advogado no bairro.",
    },
  ],
  privacy: {
    title: "O caso fica para a conversa",
    text:
      "O contato pela página pede só nome e telefone. A pessoa não precisa " +
      "descrever o problema num formulário: isso fica para a conversa com o " +
      "advogado.",
  },
  steps: [
    {
      title: "Conversa",
      text:
        "Áreas de atuação, quem são os advogados, o que o escritório já tem de " +
        "conteúdo e de identidade visual.",
    },
    {
      title: "Texto",
      text:
        "A gente escreve a partir da conversa. Você revisa cada frase, porque a " +
        "responsabilidade ética pela publicidade é do advogado.",
    },
    {
      title: "Construção",
      text:
        "Design, código e teste em celulares diferentes, com a página publicada " +
        "num endereço de revisão antes de ir ao ar.",
    },
    {
      title: "No ar",
      text:
        "A página vai para o seu domínio, com medição de quantas pessoas " +
        "clicaram para ligar ou chamar no WhatsApp.",
    },
  ],
  bring: [
    "Nome e número da OAB de cada advogado que vai aparecer.",
    "Se for sociedade, o número de registro dela na OAB.",
    "Áreas de atuação, na ordem em que você quer que apareçam.",
    "Títulos acadêmicos, com o comprovante à mão, porque a OAB pode pedir.",
    "Endereço, horário de atendimento e idiomas.",
    "Fotos dos advogados e do escritório, se já existirem.",
    "Domínio e acesso ao Perfil da Empresa no Google, se já existirem.",
  ],
  faq: [
    {
      question: "Posso colocar o valor da consulta?",
      answer:
        "Não. O provimento veda referência a valores de honorários, forma de " +
        "pagamento, gratuidade ou desconto como forma de captar cliente (art. " +
        "3º, I).",
    },
    {
      question: "Posso falar dos casos que ganhei?",
      answer:
        "Não. É vedado mencionar decisões judiciais e resultados obtidos nos " +
        "casos do escritório (art. 4º, §2º) e usar casos concretos para oferecer " +
        "serviço (art. 6º).",
    },
    {
      question: "Posso anunciar no Google?",
      answer:
        "Pode, quando o anúncio responde a uma busca iniciada pela pessoa e as " +
        "palavras escolhidas respeitam a ética (Anexo Único, aquisição de " +
        "palavra-chave). Anúncio ostensivo em plataforma de vídeo é proibido.",
    },
    {
      question: "Posso impulsionar posts no Instagram?",
      answer:
        "O Anexo Único permite impulsionamento desde que o conteúdo não seja " +
        "oferta de serviços jurídicos. Conteúdo informativo pode, anúncio de " +
        "serviço não.",
    },
    {
      question: "Posso ter um chatbot no site?",
      answer:
        "Pode, para responder as primeiras dúvidas e facilitar o contato, desde " +
        "que não substitua o atendimento pessoal do advogado (Anexo Único, " +
        "chatbot).",
    },
    {
      question: "Depoimento de cliente é permitido?",
      answer:
        "O provimento não usa a palavra depoimento, mas veda expressões de " +
        "autoengrandecimento (art. 3º, IV) e o uso de casos concretos (art. 6º). " +
        "Por isso a página não usa depoimento.",
    },
  ],
  sources: [
    {
      label: "Provimento OAB nº 205/2021",
      href: "https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021?provimentos=True",
    },
    {
      label: "Código de Ética e Disciplina da OAB",
      href: "https://www.oab.org.br/arquivos/resolucao-n-022015-ced-2030601765.pdf",
    },
  ],
  cta: {
    title: "Conte como é o seu escritório",
    text:
      "Áreas de atuação, cidade e quantos advogados vão aparecer. A resposta vem " +
      "com uma proposta de estrutura para a página e o orçamento.",
  },
};
