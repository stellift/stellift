export const slug = "landing-page-para-medicos";

export const locale = "pt-BR";

export const demoPath = "/exemplos/clinica-dermatologia";

export const metaTitle = "Landing page para médicos e clínicas, dentro do CFM";

export const metaDescription =
  "Landing page para consultório e clínica médica: CRM e RQE no lugar certo, " +
  "valores e convênios à vista, agendamento pelo WhatsApp e SEO local.";

export const title = "Landing page para médicos e clínicas";

export const lead =
  "Uma página feita para quem achou você no Google ou no Instagram e está " +
  "decidindo se marca a consulta. Ela responde o que o paciente quer saber, " +
  "mostra seu registro do jeito que a Resolução CFM 2.336/2023 pede e deixa o " +
  "botão de agendar sempre à mão.";

export const mailSubject = "Landing page para consultório";

export const questions = [
  {
    title: "Quem vai me atender?",
    text:
      "Nome, foto, formação, número do CRM e, se você for especialista, a " +
      "especialidade com o RQE. A resolução exige isso, e o paciente pode " +
      "conferir esses números na busca de médicos do CFM.",
  },
  {
    title: "Quanto custa e aceita meu plano?",
    text:
      "Convênios aceitos e, se você quiser mostrar, o valor da consulta " +
      "particular, as formas de pagamento e como funciona o reembolso.",
  },
  {
    title: "Onde fica?",
    text:
      "Endereço, mapa, estacionamento, acesso sem degraus e horário de " +
      "atendimento. Detalhe que parece pequeno e faz o paciente desistir " +
      "quando falta.",
  },
  {
    title: "Como eu marco?",
    text:
      "WhatsApp, telefone ou agenda online. No celular o botão fica preso " +
      "na parte de baixo da tela, então ele aparece em qualquer ponto da " +
      "leitura.",
  },
];

export const rules = {
  includes: [
    {
      text:
        "Nome, número do CRM e a palavra MÉDICO ou MÉDICA. Se houver " +
        "especialidade registrada, ela vem com o número do RQE.",
      source: "art. 4º",
    },
    {
      text:
        "Em clínica, o nome do estabelecimento com o cadastro no CRM e o " +
        "nome do diretor técnico-médico com o CRM dele.",
      source: "art. 5º",
    },
    {
      text:
        "Valor da consulta e formas de pagamento, se você quiser divulgar.",
      source: "art. 9º, VI",
    },
    {
      text:
        "Antes e depois só no formato que a resolução pede: com texto " +
        "educativo, resultados bons e ruins, paciente não identificado e foto " +
        "sem edição.",
      source: "art. 14, II",
    },
  ],
  avoids: [
    {
      text: "Prometer ou insinuar resultado de tratamento.",
      source: "art. 11, XII",
    },
    {
      text:
        "Atribuir a você capacidade privilegiada numa técnica, mesmo que " +
        "você seja o único a fazê-la.",
      source: "art. 11, IX",
    },
    {
      text: "Títulos como \"melhor médico\" ou \"médico do ano\".",
      source: "art. 11, XIII",
    },
    {
      text:
        "Depoimento de paciente com adjetivo de superioridade ou que sugira " +
        "promessa de resultado.",
      source: "art. 14, II, g",
    },
  ],
  note:
    "A gente monta a página dentro dessas regras, mas quem responde pela " +
    "publicidade perante o CRM é o médico e, no caso de clínica, o diretor " +
    "técnico-médico (art. 3º). Por isso nenhum texto vai ao ar sem a sua " +
    "aprovação.",
};

export const seo = [
  {
    title: "Busca local",
    text:
      "Endereço, telefone e horário escritos igual ao seu Perfil da Empresa " +
      "no Google, para os dois contarem a mesma história.",
  },
  {
    title: "Dados estruturados",
    text:
      "Marcação schema.org de Physician ou MedicalClinic, que diz aos " +
      "buscadores quem atende, onde e em que horário.",
  },
  {
    title: "Uma página por procedimento",
    text:
      "Se você atende mais de uma coisa, cada procedimento pode ganhar a " +
      "própria página, com o nome que o paciente digita na busca.",
  },
  {
    title: "Rápida no celular",
    text:
      "A página é desenhada primeiro para o celular e testada em conexão " +
      "lenta, que é onde ela costuma ser aberta pela primeira vez.",
  },
];

export const privacy = {
  title: "Dado de saúde pede cuidado",
  text:
    "Para a LGPD, informação sobre saúde é dado pessoal sensível. Por isso o " +
    "contato pela página pede só nome e telefone, e não pergunta sintoma nem " +
    "motivo da consulta. O paciente conta isso para você, no consultório.",
};

export const steps = [
  {
    title: "Conversa",
    text:
      "Quem você quer atender, quais procedimentos entram e o que você já " +
      "tem: fotos, logotipo, domínio, perfil no Google.",
  },
  {
    title: "Texto",
    text:
      "A gente escreve a partir da conversa. Você revisa e aprova cada " +
      "frase, porque a responsabilidade pelo conteúdo é sua.",
  },
  {
    title: "Construção",
    text:
      "Design, código e teste em celulares diferentes, com a página " +
      "publicada num endereço de revisão antes de ir ao ar.",
  },
  {
    title: "No ar",
    text:
      "A página vai para o seu domínio, com medição de quantas pessoas " +
      "clicaram para agendar ou chamar no WhatsApp.",
  },
];

