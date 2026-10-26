import React from "react";

export interface DevHorizonBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "silver" | "dark" | "light" | "outline" | "success" | "warning" | "info";
  size?: "sm" | "md";
  showDot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export type DlsBadgeProps = DevHorizonBadgeProps;
export type DevHorizonTechBadgeProps = DevHorizonBadgeProps;

export const DevHorizonBadge: React.FC<DevHorizonBadgeProps> = ({
  variant = "silver",
  size = "md",
  showDot = false,
  children,
  className = "",
  ...props
}) => {
  const sizeStyles = size === "sm" ? "px-2.5 py-0.5 text-[10px]" : "px-3 py-1 text-xs";
  const baseStyles =
    `inline-flex items-center gap-2 font-semibold uppercase tracking-[0.18em] rounded-full select-none ${sizeStyles}`;

  const variantStyles = {
    silver:
      "bg-[#24272B]/70 text-[#D4D8DE] border border-[#E8EAED]/20 shadow-[0_0_12px_rgba(232,234,237,0.08)]",
    dark:
      "bg-[#111315] text-[#8E95A0] border border-white/10",
    light:
      "bg-[#F3F4F6] text-[#4B5563] border border-black/8",
    outline:
      "bg-transparent text-[#C0C5CC] border border-[#C0C5CC]/30",
    success:
      "bg-emerald-950/40 text-emerald-300 border border-emerald-500/30",
    warning:
      "bg-amber-950/40 text-amber-300 border border-amber-500/30",
    info:
      "bg-sky-950/40 text-sky-300 border border-sky-500/30",
  }[variant];

  const dotColor = {
    silver: "bg-[#E8EAED]",
    dark: "bg-[#8E95A0]",
    light: "bg-[#4B5563]",
    outline: "bg-[#C0C5CC]",
    success: "bg-emerald-400",
    warning: "bg-amber-400",
    info: "bg-sky-400",
  }[variant];

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {showDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColor}`}></span>
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};

export const DevHorizonTechBadge = DevHorizonBadge;
export const DlsBadge = DevHorizonBadge;

export default DevHorizonBadge;
