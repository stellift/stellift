import type { Dictionary } from "./types";

export const en: Dictionary = {
  htmlLang: "en",
  ogLocale: "en_US",

  site: {
    name: "stellift",
    metaTitle:
      "Custom software for web, mobile and cloud | stellift",
    tagline: "Custom software",
    description: "Custom software for web, mobile and cloud.",
    metaDescription:
      "Custom software development: web, mobile, cloud and data. A " +
      "small team, with contributions to Chrome's V8 and Mozilla's " +
      "Servo.",
    email: "ola@stellift.dev",
    linkedin: "https://www.linkedin.com/company/stellift",
    github: "https://github.com/stellift",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Contributions", href: "#clients" },
    { label: "Our talent", href: "#talent" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Tools", href: "#tools" },
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      code: "WEB",
      category: "Development",
      title: "Web products",
      text: 
        "Store, checkout, dashboard and marketplace. Pix and card " +
        "payments, orders that update on screen, reports for whoever " +
        "decides.",
    },
    {
      code: "MOB",
      category: "Mobile",
      title: "Mobile apps",
      text: 
        "iOS and Android, and the app that becomes an arm of a bigger " +
        "system, like the scanner that closes a sale at the counter.",
    },
    {
      code: "CLD",
      category: "Infrastructure and data",
      title: "Cloud and data",
      text: 
        "AWS with Terraform, database, queue and deploy. Infrastructure " +
        "written as code, so it comes back up the same way.",
    },
  ],

  servicesExtra: {
    label: "We also do",
    note: "Usually bundled with a project, but you can hire it on its own.",
    items: [
      {
        title: "Technical writing",
        text:
          "API docs, architecture notes and the README nobody ever got " +
          "around to.",
      },
      {
        title: "Code review",
        text:
          "We read the code you already have and tell you what is risky.",
      },
      {
        title: "Performance",
        text:
          "Slow system. We measure where it stalls before touching " +
          "anything.",
      },
      {
        title: "Legacy migration",
        text:
          "Getting the system off the version nobody has updated in years, " +
          "without stopping the business.",
      },
      {
        title: "Automation and WhatsApp",
        text:
          "A WhatsApp bot that answers customers and tells them when the " +
          "order moves. And systems that start talking to each other with " +
          "nobody in between.",
      },
      {
        title: "Technical consulting",
        text: "A second opinion before you sign with someone.",
      },
    ],
  },

  clients: [
    {
      name: "Google",
      logo: "google",
      featured: true,
      note:
        "Contributions to V8, the JavaScript engine behind Chrome, and to " +
        "Flutter.",
    },
    {
      name: "Mozilla",
      logo: "mozilla",
      featured: true,
      note: "Contributions to Servo, a browser engine written in Rust.",
    },
    {
      name: "Woovi",
      logo: "woovi",
      featured: true,
      note: "People on our team have worked there.",
    },
    {
      name: "Haskell",
      logo: "haskell",
      note:
        "Contributions to GHC, the compiler for Haskell, the language used " +
        "by Meta/Facebook.",
    },
    { name: "Flop Robux", logo: "floprobux" },
    { name: "ServeCommand", logo: "servecommand" },
  ],

  portfolio: [
    {
      name: "BloxHarbor",
      role: "Design, code and operation",
      text:
        "An online store for Roblox accounts. The account lands right " +
        "away and the purchase is protected.",
      stack: "Next.js",
      href: "https://bloxharbor.com",
      shot: "/shots/bloxharbor.webp",
    },
    {
      name: "PDV",
      role: "Design, code and operation",
      text:
        "A desktop point of sale for building supply stores, with a scanning " +
        "app on the phone. The catalogue prices things in the units the trade " +
        "uses and sells them in fractions. It closes the till per shift, keeps " +
        "the customer on file with their credit, issues NFC-e receipts and " +
        "charges by Pix on screen or on the card machine.",
      stack: "C++20, Qt6, SQLite, Go, Spring Boot, React Native, Next.js",
      href: "https://stellift.dev/pivenda",
      shot: "/shots/pdv.webp",
    },
    {
      name: "orce.me",
      role: "Design, code and operation",
      text:
        "Quoting system for small businesses. Gathers products, services and " +
        "client details into a branded PDF proposal, without rebuilding a " +
        "spreadsheet for every request.",
      stack: "Nuxt, Vue, TypeScript",
      shot: "/shots/orce.webp",
    },
    {
      name: "Craftance",
      role: "Design, code and operation",
      text:
        "A marketplace where developers build a profile, sell digital products " +
        "and take on freelance projects. Money for each milestone sits in escrow " +
        "until the delivery is approved.",
      stack: "Elixir, Phoenix, Next.js, PostgreSQL, React Native, Rust",
      shot: "/shots/craftance.webp",
    },
    {
      name: "HeartBit",
      role: "Design, code and operation",
      text:
        "A dating app for Brazilian Christians, verified by the person's own " +
        "church. Eight profiles a day, three open conversations at most, and " +
        "someone from the community sees that you are talking, never what you say.",
      stack: "Elixir, Phoenix, React, TanStack Router, Vue 3, PostgreSQL",
      shot: "/shots/heartbit.webp",
    },
    {
      name: "ZapZap",
      role: "Experiment, no client",
      text:
        "An alternative WhatsApp Desktop client in Rust, aiming to fit in 10 MB. " +
        "The interface draws straight to X11 through syscalls, with no graphics " +
        "toolkit, and the scope is narrow on purpose: Brazil only, client side only.",
      stack: "Rust, X11 via syscalls, whatsapp-rust",
      href: "https://github.com/stellift/zapzap",
      shot: "/shots/zapzap.webp",
    },
    {
      name: "Neohor",
      role: "Design, code and operation",
      text:
        "A store for game accounts. The buyer searches, fills a cart " +
        "and pays by Pix or card, then follows the order to delivery " +
        "while the screen updates itself over WebSocket. Signing in is " +
        "social, no password to invent.",
      stack: "Next.js, NestJS, Prisma, PostgreSQL, TurboRepo, Terraform, AWS",
      shot: "/shots/neohor.webp",
    },
    {
      name: "LumniHub",
      role: "A large part of the product",
      text:
        "A platform to create, sell and affiliate courses and ebooks. " +
        "The producer builds the course in modules with lessons and " +
        "quizzes, designs their own checkout and opens the store. " +
        "Affiliates they recruit are paid by a split at checkout, and " +
        "the finances and reports live in one dashboard.",
      stack: "React, Vite, React Router, React Aria, Supabase, Zod",
      href: "https://app.lumnihub.com",
      shot: "/shots/lumnihub.webp",
    },
    {
      name: "ServeCommand",
      role: "Building the product",
      text:
        "Business software for contractors. The contractor sets the " +
        "pricing rules and logs each job, with one record pulling the " +
        "next. Memberships and payments run in the same flow.",
      href: "https://servecommand.com",
      shot: "/shots/servecommand.webp",
    },
  ],

  about: {
    text:
      "The senior who designs the system is the one who writes the code " +
      "and runs it in production. No approval layer in between, no " +
      "junior learning on your project. The difference is " +
      "accountability, not headcount.",
  },

  mission: {
    title: "Building software with love",
    lead: "Four things we take seriously.",
    values: [
      {
        title: "Honesty",
        text: "If the deadline is not realistic, we say so before we start.",
      },
      {
        title: "Quality",
        text:
          "Nothing reaches production without someone else reading the code.",
      },
      {
        title: "Commitment",
        text:
          "We only take work that fits the calendar. And we deliver what we " +
          "agreed on.",
      },
      {
        title: "Respect",
        text:
          "We explain what we are doing in plain words, without the jargon.",
      },
    ],
  },

  talent: {
    title: "We understand what the AI wrote",
    lead:
      "The best people to steer AI are the ones who can read what it writes. " +
      "Ours have landed contributions in Chrome's V8, Mozilla's Servo and " +
      "Haskell's GHC, and they are the ones reviewing the code before it " +
      "becomes your system.",
    hiring: {
      eyebrow: "Work with us",
      title: "We are looking for people like that",
      text:
        "If you work on compilers, runtimes, databases or systems that cannot " +
        "go down, send us your GitHub and tell us what you have worked on.",
      cta: "Send my GitHub",
      subject: "I want to work at stellift",
    },
  },

  contact: {
    heading: "Let's get the idea off the ground",
    lead: "Write telling us what you want to build.",
    scarcity: "Few projects at a time",
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
    rangeJoin: "to",
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
      "downtime-cost": {
        name: "Cost of downtime calculator",
        tagline: "What an outage costs, in money.",
        metaTitle: "Cost of downtime calculator: what an outage really costs",
        metaDescription:
          "Turn minutes of downtime into money lost. Enter monthly revenue, the hours " +
          "your operation runs and how long the outage lasted.",
        intro:
          "Every system outage ends in the same question: how much did we stop " +
          "earning? With the month's revenue and the hours the operation sells in, " +
          "the answer comes out in money, not guesswork.",
        fields: [
          { key: "revenue", label: "Revenue in the month" },
          { key: "openHours", label: "Operating hours per month", hint: "24x7 is 720" },
          { key: "minutes", label: "Outage length (minutes)" },
        ],
        results: [
          { key: "minute", label: "Per minute down" },
          { key: "hour", label: "Per hour down" },
          { key: "total", label: "This outage" },
        ],
        note:
          "This assumes revenue spread evenly across operating hours. Peak trading and " +
          "contractual penalties sit outside it and usually weigh more.",
      },
      "team-cost": {
        name: "Project team cost calculator",
        tagline: "What a team costs from start to finish.",
        metaTitle: "Project team cost calculator for software work",
        metaDescription:
          "Add up what a project team costs per week, per person and in total, from " +
          "team size, hourly cost and the planned duration.",
        intro:
          "Software budgets disappear in two places, team size and duration. Move both " +
          "here before you promise a date.",
        fields: [
          { key: "people", label: "People on the team" },
          { key: "cost", label: "Cost per hour", hint: "Use the result from the other calculator" },
          { key: "hours", label: "Hours per week, per person" },
          { key: "weeks", label: "Project weeks" },
        ],
        results: [
          { key: "total", label: "Total cost" },
          { key: "week", label: "Per week" },
          { key: "person", label: "Per person, over the project" },
        ],
        note:
          "Labour only. Licences, infrastructure and the client-side time spent " +
          "following the work sit outside this.",
      },
      estimate: {
        name: "PERT estimate calculator",
        tagline: "Three guesses become a defensible range.",
        metaTitle: "Three-point PERT estimate calculator",
        metaDescription:
          "Turn optimistic, likely and pessimistic cases into a PERT estimate with " +
          "standard deviation and confidence ranges. The classic three-point formula.",
        intro:
          "A single number hides the risk. Three-point estimation weighs the likely " +
          "case four times heavier than the extremes and hands back the deviation.",
        fields: [
          { key: "optimistic", label: "Optimistic", hint: "Days, if everything goes right" },
          { key: "likely", label: "Likely" },
          { key: "pessimistic", label: "Pessimistic" },
        ],
        results: [
          { key: "expected", label: "PERT estimate" },
          { key: "range", label: "68% range" },
          { key: "safe", label: "95% range" },
        ],
        note:
          "Formula: (optimistic + 4 x likely + pessimistic) / 6, with a standard " +
          "deviation of (pessimistic - optimistic) / 6. Use it per task, not per project.",
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

  blog: {
    eyebrow: "Blog",
    title: "Technical notes",
    lead:
      "Problems that came up in stellift projects, with the code that fixed them.",
    metaTitle: "Technical notes | stellift",
    metaDescription:
      "Technical notes from stellift on CSS, computational geometry and " +
      "development tooling.",
    feedLabel: "Subscribe via RSS",
    publishedLabel: "Published",
    updatedLabel: "Updated",
    backLabel: "All notes",
    moreLabel: "More notes",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    draftLabel: "Draft",
    empty: "Nothing published yet.",
    navLabel: "Technical notes",
  },

  ui: {
    a11y: { skipToContent: "Skip to content" },
    header: {
      cta: "Start a conversation",
      lightTheme: "Light theme",
      darkTheme: "Dark theme",
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLabel: "Language",
      themeLabel: "Theme",
    },
    hero: {
      title: "We build software",
      titleAccent: "like it is our own.",
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
        "We design, build and run custom software for web, mobile and " +
        "cloud.",
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
