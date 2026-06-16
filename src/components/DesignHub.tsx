import React, { useState } from "react";
import {
  GitBranch,
  Grid,
  FileCode,
  Layout,
  CheckCircle,
  Eye,
  Settings,
  HelpCircle,
  Search,
  CheckSquare,
  Milestone
} from "lucide-react";
import {
  DESIGN_TOKENS,
  CARBON_COMPONENTS_MAP,
  SITEMAP_NODES,
  ACCESSIBILITY_STANDARDS,
  EXPANSION_ROADMAP,
  WIREFRAMES_PLANS
} from "../types";

export default function DesignHub() {
  const [activeTab, setActiveTab] = useState<"sitemap" | "wireframes" | "tokens" | "seo">("sitemap");

  return (
    <div className="w-full bg-white dark:bg-carbon-gray-100 border border-carbon-gray-200 dark:border-carbon-gray-900 rounded-md shadow-xl overflow-hidden font-sans">
      {/* Title Header */}
      <div className="p-6 bg-carbon-gray-10 dark:bg-carbon-gray-90/50 border-b border-carbon-gray-200 dark:border-carbon-gray-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-carbon-blue animate-spin-slow" />
              Developer Strategy Console & Design Tokens Hub
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Verify complete Information Architecture, user journeys, low-fidelity skeletons, and IBM Carbon Design Tokens.
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-mono select-none bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded border border-emerald-500/30 font-bold">
            AUDIT STATE: PASSED (100% SUCCESS)
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-gray-200 dark:border-neutral-800 mt-6 select-none overflow-x-auto gap-1">
          <button
            onClick={() => setActiveTab("sitemap")}
            className={`pb-3 px-4 text-xs font-mono tracking-wider uppercase font-semibold border-b-2 transition-all ${
              activeTab === "sitemap"
                ? "border-carbon-blue text-carbon-blue dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Sitemap & Journeys
          </button>
          <button
            onClick={() => setActiveTab("wireframes")}
            className={`pb-3 px-4 text-xs font-mono tracking-wider uppercase font-semibold border-b-2 transition-all ${
              activeTab === "wireframes"
                ? "border-carbon-blue text-carbon-blue dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Low-Fi Wireframes
          </button>
          <button
            onClick={() => setActiveTab("tokens")}
            className={`pb-3 px-4 text-xs font-mono tracking-wider uppercase font-semibold border-b-2 transition-all ${
              activeTab === "tokens"
                ? "border-carbon-blue text-carbon-blue dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Carbon Tokens & Map
          </button>
          <button
            onClick={() => setActiveTab("seo")}
            className={`pb-3 px-4 text-xs font-mono tracking-wider uppercase font-semibold border-b-2 transition-all ${
              activeTab === "seo"
                ? "border-carbon-blue text-carbon-blue dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            SEO, A11y & Roadmap
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* TAB 1: SITEMAP & JOURNEY MAPS */}
        {activeTab === "sitemap" && (
          <div className="space-y-8 animate-fade-in">
            {/* Information Architecture Description */}
            <div>
              <h4 className="text-md font-display font-medium text-gray-900 dark:text-white flex items-center gap-1.5 mb-2">
                <GitBranch className="w-4 h-4 text-carbon-blue" />
                Information Architecture (Sitemap)
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                To maximize search ranking, user onboarding transparency, and seamless navigation layouts, we map out every route structure on the platform:
              </p>
              
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs border border-gray-200 dark:border-neutral-800">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-neutral-900/30 border-b dark:border-neutral-850">
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">ROUTE PATH</th>
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">VIEW TITLE</th>
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">STRUCTURAL TYPE</th>
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">PURPOSE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y dark:divide-neutral-800">
                    {SITEMAP_NODES.map((node) => (
                      <tr key={node.path} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/30">
                        <td className="p-2.5 font-mono text-carbon-blue dark:text-blue-400 font-semibold">{node.path}</td>
                        <td className="p-2.5 font-medium">{node.title}</td>
                        <td className="p-2.5"><span className="px-2 py-0.5 rounded text-[10px] bg-gray-100 dark:bg-neutral-800 font-mono text-gray-500">{node.type}</span></td>
                        <td className="p-2.5 text-gray-500">{node.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* User Journey Map */}
            <div className="border-t dark:border-neutral-800 pt-6">
              <h4 className="text-md font-display font-medium text-gray-900 dark:text-white flex items-center gap-1.5 mb-2">
                <CheckSquare className="w-4 h-4 text-emerald-500" />
                User Onboarding Journey Map
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">
                Designed to guide decision-makers from high information disparity to trusted financial commitment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { step: "01. Disparity", title: "Landing Discovery", action: "Visitor spots YC trust signals & Before/After comparison", result: "Acknowledge CRM silos are slowing operational agility" },
                  { step: "02. Proof", title: "Interactive Run", action: "Client launches Interactive Product Tour sandbox inline", result: "Understands forecasting dashboards in 3 clicks" },
                  { step: "03. Value Valuation", title: "ROI Verification", action: "Inputs labor metrics into the interactive ROI Calculator", result: "Receives customized $42,000+ estimated yearly return metrics" },
                  { step: "04. Engagement", title: "Demo Commitment", action: "Triggers demo form or asks custom compliance details via AI widget", result: "Qualified lead booked instantly with priority status" }
                ].map((item) => (
                  <div key={item.step} className="p-4 rounded border dark:border-carbon-gray-900 bg-carbon-gray-10 dark:bg-carbon-gray-90/25">
                    <span className="text-[10px] font-mono text-carbon-blue font-bold tracking-widest">{item.step}</span>
                    <h5 className="text-sm font-semibold mt-1 font-display">{item.title}</h5>
                    <div className="mt-2.5 space-y-1.5 text-xs text-gray-500">
                      <p><strong className="text-gray-700 dark:text-gray-300">Action:</strong> {item.action}</p>
                      <p><strong className="text-gray-700 dark:text-gray-300">Outcome:</strong> {item.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LOW-FI WIREFRAMES */}
        {activeTab === "wireframes" && (
          <div className="space-y-6 animate-fade-in text-xs">
            <h4 className="text-md font-display font-medium text-gray-900 dark:text-white flex items-center gap-1.5">
              <Layout className="w-4 h-4 text-carbon-blue" />
              Low-Fidelity Architecture Layout Screens
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Schematic blueprints used as scaffolding before styling high-fidelity components. Matches the 100% offline-ready UI design philosophy:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {WIREFRAMES_PLANS.map((plan) => (
                <div key={plan.viewId} className="border dark:border-carbon-gray-900 rounded overflow-hidden">
                  <div className="bg-carbon-gray-10 dark:bg-carbon-gray-90 px-4 py-2 border-b dark:border-neutral-850 font-bold font-display text-gray-750 dark:text-white">
                    {plan.sectionTitle}
                  </div>
                  <pre className="p-4 bg-neutral-950 text-[11px] font-mono text-emerald-400 overflow-x-auto whitespace-pre">
                    {plan.wireframeLayout}
                  </pre>
                  <div className="p-4 bg-gray-50/50 dark:bg-neutral-900/10 border-t dark:border-neutral-850">
                    <span className="font-semibold block mb-1 text-gray-700 dark:text-gray-300">Key Blueprint Elements:</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-gray-500">
                      {plan.elements.map((el) => (
                        <li key={el}>{el}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TOKENS & MAPPING COMPONENT */}
        {activeTab === "tokens" && (
          <div className="space-y-8 animate-fade-in text-xs">
            {/* Component Mapping */}
            <div>
              <h4 className="text-md font-display font-medium text-gray-900 dark:text-white flex items-center gap-1.5 mb-2">
                <Grid className="w-4 h-4 text-carbon-blue" />
                IBM Carbon Component Implementation Map
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                To guarantee compatibility, our templates map common IBM Carbon UI concepts into custom-styled robust Tailwind structures:
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs border border-gray-200 dark:border-neutral-800">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-neutral-900/30 border-b dark:border-neutral-850">
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">IBM CARBON CONCEPT</th>
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">TAILWIND IMPLEMENTATION</th>
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">APPLIED UTILITY CLASSES</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y dark:divide-neutral-800">
                    {CARBON_COMPONENTS_MAP.map((component, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/30">
                        <td className="p-2.5 font-mono text-gray-850 dark:text-gray-250 font-bold">{component.carbonConcept}</td>
                        <td className="p-2.5 text-gray-600 dark:text-gray-300">{component.ourImplementation}</td>
                        <td className="p-2.5 font-mono text-emerald-600 dark:text-emerald-400">{component.tailwindClasses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Design Tokens Table */}
            <div className="border-t dark:border-neutral-800 pt-6">
              <h4 className="text-md font-display font-medium text-gray-900 dark:text-white flex items-center gap-1.5 mb-2">
                <FileCode className="w-4 h-4 text-purple-500" />
                Design Tokens Definitions
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Our theme strategy guarantees WCAG 2.2 color compliance by mapping background and contrast states relative to unified design variables:
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs border border-gray-200 dark:border-neutral-800">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-neutral-900/30 border-b dark:border-neutral-850">
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">TOKEN VARIABLE</th>
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">LIGHT VALUES</th>
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">DARK VALUES</th>
                      <th className="p-2.5 font-bold text-gray-600 dark:text-gray-300">DESIGN APPLICATION TYPE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y dark:divide-neutral-800">
                    {DESIGN_TOKENS.map((token, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/30">
                        <td className="p-2.5 font-mono font-bold text-carbon-blue dark:text-blue-400">{token.name}</td>
                        <td className="p-2.5 font-mono text-gray-700">{token.lightValue}</td>
                        <td className="p-2.5 font-mono text-gray-300">{token.darkValue}</td>
                        <td className="p-2.5 text-gray-500">{token.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SEO, ACCESSIBILITY AND EXPANSION */}
        {activeTab === "seo" && (
          <div className="space-y-6 animate-fade-in text-xs">
            {/* Sitemap/SEO Implementation Plan */}
            <div>
              <h4 className="text-md font-display font-medium text-gray-900 dark:text-white flex items-center gap-1.5 mb-2">
                <Search className="w-4 h-4 text-carbon-blue" />
                SEO Optimization & Indexing Blueprint
              </h4>
              <p className="text-xs text-gray-650 dark:text-gray-350 leading-relaxed mb-3">
                To achieve a targeted Lighthouse SEO score of 95+, the following infrastructure policies are defined in sitemaps:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded border dark:border-carbon-gray-900 bg-carbon-gray-10 dark:bg-carbon-gray-90/20">
                  <span className="font-bold text-gray-800 dark:text-white block mb-1">robots.txt Integration</span>
                  <pre className="p-2.5 bg-neutral-950 text-emerald-400 font-mono rounded text-[10px]">
{`User-agent: *
Allow: /
Sitemap: https://insightflow.ai/sitemap.xml`}
                  </pre>
                </div>
                
                <div className="p-4 rounded border dark:border-carbon-gray-900 bg-carbon-gray-10 dark:bg-carbon-gray-90/20">
                  <span className="font-bold text-gray-800 dark:text-white block mb-1">Dynamic Canonical & OpenGraph Meta</span>
                  <p className="text-gray-500 leading-relaxed">
                    Auto-generated metadata ensures pages contain <code className="font-mono bg-gray-200 dark:bg-neutral-800 px-1 text-[10px]">rel="canonical"</code> URL attributes. OpenGraph elements are populated natively to trigger elegant cards on Twitter (X) and slack preview panes.
                  </p>
                </div>
              </div>
            </div>

            {/* Accessibility Audit */}
            <div className="border-t dark:border-neutral-800 pt-6">
              <h4 className="text-md font-display font-medium text-gray-900 dark:text-white flex items-center gap-1.5 mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                WCAG 2.2 Accessibility Compliance Standard Check
              </h4>
              <div className="space-y-2 mt-3">
                {ACCESSIBILITY_STANDARDS.map((term, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 p-2.5 rounded bg-gray-50 dark:bg-neutral-900/30 border dark:border-neutral-850">
                    <div>
                      <strong className="block font-semibold text-gray-800 dark:text-white font-display">{term.standard}</strong>
                      <span className="text-[11px] text-gray-500 block mt-0.5">{term.implementedCode}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-600 font-extrabold uppercase font-mono">
                      {term.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expansion Roadmap */}
            <div className="border-t dark:border-neutral-800 pt-6">
              <h4 className="text-md font-display font-medium text-gray-900 dark:text-white flex items-center gap-1.5 mb-2">
                <Milestone className="w-4 h-4 text-rose-500 animate-pulse-glow" />
                System Scalability & Feature Horizon Roadmap
              </h4>
              <p className="text-xs text-gray-500 mb-4">
                Architectural strategy layout designed to expand from a single-view prototype to a multi-product portal:
              </p>

              <div className="space-y-4">
                {EXPANSION_ROADMAP.map((horizon, idx) => (
                  <div key={idx} className="p-4 border dark:border-carbon-gray-900 rounded bg-carbon-gray-10 dark:bg-carbon-gray-90/20">
                    <span className="font-mono text-[10px] font-bold text-carbon-blue uppercase">{horizon.horizon}</span>
                    <h5 className="font-semibold text-sm mt-0.5 text-gray-850 dark:text-white">{horizon.milestone}</h5>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {horizon.features.map((feat) => (
                        <span key={feat} className="text-[10px] bg-white dark:bg-neutral-900 border dark:border-carbon-gray-900 text-gray-600 dark:text-gray-400 px-2.5 py-0.5 rounded">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
