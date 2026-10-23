export interface ScoreBarProps {
  label: string;
  score: number;
}

export default function ScoreBar({ label, score }: ScoreBarProps) {
  const safeScore = Number.isFinite(score)
    ? Math.min(Math.max(score, 0), 100)
    : 0;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-[var(--color-ink)]">
          {label}
        </span>
        <span className="text-sm font-semibold tabular-nums text-[var(--color-ink)]">
          {safeScore}
          <span className="ml-0.5 text-xs font-normal text-[var(--color-muted)]">
            / 100
          </span>
        </span>
      </div>
      <div
        aria-label={label}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={safeScore}
        className="h-2.5 overflow-hidden rounded-full bg-[#edf0eb]"
        role="progressbar"
      >
        <div
          className="h-full rounded-full bg-[var(--color-brand)] transition-[width] duration-500"
          style={{ width: `${safeScore}%` }}
        />
      </div>
    </div>
  );
}
