import React from "react";
import { ArrowRight } from "lucide-react";

export interface DevHorizonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverted" | "ghost";
  size?: "sm" | "md" | "lg";
  shape?: "pill" | "rounded";
  showArrow?: boolean;
  icon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconStyle?: "circle" | "plain";
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export type DlsButtonProps = DevHorizonButtonProps;
export type DevHorizonTechButtonProps = DevHorizonButtonProps;

export const DevHorizonButton = React.forwardRef<HTMLButtonElement, DevHorizonButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      shape = "pill",
      showArrow = false,
      icon,
      trailingIcon,
      leadingIcon,
      iconPosition = "right",
      iconStyle = "circle",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    // Base styles with group for coordinated hover animations
    const baseStyles =
      "group inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E8EAED] disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer tracking-tight";

    // Shape styles
    const shapeStyles = shape === "pill" ? "rounded-full" : "rounded-xl";

    // Size styles with enhanced height and prominent presence
    const sizeStyles = {
      sm: "text-xs px-4 py-2.5 min-h-[38px] gap-2",
      md: "text-sm px-6 py-3.5 min-h-[48px] gap-2.5",
      lg: "text-base px-8 py-4.5 min-h-[58px] gap-3",
    }[size];

    // Variant styles
    const variantStyles = {
      primary:
        "dls-btn-silver text-[#111315] hover:shadow-[0_4px_20px_rgba(232,234,237,0.35)] active:scale-[0.98]",
      secondary:
        "dls-btn-secondary text-[#D4D8DE] hover:text-white hover:border-[#E8EAED]/50 active:scale-[0.98]",
      inverted:
        "bg-[#111315] text-white border border-[#24272B] hover:bg-[#24272B] hover:border-[#E8EAED]/30 hover:shadow-lg active:scale-[0.98]",
      ghost:
        "bg-transparent text-[#D4D8DE] hover:text-white hover:bg-white/5 active:scale-[0.98]",
    }[variant];

    // Determine leading and trailing icons
    const effectiveLeading = leadingIcon || (icon && iconPosition === "left" ? icon : null);
    const effectiveTrailing =
      trailingIcon ||
      (icon && iconPosition === "right" ? icon : null) ||
      (showArrow ? (
        <ArrowRight
          className={
            size === "sm"
              ? "w-3 h-3 stroke-[2.2]"
              : size === "lg"
              ? "w-4 h-4 stroke-[2.2]"
              : "w-3.5 h-3.5 stroke-[2.2]"
          }
        />
      ) : null);

    // Trailing icon circle background styling
    const circleContainerSizes = {
      sm: "w-5 h-5 p-1",
      md: "w-6 h-6 p-1.5",
      lg: "w-7 h-7 p-1.5",
    }[size];

    const circleContainerBg = {
      primary: "bg-black/10 group-hover:bg-black/20 text-[#111315]",
      secondary: "bg-white/10 group-hover:bg-white/20 text-white",
      inverted: "bg-white/15 group-hover:bg-white/25 text-white",
      ghost: "bg-white/5 group-hover:bg-white/15 text-current",
    }[variant];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${shapeStyles} ${sizeStyles} ${variantStyles} ${className}`}
        {...props}
      >
        {/* Leading Icon */}
        {effectiveLeading && (
          <span className="inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
            {effectiveLeading}
          </span>
        )}

        {/* Button Text */}
        <span className="inline-flex items-center leading-none">{children}</span>

        {/* Trailing Icon (Refined Micro-Container) */}
        {effectiveTrailing && (
          <span
            className={`inline-flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1 ${
              iconStyle === "circle"
                ? `rounded-full ${circleContainerSizes} ${circleContainerBg} shadow-sm`
                : ""
            }`}
          >
            {effectiveTrailing}
          </span>
        )}
      </button>
    );
  }
);

DevHorizonButton.displayName = "DevHorizonButton";

// Export aliases for devhorizontech / devhorizon / dls
export const DevHorizonTechButton = DevHorizonButton;
export const DlsButton = DevHorizonButton;

export default DevHorizonButton;