export const faq = [
  {
    question: "Quanto custa?",
    answer:
      "Depende de quantas seções a página tem, de quantos procedimentos " +
      "ganham página própria e de quem produz as fotos. O orçamento sai " +
      "depois da primeira conversa, com escopo e prazo por escrito.",
  },
  {
    question: "Posso mostrar fotos de antes e depois?",
    answer:
      "Pode, desde a Resolução CFM 2.336/2023, mas com condições: a foto vem " +
      "acompanhada de texto educativo, mostra também resultados " +
      "insatisfatórios e complicações, não identifica o paciente, não pode " +
      "ser editada e precisa de autorização dele (art. 14).",
  },
  {
    question: "Posso divulgar o valor da consulta?",
    answer:
      "Pode. A resolução permite informar valores e formas de pagamento " +
      "(art. 9º, VI). Desconto em campanha também é permitido, desde que não " +
      "esteja ligado a venda casada ou prêmio (art. 9º, VIII).",
  },
  {
    question: "Depoimento de paciente é permitido?",
    answer:
      "É, desde que seja sóbrio: sem adjetivo que indique superioridade e sem " +
      "sugerir promessa de resultado (art. 14, II, g).",
  },
  {
    question: "Vocês escrevem os textos?",
    answer:
      "Escrevemos, a partir de uma conversa com você. Você revisa tudo antes " +
      "de publicar, porque quem responde pela publicidade perante o CRM é o " +
      "médico ou o diretor técnico-médico da clínica.",
  },
  {
    question: "Serve para clínica com vários médicos?",
    answer:
      "Serve. A página da clínica traz o diretor técnico-médico e o cadastro " +
      "do estabelecimento no CRM, e cada médico do corpo clínico aparece com " +
      "o próprio CRM e RQE.",
  },
];

export const sources = [
  {
    label: "Resolução CFM nº 2.336/2023",
    href: "https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2023/2336_2023.pdf",
  },
  {
    label: "LGPD, Lei nº 13.709/2018",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
  },
];

export const anatomy = [
  {
    x: 11.7,
    y: 30,
    text: "Título sobre o atendimento, sem prometer resultado.",
    source: "art. 11, XII",
  },
  {
    x: 75.0,
    y: 7.5,
    text: "Botão de agendar no topo. No celular ele vira uma barra fixa no rodapé da tela.",
    source: null,
  },
  {
    x: 56.4,
    y: 56.3,
    text: "Nome, a palavra MÉDICA, CRM, especialidade e RQE na mesma linha de leitura.",
    source: "art. 4º",
  },
  {
    x: 56.4,
    y: 62.9,
    text: "Valor da consulta particular, para o paciente não precisar perguntar.",
    source: "art. 9º, VI",
  },
  {
    x: 56.4,
    y: 74.5,
    text: "Endereço escrito igual ao do Perfil da Empresa no Google.",
    source: null,
  },
  {
    x: 10.9,
    y: 88.9,
    text: "Dois caminhos: quem já decidiu agenda, quem ainda não decidiu lê os tratamentos.",
    source: null,
  },
];

export const checklist = [
  {
    id: "crm",
    text: "Seu nome aparece com o número do CRM e a palavra MÉDICO ou MÉDICA.",
    source: "art. 4º, I",
  },
  {
    id: "rqe",
    text: "Onde você se apresenta como especialista, o RQE aparece junto da especialidade.",
    source: "art. 4º, II",
  },
  {
    id: "two",
    text: "A página anuncia no máximo duas especialidades.",
    source: "art. 13, §1º, f",
  },
  {
    id: "postgrad",
    text: "Pós-graduação sem RQE aparece seguida de NÃO ESPECIALISTA, em caixa alta.",
    source: "art. 13, §1º, d e e",
  },
  {
    id: "director",
    text: "Se for clínica, aparece o diretor técnico-médico com o CRM dele.",
    source: "art. 5º",
  },
  {
    id: "promise",
    text: "Nenhuma frase promete resultado ou chama você de \"o melhor\".",
    source: "art. 11, XII e XVI",
  },
  {
    id: "beforeafter",
    text: "Se há antes e depois, há também casos insatisfatórios e texto educativo junto.",
    source: "art. 14, II, a e b",
  },
  {
    id: "form",
    text: "O formulário de contato não pergunta sintoma nem motivo da consulta.",
    source: "boa prática pela LGPD",
  },
];

export const bring = [
  "Número do CRM e, se tiver, da especialidade com RQE.",
  "Se for clínica, o cadastro dela no CRM e os dados do diretor técnico-médico.",
  "Endereço, horários e os convênios que você aceita.",
  "Valor da consulta particular, se quiser divulgar.",
  "Os procedimentos que você quer que apareçam, em ordem de importância.",
  "Fotos suas e do consultório. Se ainda não tiver, a página pode começar sem e receber depois.",
  "Domínio e acesso ao Perfil da Empresa no Google, se já existirem.",
];
