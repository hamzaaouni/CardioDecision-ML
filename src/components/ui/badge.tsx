import { cn } from "@/lib/utils";

const variantStyles = {
  blue: "border-blue-400/20 bg-blue-400/10 text-blue-400",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-400",
  rose: "border-rose-400/20 bg-rose-400/10 text-rose-400",
  default: "border-white/10 bg-white/5 text-white/60",
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantStyles;
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold font-display uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
