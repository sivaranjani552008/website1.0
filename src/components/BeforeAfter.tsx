import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, TrendingUp, HelpCircle } from "lucide-react";

export default function BeforeAfter() {
  const [activeSegment, setActiveSegment] = useState<"side" | "slider">("side");

  const beforePoints = [
    { title: "Distributed Data Silos", desc: "Data scattered across Salesforce, HubSpot, SAP and random Excel spreadsheets. Teams argue over mismatched figures." },
    { title: "Manual Monthly Reports", desc: "Operations spend 16 hours weekly copy-pasting numbers into PowerPoint slides. Analysis is outdated the moment it drops." },
    { title: "Delayed Reactive Decisions", desc: "Decisions take 3-5 days of database querying work. Anomaly leaks are identified weeks too late, causing severe customer churn." },
    { title: "Guesswork Forecasting", desc: "Finance uses basic static Excel lines. Models fail to adapt to macro market swings or lead variance indicators." }
  ];

  const afterPoints = [
    { title: "Single Source of Truth", desc: "Vastly consolidated enterprise ledgers that match automatically across connected databases with zero reconciliation discrepancies." },
    { title: "Continuous Automated Synthesis", desc: "Automatic Slack briefings, daily text reports, and custom slides scheduled on demand. No manual copy-paste overhead." },
    { title: "Real-Time Proactive Intelligence", desc: "Instant answers in under 3 seconds via natural language queries. Custom anomaly warning limits send immediate notifications." },
    { title: "95.8% Neural Forecast Accuracy", desc: "Automated Temporal Forecast Models that look 12 months ahead, updating based on real CRM fluctuations." }
  ];

  return (
    <div className="w-full font-sans">
      {/* Selector toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-carbon-gray-10 dark:bg-carbon-gray-90/50 p-1 rounded border dark:border-carbon-gray-900 inline-flex items-center gap-1">
          <button
            onClick={() => setActiveSegment("side")}
            className={`px-3 py-1 text-xs font-semibold cursor-pointer rounded transition-colors ${
              activeSegment === "side"
                ? "bg-carbon-blue text-white"
                : "text-gray-500 hover:text-gray-950 dark:hover:text-white"
            }`}
          >
            Side-By-Side Comparison
          </button>
          <button
            onClick={() => setActiveSegment("slider")}
            className={`px-3 py-1 text-xs font-semibold cursor-pointer rounded transition-colors ${
              activeSegment === "slider"
                ? "bg-carbon-blue text-white"
                : "text-gray-500 hover:text-gray-950 dark:hover:text-white"
            }`}
          >
            Interactive Transformation
          </button>
        </div>
      </div>

      {activeSegment === "side" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Historical Legacy Block */}
          <div className="p-6 md:p-8 border border-red-500/10 dark:border-red-500/5 bg-red-500/[0.01] rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 bg-red-500/5 rounded-bl-lg font-mono text-[10px] text-red-500 font-bold uppercase select-none">
              Legacy Approach
            </div>

            <h4 className="text-md font-display font-medium text-red-600 dark:text-red-400 flex items-center gap-2 mb-6">
              <ShieldAlert className="w-5 h-5" />
              Without InsightFlow AI
            </h4>

            <div className="space-y-6">
              {beforePoints.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-red-400 font-mono font-bold shrink-0 text-xs mt-0.5">✕</span>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Improved Modern Block */}
          <div className="p-6 md:p-8 border border-emerald-500/15 dark:border-emerald-500/10 bg-emerald-500/[0.01] rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 bg-emerald-500/5 rounded-bl-lg font-mono text-[10px] text-emerald-600 font-bold uppercase select-none">
              InsightFlow Paradigm
            </div>

            <h4 className="text-md font-display font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5" />
              With InsightFlow AI
            </h4>

            <div className="space-y-6">
              {afterPoints.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-emerald-500 font-mono font-bold shrink-0 text-xs mt-0.5">✓</span>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="border dark:border-carbon-gray-900 rounded-lg overflow-hidden bg-white dark:bg-carbon-gray-100">
          <div className="p-4 md:p-6 bg-carbon-gray-10 dark:bg-carbon-gray-90 border-b dark:border-neutral-850 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-250 font-display">
              Select transformation stage to inspect business metrics shift:
            </span>
            <span className="text-[10px] font-mono text-carbon-blue font-bold px-2 py-0.5 rounded bg-carbon-blue/10">
              Active Simulator
            </span>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "01. Data Gathering", legacy: "16+ hours manual Excel sheets", upgraded: "2-Click Instant Connectors" },
              { label: "02. Analysis Load", legacy: "Reactive custom database queries", upgraded: "Continuous Neural Summarization" },
              { label: "03. Decision Horizon", legacy: "3-5 days delay before execution", upgraded: "Instant Natural Language Queries" },
              { label: "04. Risk Mitigations", legacy: "Belated post-quarter churn analysis", upgraded: "Live Slack Anomaly Pings" }
            ].map((node) => (
              <div key={node.label} className="p-4 rounded-md border dark:border-neutral-850 bg-gray-50/50 dark:bg-neutral-900/10 hover:border-carbon-blue/20 transition-colors">
                <span className="text-[10px] font-mono text-gray-400 block font-semibold">{node.label}</span>
                
                <div className="mt-3.5 space-y-2">
                  <div className="bg-red-400/5 px-2 py-1.5 rounded border border-red-400/10">
                    <span className="text-[9px] font-mono text-red-500 block uppercase font-bold">LEGACY BI</span>
                    <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">{node.legacy}</span>
                  </div>
                  
                  <div className="bg-emerald-500/5 px-2 py-1.5 rounded border border-emerald-500/10">
                    <span className="text-[9px] font-mono text-emerald-500 block uppercase font-bold">INSIGHTFLOW</span>
                    <span className="text-[10px] text-gray-900 dark:text-white block font-medium leading-tight mt-0.5">{node.upgraded}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Metric conversion outcome note */}
          <div className="mx-6 md:mx-8 mb-6 md:mb-8 p-4 bg-emerald-500/10 rounded border border-emerald-500/20 text-center">
            <span className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold block">
              Result: 65% faster operational decisions, with a verified average annual financial return of $42,000+.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
