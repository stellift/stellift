import LogoMark from "@/app/[lang]/_components/logo-mark";

export default function Wordmark({
  name,
  size = "sm",
}: {
  name: string;
  size?: "sm" | "lg";
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark
        className={`shrink-0 ${size === "lg" ? "size-9" : "size-7"}`}
      />
      <span
        className={`font-serif leading-none text-ink ${
          size === "lg" ? "text-[1.75rem]" : "text-[1.5rem]"
        }`}
      >
        {name}
      </span>
    </span>
  );
}
