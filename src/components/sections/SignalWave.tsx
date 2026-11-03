export default function SignalWave() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 40"
      className="h-10 w-72 text-signal sm:w-96"
      fill="none"
    >
      <path
        className="signal-line"
        pathLength={1}
        d="M0 20 H90 L100 20 L110 4 L122 36 L134 8 L144 20 H230 L238 12 L246 28 L254 20 H400"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
