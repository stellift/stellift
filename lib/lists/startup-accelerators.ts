export const slug = "aceleradoras-de-startups-no-brasil";

export const locale = "pt-BR";

export const metaTitle =
  "Aceleradoras de startups no Brasil: lista de programas, fundos e investidores";

export const metaDescription =
  "Lista de aceleradoras, fundos de venture capital, investidores-anjo e programas " +
  "públicos que apoiam startups no Brasil, com base, estágio e o que cada um faz.";

export const title = "Aceleradoras de startups no Brasil";

export const intro =
  "Quem está levantando a primeira rodada perde semanas só descobrindo quem " +
  "existe. Esta é a lista que a gente consulta: aceleradoras, fundos, redes de " +
  "anjo e programas públicos que investem em startup brasileira, com o que cada " +
  "um faz e onde fica.";

export type ListEntry = {
  name: string;
  url: string | null;
  cells: string[];
};

export type ListSection = {
  title: string;
  intro: string;
  columns: string[];
  entries: ListEntry[];
};

export const sourceNote = "Dados conferidos nos sites oficiais em outubro de 2026. Condições (ticket, equity, estágio, prazos) mudam a cada turma ou fundo, então sempre confirme na fonte.";

export const sourceRepo =
  "https://github.com/criskell/awesome-startup-accelerators";

export const entryCount = 45;

