export type BrandLogoKey = "google" | "mozilla" | "woovi" | "floprobux";

export type ServiceCode = "WEB" | "MOB" | "CLD";

export type ChannelKind = "email" | "linkedin" | "code";

export type Dictionary = {
  htmlLang: string;
  ogLocale: string;
  site: {
    name: string;
    tagline: string;
    /** Subtítulo do hero: curto. */
    description: string;
    /** Meta description: ~155 caracteres, é o snippet do buscador. */
    metaDescription: string;
    email: string;
    linkedin: string;
    github: string;
  };
  nav: ReadonlyArray<{ label: string; href: string }>;
  services: ReadonlyArray<{
    code: ServiceCode;
    category: string;
    title: string;
    text: string;
  }>;
  clients: ReadonlyArray<{ name: string; logo?: BrandLogoKey; note?: string }>;
  portfolio: ReadonlyArray<{
    name: string;
    text: string;
    stack?: string;
    href?: string;
  }>;
  about: { text: string };
  contact: {
    heading: string;
    lead: string;
    channels: ReadonlyArray<{
      kind: ChannelKind;
      label: string;
      value: string;
      href: string;
    }>;
  };
  ui: {
    header: {
      cta: string;
      menu: string;
      openMenu: string;
      closeMenu: string;
      switchLabel: string;
    };
    hero: {
      title: string;
      titleAccent: string;
      /** As duas palavras postas no campo do hero. */
      fieldStart: string;
      fieldEnd: string;
      primary: string;
      secondary: string;
    };
    services: { title: string };
    clients: {
      title: string;
      hint: string;
      footnote: string;
      pause: string;
      play: string;
      previous: string;
      next: string;
    };
    portfolio: { title: string; cta: string; footnote: string };
    about: { title: string };
    contact: { title: string };
    card: { action: string };
    footer: {
      description: string;
      ariaLabel: string;
      navigate: string;
      contact: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      nameError: string;
      emailError: string;
      messageError: string;
      submit: string;
      note: string;
      readyBadge: string;
      readyText: string;
      openEmail: string;
      copy: string;
      copied: string;
      edit: string;
      bodyName: string;
      bodyEmail: string;
      bodyMessage: string;
      subject: string;
    };
  };
};