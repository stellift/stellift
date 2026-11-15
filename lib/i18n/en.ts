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
    { label: "Contributions", href: "#clients" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Tools", href: "#tools" },
    { label: "Our talent", href: "#talent" },
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
        "iOS and Android, and apps that are part of a bigger system, like the " +
        "scanner that closes a sale at the counter.",
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
        "Contributions to V8, the JavaScript engine behind Google Chrome, " +
        "and to Flutter.",
    },
    {
      name: "Mozilla",
      logo: "mozilla",
      featured: true,
      note:
        "Contributions to Servo, a browser engine written in " +
        "Rust.",
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
      name: "Pivenda",
      tags: ["desktop", "mobile"],
      role: "Design, code and operation",
      text:
        "A desktop point of sale for building supply stores, with a scanning " +
        "app on the phone. The catalogue prices things in the units the trade " +
        "uses and sells them in fractions. It closes the till per shift, keeps " +
        "the customer on file with their credit, issues NFC-e receipts and " +
        "charges by Pix on screen or on the card machine.",
      stack: "C++20, Qt6, SQLite, Go, Spring Boot, React Native, Next.js",
      href: "https://pivenda-demo.vercel.app",
      shot: "/shots/pivenda.webp",
      detail: {
        summary:
          "Built for building supply stores, where cement is sold by the " +
          "bag, tiles by the square metre and nails by the kilo, and regular " +
          "customers buy on credit. It runs on the till computer and keeps " +
          "the data there, so the store keeps selling when the internet goes " +
          "down.",
        ctaLabel: "Open the demo",
        gallery: [
          {
            src: "/shots/pivenda/01.webp",
            caption:
              "A sale in progress. Products can be found by name, SKU or " +
              "barcode.",
          },
          {
            src: "/shots/pivenda/02.webp",
            caption:
              "Closing a sale paid with more than one payment method.",
          },
          {
            src: "/shots/pivenda/03.webp",
            caption:
              "Report for the period, split by payment method.",
          },
          {
            src: "/shots/pivenda/04.webp",
            caption:
              "A product set up in the unit the store sells it in, with " +
              "minimum stock.",
          },
        ],
        facts: [
          { label: "Runs on", value: "Linux, Windows, macOS and FreeBSD" },
          { label: "Built on", value: "C++20, Qt6 and SQLite, on the store computer" },
          { label: "Internet", value: "Not required" },
          { label: "Tax documents", value: "NFC-e, NFS-e and CT-e via Focus NFe" },
        ],
        highlights: [
          {
            title: "Pix and card machine at the till",
            text:
              "The Pix QR code shows up on the till screen, the Stone card " +
              "machine is triggered by its serial number and bank slips go " +
              "through Asaas. If a payment does not go through, it is " +
              "refunded automatically.",
          },
          {
            title: "Orders over WhatsApp",
            text:
              "When a customer sends their list on WhatsApp, the system " +
              "turns the message into catalogue items and flags the ones it " +
              "was unsure about. The cashier reviews and confirms.",
          },
          {
            title: "Building assistant",
            text:
              "The salesperson types something like \"tile 20 m² of floor\" " +
              "and gets a suggested product and quantity. It runs on the " +
              "store computer, with no internet and no per-query cost.",
          },
          {
            title: "Phone as a barcode scanner",
            text:
              "With the app, the salesperson scans a barcode on the phone " +
              "and the item is added to the sale open at the till, over the " +
              "store Wi-Fi.",
          },
          {
            title: "Pix confirmed in 12 ms",
            text:
              "With the backend running, the payment notice arrives by " +
              "webhook. We measured 12 milliseconds between the notice and " +
              "the confirmation showing on the till screen.",
          },
          {
            title: "Scales on the serial port",
            text:
              "The weight comes straight from the scale. Toledo, Filizola, " +
              "Urano and Micheletti send data in different formats, so the " +
              "format is configurable.",
          },
        ],
      },
    },
    {
      name: "Charita",
      tags: ["web"],
      role: "Design, code and operation",
      text:
        "Donation platform for verified nonprofits, with no platform fee. It " +
        "accepts Pix, cards and monthly giving in more than one currency, " +
        "and also takes donations of books, computers and food. A separate " +
        "module pays for exams and consultations at partner clinics for " +
        "patients referred by nonprofits.",
      stack: "Elixir, Phoenix, PostgreSQL, Nuxt, Vue, Reka UI, Valibot, Caddy",
      shot: "/shots/charita.webp",
      detail: {
        summary:
          "Charita charges campaigns no fee, and you can check that in the " +
          "books: there is an account for the platform fee and it has never " +
          "received an entry. All money coming in or going out is recorded " +
          "with double-entry bookkeeping, and the database does not allow " +
          "records to be changed or deleted. The transparency page shows " +
          "that ledger directly, with no numbers typed in by hand.",
        gallery: [
          {
            src: "/shots/charita/01.webp",
            caption:
              "Campaign list. You can filter by cause and enter how much you " +
              "want to give.",
          },
          {
            src: "/shots/charita/02.webp",
            caption:
              "A campaign page, with the amount raised, the goal and the " +
              "platform fee.",
          },
          {
            src: "/shots/charita/03.webp",
            caption:
              "Giving by Pix, with a QR code and a copy-and-paste code.",
          },
          {
            src: "/shots/charita/04.webp",
            caption:
              "Transparency page. The statement balances to zero in each " +
              "currency.",
          },
          {
            src: "/shots/charita/05.webp",
            caption:
              "Home page figures, calculated from the ledger.",
          },
          {
            src: "/shots/charita/06.webp",
            caption:
              "Book requests, filtered by subject, shipping country and " +
              "language.",
          },
          {
            src: "/shots/charita/07.webp",
            caption:
              "Exams and consultations offered by clinics, with price and " +
              "SIGTAP code.",
          },
          {
            src: "/shots/charita/08.webp",
            caption:
              "Team queue, with a nonprofit, a campaign and a payout account " +
              "waiting for approval.",
          },
        ],
        facts: [
          { label: "API", value: "Elixir and Phoenix" },
          { label: "Front end", value: "Nuxt. The browser never talks to the API directly" },
          { label: "Payments", value: "Woovi for Pix, Stripe for cards and Asaas for payouts" },
          { label: "Languages", value: "Portuguese, English and Spanish" },
        ],
        highlights: [
          {
            title: "Records that cannot be changed",
            text:
              "Every money movement is recorded with double-entry " +
              "bookkeeping. A Postgres trigger blocks updates and deletes, " +
              "so a refund goes in as a new entry with the opposite sign.",
          },
          {
            title: "Campaigns by invitation only",
            text:
              "A nonprofit can only open a campaign after the team verifies " +
              "it and sends an invitation. The link works once and is stored " +
              "only as a hash. This makes it harder to use the platform for " +
              "money laundering.",
          },
          {
            title: "Checking nonprofits",
            text:
              "Before approval, the system checks the company register and " +
              "the public sanctions and politically exposed persons lists, " +
              "by the organization's name and by the names of the people who " +
              "run it.",
          },
          {
            title: "Swappable payment gateways",
            text:
              "Woovi, Stripe and Asaas sit behind an interface of our own " +
              "and pass the same contract tests. Changing gateways is a " +
              "configuration change.",
          },
          {
            title: "Books, computers and food",
            text:
              "These donations have their own history and are kept out of " +
              "the money ledger. The nonprofit's address is only shown to a " +
              "donor after the nonprofit accepts their offer.",
          },
          {
            title: "Paying for exams and consultations",
            text:
              "The care module uses money from a campaign to pay a bill the " +
              "clinic has already issued. The patient appears only as a code " +
              "set by the referring nonprofit, with no name or ID document.",
          },
        ],
      },
    },
    {
      name: "LumniHub",
      tags: ["web", "ecommerce"],
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
      name: "Craftance",
      tags: ["web", "mobile", "ecommerce"],
      role: "Design, code and operation",
      text:
        "A marketplace where developers build a profile, sell digital products " +
        "and take on freelance projects. Money for each milestone sits in escrow " +
        "until the delivery is approved.",
      stack: "Elixir, Phoenix, Next.js, PostgreSQL, React Native, Rust",
      shot: "/shots/craftance.webp",
      detail: {
        summary:
          "A marketplace with two sides. People who need a project done post " +
          "a brief and get proposals from freelancers, and developers can " +
          "also sell templates, scripts and ready-made code. On project " +
          "work, the client deposits the amount for each milestone, the " +
          "money is held, and it only goes to the freelancer once the " +
          "delivery is approved.",
        gallery: [
          {
            src: "/shots/craftance/01.webp",
            caption:
              "Home page.",
          },
          {
            src: "/shots/craftance/02.webp",
            caption:
              "How it works, from the client's side and the freelancer's.",
          },
          {
            src: "/shots/craftance/03.webp",
            caption:
              "Open projects on the home page.",
          },
          {
            src: "/shots/craftance/04.webp",
            caption:
              "Project list, filtered by category.",
          },
          {
            src: "/shots/craftance/05.webp",
            caption:
              "A client's brief, with budget, required skills and number of " +
              "proposals.",
          },
          {
            src: "/shots/craftance/06.webp",
            caption:
              "Freelancer list, with hourly rate and availability.",
          },
          {
            src: "/shots/craftance/07.webp",
            caption:
              "A freelancer profile, with the services on offer.",
          },
          {
            src: "/shots/craftance/08.webp",
            caption:
              "A service sold in packages, with fixed price and delivery time.",
          },
          {
            src: "/shots/craftance/09.webp",
            caption:
              "Catalogue of templates and scripts, filtered by category.",
          },
          {
            src: "/shots/craftance/10.webp",
            caption:
              "A product page, with price, version and license.",
          },
          {
            src: "/shots/craftance/11.webp",
            caption:
              "A conversation between client and freelancer.",
          },
          {
            src: "/shots/craftance/12.webp",
            caption:
              "A contract split into milestones: one already paid and one " +
              "delivered, waiting for approval.",
          },
          {
            src: "/shots/craftance/13.webp",
            caption:
              "A freelancer's balance, after the platform commission.",
          },
          {
            src: "/shots/craftance/14.webp",
            caption:
              "Cleanup of AI-written code.",
          },
          {
            src: "/shots/craftance/15.webp",
            caption:
              "Kinds of problem the AI cleanup covers.",
          },
        ],
        facts: [
          { label: "Backend", value: "Elixir and Phoenix, with Oban for queues" },
          { label: "Web", value: "Next.js" },
          { label: "Apps", value: "Expo on mobile and Rust with Slint on desktop" },
          { label: "Payments", value: "Stripe Connect for cards and payouts, Mercado Pago for Pix and boleto" },
        ],
        highlights: [
          {
            title: "Money held per milestone",
            text:
              "The contract is split into milestones with an amount and a " +
              "due date. The client deposits each one, the freelancer " +
              "delivers, and the money is only released after approval. The " +
              "10% commission comes out of the freelancer's share.",
          },
          {
            title: "Its own ledger",
            text:
              "Every deposit, release and refund is a double-entry posting. " +
              "A daily job compares each freelancer's ledger balance with " +
              "their Stripe balance.",
          },
          {
            title: "Pix and boleto",
            text:
              "Besides cards through Stripe, checkout takes Pix and boleto " +
              "through Mercado Pago. When a webhook arrives, the system " +
              "looks the payment up again on the API before marking it paid.",
          },
          {
            title: "Selling ready-made code",
            text:
              "Templates and scripts are sold with a license and an " +
              "activation key, and downloads go through a temporary link.",
          },
          {
            title: "Cleaning up AI-written code",
            text:
              "The client points at a repository and a scan lists the " +
              "problems by file and line. Each kind of problem becomes a " +
              "batch with a fixed price. On delivery the scan runs again, " +
              "and if the problems are gone without new ones of equal or " +
              "higher severity, payment is released without anyone having to " +
              "approve it.",
          },
          {
            title: "Real-time conversations",
            text:
              "Messages and notifications arrive instantly over Phoenix " +
              "channels. There is also a native desktop client, written in " +
              "Rust, just for conversations.",
          },
        ],
      },    },
    {
      name: "Neohor",
      tags: ["web", "ecommerce"],
      role: "Design, code and operation",
      text:
        "A store for game accounts. The buyer searches, fills a cart " +
        "and pays by Pix or card, then follows the order to delivery " +
        "while the screen updates itself over WebSocket. Sign-in uses a social " +
        "account, so there is no password to make up.",
      stack: "Next.js, NestJS, Prisma, PostgreSQL, TurboRepo, Terraform, AWS",
      shot: "/shots/neohor.webp",
    },
    {
      name: "HeartBit",
      tags: ["web", "mobile"],
      role: "Design, code and operation",
      text:
        "A dating app for Brazilian Christians, verified by the person's own " +
        "church. Eight profiles a day, three open conversations at most, and " +
        "someone from the community sees that you are talking, never what you say.",
      stack: "Elixir, Phoenix, React, TanStack Router, Vue 3, PostgreSQL",
      shot: "/shots/heartbit.webp",
    },
    {
      name: "BloxHarbor",
      tags: ["web", "ecommerce"],
      role: "Design, code and operation",
      text:
        "An online store for Roblox accounts. The account lands right " +
        "away and the purchase is protected.",
      stack: "Next.js",
      href: "https://bloxharbor.com",
      shot: "/shots/bloxharbor.webp",
    },
    {
      name: "ZapZap",
      tags: ["desktop"],
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
      name: "ServeCommand",
      tags: ["web"],
      role: "Building the product",
      text:
        "Business software for contractors. The contractor sets the " +
        "pricing rules and logs each job, each record feeding the next. " +
        "Memberships and payments run in the same flow.",
      href: "https://servecommand.com",
      shot: "/shots/servecommand.webp",
    },
    {
      name: "orce.me",
      tags: ["web"],
      role: "Design, code and operation",
      text:
        "Quoting system for small businesses. Gathers products, services and " +
        "client details into a branded PDF proposal, without rebuilding a " +
        "spreadsheet for every request.",
      stack: "Nuxt, Vue, TypeScript",
      shot: "/shots/orce.webp",
    },
  ],

  about: {
    text:
      "The senior who designs the system is the one who writes the code " +
      "and runs it in production. No approval layer in between, no " +
      "junior learning on your project.",
  },

  mission: {
    title: "How we work",
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
      "We use AI to write code, and the people who review that code before " +
      "it reaches your system have landed contributions in Chrome's V8, " +
      "Mozilla's Servo and Haskell's GHC.",
    team: {
      eyebrow: "Our team",
      title: "These are the people who will work on your project",
      text:
        "People who have worked on compilers, runtimes, databases and " +
        "systems that cannot go down. Tell us what you need to build and " +
        "we will reply with who on the team fits it.",
      cta: "Talk to the team",
      subject: "I want to talk to the stellift team",
    },
  },

  contact: {
    heading: "Tell us what you want to build",
    lead: "A short description is enough to start the conversation.",
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
      "Simple sums that usually get done after the contract is signed, when " +
      "the SLA is already accepted and the hourly rate already agreed. They " +
      "run in your browser, no sign-up.",
    cta: "Open tool",
    backLabel: "Back to stellift",
    allLabel: "All tools",
    rangeJoin: "to",
    units: { day: "d", hour: "h", minute: "min", second: "s" },
    utilitiesTitle: "Developer utilities",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    items: {
      sla: {
        name: "SLA uptime calculator",
        tagline: "How much downtime each uptime level allows.",
        metaTitle: "SLA calculator: how much downtime fits in 99.9% uptime",
        metaDescription:
          "Turn an uptime SLA into real downtime per day, week, month and year. " +
          "See what 99%, 99.9% or 99.99% actually allow.",
        intro:
          "Nobody signs a contract thinking in percentages. They think about how " +
          "long the system can be down before the agreement breaks, which is the " +
          "number " +
          "this page gives back.",
        fields: [{ key: "uptime", label: "Committed uptime (%)", hint: "e.g. 99.9" }],
        results: [
          { key: "day", label: "Per day" },
          { key: "week", label: "Per week" },
          { key: "month", label: "Per month (30 days)" },
          { key: "year", label: "Per year (365 days)" },
        ],
        note:
          "The monthly window uses a 30-day month and the yearly one 365 days. Check " +
          "whether your contract measures calendar months and counts planned maintenance.",
      },
      "downtime-cost": {
        name: "Cost of downtime calculator",
        tagline: "What an outage costs, in money.",
        metaTitle: "Cost of downtime calculator: what an outage really costs",
        metaDescription:
          "Turn minutes of downtime into money lost. Enter monthly revenue, the hours " +
          "your operation runs and how long the outage lasted.",
        intro:
          "With the month's revenue and the hours the operation sells in, you can " +
          "estimate what an outage cost in money.",
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
          "contractual penalties are left out.",
      },
      "team-cost": {
        name: "Project team cost calculator",
        tagline: "What a team costs from start to finish.",
        metaTitle: "Project team cost calculator for software work",
        metaDescription:
          "Add up what a project team costs per week, per person and in total, from " +
          "team size, hourly cost and the planned duration.",
        intro:
          "What a project costs depends on how many people work on it and for " +
          "how long. Move both " +
          "here before you promise a date.",
        fields: [
          { key: "people", label: "People on the team" },
          { key: "cost", label: "Cost per hour", hint: "You can get it from the hourly cost calculator" },
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
        tagline: "Three time estimates become a range.",
        metaTitle: "Three-point PERT estimate calculator",
        metaDescription:
          "Turn optimistic, likely and pessimistic cases into a PERT estimate with " +
          "standard deviation and confidence ranges. The classic three-point formula.",
        intro:
          "A one-number estimate does not show the risk. Three-point estimation " +
          "weighs the likely " +
          "case four times as much as the extremes and hands back the deviation.",
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
        tagline: "What an hour of a developer's work costs.",
        metaTitle: "Developer hourly cost calculator",
        metaDescription:
          "Work out the real cost of an hour of development from monthly cost, " +
          "charges and productive hours. The maths runs in your browser.",
        intro:
          "Charges, leave and meetings land on the bill the same way. Divide the " +
          "full monthly cost by the hours that became delivered work last month. " +
          "That is the figure to use when you quote.",
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
          "Add up the hours the process takes each month and multiply by the " +
          "hourly cost of whoever does it. The result is what it costs a year.",
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
      cpf: {
        name: "CPF generator",
        tagline: "Generates a valid CPF for testing and checks whether a CPF is valid.",
        metaTitle: "Valid CPF generator and CPF validator",
        metaDescription:
          "Generate valid Brazilian CPF numbers for software testing and " +
          "validate any CPF by its check digits. Runs in your browser.",
        intro:
          "CPF is the Brazilian individual taxpayer number. The numbers " +
          "generated here pass the check digit calculation, so they work for " +
          "filling in forms and testing systems. A generated number may match a " +
          "real person's CPF, so use it only in test environments.",
        fields: [],
        results: [],
        note:
          "Validation only checks the check digits. It doesn't tell you whether " +
          "the CPF exists or is in good standing with the Brazilian tax office.",
        labels: {
          generated: "Generated CPF",
          generate: "Generate another",
          punctuation: "With punctuation",
          input: "CPF to validate",
          inputHint: "With or without punctuation",
          valid: "Valid",
          invalid: "Invalid",
          empty: "Type a CPF to validate.",
        },
      },
      cnpj: {
        name: "CNPJ generator",
        tagline: "Generates a valid CNPJ, numeric or alphanumeric, and validates any CNPJ.",
        metaTitle: "CNPJ generator and validator, alphanumeric included",
        metaDescription:
          "Generate valid Brazilian CNPJ numbers for testing, in the numeric or " +
          "the 2026 alphanumeric format, and validate any CNPJ by its check " +
          "digits.",
        intro:
          "CNPJ is the Brazilian company taxpayer number, and since July 2026 " +
          "the tax office issues it with letters too. The validator accepts both " +
          "formats, and the generator creates test numbers in either one. A " +
          "generated number may match a real company's CNPJ, so use it only in " +
          "test environments.",
        fields: [],
        results: [],
        note:
          "The calculation follows the Brazilian tax office's Q&A on the " +
          "alphanumeric CNPJ. Validation only checks the check digits, not " +
          "whether the company exists.",
        labels: {
          generated: "Generated CNPJ",
          generate: "Generate another",
          punctuation: "With punctuation",
          alphanumeric: "Alphanumeric",
          input: "CNPJ to validate",
          inputHint: "With or without punctuation or letters",
          valid: "Valid",
          invalid: "Invalid",
          empty: "Type a CNPJ to validate.",
        },
      },
      password: {
        name: "Password generator",
        tagline: "A random password with the length and characters you choose.",
        metaTitle: "Strong random password generator",
        metaDescription:
          "Generate strong passwords by choosing the length and character types. " +
          "The password is created in your browser and never sent to a server.",
        intro:
          "The password is generated in your browser with " +
          "crypto.getRandomValues, the random number generator meant for " +
          "cryptography. It never goes through a server.",
        fields: [],
        results: [],
        note:
          "Every character type you tick shows up at least once in the password.",
        labels: {
          length: "Length",
          upper: "Uppercase letters",
          lower: "Lowercase letters",
          digits: "Numbers",
          symbols: "Symbols",
          generate: "Generate another",
          result: "Password",
          pickOne: "Tick at least one character type.",
          sets: "Character types",
        },
      },
      uuid: {
        name: "UUID generator",
        tagline: "UUID v4 or v7, one at a time or in bulk.",
        metaTitle: "UUID v4 and v7 generator",
        metaDescription:
          "Generate version 4 UUIDs, fully random, or version 7, ordered by " +
          "time, one at a time or in bulk. Runs in your browser.",
        intro:
          "v4 is fully random. v7 starts with the time in milliseconds, so UUIDs " +
          "generated one after another stay in order, which tends to make " +
          "database indexes more efficient.",
        fields: [],
        results: [],
        note:
          "Both follow RFC 9562, and the random part comes from " +
          "crypto.getRandomValues. In v7, a counter keeps the order when several come out in " +
          "the same millisecond.",
        labels: {
          version: "Version",
          amount: "How many",
          generate: "Generate",
          result: "UUIDs",
        },
      },
      base64: {
        name: "Base64",
        tagline: "Encodes text to Base64 and decodes it back.",
        metaTitle: "Base64 encode and decode online",
        metaDescription:
          "Convert text to Base64 and Base64 to text, with accents and emoji " +
          "(UTF-8) and a URL-safe Base64 option.",
        intro:
          "The text is turned into UTF-8 before encoding, so accents and emoji " +
          "work. The URL option swaps + and / for - and _, and drops the " +
          "trailing =.",
        fields: [],
        results: [],
        note:
          "When decoding, the tool accepts both formats and adds back any " +
          "missing =.",
        labels: {
          input: "Text or Base64",
          encode: "Encode",
          mode: "Mode",
          decode: "Decode",
          urlSafe: "URL-safe Base64",
          result: "Result",
          invalid: "That isn't valid Base64, or the content isn't UTF-8 text.",
        },
      },
      json: {
        name: "JSON formatter",
        tagline: "Formats, minifies and shows where the syntax error is.",
        metaTitle: "JSON formatter and validator online",
        metaDescription:
          "Paste JSON to format it with indentation, minify it to one line or " +
          "find where the syntax error is. Runs in your browser.",
        intro:
          "Paste the JSON and pick an indentation or the minified version. If there's a syntax " +
          "error, you get the browser's error message.",
        fields: [],
        results: [],
        note:
          "The JSON is processed in your browser and isn't sent to any server.",
        labels: {
          input: "JSON",
          mode: "Output",
          indent2: "2 spaces",
          indent4: "4 spaces",
          minify: "Minify",
          result: "Result",
          invalid: "Invalid JSON:",
        },
      },
      counter: {
        name: "Character counter",
        tagline: "Characters, words, lines and bytes in a text.",
        metaTitle: "Character and word counter online",
        metaDescription:
          "Count characters, characters without spaces, words, lines and bytes " +
          "in any text as you type.",
        intro:
          "The numbers update as you type. An emoji or an accented letter counts " +
          "as one character, the way it looks on screen.",
        fields: [],
        results: [],
        note:
          "Bytes are counted in UTF-8.",
        labels: {
          input: "Text",
          characters: "Characters",
          noSpaces: "Without spaces",
          words: "Words",
          lines: "Lines",
          bytes: "Bytes (UTF-8)",
        },
      },
      hash: {
        name: "Hash generator",
        tagline: "MD5, SHA-1, SHA-256, SHA-384 and SHA-512 of any text.",
        metaTitle: "MD5, SHA-1 and SHA-256 hash generator online",
        metaDescription:
          "Get the MD5, SHA-1, SHA-256, SHA-384 and SHA-512 hash of a text as " +
          "you type. The text never leaves your browser.",
        intro:
          "Type or paste the text and all five hashes show up right away. The " +
          "text is turned into UTF-8 first, so the result matches md5sum and " +
          "sha256sum in the terminal.",
        fields: [],
        results: [],
        note:
          "MD5 and SHA-1 are fine for checking files and building cache keys, " +
          "but they aren't safe for storing passwords. For passwords, use " +
          "bcrypt, scrypt or Argon2.",
        labels: {
          input: "Text",
          upper: "Uppercase",
        },
      },
      url: {
        name: "URL encode and decode",
        tagline: "Encodes and decodes text for use in a URL.",
        metaTitle: "URL encode and decode online",
        metaDescription:
          "Encode text for a URL (percent-encoding) and decode it back, accents " +
          "and spaces included. Runs in your browser.",
        intro:
          "Encoding swaps spaces, accents and symbols for %20, %C3%A7 and so on. " +
          "By default the tool encodes everything, which is right for a " +
          "parameter value. Tick full URL to keep :, /, ? and & as they are.",
        fields: [],
        results: [],
        note:
          "It uses encodeURIComponent and encodeURI, the same JavaScript functions.",
        labels: {
          mode: "Mode",
          encode: "Encode",
          decode: "Decode",
          input: "Text",
          whole: "Full URL",
          plus: "Read + as a space",
          result: "Result",
          invalid: "This text has a % sequence that doesn't form a valid character.",
        },
      },
      timestamp: {
        name: "Timestamp converter",
        tagline: "Unix timestamp to date and date to timestamp.",
        metaTitle: "Unix timestamp to date converter online",
        metaDescription:
          "Convert a Unix timestamp in seconds or milliseconds to a date and " +
          "time, and a date to a timestamp. Shows local time and UTC.",
        intro:
          "Paste a timestamp in seconds or milliseconds and see the date in your " +
          "time zone and in UTC. You can also pick a date and get its timestamp.",
        fields: [],
        results: [],
        note:
          "Numbers from 100,000,000,000 up are read as milliseconds. The date is " +
          "shown in your browser's time zone.",
        labels: {
          input: "Timestamp",
          inputHint: "In seconds or milliseconds",
          date: "Date and time",
          now: "Now",
          local: "Local date",
          iso: "ISO 8601 (UTC)",
          seconds: "Seconds",
          milliseconds: "Milliseconds",
          invalid: "That doesn't look like a timestamp. Use digits only.",
        },
      },
      jwt: {
        name: "JWT decoder",
        tagline: "Shows the header and payload of a JWT.",
        metaTitle: "JWT decoder online",
        metaDescription:
          "Paste a JWT to see its header, payload and issue and expiry dates. " +
          "The token never leaves your browser.",
        intro:
          "Paste the token and you get the header and the payload, formatted. If " +
          "the payload has iat, nbf or exp, the dates show up under the field.",
        fields: [],
        results: [],
        note:
          "The tool only decodes. It doesn't check the signature, so it can't " +
          "tell you whether the token is legitimate. The token is read in your " +
          "browser and isn't sent to any server.",
        labels: {
          input: "Token",
          header: "Header",
          payload: "Payload",
          iat: "Issued at (iat)",
          nbf: "Not before (nbf)",
          exp: "Expires (exp)",
          invalid: "That doesn't look like a JWT. A token has three parts separated by dots.",
        },
      },
      case: {
        name: "Case converter",
        tagline: "Uppercase, lowercase, title case, camelCase, snake_case and more.",
        metaTitle: "Convert text to uppercase, lowercase and camelCase",
        metaDescription:
          "Convert text to uppercase, lowercase, title case, sentence case, " +
          "camelCase, PascalCase, snake_case and kebab-case at once.",
        intro:
          "Type the text and every version shows up together, each with a copy " +
          "button. In the code formats, like camelCase and snake_case, accents " +
          "are dropped.",
        fields: [],
        results: [],
        note:
          "Uppercase, lowercase, title and sentence case keep the text's " +
          "punctuation and accents.",
        labels: {
          input: "Text",
          upper: "UPPERCASE",
          lower: "lowercase",
          title: "Title Case",
          sentence: "Sentence case",
          camel: "camelCase",
          pascal: "PascalCase",
          snake: "snake_case",
          kebab: "kebab-case",
          constant: "CONSTANT_CASE",
        },
      },
      lorem: {
        name: "Lorem ipsum generator",
        tagline: "Placeholder text for layouts and prototypes.",
        metaTitle: "Lorem ipsum generator online",
        metaDescription:
          "Generate lorem ipsum paragraphs to fill layouts, prototypes and test " +
          "databases. Pick how many and copy.",
        intro:
          "Pick how many paragraphs you want and copy them. The sentences are " +
          "built from the traditional lorem ipsum words, and the first paragraph " +
          "can open with the classic Lorem ipsum dolor sit amet.",
        fields: [],
        results: [],
        note:
          "Every click generates a different text.",
        labels: {
          paragraphs: "Paragraphs",
          classic: "Start with Lorem ipsum",
          generate: "Generate another",
          result: "Text",
        },
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
      "Technical notes from stellift on problems from real projects in " +
      "Elixir, PostgreSQL and Next.js, with the code that fixed them.",
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
      filterLabel: "Filter projects by type",
      allLabel: "All",
      filters: [
        { id: "web", label: "Web" },
        { id: "mobile", label: "Mobile" },
        { id: "desktop", label: "Desktop" },
        { id: "ecommerce", label: "Ecommerce" },
      ],
      openLabel: "See details",
      closeLabel: "Close",
      dialogLabel: "project details",
      galleryLabel: "Project screens",
      prevLabel: "Previous screen",
      nextLabel: "Next screen",
    },
    about: { title: "About stellift" },
    contact: { title: "Tell us what you want to build" },
    notFound: {
      title: "This page does not exist",
      text: "The address may have changed or been mistyped.",
      home: "Go to the home page",
      contact: "Talk to us",
    },
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
