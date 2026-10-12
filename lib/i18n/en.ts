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
    { label: "Tools", href: "#tools" },
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
      name: "BloxHarbor",
      role: "stellift project",
      text: "An online store for Roblox accounts, with fast delivery and protected purchases.",
      stack: "Next.js",
      href: "https://bloxharbor.com",
      shot: "/shots/bloxharbor.webp",
    },
    {
      name: "PDV",
      role: "stellift project",
      text:
        "A desktop point of sale for building supply stores, with a companion " +
        "scanning app. The catalogue is priced in the units the trade uses, " +
        "sales take fractional quantities, cash is counted per shift, there is " +
        "customer credit, NFC-e invoicing, and charging by Pix on screen or on " +
        "the card machine.",
      stack: "C++20, Qt6, SQLite, Go, Spring Boot, React Native, Next.js",
      href: "https://stellift.dev/pivenda",
      shot: "/shots/pdv.webp",
    },
    {
      name: "orce.me",
      role: "stellift project",
      text:
        "Quoting system for small businesses. Gathers products, services and " +
        "client details into a branded PDF proposal, without rebuilding a " +
        "spreadsheet for every request.",
      stack: "Nuxt, Vue, TypeScript",
      shot: "/shots/orce.webp",
    },
    {
      name: "LumniHub",
      role: "Built a large part of the product",
      text:
        "A platform to create, sell and affiliate courses and ebooks. It has a " +
        "store, a checkout builder, modules with lessons and quizzes, an " +
        "affiliate program with payment split, and financial and reporting " +
        "dashboards for the producer.",
      stack: "React, Vite, React Router, React Aria, Supabase, Zod",
      href: "https://app.lumnihub.com",
      shot: "/shots/lumnihub.webp",
    },
    {
      name: "ServeCommand",
      role: "Product development",
      text:
        "Business software for contractors. Pricing rules, connected job " +
        "records, memberships and payments in a single flow.",
      href: "https://servecommand.com",
      shot: "/shots/servecommand.webp",
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

  tools: {
    title: "The sums that come before the quote",
    lead:
      "None of them is hard, and it is rare to meet anyone who ran them " +
      "before signing. Then the SLA becomes a surprise, the hour costs more " +
      "than agreed and the manual process keeps billing all year. They run " +
      "in your browser, no sign-up.",
    cta: "Open tool",
    backLabel: "Back to stellift",
    allLabel: "All tools",
    units: { day: "d", hour: "h", minute: "min", second: "s" },
    items: {
      sla: {
        name: "SLA uptime calculator",
        tagline: "How much downtime each uptime level actually allows.",
        metaTitle: "SLA calculator: how much downtime fits in 99.9% uptime",
        metaDescription:
          "Turn an uptime SLA into real downtime per day, week, month and year. " +
          "See what 99%, 99.9% or 99.99% actually allow.",
        intro:
          "Nobody signs a contract thinking in percentages. They think in how long " +
          "the system can be down before the agreement breaks, which is the number " +
          "this page gives back.",
        fields: [{ key: "uptime", label: "Committed uptime (%)", hint: "e.g. 99.9" }],
        results: [
          { key: "day", label: "Per day" },
          { key: "week", label: "Per week" },
          { key: "month", label: "Per month (30 days)" },
          { key: "year", label: "Per year (365 days)" },
        ],
        note:
          "The monthly window uses a 30-day month and the yearly one 365 days. Real " +
          "contracts usually measure calendar months and exclude maintenance windows.",
      },
      "hourly-cost": {
        name: "Developer hourly cost calculator",
        tagline: "What an hour of engineering really costs.",
        metaTitle: "Developer hourly cost calculator",
        metaDescription:
          "Work out the real cost of an hour of development from monthly cost, " +
          "charges and productive hours. The maths runs in your browser.",
        intro:
          "Charges, leave and meetings land on the bill the same way. Divide the " +
          "full monthly cost by the hours that became delivered work last month " +
          "and you get the number that matters when you quote.",
        fields: [
          { key: "monthly", label: "Monthly cost", hint: "Salary or contract value" },
          { key: "charges", label: "Charges and benefits (%)", hint: "On the monthly value" },
          { key: "hours", label: "Productive hours per month", hint: "Net of meetings and leave" },
        ],
        results: [
          { key: "hour", label: "Cost per hour" },
          { key: "day", label: "Cost per 6-hour day" },
          { key: "month", label: "Monthly cost with charges" },
        ],
        note:
          "Charge rates vary by contract type and jurisdiction. Use the numbers from " +
          "your own case, not a market average.",
      },
      automation: {
        name: "Automation savings calculator",
        tagline: "What a manual process costs per year.",
        metaTitle: "Automation savings calculator",
        metaDescription:
          "Estimate what a manual process costs per month and per year from the " +
          "hours it takes and your team hourly cost, and what automating it frees up.",
        intro:
          "Every manual process has a yearly price, and almost nobody has worked " +
          "theirs out. Add up the hours it eats each month and multiply by the " +
          "hourly cost of whoever sits down to do it.",
        fields: [
          { key: "hours", label: "Hours per month on the process" },
          { key: "cost", label: "Cost per hour" },
          { key: "reduction", label: "Expected reduction (%)", hint: "How much of the work disappears" },
        ],
        results: [
          { key: "month", label: "Current cost per month" },
          { key: "saveMonth", label: "Saved per month" },
          { key: "saveYear", label: "Saved per year" },
        ],
        note:
          "The expected reduction is your own assumption. This does not estimate the " +
          "cost of building or maintaining the automation.",
      },
    },
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
      title: "Projects and experience",
      cta: "View project",
      footnote:
        "Each card states the role on that project. Names and brands mentioned " +
        "are the property of their respective owners.",
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
