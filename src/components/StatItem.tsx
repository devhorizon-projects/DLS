import React from "react";

export interface DevHorizonStatItemProps {
  value: string;
  label: string;
  subtext?: string;
  trend?: string;
  trendType?: "positive" | "neutral" | "negative";
  metallic?: boolean;
  className?: string;
}

export type StatItemProps = DevHorizonStatItemProps;

export const DevHorizonStatItem: React.FC<DevHorizonStatItemProps> = ({
  value,
  label,
  subtext,
  trend,
  trendType = "positive",
  metallic = false,
  className = "",
}) => {
  const trendColor = {
    positive: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20",
    neutral: "text-[#C0C5CC] bg-[#1E2124] border-white/10",
    negative: "text-rose-400 bg-rose-950/40 border-rose-500/20",
  }[trendType];

  return (
    <div className={`flex flex-col text-left ${className}`}>
      <div className="flex items-baseline gap-3 mb-1">
        <div
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans ${
            metallic ? "dls-text-metallic" : "text-white"
          }`}
        >
          {value}
        </div>
        {trend && (
          <span
            className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border ${trendColor}`}
          >
            {trend}
          </span>
        )}
      </div>

      <div className="text-sm font-semibold text-[#D4D8DE] tracking-tight">
        {label}
      </div>

      {subtext && (
        <div className="text-xs text-[#8E95A0] mt-0.5 font-normal leading-relaxed">
          {subtext}
        </div>
      )}
    </div>
  );
};

export const DevHorizonTechStatItem = DevHorizonStatItem;
export const StatItem = DevHorizonStatItem;

export default DevHorizonStatItem;
