import { cn } from "@/lib/utils";

type CountryFlagProps = {
  code: "pk" | "us" | "ca" | "gb" | "au" | "ae";
  className?: string;
  title?: string;
};

/** Circular country flags for the locations hub. */
export function CountryFlag({ code, className, title }: CountryFlagProps) {
  return (
    <span
      className={cn(
        "relative inline-flex size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-horizon-border sm:size-12",
        className
      )}
      role="img"
      aria-label={title}
      title={title}
    >
      <svg viewBox="0 0 64 64" className="size-full" aria-hidden>
        <FlagArtwork code={code} />
      </svg>
    </span>
  );
}

function FlagArtwork({ code }: { code: CountryFlagProps["code"] }) {
  switch (code) {
    case "pk":
      return (
        <>
          <rect width="64" height="64" fill="#01411C" />
          <rect width="16" height="64" fill="#fff" />
          <circle cx="38" cy="32" r="12" fill="#fff" />
          <circle cx="42" cy="32" r="10" fill="#01411C" />
          <polygon
            points="46,22 47.8,27.2 53.4,27.2 48.9,30.4 50.7,35.6 46,32.4 41.3,35.6 43.1,30.4 38.6,27.2 44.2,27.2"
            fill="#fff"
          />
        </>
      );
    case "us":
      return (
        <>
          <rect width="64" height="64" fill="#B22234" />
          {[8, 18, 28, 38, 48, 58].map((y) => (
            <rect key={y} y={y} width="64" height="5" fill="#fff" />
          ))}
          <rect width="28" height="34" fill="#3C3B6E" />
          {[6, 12, 18, 24].map((y) =>
            [5, 11, 17, 23].map((x) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" fill="#fff" />
            ))
          )}
        </>
      );
    case "ca":
      return (
        <>
          <rect width="64" height="64" fill="#fff" />
          <rect width="14" height="64" fill="#FF0000" />
          <rect x="50" width="14" height="64" fill="#FF0000" />
          <path
            fill="#FF0000"
            d="M32 14l2.2 7.2H42l-5.8 4.4 2.2 7.2L32 28.4l-6.4 4.4 2.2-7.2-5.8-4.4h7.8L32 14z"
          />
          <rect x="30.5" y="38" width="3" height="10" fill="#FF0000" />
        </>
      );
    case "gb":
      return (
        <>
          <rect width="64" height="64" fill="#012169" />
          <path d="M0 0l64 64M64 0L0 64" stroke="#fff" strokeWidth="12" />
          <path d="M0 0l64 64M64 0L0 64" stroke="#C8102E" strokeWidth="6" />
          <path d="M32 0v64M0 32h64" stroke="#fff" strokeWidth="16" />
          <path d="M32 0v64M0 32h64" stroke="#C8102E" strokeWidth="8" />
        </>
      );
    case "au":
      return (
        <>
          <rect width="64" height="64" fill="#00008B" />
          <rect width="28" height="28" fill="#012169" />
          <path d="M0 0l28 28M28 0L0 28" stroke="#fff" strokeWidth="5" />
          <path d="M0 0l28 28M28 0L0 28" stroke="#C8102E" strokeWidth="2.5" />
          <path d="M14 0v28M0 14h28" stroke="#fff" strokeWidth="7" />
          <path d="M14 0v28M0 14h28" stroke="#C8102E" strokeWidth="3.5" />
          <polygon
            points="44,18 45.2,21.4 48.8,21.4 45.9,23.5 47.1,26.9 44,24.8 40.9,26.9 42.1,23.5 39.2,21.4 42.8,21.4"
            fill="#fff"
          />
          {[
            [36, 36],
            [52, 34],
            [48, 46],
            [38, 50],
            [54, 50],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" fill="#fff" />
          ))}
        </>
      );
    case "ae":
      return (
        <>
          <rect width="64" height="64" fill="#00732F" />
          <rect y="21.3" width="64" height="21.4" fill="#fff" />
          <rect y="42.7" width="64" height="21.3" fill="#000" />
          <rect width="18" height="64" fill="#FF0000" />
        </>
      );
    default:
      return <rect width="64" height="64" fill="#ccc" />;
  }
}
