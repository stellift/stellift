import "server-only";
import {
  createCssVariablesTheme,
  createHighlighter,
  type Highlighter,
} from "shiki";

const theme = createCssVariablesTheme({
  name: "stellift",
  variablePrefix: "--code-",
  variableDefaults: {},
  fontStyle: false,
});

const languages = [
  "bash",
  "css",
  "diff",
  "html",
  "javascript",
  "json",
  "jsx",
  "markdown",
  "python",
  "sql",
  "tsx",
  "typescript",
  "yaml",
];

const labels: Record<string, string> = {
  bash: "Shell",
  css: "CSS",
  diff: "Diff",
  html: "HTML",
  javascript: "JavaScript",
  json: "JSON",
  jsx: "JSX",
  markdown: "Markdown",
  python: "Python",
  sql: "SQL",
  tsx: "TSX",
  typescript: "TypeScript",
  yaml: "YAML",
};

const aliases: Record<string, string> = {
  js: "javascript",
  mjs: "javascript",
  ts: "typescript",
  sh: "bash",
  shell: "bash",
  zsh: "bash",
  yml: "yaml",
  md: "markdown",
  py: "python",
};

let pending: Promise<Highlighter> | null = null;

function highlighter() {
  pending ??= createHighlighter({ themes: [theme], langs: languages });
  return pending;
}

export function resolveLanguage(name: string) {
  const key = aliases[name] ?? name;
  return languages.includes(key) ? key : null;
}

export function languageLabel(name: string) {
  const key = resolveLanguage(name);
  return key ? labels[key] : name.toUpperCase();
}

export async function highlight(code: string, name: string) {
  const key = resolveLanguage(name);
  if (!key) return null;

  const shiki = await highlighter();
  return shiki.codeToHtml(code, { lang: key, theme: "stellift" });
}
