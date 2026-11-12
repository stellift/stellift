import Image from "next/image";

export default function Wordmark({
  name,
  size = "sm",
}: {
  name: string;
  size?: "sm" | "lg";
}) {
  const box = size === "lg" ? 36 : 28;

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/logos/stellift.png"
        alt=""
        width={256}
        height={256}
        priority
        style={{ width: box, height: box }}
        className={`shrink-0 ${size === "lg" ? "rounded-[5px]" : "rounded-[4px]"}`}
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
