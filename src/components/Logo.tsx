import React from "react";
import { Link } from "react-router-dom";

export interface DlsLogoProps {
  variant?: "full" | "horizontal" | "mark";
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
  asLink?: boolean;
  to?: string;
}

export const DlsLogo: React.FC<DlsLogoProps> = ({
  variant = "horizontal",
  size = "md",
  showTagline = true,
  className = "",
  asLink = true,
  to = "/",
}) => {
  // Sizing configurations
  const heightClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
    xl: "h-20",
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* 3D Metallic Emblem / Logo Asset */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/assets/devhorizon-logo-metallic.png"
          alt="DevHorizon Logo"
          className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(232,234,237,0.2)]`}
          loading="eager"
        />
      </div>

      {/* Optional HTML fallback / additional crisp typographic lockup if needed */}
      {variant === "horizontal" && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-extrabold tracking-tight text-white font-sans text-base lg:text-lg group-hover:text-[#E8EAED] transition-colors">
            DEVHORIZON
          </span>
          {showTagline && (
            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C0C5CC] uppercase mt-0.5">
              BUILD BEYOND TODAY
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link to={to} className="inline-flex items-center focus:outline-none" aria-label="DevHorizon Home">
        {content}
      </Link>
    );
  }

  return content;
};

export const DevHorizonLogo = DlsLogo;
export const DevHorizonTechLogo = DlsLogo;

export default DlsLogo;
