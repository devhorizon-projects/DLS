import React from "react";
import { ArrowRight } from "lucide-react";

export interface DevHorizonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverted" | "ghost";
  size?: "sm" | "md" | "lg";
  shape?: "pill" | "rounded";
  showArrow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
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
      iconPosition = "right",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E8EAED] disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer tracking-tight";

    // Shape styles
    const shapeStyles = shape === "pill" ? "rounded-full" : "rounded-xl";

    // Size styles
    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
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

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${shapeStyles} ${sizeStyles} ${variantStyles} ${className}`}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
        {showArrow && !icon && (
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
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
