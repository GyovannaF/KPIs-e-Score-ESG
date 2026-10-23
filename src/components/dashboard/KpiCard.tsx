export interface KpiCardProps {
  title: string;
  value: string;
  variation: string;
  description: string;
}

export default function KpiCard({
  title,
  value,
  variation,
  description,
}: KpiCardProps) {
  const direction = variation.trimStart().startsWith("+")
    ? "positive"
    : variation.trimStart().startsWith("-")
      ? "negative"
      : "neutral";
  const variationClasses = {
    positive: "bg-[#edf5ef] text-[#286747]",
    negative: "bg-[#fbefed] text-[#a13e32]",
    neutral: "bg-[#f2f3f1] text-[var(--color-muted)]",
  }[direction];

  return (
    <article className="flex min-h-52 flex-col rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_2px_10px_rgba(38,61,53,0.035)] transition-shadow hover:shadow-[0_8px_24px_rgba(38,61,53,0.08)] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-medium leading-5 text-[var(--color-muted)]">
          {title}
        </h3>
        <span
          aria-label={`Variação ${direction === "positive" ? "positiva" : direction === "negative" ? "negativa" : "neutra"}: ${variation}`}
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${variationClasses}`}
        >
          <svg
            aria-hidden="true"
            className="size-3"
            fill="none"
            viewBox="0 0 16 16"
          >
            {direction === "neutral" ? (
              <path
                d="M3 8h10"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.6"
              />
            ) : (
              <path
                d={
                  direction === "positive"
                    ? "M3 11 7 7l2.5 2.5L13 5M9.5 5H13v3.5"
                    : "M3 5 7 9l2.5-2.5L13 11m-3.5 0H13V7.5"
                }
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
              />
            )}
          </svg>
          {variation}
        </span>
      </div>
      <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-[2rem]">
        {value}
      </p>
      <p className="mt-auto pt-3 text-xs leading-5 text-[var(--color-muted)]">
        {description}
      </p>
    </article>
  );
}
