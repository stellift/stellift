import type { Dictionary } from "./types";

export type FrameCopy = {
  nav: Dictionary["nav"];
  site: Pick<Dictionary["site"], "name">;
  tools: Pick<Dictionary["tools"], "backLabel">;
  ui: {
    header: Dictionary["ui"]["header"];
    footer: Pick<Dictionary["ui"]["footer"], "ariaLabel">;
  };
};

export type FormCopy = {
  site: Pick<Dictionary["site"], "email">;
  ui: { form: Dictionary["ui"]["form"] };
};

export type PortfolioCopy = {
  portfolio: Dictionary["portfolio"];
  ui: { portfolio: Dictionary["ui"]["portfolio"] };
};

export function frameCopy(dict: Dictionary): FrameCopy {
  return {
    nav: dict.nav,
    site: { name: dict.site.name },
    tools: { backLabel: dict.tools.backLabel },
    ui: {
      header: dict.ui.header,
      footer: { ariaLabel: dict.ui.footer.ariaLabel },
    },
  };
}

export function formCopy(dict: Dictionary): FormCopy {
  return { site: { email: dict.site.email }, ui: { form: dict.ui.form } };
}

export function portfolioCopy(dict: Dictionary): PortfolioCopy {
  return { portfolio: dict.portfolio, ui: { portfolio: dict.ui.portfolio } };
}
