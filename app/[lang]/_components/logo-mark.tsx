export const markSilhouette =
  "M290.5,117 292.5,153 287,162.5 171.5,213 194,213.5 214,219.5 256,201.5 271,201.5 301,217.5 310.5,228 310.5,278 299,291.5 289,296.5 176,343.5 175.5,307 181,297.5 283,257.5 277.5,250 290.5,233 222,261.5 203,261.5 154.5,234 154.5,182 174,165.5Z";

export const markFold =
  "M299.5,228 312.5,233 311.5,267 303,287.5 302,283.5 273,296.5 247,292.5 237.5,284 238,274.5 283,257.5 279.5,246Z";

export const markViewBox = "153.5 116 158 228.5";

export default function LogoMark({
  className,
  variant = "tile",
  fold = "#2a7fcb",
}: {
  className?: string;
  variant?: "tile" | "mono" | "duo";
  fold?: string;
}) {
  const tile = variant === "tile";

  return (
    <svg
      viewBox={tile ? "0 0 460 460" : markViewBox}
      aria-hidden
      className={className}
    >
      {tile ? <rect width="460" height="460" rx="40" fill="#4eaefd" /> : null}

      <path
        fill={tile ? "#ffffff" : "currentColor"}
        fillRule="evenodd"
        d={markSilhouette}
      />

      {variant === "mono" ? null : (
        <path
          fill={tile ? "#d9e8fa" : fold}
          fillRule="evenodd"
          d={markFold}
        />
      )}
    </svg>
  );
}