export const sections: ListSection[] = [
  {
    "title": "Aceleradoras",
    "intro": "",
    "columns": [
      "Nome",
      "Base",
      "O que é"
    ],
    "entries": [
      {
        "name": "WOW",
        "url": "https://www.wow.ac/",
        "cells": [
          "São Paulo (Cubo Itaú) e Porto Alegre (Instituto Caldeira)",
          "Aceleradora independente de early stage. Investimento inicial de até R$ 500 mil, com equity definido em rodada futura e possibilidade de follow-on. Rede de mais de 500 investidores-anjo que também atuam como mentores. Portfólio de 200 startups, 17 exits e R$ 36 milhões investidos. Não exige mudança de cidade."
        ]
      },
      {
        "name": "ACE Ventures",
        "url": "https://aceventures.com.br/",
        "cells": [
          "São Paulo",
          "Aceleradora e gestora de venture capital fundada em 2012. Atua em pre-seed e seed, agnóstica em setor, com histórico forte em fintech, healthtech, agtech e SaaS B2B."
        ]
      },
      {
        "name": "Baita",
        "url": "https://baita.ac/",
        "cells": [
          "Campinas (SP), no Parque Tecnológico da Unicamp",
          "Mais de 10 anos de atuação, com aceleração de startups, programas de inovação para empresas e rede de mentores e parceiros."
        ]
      },
      {
        "name": "Darwin Startups",
        "url": "https://www.darwinstartups.com/",
        "cells": [
          "Florianópolis (SC)",
          "Turmas de aceleração com investimento e conexão com grandes empresas para PoCs e novos negócios. 14 turmas, 100 startups no portfólio e 11 exits."
        ]
      },
      {
        "name": "Troposlab",
        "url": "https://troposlab.com/",
        "cells": [
          "Minas Gerais",
          "Consultoria de inovação que também roda programas de aceleração sem equity, muitos em parceria com Sebrae, FIEMG e empresas."
        ]
      },
      {
        "name": "Wayra",
        "url": "https://wayra.com/",
        "cells": [
          "São Paulo",
          "Braço de corporate venture capital do grupo Telefónica/Vivo. Investe em pre-seed e seed com potencial de negócio com a Vivo."
        ]
      },
      {
        "name": "Eretz.bio",
        "url": "https://www.eretz.bio/",
        "cells": [
          "São Paulo",
          "Hub de inovação em saúde do Hospital Israelita Albert Einstein. Aceleração, validação de tecnologias no hospital e programa voltado ao SUS."
        ]
      },
      {
        "name": "Antler Brasil",
        "url": "https://www.antler.co/location/brazil",
        "cells": [
          "São Paulo",
          "Residência presencial de company building, aberta até para quem ainda só tem ideia ou é founder solo. Pacote padrão de R$ 2 milhões: R$ 1 milhão em notas conversíveis mais até R$ 1 milhão em co-investimento no primeiro ano. Entrar na residência não garante investimento."
        ]
      }
    ]
  },
  {
    "title": "Impacto social e ambiental",
    "intro": "",
    "columns": [
      "Nome",
      "Base",
      "O que é"
    ],
    "entries": [
      {
        "name": "Artemisia",
        "url": "https://artemisia.org.br/",
        "cells": [
          "Nacional",
          "Pioneira no apoio a negócios de impacto no Brasil, desde 2005. Mais de 900 iniciativas apoiadas em saúde, educação, inclusão financeira e outros."
        ]
      },
      {
        "name": "Quintessa",
        "url": "https://www.quintessa.org.br/",
        "cells": [
          "Nacional",
          "Atua desde 2009 com negócios de impacto e deeptechs, hoje com foco em clima, segurança hídrica e ciência e tecnologia climáticas. Mais de 500 negócios apoiados."
        ]
      },
      {
        "name": "Vale do Dendê",
        "url": "https://www.valedodende.org/",
        "cells": [
          "Salvador (BA)",
          "Aceleração, formação e hubs para empreendedores negros e de periferia, em economia criativa, gastronomia e tecnologia. Programas gratuitos."
        ]
      }
    ]
  },
  {
    "title": "Fundos de venture capital early stage",
    "intro": "",
    "columns": [
      "Nome",
      "Base",
      "Estágio e tese"
    ],
    "entries": [
      {
        "name": "Canary",
        "url": "https://www.canary.com.br/",
        "cells": [
          "São Paulo",
          "Primeiro cheque em pre-seed e seed na América Latina. Atua como co-fundadora das empresas investidas, com comunidade de founders."
        ]
      },
      {
        "name": "Astella",
        "url": "https://www.astella.com.br/",
        "cells": [
          "São Paulo",
          "Investe o mais cedo possível até a Série A. Agnóstica em setor, com teses em SaaS, marketplaces e consumo."
        ]
      },
      {
        "name": "Monashees",
        "url": "https://www.monashees.com/",
        "cells": [
          "São Paulo, Cidade do México e San Francisco",
          "Fundada em 2005, uma das maiores gestoras de VC do Brasil. Investe em founders latino-americanos, de pre-seed e seed até rodadas maiores, em fintech, SaaS com IA, saúde e consumo."
        ]
      },
      {
        "name": "Kaszek",
        "url": "https://kaszek.com/",
        "cells": [
          "América Latina",
          "Gestora criada por empreendedores de tecnologia, atua como sócia de founders na região, de estágios iniciais a crescimento."
        ]
      },
      {
        "name": "Maya Capital",
        "url": "https://maya.capital/",
        "cells": [
          "São Paulo",
          "Fundo de early stage para founders que lideram mudanças na América Latina."
        ]
      },
      {
        "name": "ONEVC",
        "url": "https://onevc.vc/",
        "cells": [
          "América Latina",
          "Foco em seed. Critérios: mercado grande, time excepcional e produto transformador."
        ]
      },
      {
        "name": "Alexia Ventures",
        "url": "https://www.alexia.vc/",
        "cells": [
          "América Latina",
          "Early stage, primeiro cheque em software inteligente, IA aplicada, infraestrutura de dados e deeptech."
        ]
      },
      {
        "name": "Caravela Capital",
        "url": "https://caravela.capital/",
        "cells": [
          "Brasil",
          "Gestora brasileira de early stage, com foco em empresas da América Latina."
        ]
      },
      {
        "name": "DOMO.VC",
        "url": "https://domo.vc/",
        "cells": [
          "Brasil",
          "Gestora brasileira que investe em startups de tecnologia em toda a América Latina."
        ]
      },
      {
        "name": "Honey Island Capital",
        "url": "https://honeyisland.capital/",
        "cells": [
          "Brasil",
          "Investe em tecnologia early stage na América Latina."
        ]
      },
      {
        "name": "Valor Capital Group",
        "url": "https://valorcapitalgroup.com/",
        "cells": [
          "Estados Unidos e Brasil",
          "Fundo cross-border fundado em 2011, acompanha founders de startup a scale-up em consumer internet e software corporativo."
        ]
      },
      {
        "name": "Headline",
        "url": "https://headline.com/",
        "cells": [
          "Global, com time no Brasil",
          "Gestora global que lidera rodadas em software, IA, consumo e fintech."
        ]
      },
      {
        "name": "KPTL",
        "url": "https://www.kptl.com.br/",
        "cells": [
          "São Paulo",
          "Venture capital em startups de tecnologia, com foco em deeptech, impacto e crescimento sustentável."
        ]
      },
      {
        "name": "Bossa Invest",
        "url": "https://bossainvest.com/",
        "cells": [
          "São Paulo",
          "Gestora e plataforma que conecta investidores a startups early stage, com alto volume de aportes."
        ]
      }
    ]
  },
  {
    "title": "Fundos setoriais",
    "intro": "",
    "columns": [
      "Nome",
      "Setor",
      "O que é"
    ],
    "entries": [
      {
        "name": "SP Ventures",
        "url": "https://spventures.com.br/",
        "cells": [
          "Agrifoodtech e climatetech",
          "Investe na interseção entre segurança alimentar e crise climática. Mais de US$ 100 milhões investidos em mais de 50 empresas na América Latina."
        ]
      }
    ]
  },
  {
    "title": "Fundos de impacto",
    "intro": "",
    "columns": [
      "Nome",
      "Base",
      "O que é"
    ],
    "entries": [
      {
        "name": "Vox Capital",
        "url": "https://voxcapital.com.br/",
        "cells": [
          "São Paulo",
          "Plataforma de investimento de impacto com venture capital, crédito privado e gestão de portfólio, em inclusão financeira, clima, saúde, educação e bioeconomia."
        ]
      },
      {
        "name": "Positive Ventures",
        "url": "https://positive.ventures/",
        "cells": [
          "São Paulo e San Francisco",
          "Gestora de impacto que investe cedo em founders com soluções tecnológicas para desafios sociais e ambientais."
        ]
      }
    ]
  },
  {
    "title": "Investidores-anjo e redes",
    "intro": "",
    "columns": [
      "Nome",
      "Base",
      "O que é"
    ],
    "entries": [
      {
        "name": "Anjos do Brasil",
        "url": "https://anjosdobrasil.net/",
        "cells": [
          "Nacional",
          "Organização sem fins lucrativos que fomenta o investimento anjo no país, com disseminação de conhecimento e grupos regionais."
        ]
      },
      {
        "name": "BR Angels",
        "url": "https://brangels.global/",
        "cells": [
          "Nacional",
          "Rede de executivos e empresários que investem e apoiam startups com rede de contatos."
        ]
      },
      {
        "name": "Gávea Angels",
        "url": "https://www.gaveaangels.org/",
        "cells": [
          "Rio de Janeiro",
          "Associação de investidores-anjo ativa desde 2002, nascida no Instituto Gênesis. Investe em startups em estágio inicial, com análise feita pelos próprios membros."
        ]
      }
    ]
  },
  {
    "title": "Equity crowdfunding",
    "intro": "Plataformas reguladas pela CVM, onde startups captam de muitos investidores pessoa física:",
    "columns": [
      "Nome",
      "O que é"
    ],
    "entries": [
      {
        "name": "Captable",
        "url": "https://captable.com.br/",
        "cells": [
          "investimento em startups e também operações de dívida."
        ]
      },
      {
        "name": "Kria",
        "url": "https://www.kria.vc/",
        "cells": [
          "rodadas de equity crowdfunding para startups brasileiras."
        ]
      },
      {
        "name": "EqSeed",
        "url": "https://eqseed.com/",
        "cells": [
          "plataforma 100% online de investimento em startups e empresas privadas."
        ]
      }
    ]
  },
  {
    "title": "Programas públicos e gratuitos",
    "intro": "",
    "columns": [
      "Nome",
      "O que é"
    ],
    "entries": [
      {
        "name": "InovAtiva Brasil",
        "url": "https://www.inovativabrasil.com.br/",
        "cells": [
          "Um dos maiores programas de aceleração do país, gratuito e sem equity, com apoio do governo federal e edições nacionais e regionais. Site fora do ar durante o período eleitoral, com retorno previsto para 25/10/2026."
        ]
      },
      {
        "name": "BNDES Garagem",
        "url": "https://www.bndes.gov.br/wps/portal/site/home/transparencia/garagem",
        "cells": [
          "Programa do BNDES para startups em criação e aceleração, sem participação societária."
        ]
      },
      {
        "name": "Finep",
        "url": "https://www.finep.gov.br/",
        "cells": [
          "Agência federal de fomento à inovação. O Finep Startup investe diretamente em startups de base tecnológica, com chamadas periódicas."
        ]
      },
      {
        "name": "FAPESP PIPE",
        "url": "https://fapesp.br/pipe/",
        "cells": [
          "Subvenção para pesquisa inovadora em pequenas empresas do estado de São Paulo, sem equity."
        ]
      },
      {
        "name": "Sebrae Startups",
        "url": "https://sebrae.com.br/subsites/sebrae-startups",
        "cells": [
          "Trilhas, conteúdos e programas do Sebrae para startups em todos os estágios."
        ]
      },
      {
        "name": "Google for Startups Brasil",
        "url": "https://startup.google.com/intl/pt-BR_br/",
        "cells": [
          "Programas, mentoria, créditos de nuvem e ferramentas do Google, sem equity."
        ]
      },
      {
        "name": "FIEMG Lab",
        "url": "https://fiemglab.com.br/",
        "cells": [
          "Hub de inovação aberta da FIEMG que conecta startups à indústria mineira."
        ]
      }
    ]
  },
  {
    "title": "Hubs e ecossistema",
    "intro": "Não são aceleradoras nem investidores, mas são portas de entrada comuns:",
    "columns": [
      "Nome",
      "O que é"
    ],
    "entries": [
      {
        "name": "Cubo Itaú",
        "url": "https://cubo.itau/",
        "cells": [
          "São Paulo. Comunidade sem fins lucrativos que conecta startups com tração a grandes empresas e investidores."
        ]
      },
      {
        "name": "Liga Ventures",
        "url": "https://liga.ventures/",
        "cells": [
          "inovação aberta, com scouting, desafios e PoCs entre corporações e startups."
        ]
      },
      {
        "name": "Distrito",
        "url": "https://www.distrito.me/",
        "cells": [
          "dados e inteligência sobre o ecossistema brasileiro de startups."
        ]
      },
      {
        "name": "Endeavor Brasil",
        "url": "https://brasil.endeavor.org/",
        "cells": [
          "apoio a scale-ups, com mentoria de empreendedores e rede global."
        ]
      }
    ]
  }
];
