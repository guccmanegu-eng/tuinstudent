import { cn } from "@/lib/utils";

export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
          onDark ? "bg-leaf/25" : "bg-leaf/15",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 21V11m0 0c0-4 3-7 8-7 0 5-3.5 7.6-8 7Zm0 4c-.4-3.2-2.8-5.4-7-5.4.4 4.2 3 5.9 7 5.4Z"
            stroke="currentColor"
            className={onDark ? "text-leaf" : "text-forest"}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          "text-lg font-extrabold tracking-tight",
          onDark ? "text-primary-foreground" : "text-forest",
        )}
      >
        Tuin<span className={onDark ? "text-leaf" : "text-leaf"}>student</span>
      </span>
    </span>
  );
}
