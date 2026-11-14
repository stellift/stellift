import { dentalSchema } from "@/app/exemplos/clinica-odontologica/schema";
import type { Niche } from "@/app/[lang]/_landing/types";

export const dentists: Niche = {
  id: "dentists",
  slug: "landing-page-para-dentistas",
  metaTitle: "Landing page para dentistas e clínicas odontológicas",
  metaDescription:
    "Landing page para dentista e clínica odontológica dentro do Código de Ética " +
    "do CFO: CRO e especialidades à vista, responsável técnico e SEO local.",
  title: "Landing page para dentistas e clínicas odontológicas",
  eyebrow: "Para dentistas e clínicas",
  audience: "Cirurgiões-dentistas e clínicas odontológicas",
  lead:
    "Uma página que apresenta a equipe e os tratamentos do jeito que o Código de " +
    "Ética Odontológica pede: CRO de cada dentista, especialidade só onde há " +
    "registro e o responsável técnico da clínica. Sem preço, sem avaliação " +
    "grátis e sem promessa de resultado.",
  mailSubject: "Landing page para clínica odontológica",
  card: {
    name: "Dentistas e clínicas odontológicas",
    summary:
      "Equipe com CRO e especialidade registrada, responsável técnico e nada do " +
      "que o Código de Ética Odontológica proíbe, como preço e avaliação grátis.",
  },
  demo: {
    path: "/exemplos/clinica-odontologica",
    label: "exemplo · clínica de implantes e ortodontia",
    image: "/shots/exemplo-odontologia.webp",
    ogImage: "/shots/exemplo-odontologia.jpg",
    imageAlt:
      "Topo da página de exemplo: tratamentos, equipe com CRO e especialidade e responsável técnica",
    schema: dentalSchema,
    schemaText:
      "Este é o trecho de dados estruturados que está na página de exemplo. Ele " +
      "diz que ali existe uma clínica odontológica, com endereço, horário de " +
      "segunda a sábado, telefone e inscrição no CRO.",
  },
  questions: {
    title: "O que o paciente quer saber antes de marcar",
    lead: "São quatro perguntas, e a página responde todas logo no começo.",
    items: [
      {
        title: "Quem vai me atender?",
        text:
          "Nome, CRO e especialidade de cada dentista. Numa clínica que anuncia " +
          "especialidades, essa lista é obrigatória.",
      },
      {
        title: "Vocês fazem o que eu preciso?",
        text:
          "Tratamentos agrupados sob a especialidade de quem os faz: implante em " +
          "Implantodontia, aparelho em Ortodontia.",
      },
      {
        title: "Atende meu convênio?",
        text: "Convênios e credenciamentos, que o Código lista entre o que pode aparecer.",
      },
      {
        title: "Onde fica e como marco?",
        text:
          "Endereço, horário e botão de marcar consulta, que no celular fica " +
          "preso no rodapé da tela.",
      },
    ],
  },
  anatomy: [
    {
      x: 11.2,
      y: 30.6,
      text: "Título que diz quem faz cada tratamento, sem prometer resultado.",
      source: "Res. CFO-196/2019, art. 2º, §1º",
    },
    {
      x: 56.4,
      y: 37.5,
      text: "Nome e inscrição da clínica no CRO.",
      source: "CEO, art. 43",
    },
    {
      x: 56.4,
      y: 50.6,
      text: "Cada dentista com CRO e especialidade registrada.",
      source: "CEO, art. 43, §2º",
    },
    {
      x: 56.4,
      y: 68.4,
      text: "Responsável técnica com o número de inscrição.",
      source: "CEO, art. 43",
    },
    {
      x: 11,
      y: 79.6,
      text: "Botão de marcar consulta, sem avaliação grátis e sem preço.",
      source: "CEO, art. 20, IX e art. 44, I",
    },
  ],
  rules: {
    title: "Dentro do Código de Ética Odontológica",
    lead:
      "O Código de Ética Odontológica (Resolução CFO-118/2012) tem um capítulo " +
      "sobre anúncio e publicidade, alterado pela Resolução CFO-271/2025, e a " +
      "Resolução CFO-196/2019 trata de imagens. Cada item leva o artigo de onde " +
      "saiu.",
    includes: [
      {
        text:
          "Nome e número de inscrição no CRO, com a profissão: cirurgião-dentista.",
        source: "CEO, art. 43",
      },
      {
        text: "Em clínica, também o nome e a inscrição do responsável técnico.",
        source: "CEO, art. 43",
      },
      {
        text:
          "Lista dos especialistas da clínica com as qualificações, para cada " +
          "especialidade anunciada.",
        source: "CEO, art. 43, §2º",
      },
      {
        text: "Endereço, telefone, horário, convênios e credenciamentos.",
        source: "CEO, art. 43, §1º, IV",
      },
    ],
    avoids: [
      {
        text: "Preço, serviço gratuito ou forma de pagamento.",
        source: "CEO, art. 44, I",
      },
      {
        text: "Consulta ou diagnóstico gratuito ou \"sem compromisso\".",
        source: "CEO, art. 20, IX",
      },
      {
        text: "Chamar alguém de especialista sem inscrição da especialidade no CRO.",
        source: "CEO, art. 24",
      },
      {
        text: "A palavra \"popular\".",
        source: "CEO, art. 44, VII",
      },
      {
        text:
          "Sensacionalismo, autopromoção, concorrência desleal ou promessa de " +
          "resultado.",
        source: "Res. CFO-196/2019, art. 2º, §1º",
      },
      {
        text: "Brinde, prêmio ou sorteio de tratamento.",
        source: "CEO, art. 20, VIII",
      },
    ],
    note:
      "O Código diz que os donos da clínica, o responsável técnico e os " +
      "dentistas envolvidos respondem juntos por publicidade irregular (art. " +
      "45). Por isso nenhum texto vai ao ar sem a aprovação do responsável " +
      "técnico. O CFO abriu em 2025 um grupo para reescrever esse capítulo, e a " +
      "página acompanha a mudança quando ela sair.",
  },
  checklist: {
    lead:
      "Abra o site ou o perfil da clínica ao lado e marque o que ele já faz. Nada " +
      "do que você marcar sai do seu navegador.",
    items: [
      {
        id: "cro",
        text: "Cada dentista aparece com nome, CRO e a palavra cirurgião-dentista.",
        source: "CEO, art. 43",
      },
      {
        id: "rt",
        text: "A clínica mostra o responsável técnico com a inscrição dele.",
        source: "CEO, art. 43",
      },
      {
        id: "specialty",
        text: "A palavra especialista só aparece para quem tem a especialidade inscrita no CRO.",
        source: "CEO, art. 24",
      },
      {
        id: "list",
        text: "Para cada especialidade anunciada, a página mostra o especialista da equipe.",
        source: "CEO, art. 43, §2º",
      },
      {
        id: "price",
        text: "Não há preço, parcelamento ou forma de pagamento no anúncio.",
        source: "CEO, art. 44, I",
      },
      {
        id: "free",
        text: "Não há \"avaliação gratuita\" nem \"consulta sem compromisso\".",
        source: "CEO, art. 20, IX",
      },
      {
        id: "popular",
        text: "A palavra \"popular\" não aparece.",
        source: "CEO, art. 44, VII",
      },
      {
        id: "images",
        text: "Imagens de casos têm o nome e o CRO do dentista que fez o tratamento.",
        source: "Res. CFO-196/2019, art. 4º",
      },
    ],
    disclaimer:
      "O checklist cobre só uma parte do Código e das resoluções e não substitui " +
      "consulta à comissão de ética do seu CRO.",
  },
  seo: [
    {
      title: "Uma página por tratamento",
      text:
        "Implante, aparelho e lente de contato dental são buscas diferentes. " +
        "Cada tratamento pode ganhar a própria página, sob a especialidade de " +
        "quem o faz.",
    },
    {
      title: "Dados estruturados",
      text:
        "Marcação schema.org de Dentist com endereço, horário e telefone, que " +
        "diz aos buscadores o que a clínica é e onde fica.",
    },
    {
      title: "Busca local",
      text:
        "Endereço e telefone iguais aos do Perfil da Empresa no Google, para " +
        "quem procura dentista no bairro.",
    },
    {
      title: "Rápida no celular",
      text:
        "A página é desenhada primeiro para o celular e testada em conexão " +
        "lenta, que é onde ela costuma ser aberta pela primeira vez.",
    },
  ],
  privacy: {
    title: "Dado de saúde pede cuidado",
    text:
      "Para a LGPD, informação sobre saúde é dado pessoal sensível. O contato " +
      "pela página pede só nome e telefone, e não pergunta o que está doendo. " +
      "Isso o paciente conta na consulta.",
  },
  steps: [
    {
      title: "Conversa",
      text:
        "Quais tratamentos entram, quem é o especialista de cada um e o que a " +
        "clínica já tem: fotos, logotipo, domínio.",
    },
    {
      title: "Texto",
      text:
        "A gente escreve a partir da conversa. O responsável técnico revisa e " +
        "aprova cada frase antes de publicar.",
    },
    {
      title: "Construção",
      text:
        "Design, código e teste em celulares diferentes, numa página de revisão " +
        "antes de ir ao ar.",
    },
    {
      title: "No ar",
      text:
        "A página vai para o seu domínio, com medição de quantas pessoas " +
        "clicaram para marcar consulta ou chamar no WhatsApp.",
    },
  ],
  bring: [
    "CRO de cada dentista que vai aparecer e a inscrição da clínica.",
    "Especialidades inscritas no CRO, por dentista.",
    "Nome e CRO do responsável técnico.",
    "Tratamentos que você quer na página, em ordem de importância.",
    "Endereço, horários e os convênios que a clínica aceita.",
    "Fotos da equipe e da clínica, se já existirem.",
    "Domínio e acesso ao Perfil da Empresa no Google, se já existirem.",
  ],
  faq: [
    {
      question: "Posso colocar o preço do tratamento?",
      answer:
        "Não. O Código de Ética proíbe publicidade com preço, serviço gratuito ou " +
        "forma de pagamento (art. 44, I). O custo é informado ao paciente antes " +
        "do tratamento, no consultório (art. 19).",
    },
    {
      question: "Posso oferecer avaliação gratuita?",
      answer:
        "Não pode divulgar. O Código veda divulgar ou oferecer consultas e " +
        "diagnósticos gratuitos ou sem compromisso (art. 20, IX).",
    },
    {
      question: "Posso mostrar antes e depois?",
      answer:
        "Com cuidado. O Código ainda lista \"antes e depois\" entre as infrações " +
        "(art. 44, I e XII), e a Resolução CFO-196/2019 autorizou imagens do " +
        "diagnóstico e da conclusão do tratamento, feitas pelo próprio dentista, " +
        "com termo de consentimento do paciente (art. 2º). Vale consultar o seu " +
        "CRO antes de publicar.",
    },
    {
      question: "Quantas especialidades posso anunciar?",
      answer:
        "Só as que estão inscritas no CRO (art. 43, §1º, II). E a Consolidação " +
        "das Normas do CFO veda a inscrição de mais de duas especialidades por " +
        "dentista (art. 38, §1º).",
    },
    {
      question: "Posso postar vídeo do procedimento?",
      answer:
        "Não. A Resolução CFO-196/2019 proíbe vídeos e imagens do andamento do " +
        "procedimento, exceto em publicação científica (art. 3º).",
    },
  ],
  sources: [
    {
      label: "Código de Ética Odontológica",
      href: "https://website.cfo.org.br/wp-content/uploads/2018/03/codigo_etica.pdf",
    },
    {
      label: "Resolução CFO-196/2019",
      href: "https://website.cfo.org.br/resolucao-cfo-196-2019/",
    },
    {
      label: "Resolução CFO-271/2025",
      href: "https://sistemas.cfo.org.br/visualizar/atos/RESOLU%C3%87%C3%83O/SEC/2025/271",
    },
  ],
  cta: {
    title: "Conte como é a sua clínica",
    text:
      "Cidade, especialidades da equipe e tratamentos que você quer destacar. A " +
      "resposta vem com uma proposta de estrutura para a página e o orçamento.",
  },
};
