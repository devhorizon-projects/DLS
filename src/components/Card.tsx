import React from "react";
import { ArrowRight } from "lucide-react";

export interface DarkSurfaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const DarkSurfaceCard: React.FC<DarkSurfaceCardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`relative bg-[#24272B] rounded-2xl border border-white/8 p-8 sm:p-10 transition-all duration-300 ${
        hoverEffect
          ? "hover:border-[#E8EAED]/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(232,234,237,0.06)]"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface WhiteServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  badge?: string;
  onLinkClick?: () => void;
  className?: string;
}

export const WhiteServiceCard: React.FC<WhiteServiceCardProps> = ({
  icon,
  title,
  description,
  linkText = "Learn More",
  badge,
  onLinkClick,
  className = "",
}) => {
  return (
    <div
      className={`group relative bg-white rounded-3xl border border-black/8 p-8 sm:p-9 lg:p-10 transition-all duration-300 hover:border-black/15 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_-10px_rgba(0,0,0,0.09)] flex flex-col justify-between text-left ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          {/* Icon container */}
          <div className="w-14 h-14 rounded-2xl bg-[#F4F5F7] border border-black/5 flex items-center justify-center text-[#111315] transition-colors duration-300 group-hover:bg-[#111315] group-hover:text-white shrink-0">
            {icon}
          </div>
          {badge && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/5 text-[#5F6672]">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#111315] tracking-tight mb-3 font-sans">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#5F6672] leading-relaxed mb-8 font-sans">
          {description}
        </p>
      </div>

      {/* Footer link with arrow */}
      <div
        onClick={onLinkClick}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#111315] group-hover:text-black cursor-pointer pt-4 border-t border-black/5 transition-colors"
      >
        <span>{linkText}</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export interface DevHorizonProjectCardProps {
  title: string;
  category?: string;
  description: string;
  image?: string;
  tags?: string[];
  linkUrl?: string;
  linkText?: string;
  onLinkClick?: () => void;
  className?: string;
}

export const DevHorizonProjectCard: React.FC<DevHorizonProjectCardProps> = ({
  title,
  category,
  description,
  image,
  tags = [],
  linkText = "View Case Study",
  onLinkClick,
  className = "",
}) => {
  return (
    <div
      className={`group relative bg-[#24272B] rounded-2xl border border-white/8 overflow-hidden transition-all duration-300 hover:border-[#E8EAED]/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8),0_0_24px_rgba(232,234,237,0.08)] flex flex-col justify-between ${className}`}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-[#1A1C1F]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24272B] via-transparent to-transparent opacity-80" />
          {category && (
            <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#111315]/80 backdrop-blur-md text-[#E8EAED] border border-white/10">
              {category}
            </span>
          )}
        </div>
      )}

      <div className="p-8 sm:p-9 flex-1 flex flex-col justify-between">
        <div>
          {!image && category && (
            <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#C0C5CC] border border-white/5 mb-3">
              {category}
            </span>
          )}
          <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#E8EAED] transition-colors font-sans">
            {title}
          </h3>
          <p className="text-xs text-[#8E95A0] leading-relaxed mb-4">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8E95A0] border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div
          onClick={onLinkClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8EAED] group-hover:text-white cursor-pointer pt-3 border-t border-white/8 transition-colors"
        >
          <span>{linkText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export const DevHorizonCard = DarkSurfaceCard;
export const DevHorizonTechCard = DarkSurfaceCard;
export const DevHorizonServiceCard = WhiteServiceCard;
export const DevHorizonTechServiceCard = WhiteServiceCard;
export const ProjectCard = DevHorizonProjectCard;
export const DevHorizonTechProjectCard = DevHorizonProjectCard;

export default DarkSurfaceCard;

