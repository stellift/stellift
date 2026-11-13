export type BrandLogoKey =
  | "google"
  | "mozilla"
  | "woovi"
  | "haskell"
  | "floprobux"
  | "servecommand";

export type ServiceCode = "WEB" | "MOB" | "CLD";

export type ChannelKind = "email" | "linkedin" | "code";


export type ToolCopy = {
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
    metaTitle: string;
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
  clients: ReadonlyArray<{
    name: string;
    logo?: BrandLogoKey;
    note?: string;
    featured?: boolean;
  }>;
  servicesExtra: {
    label: string;
    note: string;
    items: ReadonlyArray<{ title: string; text: string }>;
  };
  portfolio: ReadonlyArray<{
    name: string;
    role: string;
    text: string;
    stack?: string;
    href?: string;
    shot?: string;
    tags?: ReadonlyArray<string>;
    detail?: {
      summary: string;
      ctaLabel?: string;
      gallery: ReadonlyArray<{ src: string; caption: string }>;
      facts: ReadonlyArray<{ label: string; value: string }>;
      highlights: ReadonlyArray<{ title: string; text: string }>;
    };
  }>;
  about: { text: string };
  mission: {
    title: string;
    lead: string;
    values: ReadonlyArray<{ title: string; text: string }>;
  };
  talent: {
    title: string;
    lead: string;
    hiring: {
      eyebrow: string;
      title: string;
      text: string;
      cta: string;
      subject: string;
    };
  };
  contact: {
    heading: string;
    lead: string;
    scarcity: string;
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
    rangeJoin: string;
    units: { day: string; hour: string; minute: string; second: string };
    items: {
      sla: ToolCopy;
      "downtime-cost": ToolCopy;
      "hourly-cost": ToolCopy;
      "team-cost": ToolCopy;
      estimate: ToolCopy;
      automation: ToolCopy;
    };
  };
  blog: {
    eyebrow: string;
    title: string;
    lead: string;
    metaTitle: string;
    metaDescription: string;
    feedLabel: string;
    publishedLabel: string;
    updatedLabel: string;
    backLabel: string;
    moreLabel: string;
    copyLabel: string;
    copiedLabel: string;
    draftLabel: string;
    empty: string;
    navLabel: string;
  };

  ui: {
    a11y: { skipToContent: string };
    header: {
      cta: string;
      lightTheme: string;
      darkTheme: string;
      menu: string;
      openMenu: string;
      closeMenu: string;
      switchLabel: string;
      themeLabel: string;
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
    portfolio: {
      title: string;
      cta: string;
      footnote: string;
      filterLabel: string;
      allLabel: string;
      filters: ReadonlyArray<{ id: string; label: string }>;
      openLabel: string;
      closeLabel: string;
      dialogLabel: string;
      galleryLabel: string;
      prevLabel: string;
      nextLabel: string;
    };
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
