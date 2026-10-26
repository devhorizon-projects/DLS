import React from "react";

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  status?: "completed" | "active" | "upcoming";
  duration?: string;
  icon?: React.ReactNode;
}

export interface DevHorizonProcessTimelineProps {
  steps?: ProcessStepItem[];
  layout?: "grid" | "connected" | "vertical";
  className?: string;
}

export type ProcessTimelineProps = DevHorizonProcessTimelineProps;

const defaultSteps: ProcessStepItem[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals, market requirements, and technical landscape.",
    duration: "Week 1",
    status: "completed",
  },
  {
    number: "02",
    title: "Design",
    description: "Create scalable, user-centric wireframes and architectural roadmaps.",
    duration: "Week 2-3",
    status: "active",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build with precision engineering, clean code, and security best practices.",
    duration: "Week 4-7",
    status: "upcoming",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Launch with zero downtime, robust observability, and continuous growth support.",
    duration: "Week 8+",
    status: "upcoming",
  },
];

export const DevHorizonProcessTimeline: React.FC<DevHorizonProcessTimelineProps> = ({
  steps = defaultSteps,
  layout = "grid",
  className = "",
}) => {
  const getStatusBadge = (status?: "completed" | "active" | "upcoming") => {
    return {
      completed: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20",
      active: "text-[#E8EAED] bg-[#24272B] border-white/20 animate-pulse",
      upcoming: "text-[#8E95A0] bg-transparent border-white/5",
    }[status || "upcoming"];
  };

  const getStatusDot = (status?: "completed" | "active" | "upcoming") => {
    return {
      completed: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]",
      active: "bg-[#E8EAED] animate-ping",
      upcoming: "bg-[#8E95A0]/40",
    }[status || "upcoming"];
  };

  // 1. Connected Stepper Layout
  if (layout === "connected") {
    return (
      <div className={`w-full py-4 ${className}`}>
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4">
          {/* Connecting Line across steps on desktop */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-[2px] bg-white/10 z-0" />

          {steps.map((step, idx) => {
            const isCompleted = step.status === "completed";
            const isActive = step.status === "active";

            return (
              <div
                key={step.number}
                className="relative z-10 flex-1 flex flex-col items-start md:items-center text-left md:text-center group"
              >
                {/* Node Circle */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm mb-4 transition-all duration-300 border ${
                    isCompleted
                      ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                      : isActive
                      ? "bg-[#24272B] border-[#E8EAED] text-white shadow-[0_0_20px_rgba(232,234,237,0.25)] scale-105"
                      : "bg-[#1A1C1F] border-white/10 text-[#8E95A0]"
                  }`}
                >
                  {step.number}
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <h4 className="text-sm font-bold text-white tracking-tight font-sans">
                    {step.title}
                  </h4>
                  {step.duration && (
                    <span className={`text-[10px] font-mono px-2 py-0.2 rounded-full border ${getStatusBadge(step.status)}`}>
                      {step.duration}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#8E95A0] leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Vertical Stepper Layout
  if (layout === "vertical") {
    return (
      <div className={`w-full relative pl-6 border-l-2 border-white/10 space-y-8 ${className}`}>
        {steps.map((step) => {
          return (
            <div key={step.number} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#111315] border-2 border-[#E8EAED] flex items-center justify-center">
                <div className={`w-1.5 h-1.5 rounded-full ${getStatusDot(step.status)}`} />
              </div>

              <div className="bg-[#1A1C1F] rounded-xl border border-white/8 p-5 transition-all duration-300 hover:border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#E8EAED]">Phase {step.number}</span>
                    <h4 className="text-sm font-bold text-white font-sans">{step.title}</h4>
                  </div>
                  {step.duration && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(step.status)}`}>
                      {step.duration}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#8E95A0] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // 3. Default Grid Layout
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step) => {
          return (
            <div
              key={step.number}
              className="group relative bg-[#1E2124] rounded-2xl border border-white/8 p-6 transition-all duration-300 hover:border-[#E8EAED]/30 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Optional Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#C0C5CC] px-2.5 py-1 rounded bg-[#2A2E33] border border-white/5">
                    {step.number}
                  </span>
                  {step.duration && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(step.status)}`}>
                      {step.duration}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-white mb-2 font-sans tracking-tight">
                  {step.title}
                </h4>

                <p className="text-xs text-[#8E95A0] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom activity line */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-[#8E95A0] uppercase tracking-wider">
                  Phase {step.number}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8EAED]/40 group-hover:bg-[#E8EAED] transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export const DevHorizonTechProcessTimeline = DevHorizonProcessTimeline;
export const ProcessTimeline = DevHorizonProcessTimeline;

export default DevHorizonProcessTimeline;
