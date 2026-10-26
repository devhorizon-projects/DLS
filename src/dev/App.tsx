import React, { useState } from "react";
import {
  DevHorizonButton,
  DevHorizonTechButton,
  DevHorizonBadge,
  DevHorizonCard,
  DevHorizonServiceCard,
  DevHorizonProjectCard,
  DevHorizonStatItem,
  DevHorizonProcessTimeline,
  DlsLogo,
  colors,
} from "../index";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Copy,
  Check,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Activity,
  Zap,
} from "lucide-react";

export default function App() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [timelineLayout, setTimelineLayout] = useState<"grid" | "connected" | "vertical">("grid");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const sampleTimelineSteps = [
    { number: "01", title: "Discovery & Architecture", description: "Deep-dive workshops to analyze business goals, systems requirements, and define cloud-native roadmaps." },
    { number: "02", title: "Design & High-Fidelity Prototype", description: "Luxury metallic dark UI/UX design, interactive wireframes, and design token integration." },
    { number: "03", title: "Agile Precision Engineering", description: "Sprint-driven implementation with robust CI/CD, TypeScript strictness, and microservice resilience." },
    { number: "04", title: "Production Launch & Scale", description: "Zero-downtime deployment, continuous edge monitoring, telemetry, and 24/7 enterprise SLA coverage." },
  ];

  return (
    <div className="min-h-screen bg-[#111315] text-[#D4D8DE] font-sans selection:bg-[#E8EAED] selection:text-[#111315]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111315]/80 border-b border-[#24272B] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E8EAED] via-[#C0C5CC] to-[#111315] flex items-center justify-center shadow-[0_0_15px_rgba(232,234,237,0.25)]">
              <span className="font-extrabold text-[#111315] text-sm tracking-wider">DH</span>
            </div>
            <div>
              <div className="font-extrabold text-white text-base tracking-tight flex items-center gap-2">
                DEVHORIZON DLS
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest rounded-full bg-[#24272B] text-[#E8EAED] border border-[#C0C5CC]/20">
                  v1.0.0
                </span>
              </div>
              <div className="text-[10px] font-semibold text-[#8E95A0] tracking-widest uppercase">
                STANDALONE DESIGN SYSTEM RUNNER
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/devhorizontechnologiespvtltd/DLS"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#24272B] hover:bg-[#2A2E33] border border-[#C0C5CC]/20 text-[#E8EAED] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              GitHub Repo
            </a>
            <DevHorizonButton
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5 text-[#111315]" />}
              onClick={() => copyToClipboard('npm install @devhorizon/dls', 'npm-install')}
            >
              {copiedKey === 'npm-install' ? 'Copied Command!' : 'Install Package'}
            </DevHorizonButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Banner */}
        <div className="relative rounded-2xl bg-[#24272B] border border-[#C0C5CC]/20 p-8 lg:p-12 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#E8EAED]/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <DevHorizonBadge variant="silver" className="mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8EAED] animate-pulse" />
              STANDALONE COMPONENT PLAYGROUND
            </DevHorizonBadge>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise Luxury Dark & Metallic Silver UI System
            </h1>
            <p className="text-base text-[#8E95A0] leading-relaxed">
              Designed for high-performance enterprise applications, AI vibe-coding agents, and scalable frontend architectures.
              Decoupled from Supabase, Lovable, and external cloud backends.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <DevHorizonButton
                variant="primary"
                onClick={() => {
                  setButtonLoading(true);
                  setTimeout(() => {
                    setButtonLoading(false);
                    setClickCount((c) => c + 1);
                  }, 600);
                }}
                isLoading={buttonLoading}
                icon={<Activity className="w-4 h-4 text-[#111315]" />}
              >
                Interactive Test ({clickCount} clicks)
              </DevHorizonButton>
              <DevHorizonButton
                variant="secondary"
                icon={<Code2 className="w-4 h-4 text-[#E8EAED]" />}
                onClick={() => copyToClipboard('import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";', 'quick-import')}
              >
                {copiedKey === 'quick-import' ? 'Copied Import!' : 'Copy React Import'}
              </DevHorizonButton>
            </div>
          </div>
        </div>

        {/* Section 1: Color Tokens */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">1. Brand Design Tokens</h2>
              <p className="text-sm text-[#8E95A0]">Curated hex values and architectural contrast pairs</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Primary Obsidian", hex: "#111315", sub: "Deep background" },
              { label: "Surface Card", hex: "#24272B", sub: "Containers & cards" },
              { label: "Shining Silver", hex: "#E8EAED", sub: "Primary accent sheen" },
              { label: "Platinum Border", hex: "#C0C5CC", sub: "1px border detail" },
              { label: "Crisp Silver Text", hex: "#D4D8DE", sub: "Readable body text" },
              { label: "Architectural White", hex: "#FFFFFF", sub: "High-contrast sections", darkText: true },
            ].map((token) => (
              <div
                key={token.hex}
                onClick={() => copyToClipboard(token.hex, token.hex)}
                className="group p-4 rounded-xl border border-[#C0C5CC]/15 bg-[#16191D] hover:border-[#E8EAED]/40 transition-all cursor-pointer relative"
              >
                <div
                  className="w-full h-14 rounded-lg mb-3 border border-white/10 shadow-inner flex items-center justify-center font-mono text-xs font-bold"
                  style={{ backgroundColor: token.hex, color: token.darkText ? '#111315' : '#FFFFFF' }}
                >
                  {copiedKey === token.hex ? "COPIED!" : token.hex}
                </div>
                <div className="font-semibold text-white text-xs tracking-tight">{token.label}</div>
                <div className="text-[10px] text-[#8E95A0] mt-0.5">{token.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Buttons */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">2. DevHorizonButton / DevHorizonTechButton</h2>
            <p className="text-sm text-[#8E95A0]">Primary brushed chrome sheen, luxury dark obsidian, and architectural white inverted</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#16191D] border border-[#C0C5CC]/15 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <DevHorizonButton variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4 text-[#111315]" />}>
                Primary Silver Sheen (Lg)
              </DevHorizonButton>
              <DevHorizonButton variant="primary" size="md">
                Primary Silver (Md)
              </DevHorizonButton>
              <DevHorizonButton variant="primary" size="sm">
                Primary Silver (Sm)
              </DevHorizonButton>
              <DevHorizonButton variant="secondary" size="md" icon={<Cpu className="w-4 h-4 text-[#E8EAED]" />}>
                Secondary Obsidian Surface
              </DevHorizonButton>
              <DevHorizonButton variant="inverted" size="md">
                Inverted White
              </DevHorizonButton>
              <DevHorizonButton variant="primary" size="md" isLoading={true}>
                Loading State
              </DevHorizonButton>
            </div>
            <div className="pt-4 border-t border-[#24272B] flex items-center justify-between text-xs text-[#8E95A0]">
              <code className="text-[#E8EAED] font-mono bg-[#111315] px-3 py-1.5 rounded-md border border-[#24272B]">
                {'<DevHorizonButton variant="primary" icon={<ArrowRight />}>Explore</DevHorizonButton>'}
              </code>
              <button
                onClick={() => copyToClipboard('<DevHorizonButton variant="primary">Explore</DevHorizonButton>', 'btn-code')}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                {copiedKey === 'btn-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                Copy Snippet
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Badges */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">3. DevHorizonBadge</h2>
            <p className="text-sm text-[#8E95A0]">Live status indicators, metadata tags, and enterprise trust pills</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#16191D] border border-[#C0C5CC]/15 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <DevHorizonBadge variant="silver">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8EAED] animate-pulse" />
                SYSTEM OPERATIONAL • 99.99%
              </DevHorizonBadge>
              <DevHorizonBadge variant="dark">
                <ShieldCheck className="w-3 h-3 text-[#C0C5CC]" />
                ENTERPRISE SOC-2 CERTIFIED
              </DevHorizonBadge>
              <DevHorizonBadge variant="outline">
                TYPESCRIPT 5.6 • VITE
              </DevHorizonBadge>
              <DevHorizonBadge variant="light">
                NEW RELEASE v1.0
              </DevHorizonBadge>
            </div>
          </div>
        </section>

        {/* Section 4: Cards */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">4. Architectural Cards & Surfaces</h2>
            <p className="text-sm text-[#8E95A0]">Pure white service cards, dark obsidian containers, and project showcases</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DevHorizonServiceCard
              icon={<Code2 className="w-6 h-6 text-[#111315]" />}
              title="Custom Software Development"
              description="High-performance, fault-tolerant web and cloud platforms engineered for scale."
              linkText="Explore Solutions"
              onLinkClick={() => alert("Card clicked!")}
            />
            <DevHorizonCard hoverEffect={true} className="p-8 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#111315] border border-[#C0C5CC]/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#E8EAED]" />
                </div>
                <h3 className="text-lg font-bold text-white">Obsidian Surface Card</h3>
                <p className="text-sm text-[#8E95A0] leading-relaxed">
                  Deep `#24272B` container with 1px silver border gradient and smooth hover lift physics.
                </p>
              </div>
              <div className="pt-6 border-t border-[#C0C5CC]/10 text-xs font-mono text-[#C0C5CC]">
                surfaceCard = #24272B
              </div>
            </DevHorizonCard>
            <DevHorizonProjectCard
              title="Enterprise ERP Platform"
              category="Fintech • Cloud Architecture"
              description="Real-time multi-currency settlement engine with microsecond latency."
              tags={["Go", "TypeScript", "PostgreSQL", "Docker"]}
              onLinkClick={() => alert("Project clicked!")}
            />
          </div>
        </section>

        {/* Section 5: Stats */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">5. DevHorizonStatItem</h2>
            <p className="text-sm text-[#8E95A0]">Metallic milestone counters and metrics</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#16191D] border border-[#C0C5CC]/15 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <DevHorizonStatItem value="21+" label="Core Engineers" subtext="Full-stack specialists" />
            <DevHorizonStatItem value="50+" label="Projects Shipped" subtext="Zero downtime releases" />
            <DevHorizonStatItem value="99.99%" label="SLA Uptime" subtext="Enterprise reliability" />
            <DevHorizonStatItem value="3+ Yrs" label="Industry Excellence" subtext="Serving global leaders" />
          </div>
        </section>

        {/* Section 6: Process Timeline */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">6. DevHorizonProcessTimeline</h2>
              <p className="text-sm text-[#8E95A0]">Architectural 4-phase delivery process with dynamic layouts</p>
            </div>
            <div className="inline-flex p-1 rounded-xl bg-[#16191D] border border-[#24272B]">
              {(["grid", "connected", "vertical"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTimelineLayout(mode)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    timelineLayout === mode
                      ? "bg-[#E8EAED] text-[#111315] shadow-sm font-bold"
                      : "text-[#8E95A0] hover:text-white"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-[#16191D] border border-[#C0C5CC]/15">
            <DevHorizonProcessTimeline steps={sampleTimelineSteps} layout={timelineLayout} />
          </div>
        </section>

        {/* Section 7: AI Vibe-Coding Context */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">7. AI & Vibe-Coding Integration</h2>
            <p className="text-sm text-[#8E95A0]">Machine-readable context for Cursor, Windsurf, Claude, and Gemini</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#16191D] border border-[#C0C5CC]/15 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-[#E8EAED]">
                <Terminal className="w-4 h-4 text-[#8E95A0]" />
                packages/dls/llms.txt
              </div>
              <button
                onClick={() => copyToClipboard('/packages/dls/llms.txt', 'llms-path')}
                className="text-xs font-semibold text-[#8E95A0] hover:text-white flex items-center gap-1.5"
              >
                {copiedKey === 'llms-path' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                Copy Path
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-[#111315] border border-[#24272B] font-mono text-xs text-[#8E95A0] overflow-x-auto leading-relaxed">
{`# DevHorizon Design Language System (DLS)
> Luxury obsidian and metallic silver design system for DevHorizon.

Primary Tokens:
- Background: #111315 (Deep luxury charcoal obsidian)
- Surface Cards: #24272B (Slate container)
- Shining Silver: #E8EAED (Primary chrome sheen)
- Secondary Platinum: #C0C5CC (Muted border & typography)
- Contrast White: #FFFFFF (Clean architectural section)

Core Components:
- DevHorizonButton / DevHorizonTechButton (variants: "primary", "secondary", "inverted")
- DevHorizonBadge (variants: "silver", "dark", "outline", "light")
- DevHorizonServiceCard (Pure architectural white)
- DevHorizonCard (Obsidian container)
- DevHorizonStatItem (Bold metallic statistics)
- DevHorizonProcessTimeline (layout: "grid" | "connected" | "vertical")`}
            </pre>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#24272B] py-8 text-center text-xs text-[#8E95A0]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 DevHorizon Technologies Private Limited. All rights reserved.</div>
          <div className="flex items-center gap-4 text-[#C0C5CC]">
            <a href="https://github.com/devhorizontechnologiespvtltd/DLS" target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub Repository
            </a>
            <span>•</span>
            <span className="font-mono text-xs">@devhorizon/dls v1.0.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
