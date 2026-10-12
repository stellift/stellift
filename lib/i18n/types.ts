export type BrandLogoKey = "google" | "mozilla" | "woovi" | "floprobux";

export type ServiceCode = "WEB" | "MOB" | "CLD";

export type ChannelKind = "email" | "linkedin" | "code";


type ToolCopy = {
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  fields: ReadonlyArray<{ key: string; label: string; hint?: string }>;
  results: ReadonlyArray<{ key: string; label: string }>;
  note: string;
};

export type Dictionary = {
  htmlLang: string;
  ogLocale: string;
  site: {
    name: string;
    tagline: string;

    description: string;

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
    role: string;
    text: string;
    stack?: string;
    href?: string;
    shot?: string;
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
  tools: {
    title: string;
    lead: string;
    cta: string;
    backLabel: string;
    allLabel: string;
    units: { day: string; hour: string; minute: string; second: string };
    items: {
      sla: ToolCopy;
      "hourly-cost": ToolCopy;
      automation: ToolCopy;
    };
  };
  ui: {
    header: {
      cta: string;
      toLightTheme: string;
      toDarkTheme: string;
      menu: string;
      openMenu: string;
      closeMenu: string;
      switchLabel: string;
    };
    hero: {
      title: string;
      titleAccent: string;

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
