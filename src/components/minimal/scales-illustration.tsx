export function ScalesIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 420"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="200" cy="66" r="7" />
      <line x1="200" y1="73" x2="200" y2="330" />
      <line x1="80" y1="96" x2="320" y2="96" />

      <line x1="80" y1="96" x2="58" y2="168" />
      <line x1="102" y1="96" x2="142" y2="168" />
      <path d="M52,164 Q100,198 148,164" />

      <line x1="298" y1="96" x2="258" y2="168" />
      <line x1="320" y1="96" x2="342" y2="168" />
      <path d="M252,164 Q300,198 348,164" />

      <path d="M165,330 L235,330 L252,354 L148,354 Z" />
    </svg>
  );
}
