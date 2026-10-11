import type { Dictionary } from "./types";

export const en: Dictionary = {
  htmlLang: "en",
  ogLocale: "en_US",

  site: {
    name: "stellift",
    tagline: "Software boutique",
    description: "Software boutique. Web, mobile, infrastructure and data.",
    metaDescription:
      "Software boutique: web products, mobile apps, cloud and data. A "+
      "ready-made system to start fast, or software built on demand when "+
      "the case is yours alone.",
    email: "ola@stellift.dev",
    linkedin: "https://www.linkedin.com/company/stellift",
    github: "https://github.com/stellift",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Contributions", href: "#clients" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      code: "WEB",
      category: "Development",
      title: "Web products",
      text: "Sites, systems and digital products for the web.",
    },
    {
      code: "MOB",
      category: "Mobile",
      title: "Mobile apps",
      text: "Apps for iOS and Android.",
    },
    {
      code: "CLD",
      category: "Infrastructure and data",
      title: "Cloud and data",
      text: "Cloud infrastructure and data work.",
    },
  ],

  clients: [
    { name: "Google", logo: "google", note: "Contributions to V8" },
    { name: "Mozilla", logo: "mozilla", note: "Contributions to Servo" },
    { name: "Woovi", logo: "woovi" },
    { name: "Flop Robux", logo: "floprobux" },
  ],

  portfolio: [
    {
      name: "LumniHub",
      text:
        "A platform to create, sell and affiliate courses and ebooks. It has a " +
        "store, a checkout builder, modules with lessons and quizzes, an " +
        "affiliate program with payment split, and financial and reporting " +
        "dashboards for the producer.",
      stack: "React, Vite, React Router, React Aria, Supabase, Zod",
      href: "https://app.lumnihub.com",
    },
    {
      name: "BloxHarbor",
      text: "An online store for Roblox accounts, with fast delivery and protected purchases.",
      stack: "Next.js",
      href: "https://bloxharbor.com",
    },
    {
      name: "PDV",
      text:
        "A desktop point of sale for building supply stores, with a companion " +
        "scanning app. The catalogue is priced in the units the trade uses, " +
        "sales take fractional quantities, cash is counted per shift, there is " +
        "customer credit, NFC-e invoicing, and charging by Pix on screen or on " +
        "the card machine.",
      stack: "C++20, Qt6, SQLite, Go, Spring Boot, React Native, Next.js",
      href: "https://stellift.dev/pivenda",
    },
  ],

  about: {
    text:
      "stellift is a software boutique, and we like building software the right " +
      "way. There is a ready-made system when you want to start fast without a " +
      "long project, and there is software built on demand when the case is " +
      "yours alone.",
  },

  contact: {
    heading: "Let's get the idea off the ground",
    lead: "Write telling us what you want to build.",
    channels: [
      { kind: "email", label: "Email", value: "ola@stellift.dev", href: "mailto:ola@stellift.dev" },
      {
        kind: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/company/stellift",
        href: "https://www.linkedin.com/company/stellift",
      },
      { kind: "code", label: "Code", value: "github.com/stellift", href: "https://github.com/stellift" },
    ],
  },

  ui: {
    header: {
      cta: "Start a conversation",
      toLightTheme: "Switch to the light theme",
      toDarkTheme: "Switch to the dark theme",
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLabel: "Language",
    },
    hero: {
      title: "Software built to measure,",
      titleAccent: "from the idea to orbit.",
      fieldStart: "IDEA",
      fieldEnd: "ORBIT",
      primary: "Let's talk",
      secondary: "See services",
    },
    services: { title: "What we do" },
    clients: {
      title: "Companies we contributed to",
      hint: "Swipe to see more companies.",
      footnote:
        "Google, Mozilla and other names mentioned are trademarks of their " +
        "respective owners. The logos appear only to identify the organizations.",
      pause: "Pause the carousel",
      play: "Play the carousel",
      previous: "Previous company",
      next: "Next company",
    },
    portfolio: {
      title: "Projects by stellift",
      cta: "View project",
      footnote:
        "LumniHub, BloxHarbor and PDV are stellift projects. Names and brands " +
        "mentioned are the property of their respective owners.",
    },
    about: { title: "About stellift" },
    contact: { title: "Let's get the idea off the ground" },
    card: { action: "Talk about this" },
    footer: {
      description:
        "Software boutique: we design, build and maintain ambitious digital " +
        "products.",
      ariaLabel: "Footer",
      navigate: "Browse",
      contact: "Contact",
    },
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "What do you want to build?",
      messagePlaceholder: "Today's challenge, what already exists, the ideal timeline.",
      nameError: "Tell us your name so we know what to call you.",
      emailError: "Check the email address: something looks missing.",
      messageError: "Tell us a bit more: context changes the answer.",
      submit: "Review and send",
      note:
        "When you review, we open your email with the message ready. Nothing " +
        "goes out before you see it.",
      readyBadge: "Message ready",
      readyText:
        "Review it below. We open your email client with everything written; if " +
        "you prefer, copy the text and send it however you like.",
      openEmail: "Open in my email",
      copy: "Copy message",
      copied: "Copied",
      edit: "Edit",
      bodyName: "Name",
      bodyEmail: "Email",
      bodyMessage: "Message",
      subject: "Contact from the site",
    },
  },
};
