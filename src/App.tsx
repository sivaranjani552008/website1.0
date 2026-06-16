import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  Calculator,
  HelpCircle,
  Briefcase,
  Cpu,
  TrendingUp,
  Target,
  Activity,
  FileCode,
  Menu,
  X,
  ChevronRight,
  Search,
  Bot,
  Send,
  Sun,
  Moon,
  ShieldCheck,
  AlertCircle,
  Calendar,
  Users,
  Globe,
  Download,
  LayoutGrid,
  Terminal,
  ArrowRight,
  Lock,
  Scale,
  Sparkle
} from "lucide-react";

// Modular import from we just created
import InteractiveTour from "./components/InteractiveTour";
import RoiCalculator from "./components/RoiCalculator";
import AiAssistant from "./components/AiAssistant";
import DesignHub from "./components/DesignHub";
import IntegrationsSection from "./components/IntegrationsSection";
import BeforeAfter from "./components/BeforeAfter";
import { USE_CASES, MARKETING_BLOGS, MARKETING_WHITEPAPERS, DOCUMENTATION_SECTIONS } from "./types";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Simulated Interactive Dashboard States
  const [salesGrowth, setSalesGrowth] = useState(34);
  const [selectedKpi, setSelectedKpi] = useState<"arr" | "burn" | "churn">("arr");
  const [simulatedSlackSent, setSimulatedSlackSent] = useState(false);
  const [dashboardQueryText, setDashboardQueryText] = useState("");
  const [dashboardAnswerText, setDashboardAnswerText] = useState("");
  const [isDashboardAnalyzing, setIsDashboardAnalyzing] = useState(false);

  // Pricing Interval Toggle
  const [pricingInterval, setPricingInterval] = useState<"monthly" | "annual">("annual");

  // Contact Intake Form State
  const [contactForm, setContactForm] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    estimatedSources: "5-10",
    objective: "Demo Booking",
    message: ""
  });
  const [contactSuccessMessage, setContactSuccessMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Simulated Calendly slot
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Initialize Theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // KPI increments animation simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setSalesGrowth((prev) => {
        const step = Math.random() > 0.5 ? 0.1 : -0.1;
        const next = prev + step;
        return parseFloat(next.toFixed(1));
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Handle active dashboard natural query sandbox
  const triggerDashboardQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dashboardQueryText.trim()) return;

    setIsDashboardAnalyzing(true);
    setDashboardAnswerText("");

    setTimeout(() => {
      const q = dashboardQueryText.toLowerCase();
      let ans = "";
      if (q.includes("churn") || q.includes("risk")) {
        ans = "ANALYSIS COMPLETE: Detected 3 high-churn accounts inside Salesforce CRM. Neural forecast models predict potential ARR deviation of $12,400 unless action metrics are synchronized by June 28.";
      } else if (q.includes("pipeline") || q.includes("sales") || q.includes("growth")) {
        ans = "ANALYSIS COMPLETE: Enterprise contract pipeline value holds at $412,000. Win-rate prediction increased by +3.4% trailing last week's digital marketing attribution logs.";
      } else if (q.includes("soc") || q.includes("compliance") || q.includes("secure")) {
        ans = "ANALYSIS COMPLETE: Direct encryption tunnel checks out. SOC 2 row limits are verified on all continuous sync instances.";
      } else {
        ans = `ANALYSIS COMPLETE: Calculated metrics successfully. Current continuous business growth holds a +${salesGrowth}% forecast margin index. All integrated sources (PostgreSQL, Salesforce) sync without warning lag.`;
      }
      setIsDashboardAnalyzing(false);
      setDashboardAnswerText(ans);
    }, 1200);
  };

  // Handle Contact Form Submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.fullName || !contactForm.workEmail) {
      alert("Name and email are required to schedule an enterprise consultation.");
      return;
    }

    setContactSuccessMessage(
      `Thank you, ${contactForm.fullName}. Your high-priority demonstration code has been logged. Our enterprise software architecture team has dispatched integration instructions to ${contactForm.workEmail}.`
    );
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(false), 8000);
  };

  // Navigation controller helper
  const navigateTo = (tabName: string) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#161616] text-neutral-800 dark:text-neutral-100 transition-colors duration-300 selection:bg-carbon-blue selection:text-white flex flex-col justify-between">
      
      {/* 1. STICKY TOP HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#161616]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-900 px-4 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Startup Identity */}
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            aria-label="InsightFlow AI Home"
          >
            <div className="w-8 h-8 rounded bg-carbon-blue flex items-center justify-center text-white font-extrabold text-[15px] group-hover:bg-carbon-blue-hover transition-colors">
              IF
            </div>
            <div>
              <span className="text-sm font-display font-bold text-gray-900 dark:text-white block tracking-tight">
                InsightFlow AI
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 block uppercase">
                Backed by YC
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold select-none">
            {[
              { id: "home", label: "Product" },
              { id: "features", label: "Features" },
              { id: "usecases", label: "Use Cases" },
              { id: "pricing", label: "Pricing" },
              { id: "resources", label: "Resources" },
              { id: "docs", label: "Docs" },
              { id: "about", label: "About" },
              { id: "designhub", label: "Carbon Hub" },
              { id: "contact", label: "Contact" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigateTo(tab.id)}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-carbon-blue/10 text-carbon-blue dark:text-blue-400 font-bold"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-850"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Quick Actions (Theme Switcher + Dynamic CTA Demo booking) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 border dark:border-[#393939] hover:bg-neutral-100 dark:hover:bg-neutral-850 rounded text-gray-600 dark:text-gray-300 transition-colors cursor-pointer"
              aria-label="Toggle visual theme mode"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Core Action Lead Intent booking CTA */}
            <button
              onClick={() => navigateTo("contact")}
              className="hidden sm:inline-flex items-center gap-1 px-4 py-2 bg-carbon-blue hover:bg-carbon-blue-hover text-white text-xs font-semibold rounded shadow-sm transition-colors cursor-pointer"
            >
              Book Demo
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 cursor-pointer"
              aria-label="Toggle mobile menu options"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown Panels */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-white dark:bg-[#161616] border-t dark:border-neutral-900 mt-3.5 p-4 space-y-2 text-sm flex flex-col">
            {[
              { id: "home", label: "Product & Home" },
              { id: "features", label: "Features Deepdive" },
              { id: "usecases", label: "Target Use Cases" },
              { id: "pricing", label: "Flexible Pricing" },
              { id: "resources", label: "Resources & Research" },
              { id: "docs", label: "API & SDK Docs" },
              { id: "about", label: "About Mission" },
              { id: "designhub", label: "Technical Carbon Hub" },
              { id: "contact", label: "Contact Consultant" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigateTo(tab.id)}
                className={`p-2.5 rounded text-left transition-all ${
                  activeTab === tab.id
                    ? "bg-carbon-blue/15 text-carbon-blue dark:text-blue-300 font-bold"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => navigateTo("contact")}
              className="w-full text-center py-2.5 bg-carbon-blue text-white font-medium text-xs rounded mt-2.5"
            >
              Book Enterprise Demo
            </button>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1">

        {/* VIEW A: HOMEPAGE (PRODUCT CENTRAL) */}
        {activeTab === "home" && (
          <div className="space-y-24 pb-20">
            
            {/* HER0 WRAPPER */}
            <section className="max-w-7xl mx-auto px-4 pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Product value props */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* YC Credibility Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs font-mono font-semibold uppercase rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  YC Seed Portfolio Status Verified
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                  Turn Data Into <br />
                  <span className="text-carbon-blue dark:text-blue-400">Decisions Instantly</span>
                </h1>

                <p className="text-sm md:text-md text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  InsightFlow AI transforms scattered, disconnected CRM, ERP, and database pipelines into a single source of automated insights, neural forecasts, and predictive risk alerts.
                </p>

                {/* Main CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={() => navigateTo("contact")}
                    className="px-6 py-3 bg-carbon-blue hover:bg-carbon-blue-hover text-white font-semibold text-xs rounded shadow-md transition-colors text-center cursor-pointer uppercase tracking-wider"
                  >
                    Book Demo
                  </button>
                  <button
                    onClick={() => navigateTo("pricing")}
                    className="px-6 py-3 border dark:border-[#393939] hover:bg-gray-50 dark:hover:bg-neutral-850 font-semibold text-xs rounded transition-colors text-center cursor-pointer uppercase tracking-wider"
                  >
                    Start Free Trial
                  </button>
                </div>

                {/* Minor tour link wrapper */}
                <div className="pt-2">
                  <InteractiveTour />
                </div>
              </div>

              {/* Dynamic Mockup Dashboard UI */}
              <div className="lg:col-span-6">
                <div className="p-5 border dark:border-carbon-gray-900 bg-white dark:bg-[#262626] rounded-lg shadow-2xl space-y-6 glow-subtle select-none">
                  
                  {/* Dashboard header visual */}
                  <div className="flex items-center justify-between border-b dark:border-neutral-850 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono font-semibold text-gray-950 dark:text-white">Continuous Revenue Ledger</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">Last Synched: Just Now</span>
                  </div>

                  {/* Telemetry Visual Blocks */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded bg-gray-50 dark:bg-[#161616] border dark:border-neutral-900">
                      <span className="text-[9px] font-mono text-gray-400 block uppercase">Continuous ARR</span>
                      <span className="text-sm font-bold block mt-1 tracking-tight text-neutral-800 dark:text-white">$4.84M USD</span>
                      <span className="text-[9px] text-emerald-500 font-semibold block mt-1">▲ +3.4% MoM</span>
                    </div>

                    <div className="p-3 rounded bg-gray-50 dark:bg-[#161616] border dark:border-neutral-900">
                      <span className="text-[9px] font-mono text-gray-400 block uppercase">Predictive Margin</span>
                      <span className={`text-sm font-bold block mt-1 tracking-tight transition-all text-neutral-800 dark:text-white`}>
                        +{salesGrowth}%
                      </span>
                      <span className="text-[9px] text-gray-400 block mt-1">Computed AI Limit</span>
                    </div>

                    <div className="p-3 rounded bg-gray-50 dark:bg-[#161616] border dark:border-neutral-900">
                      <span className="text-[9px] font-mono text-gray-400 block uppercase">Client Churn Warn</span>
                      <span className="text-sm font-bold text-red-500 block mt-1 tracking-tight">12.4% Margin</span>
                      <span className="text-[9px] text-red-500 font-semibold block mt-1">High anomaly trigger</span>
                    </div>
                  </div>

                  {/* Embedded interactive Slack notifier */}
                  <div className="p-4 bg-gray-100 dark:bg-[#161616]/70 rounded border dark:border-[#393939]/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-500 uppercase font-bold flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-purple-400" />
                        Integrated Slack Alerts
                      </span>
                      <button
                        onClick={() => {
                          setSimulatedSlackSent(true);
                          setTimeout(() => setSimulatedSlackSent(false), 5000);
                        }}
                        className="text-[9px] font-mono bg-carbon-blue text-white px-2 py-0.5 rounded cursor-pointer"
                      >
                        Fire Alert Test
                      </button>
                    </div>

                    {simulatedSlackSent ? (
                      <div className="bg-neutral-900 border border-neutral-950 p-2.5 rounded text-[10px] font-mono text-green-400 animate-fade-in animate-pulse">
                        ● insightflow-bot [ALERT]: Spoke with Salesforce API CRM. Contract renewal indicators in Apex Logistics have slipped post-quarter by -14%. Contact Elena Rostov manually inside Salesforce.
                      </div>
                    ) : (
                      <span className="text-[10px] text-gray-400 block">
                        Link slack channels to receive early indicators on customer metrics spikes automatically.
                      </span>
                    )}
                  </div>

                  {/* Try dynamic natural query inline */}
                  <form onSubmit={triggerDashboardQuery} className="pt-2 border-t dark:border-neutral-850">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                      Query system in Natural English:
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="e.g., Are there any high churn risks?"
                        value={dashboardQueryText}
                        onChange={(e) => setDashboardQueryText(e.target.value)}
                        className="text-xs px-2.5 py-1.5 border dark:border-neutral-800 rounded bg-gray-50 dark:bg-[#161616] text-gray-900 dark:text-white flex-1 focus:outline-none focus:ring-1 focus:ring-carbon-blue"
                      />
                      <button
                        type="submit"
                        disabled={isDashboardAnalyzing}
                        className="p-2 bg-carbon-blue rounded hover:bg-carbon-blue-hover text-white transition-colors cursor-pointer"
                        aria-label="Submit sandbox query"
                      >
                        {isDashboardAnalyzing ? <div className="w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {dashboardAnswerText && (
                      <div className="mt-3 p-3 bg-carbon-blue/5 border border-carbon-blue/20 rounded text-[10px] font-mono text-gray-600 dark:text-blue-300 animate-fade-in leading-relaxed">
                        {dashboardAnswerText}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </section>

            {/* TW-COMPANIES LOGO WALL */}
            <section className="bg-neutral-50 dark:bg-[#161616]/40 border-y border-neutral-200 dark:border-neutral-900 py-10">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-[10px] font-mono font-semibold tracking-widest text-gray-400 uppercase block mb-6">
                  SECURELY SYNCED WITH OUTSTANDING ENTERPRISE ARCHITECTURES
                </span>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-65 grayscale hover:grayscale-0 transition-all">
                  {["Stripe", "Snowflake", "Datadog", "Linear", "Vercel", "Notion", "PostgreSQL", "Salesforce"].map((co) => (
                    <span key={co} className="font-display font-bold text-md text-gray-700 dark:text-neutral-300">
                      {co}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* DYNAMIC METRICS BOARD */}
            <section className="max-w-7xl mx-auto px-4">
              <div className="p-8 md:p-12 border dark:border-carbon-gray-900 bg-carbon-gray-10 dark:bg-[#262626]/20 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
                
                {/* Background decorative item */}
                <div className="absolute inset-0 bg-gradient-to-r from-carbon-blue/5 to-transparent rounded-xl pointer-events-none" />

                {[
                  { value: "65%", label: "Faster Strategic Decisions", sub: "Say goodbye to multi-day reporting delays" },
                  { value: "80%", label: "Manual Reporting Reduction", sub: "Zero copy-pasting numbers into PowerPoint slides" },
                  { value: "50%", label: "Improvement in Projections", sub: "Neural temporal model predictions vs manual lines" },
                  { value: "3x", label: "Financial ROI Realized", sub: "Recovers valuable corporate engineering hours" }
                ].map((item, id) => (
                  <div key={id} className="space-y-2 relative z-10">
                    <span className="text-4xl lg:text-5xl font-mono text-carbon-blue dark:text-blue-400 font-extrabold tracking-tight">
                      {item.value}
                    </span>
                    <h4 className="text-sm font-semibold font-display text-gray-900 dark:text-white">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed max-w-xs mx-auto">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* PROBLEM STAGE */}
            <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#bf1922] uppercase block">
                  The Enterprise Impediment
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-900 dark:text-white tracking-tight">
                  Business Leaders Need Answers,<br />Not More Compartmentalized Dashboards
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Organizations today are drowning in modern tools yet completely starved of context. Critical metrics are spread across 20+ silos, rendering corporate planning highly delayed.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 border dark:border-neutral-900 bg-white dark:bg-[#161616] rounded shadow-sm">
                    <strong className="text-xs font-bold font-display text-[#bf1922] block">Siloed Disconnected Datasets</strong>
                    <span className="text-[11px] text-gray-500 block mt-1">CRMs and custom database backends speak completely different languages.</span>
                  </div>
                  <div className="p-4 border dark:border-neutral-900 bg-white dark:bg-[#161616] rounded shadow-sm">
                    <strong className="text-xs font-bold font-display text-[#bf1922] block">Reactive Outdated Measures</strong>
                    <span className="text-[11px] text-gray-500 block mt-1">Manual reporting routines deliver summaries that are obsolete before presentation.</span>
                  </div>
                </div>
              </div>

              {/* Graphical illustration block using styled css elements */}
              <div className="p-6 md:p-8 border dark:border-[#393939]/80 bg-gray-50 dark:bg-[#262626]/20 rounded-lg space-y-4">
                <strong className="text-xs font-mono font-bold text-gray-400 block uppercase tracking-widest">
                  Typical Corporate Bottleneck Ecosystem
                </strong>
                
                <div className="space-y-3">
                  <div className="p-3 bg-red-500/5 border border-red-500/10 rounded flex items-center justify-between text-xs text-red-700 dark:text-red-400">
                    <span>1. CRM pipelines (Salesforce) disconnected from operational ERP ledger</span>
                    <span className="font-mono text-[9px] font-bold">21 HR DELAY</span>
                  </div>
                  <div className="p-3 bg-red-500/5 border border-red-500/10 rounded flex items-center justify-between text-xs text-red-700 dark:text-red-400">
                    <span>2. Financial analysts copy-pasting numbers to slide templates</span>
                    <span className="font-mono text-[9px] font-bold">3 DAYS DELAY</span>
                  </div>
                  <div className="p-3 bg-red-500/5 border border-red-500/10 rounded flex items-center justify-between text-xs text-red-700 dark:text-red-400">
                    <span>3. Strategic pivots finalized using post-facto figures</span>
                    <span className="font-mono text-[9px] font-bold">14 DAYS LAG</span>
                  </div>
                </div>
                
                <div className="text-[11px] text-gray-400 text-center font-mono">
                  Result: Costly market adjustments performed completely blind.
                </div>
              </div>
            </section>

            {/* COMPREHENSIVE TRANSFORMATION SECTION */}
            <section className="bg-neutral-50 dark:bg-[#161616]/40 py-20 border-y border-neutral-200 dark:border-neutral-900">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                  <span className="text-xs font-mono font-bold text-carbon-blue uppercase block tracking-widest">
                    The Business Shift
                  </span>
                  <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white">
                    Before vs After Shift Analysis
                  </h2>
                  <p className="text-xs text-gray-500">
                    Examine the absolute operational improvements realized when transitioning from fragmented reporting cycles to automated insight flows.
                  </p>
                </div>

                <BeforeAfter />
              </div>
            </section>

            {/* POWER CORE FEATURES GRID */}
            <section className="max-w-7xl mx-auto px-4 space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-mono font-bold text-carbon-blue uppercase block tracking-widest">
                  Platform Core Skeletons
                </span>
                <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white">
                  Automate Decisions on Active Ledgers
                </h2>
                <p className="text-xs text-gray-500">
                  A high-performance neural engine that unifies scattered pipelines into active indicators, risk warnings, and narrative briefings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Sparkles, color: "text-blue-500", title: "AI-Powered Analytics", desc: "No formulas or query lag. Get continuous insights compiled in simple English automatically." },
                  { icon: TrendingUp, color: "text-emerald-500", title: "Predictive Forecasting", desc: "Evaluate margin trends 6-12 months ahead using deep neural temporal modeling." },
                  { icon: FileCode, color: "text-purple-500", title: "Automated Reporting", desc: "Synthesizes data across databases into PowerPoint slides and PDF decks directly." },
                  { icon: ShieldCheck, color: "text-rose-500", title: "Proactive Risk Detection", desc: "Continuously checks connected sync ports to flag churn threats ahead of monthly closes." },
                  { icon: LayoutGrid, color: "text-cyan-500", title: "Executive Dashboards", desc: "Aggregate marketing and sales data into single-board dashboards for leadership boards." },
                  { icon: Bot, color: "text-indigo-500", title: "Real-Time Slack Alerts", desc: "Sync anomaly threshold deviations with Slack or developer terminals instantly." },
                  { icon: Activity, color: "text-amber-500", title: "Robust KPI Mapping", desc: "Auto-inspect relational keys to construct matching revenue and expense KPIs." },
                  { icon: Globe, color: "text-sky-500", title: "Multi-Source Integrations", desc: "Natively connects into Snowflake, Salesforce, PostgreSQL, HubSpot, and SAP warehouses." }
                ].map((item, id) => (
                  <div key={id} className="p-6 border dark:border-[#393939]/80 bg-white dark:bg-[#262626]/20 rounded hover:border-carbon-blue/20 transition-all flex flex-col justify-between">
                    <div>
                      <div className="p-2 bg-gray-50 dark:bg-[#161616] rounded inline-block mb-4 border dark:border-neutral-900">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <h4 className="text-sm font-semibold font-display text-gray-950 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* INTERACTIVE ROI SECTION */}
            <section className="bg-neutral-50 dark:bg-[#161616]/40 py-20 border-y border-neutral-200 dark:border-neutral-900">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 space-y-6">
                  <span className="text-xs font-mono font-bold text-carbon-blue uppercase block tracking-widest">
                    Operational Agility Check
                  </span>
                  <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white tracking-tight">
                    Project Your Net Annual Financial Return
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Switching from distributed BI panels and manual Excel slides saves valuable coordination hours. Compute your estimated team optimization index below.
                  </p>

                  <div className="p-4 bg-white dark:bg-[#262626] rounded border dark:border-[#393939] space-y-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-500 block">STANDARD METRIC DEPLOYMENTS:</span>
                    <p className="text-[11px] text-gray-500">
                      Average corporate cohort saves roughly <span className="font-semibold text-gray-800 dark:text-gray-200">220 hours quarterly</span> on executive summary compilation tasks.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <RoiCalculator />
                </div>
              </div>
            </section>

            {/* ENTERPRISE SECURITY COMPLIANCE WALL */}
            <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-mono font-bold text-carbon-blue uppercase block tracking-widest">
                  Enterprise Security Framework
                </span>
                <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white tracking-tight">
                  High-Grade Information Guarding Protocols
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Protecting corporate financial intelligence demands bulletproof architectures. InsightFlow AI enforces state-of-the-art standards to insulate relational tables.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "SOC 2 Type II Certified", desc: "Rigorous corporate accounting controls." },
                    { title: "GDPR Compliant", desc: "Complete anonymization filters." },
                    { title: "AES-256 E2E Encryption", desc: "Secure resting & in-transit states." },
                    { title: "Role-Based Access Control", desc: "Limit dashboard query privileges." }
                  ].map((x) => (
                    <div key={x.title} className="p-3 border dark:border-neutral-900 bg-[#262626]/5 rounded">
                      <strong className="text-xs font-display font-semibold text-gray-900 dark:text-white block">{x.title}</strong>
                      <span className="text-[10px] text-gray-500 block mt-0.5">{x.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical representation of the encryption sandbox */}
              <div className="p-5 border dark:border-carbon-gray-900 bg-neutral-950 text-emerald-400 font-mono rounded-lg space-y-4">
                <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Terminal className="w-4 h-4 text-emerald-500" />
                  <span className="text-[11px] font-bold">Active Shield: Gateway Anonymization Policy</span>
                </div>
                
                <pre className="text-[10px] overflow-x-auto leading-relaxed">
{`$ init connection --source="snowflake-ledgers"
[SYSTEM]: Introspecting data tables.
[SYSTEM]: RESTRICTED FIELD IDENTIFIED (Comp_USD).
[SHIELD]: Applying Row-Level Gateways...
[SHIELD]: Anonymizing row contents [Comp_USD] -> [OMITTED].
[SYSTEM]: Generating metadata embeddings...
● CONNECTION COMMISSIONED SUCCESSFULLY (SOC 2 Mode)`}
                </pre>
                
                <div className="text-[10px] text-gray-500 text-right">
                  Anonymizes sensitive elements at the source
                </div>
              </div>
            </section>

            {/* INTEGRATIONS DIRECTORY */}
            <section className="bg-neutral-50 dark:bg-[#161616]/40 py-20 border-y border-neutral-200 dark:border-neutral-900">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                  <span className="text-xs font-mono font-bold text-carbon-blue uppercase block tracking-widest">
                    Enterprise Sync Portal
                  </span>
                  <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white">
                    Universal CRM, SAP & Database Connectors
                  </h2>
                  <p className="text-xs text-gray-500">
                    Query, search and filter through our standard backend software integrations configured out of the box.
                  </p>
                </div>

                <IntegrationsSection />
              </div>
            </section>

            {/* CUSTOMER SUCCESS PORTRAITS */}
            <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-mono font-bold text-carbon-blue uppercase block tracking-widest">
                  Customer Success Stories
                </span>
                <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white tracking-tight">
                  Validated Strategic Returns
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Discover how high-growth startups and public enterprises leverage our automated ledger agents to make accurate pivot boardroom decisions.
                </p>
              </div>

              <div className="lg:col-span-8 overflow-hidden">
                <div className="p-6 md:p-8 border dark:border-carbon-gray-900 bg-white dark:bg-[#262626] rounded-lg shadow-md space-y-6">
                  <span className="text-4xl text-neutral-300 font-serif font-bold select-none">&ldquo;</span>
                  <p className="text-sm italic text-gray-700 dark:text-gray-250 leading-relaxed">
                    InsightFlow altered how we run executive planning. I can ask natural questions and get data-backed forecasting results certified across our Salesforce, ERP, and Snowflake warehouses in three seconds flat.
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t dark:border-neutral-850">
                    <div>
                      <strong className="text-xs font-bold font-display text-gray-900 dark:text-white block">Elena Rostov</strong>
                      <span className="text-[10px] text-gray-400 block font-semibold uppercase">Chief Executive Officer at TechScale Systems</span>
                    </div>

                    <div className="p-2 border dark:border-neutral-900 bg-gray-50 dark:bg-[#161616] rounded text-center text-xs font-mono font-bold text-carbon-blue dark:text-blue-300">
                      $120K SAVED ANNUALLY
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FINAL HOMEPAGE CTA */}
            <section className="max-w-7xl mx-auto px-4">
              <div className="p-8 md:p-16 border dark:border-[#393939] bg-neutral-950 text-white rounded-xl text-center space-y-6 relative overflow-hidden">
                {/* Decorative glowing backdrops */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-carbon-blue/30 to-transparent blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                    backed by y combinator
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                    Start Making Smarter Decisions Today
                  </h2>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
                    Unify your Salesforce, CRM & database tables and try automatic natural language answers inside continuous early warning dashboards.
                  </p>

                  <div className="flex justify-center gap-3 pt-4">
                    <button
                      onClick={() => navigateTo("contact")}
                      className="px-6 py-2.5 bg-carbon-blue hover:bg-carbon-blue-hover text-white text-xs font-bold rounded shadow transition-colors cursor-pointer uppercase"
                    >
                      Book a Demo
                    </button>
                    <button
                      onClick={() => navigateTo("pricing")}
                      className="px-6 py-2.5 border border-gray-700 hover:bg-white/10 text-xs font-bold rounded transition-colors cursor-pointer uppercase"
                    >
                      Start Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* VIEW B: PRODUCT DETAILS PAGE */}
        {activeTab === "product" && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-20 animate-fade-in">
            {/* Header */}
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Capability Briefing</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white mt-2">
                Unprecedented Intelligence Architecture
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Learn how InsightFlow AI aggregates disparate relational schemas into secure, multi-dimensional query cubes.
              </p>
            </div>

            {/* Architecture description container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t dark:border-neutral-900 pt-10">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono font-bold bg-carbon-blue/10 text-carbon-blue px-2 py-0.5 rounded uppercase">
                  Continuous Data Siphons
                </span>
                <h3 className="text-xl font-display font-semibold text-gray-950 dark:text-white">
                  Step 1: Secure Introspective Authentication
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our system establishes dynamic OAuth sync keys or SSH tunneling pathways into your Postgres, Snowflake or ERP warehouses, cataloging only schema structures, foreign keys and constraints without importing values.
                </p>

                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Read-only connection defaults
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Automated schema validation
                  </li>
                </ul>
              </div>

              {/* Step Graphic */}
              <div className="lg:col-span-7 p-6 border dark:border-carbon-gray-900 bg-gray-50 dark:bg-[#262626]/20 rounded-lg font-mono text-[11px] text-gray-400 space-y-4 shadow-inner">
                <div className="flex items-center justify-between border-b dark:border-neutral-850 pb-2.5">
                  <span>Schema Mapping Engine</span>
                  <span className="text-emerald-500">ACTIVE</span>
                </div>
                <div>
                  <span className="text-gray-300 font-semibold block">[INSPECTOR]: Cataloging Snowflake Ledger Keys</span>
                  <span className="block mt-1">&#x2514;&#x2500; Identified Client_ID (FK) linked to Salesforce Account_UUID</span>
                  <span className="block mt-1">&#x2514;&#x2500; Verified composite metrics ledger (ARR, Churn)</span>
                </div>
              </div>
            </div>

            {/* Neural explanation screen */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t dark:border-neutral-900 pt-10">
              <div className="lg:col-span-7 p-6 border dark:border-carbon-gray-900 bg-neutral-950 text-emerald-400 font-mono rounded-lg space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold border-b border-gray-800 pb-2 text-white">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <span>Interactive Neural Temporal Model Simulator</span>
                </div>
                <pre className="text-[10px] overflow-x-auto leading-relaxed">
{`$ compute --model="temporal-neural-v2" --predict-months=12
[MODEL]: Fetching 36 months historical ARR delta blocks.
[MODEL]: Formulating neural regression pipeline on lead variances.
[INTELLIGENCE]: ARR predicted variance is under 4.2% historic dev.
[INTELLIGENCE]: Target ARR forecast for Q4 2026 holds at $5.12M USD.
● PREDICTION ENGINE CERTIFIED`}
                </pre>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2.5 py-0.5 rounded uppercase">
                  Predictive Modeling
                </span>
                <h3 className="text-xl font-display font-semibold text-gray-950 dark:text-white">
                  Step 2: Continuous Temporal Projections
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  InsightFlow's temporal prediction frameworks ingest current pipeline balances to compute 12-month projections. By analyzing historical CRM cycles, you can anticipate high conversion spikes before your competitors.
                </p>
              </div>
            </div>

            {/* Use cases callout block */}
            <div className="p-8 border dark:border-[#393939] bg-neutral-50 dark:bg-radial dark:bg-[#262626]/20 rounded-xl space-y-4">
              <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white">
                Engineistered for Outstanding Enterprise Agility
              </h3>
              <p className="text-xs text-gray-500 max-w-2xl leading-relaxed">
                Whether you are a startup CEO tracking cash runways or VP of high-growth sales teams matching pipelines, our unified intelligence console adapts to deliver accurate strategic summaries.
              </p>
              <button
                onClick={() => navigateTo("usecases")}
                className="text-xs font-mono font-bold text-carbon-blue hover:underline"
              >
                Review Customer Segment Use Cases &rarr;
              </button>
            </div>
          </div>
        )}

        {/* VIEW C: FEATURES LIST PAGE */}
        {activeTab === "features" && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-16 animate-fade-in">
            {/* Header */}
            <div>
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Product Capabilities</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white mt-2">
                Uncompromising Analytics Features
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Say goodbye to manually formatting CSV data and writing recurrent dashboard queries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t dark:border-neutral-900 pt-10">
              {[
                { title: "AI-Powered NLP Synthesis", body: "Query complex cross-relational summaries directly utilizing human English. Our engine writes secure underlying metadata models recursively.", highlight: "65% faster boardroom decisions" },
                { title: "Multi-Source Temporal Forecasting", body: "Ingests structural metrics across diverse ports to formulate 12-month indicators, identifying conversion changes easily.", highlight: "50% project accuracy gains" },
                { title: "Automatic scheduled report assembly", body: "Compiles active statistics into neat, presentation-grade PowerPoint slide decks and PDF folders. No human assistance needed.", highlight: "80% reduction in reporting cycles" },
                { title: "Trigger-Based Slack Anomaly Pings", body: "Configure customized trigger thresholds to automatically alert operations rooms on revenue leakage risks before closes.", highlight: "Immediate risk mitigation" }
              ].map((fItem, idx) => (
                <div key={idx} className="p-6 border dark:border-carbon-gray-900 bg-white dark:bg-[#262626] rounded-lg shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-md font-display font-semibold text-gray-905 dark:text-white">
                      {fItem.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {fItem.body}
                    </p>
                  </div>
                  <div className="pt-4 border-t dark:border-neutral-850 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                    CAPABILITY OUTCOME: {fItem.highlight}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-950 p-8 rounded-xl text-center text-white space-y-3 relative overflow-hidden">
              <span className="text-xs font-mono text-amber-400 block uppercase">Continuous Integration Support</span>
              <h3 className="text-xl font-display font-semibold">Want to integrate alerts with internal developer workspaces?</h3>
              <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
                Connect and subscribe to webhook notification triggers. Examine our direct API tutorials and copyable curl formats.
              </p>
              <button
                onClick={() => navigateTo("docs")}
                className="px-5 py-2.5 bg-carbon-blue text-xs font-semibold rounded mt-4 cursor-pointer"
              >
                Go to Developer API Docs
              </button>
            </div>
          </div>
        )}

        {/* VIEW D: USE CASES PAGE */}
        {activeTab === "usecases" && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-16 animate-fade-in">
            {/* Title Header */}
            <div>
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Segmented Stakeholder Paths</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white mt-2">
                Engineered for Corporate Roles
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Discover custom outcomes defined for leaders across vital organizational business segments.
              </p>
            </div>

            {/* Structured detailed list of roles */}
            <div className="space-y-8 border-t dark:border-neutral-900 pt-10">
              {USE_CASES.map((uc) => (
                <div
                  key={uc.role}
                  className="p-6 md:p-8 border dark:border-carbon-gray-900 bg-white dark:bg-[#262626] rounded-xl shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4 space-y-3.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-carbon-blue/10 text-carbon-blue uppercase">
                      {uc.badge}
                    </span>
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                      {uc.role}
                    </h3>
                    <p className="text-xs text-gray-500 font-semibold uppercase font-mono">
                      CORE OBJECTIVE: {uc.focus}
                    </p>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <strong className="text-xs text-[#bf1922] font-semibold block uppercase tracking-wider">Identified Impede:</strong>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{uc.problem}</p>
                    </div>

                    <div>
                      <strong className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block uppercase tracking-wider">Automated Solution:</strong>
                      <p className="text-xs text-gray-650 dark:text-gray-300 mt-0.5 leading-relaxed">{uc.solution}</p>
                    </div>

                    <div className="p-3 bg-gray-50 dark:bg-[#161616] rounded border dark:border-neutral-900 text-xs font-mono">
                      <span className="text-[10px] font-bold text-carbon-blue block uppercase">PROVEN ROI INDICATOR</span>
                      <p className="text-gray-600 dark:text-blue-300 font-semibold mt-1">{uc.roi}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-3 border-l dark:border-neutral-850 pl-6 space-y-3">
                    <span className="text-2xl text-neutral-300 font-serif leading-none">&ldquo;</span>
                    <p className="text-[11px] italic text-gray-500 leading-normal">
                      {uc.quote}
                    </p>
                    <div className="pt-2">
                      <strong className="text-xs text-gray-900 dark:text-white block leading-tight">{uc.author}</strong>
                      <span className="text-[9px] text-gray-400 block font-semibold">{uc.roleTitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW E: PRICING PLANS PAGE */}
        {activeTab === "pricing" && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-20 animate-fade-in">
            {/* Title */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Flexible Commitments</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white leading-tight">
                Honest, Enterprise-Ready Pricing
              </h1>
              <p className="text-xs text-gray-500">
                Choose a plan scaled to your active database data sources and organization requirements. No hidden pipelines fees.
              </p>
            </div>

            {/* Pricing switch */}
            <div className="flex justify-center">
              <div className="p-1 bg-gray-100 dark:bg-neutral-850 border dark:border-[#393939] rounded inline-flex items-center gap-1 select-none">
                <button
                  onClick={() => setPricingInterval("monthly")}
                  className={`px-4 py-1.5 text-xs font-semibold rounded cursor-pointer transition-colors ${
                    pricingInterval === "monthly" ? "bg-carbon-blue text-white" : "text-gray-500 hover:text-gray-950 dark:hover:text-white"
                  }`}
                >
                  Monthly billing
                </button>
                <button
                  onClick={() => setPricingInterval("annual")}
                  className={`px-4 py-1.5 text-xs font-semibold rounded cursor-pointer transition-colors ${
                    pricingInterval === "annual" ? "bg-carbon-blue text-white" : "text-gray-500 hover:text-gray-950 dark:hover:text-white"
                  }`}
                >
                  Annual Billing (Save 20%)
                </button>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* Plan 1: Starter */}
              <div className="p-6 md:p-8 bg-white dark:bg-[#262626] border dark:border-carbon-gray-900 rounded-lg flex flex-col justify-between relative shadow-sm">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">Startups</span>
                  <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white">Starter Plan</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Designed for early-stage teams looking to unify up to 5 data sources like basic PostgreSQL & HubSpot pipelines.
                  </p>
                  
                  <div className="pt-4">
                    <span className="text-3xl font-mono font-bold tracking-tight text-neutral-850 dark:text-white">
                      ${pricingInterval === "annual" ? "79" : "99"}
                    </span>
                    <span className="text-gray-400 text-xs font-semibold"> / Month</span>
                    {pricingInterval === "annual" && <span className="text-[9px] text-emerald-500 font-bold block mt-1 uppercase">Billed annually ($948)</span>}
                  </div>
                </div>

                <div className="border-t dark:border-neutral-850 my-6 pt-6 space-y-3 text-xs text-gray-500">
                  <span className="font-semibold text-gray-700 dark:text-gray-250 block">Includes features:</span>
                  <li className="flex items-center gap-2">✓ 5 Connected Data Sources</li>
                  <li className="flex items-center gap-2">✓ Standard Predictive KPIs</li>
                  <li className="flex items-center gap-2">✓ Automated Slack anomaly pings</li>
                  <li className="flex items-center gap-2">✓ Email community support</li>
                </div>

                <button
                  onClick={() => navigateTo("contact")}
                  className="w-full py-2.5 border border-carbon-blue text-carbon-blue dark:text-blue-400 font-semibold text-xs rounded transition-all hover:bg-carbon-blue hover:text-white text-center cursor-pointer"
                >
                  Get Started
                </button>
              </div>

              {/* Plan 2: Growth */}
              <div className="p-6 md:p-8 bg-white dark:bg-[#262626] border-2 border-carbon-blue rounded-lg flex flex-col justify-between relative shadow-xl">
                <div className="absolute top-0 right-0 p-3 bg-carbon-blue/10 border-b border-l border-carbon-blue/30 rounded-bl-md font-mono text-[9px] text-carbon-blue font-bold uppercase select-none">
                  Most Popular
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-carbon-blue uppercase tracking-widest block">Expansion</span>
                  <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white">Growth Plan</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Perfect for expansion teams linking multiple Salesforce channels, Oracle databases and custom metadata layers.
                  </p>
                  
                  <div className="pt-4">
                    <span className="text-3xl font-mono font-bold tracking-tight text-neutral-850 dark:text-white">
                      ${pricingInterval === "annual" ? "249" : "299"}
                    </span>
                    <span className="text-gray-400 text-xs font-semibold"> / Month</span>
                    {pricingInterval === "annual" && <span className="text-[9px] text-emerald-500 font-bold block mt-1 uppercase">Billed annually ($2,988)</span>}
                  </div>
                </div>

                <div className="border-t dark:border-neutral-850 my-6 pt-6 space-y-3 text-xs text-gray-500">
                  <span className="font-semibold text-gray-700 dark:text-gray-250 block">Everything in Starter, plus:</span>
                  <li className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-200">✓ Up to 25 Data Sources</li>
                  <li className="flex items-center gap-2">✓ 12 Months Predictive Forecasting</li>
                  <li className="flex items-center gap-2">✓ Automated PowerPoint/PDF Slide deck assembly</li>
                  <li className="flex items-center gap-2">✓ 4-Hour support response SLAs</li>
                </div>

                <button
                  onClick={() => navigateTo("contact")}
                  className="w-full py-2.5 bg-carbon-blue hover:bg-carbon-blue-hover text-white font-semibold text-xs rounded transition-all text-center cursor-pointer shadow"
                >
                  Start Free Trial
                </button>
              </div>

              {/* Plan 3: Enterprise */}
              <div className="p-6 md:p-8 bg-[#161616] text-white border border-gray-800 rounded-lg flex flex-col justify-between relative shadow-sm">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">Large Corporations</span>
                  <h3 className="text-lg font-display font-bold">Enterprise Unified</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    For multi-national organizations requiring dedicated pipeline proxies, continuous audit compliance and full RBAC structures.
                  </p>
                  
                  <div className="pt-4">
                    <span className="text-2xl font-mono font-bold tracking-tight">Custom Plan Quotes</span>
                    <span className="text-gray-400 text-xs block mt-1 font-semibold">Volume data discounts available</span>
                  </div>
                </div>

                <div className="border-t border-gray-800 my-6 pt-6 space-y-3 text-xs text-gray-400">
                  <span className="font-semibold text-gray-300 block">Everything in Growth, plus:</span>
                  <li className="flex items-center gap-2">✓ Unlimited Database Sync Ports</li>
                  <li className="flex items-center gap-2">✓ Customizable row-level gateway filters</li>
                  <li className="flex items-center gap-2">✓ Direct legal SOC 2 audit logs</li>
                  <li className="flex items-center gap-2">✓ Dedicated architectural developer support</li>
                </div>

                <button
                  onClick={() => navigateTo("contact")}
                  className="w-full py-2.5 border border-gray-700 hover:bg-white/10 text-white font-semibold text-xs rounded transition-all text-center cursor-pointer"
                >
                  Contact SaaS Sales
                </button>
              </div>

            </div>

            {/* Simple Enterprise FAQ callout */}
            <div className="p-6 rounded border dark:border-neutral-900 bg-gray-50 dark:bg-neutral-900/30 text-center text-xs text-gray-500">
              Need to complete a specific vendor security sheet before buying? Let's assist you. InsightFlow AI holds direct SOC 2 compliance certifications.
            </div>

          </div>
        )}

        {/* VIEW F: RESOURCES (WHITE PAPERS, BLOG & CMS) */}
        {activeTab === "resources" && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-16 animate-fade-in">
            {/* Title */}
            <div>
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Knowledge Ecosystem</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white mt-2">
                InsightFlow Research & Briefs
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Keep up with relational database syncing frameworks, analytics trends, and SOC 2 audits in the enterprise space.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase tracking-widest block border-b dark:border-neutral-900 pb-3">
                HIGH IMPACT STRATEGIC JOURNALS
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MARKETING_BLOGS.map((blog) => (
                  <div key={blog.title} className="p-5 border dark:border-carbon-gray-900 bg-white dark:bg-[#262626] rounded-md shadow-sm space-y-3.5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                        <span>{blog.category}</span>
                        <span>{blog.date}</span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-semibold font-display text-gray-950 dark:text-white mt-2 leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-[11px] text-gray-500 line-clamp-3 mt-2 leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t dark:border-neutral-850 flex items-center justify-between text-[11px] font-mono text-gray-400">
                      <span>{blog.readTime}</span>
                      <button className="text-carbon-blue hover:underline cursor-pointer font-bold">Read Article &rarr;</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Whitepapers */}
            <div className="border-t dark:border-neutral-900 pt-12 space-y-6">
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase tracking-widest block">
                PREMIUM RELEASES & TECHNICAL WHITEPAPERS
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MARKETING_WHITEPAPERS.map((paper) => (
                  <div key={paper.title} className="p-6 border border-dashed dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/10 rounded flex items-start gap-4">
                    <div className="p-3 bg-carbon-blue/10 rounded text-carbon-blue shrink-0">
                      <Download className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-xs sm:text-sm text-gray-905 dark:text-white font-display">
                        {paper.title}
                      </h4>
                      <div className="flex gap-4 text-[10px] font-mono text-gray-400">
                        <span>TOPIC: {paper.topic}</span>
                        <span>{paper.pages} Pages</span>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-normal">
                        {paper.summary}
                      </p>
                      <button className="text-[11px] font-mono font-semibold text-carbon-blue hover:underline mt-2 flex items-center gap-1 cursor-pointer">
                        Download PDF File ({paper.downloads})
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW G: TECHNICAL DOCUMENTS PAGE */}
        {activeTab === "docs" && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-16 animate-fade-in">
            {/* Title */}
            <div>
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Developer Console</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white mt-2">
                Enterprise Integration Documentation
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Trigger synchronized sync jobs, query natural recommendation arrays, or read continuous metrics logs directly using standard rest endpoints.
              </p>
            </div>

            {/* Split layout: Category sidebar vs code panels */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t dark:border-neutral-900 pt-10">
              
              {/* Sidebar categories */}
              <div className="lg:col-span-3 space-y-4">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">DOCUMENTATION TOPICS</span>
                <div className="flex flex-col gap-1 text-xs select-none">
                  {DOCUMENTATION_SECTIONS.map((sec, id) => (
                    <button
                      key={id}
                      className="text-left p-2.5 rounded font-mono hover:bg-gray-100 dark:hover:bg-neutral-850 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      {sec.category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code guides list */}
              <div className="lg:col-span-9 space-y-8">
                {DOCUMENTATION_SECTIONS.map((sec, index) => (
                  <div key={index} className="space-y-6">
                    <h3 className="text-sm font-semibold tracking-wider font-mono text-carbon-blue uppercase border-b dark:border-neutral-900 pb-2">
                      {sec.category}
                    </h3>

                    {sec.items.map((item, id) => (
                      <div key={id} className="p-6 border dark:border-carbon-gray-900 bg-white dark:bg-[#262626] rounded-md space-y-4 shadow-sm">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white font-display">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {item.description}
                        </p>

                        {item.codeSnippet && (
                          <div className="rounded overflow-hidden">
                            <div className="bg-neutral-950 px-4 py-2 text-[10px] font-mono text-gray-500 flex justify-between items-center select-none border-b border-gray-900">
                              <span>SHELL CODE &bull; {item.language}</span>
                              <span
                                className="hover:text-white cursor-pointer"
                                onClick={() => alert("Copied developer code snippet onto clipboard.")}
                              >
                                Copy Code
                              </span>
                            </div>
                            <pre className="p-4 bg-neutral-950 text-[10px] font-mono text-emerald-400 overflow-x-auto whitespace-pre select-text text-left leading-relaxed">
                              {item.codeSnippet}
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* VIEW H: ABOUT MISSION PAGE */}
        {activeTab === "about" && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-16 animate-fade-in">
            {/* Title */}
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Core Mission</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white mt-2">
                Uncompromising Operational Visibility
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                A technical team backed by Y Combinator, focused entirely on resolving strategic metric latency on an enterprise level.
              </p>
            </div>

            {/* Mission / Details card */}
            <div className="p-6 md:p-8 border dark:border-carbon-gray-900 bg-white dark:bg-[#262626] rounded-xl shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t dark:border-neutral-900 pt-10">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 uppercase">
                  Y Combinator Portfolio
                </span>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                  Seed Board backing
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We raised our investment round from senior enterprise developers and partners who understand why static PDFs and manual BI dashboard queries result in costly delays.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <strong className="text-xs font-semibold uppercase tracking-wider block text-gray-700 dark:text-gray-300">Our Vision:</strong>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We believe that strategic metrics shouldn't require custom engineering work, wait times, or board discrepancies. By deploying non-invasive database proxies coupled with deep NLP text summarizing models, leadership teams can identify and solve critical margins threats instantly inside daily slack reports.
                </p>
                
                <div className="pt-4 grid grid-cols-2 gap-4">
                   <div className="p-3 bg-gray-50 dark:bg-[#161616] rounded border dark:border-neutral-900">
                     <span className="text-2xl font-mono text-carbon-blue font-bold block">100%</span>
                     <span className="text-[10px] text-gray-400 block mt-0.5">Focus on Product Clarity</span>
                   </div>
                   <div className="p-3 bg-gray-50 dark:bg-[#161616] rounded border dark:border-neutral-900">
                     <span className="text-2xl font-mono text-carbon-blue font-bold block">0%</span>
                     <span className="text-[10px] text-gray-400 block mt-0.5">Unnecessary marketing jargon</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Secondary advisory section */}
            <div className="p-6 rounded border dark:border-neutral-900 text-center text-xs text-gray-500">
              InsightFlow AI is structured as a product-first SaaS company, leaving complex storytelling secondary to raw decision acceleration outcomes for our clients.
            </div>
          </div>
        )}

        {/* VIEW I: DYNAMIC DESIGN TOKEN DELIVERABLES CONSOLE (CARBON HUB) */}
        {activeTab === "designhub" && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-10 animate-fade-in">
            {/* Title */}
            <div>
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Product Strategy & Archetype</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white mt-2">
                InsightFlow IA & Carbon Map Console
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                This dashboard displays 100% of the deliverables checklist: site sitemaps, user journey routes, low-fidelity wireframes, Carbon map tables, WCAG contrast checks, and sitemap indexing details.
              </p>
            </div>

            {/* Core Strategy component inside page */}
            <div>
              <DesignHub />
            </div>
          </div>
        )}

        {/* VIEW J: CLIENT CONTACT & CONSULTATION BOOKING PAGE */}
        {activeTab === "contact" && (
          <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in space-y-16">
            
            {/* Title */}
            <div>
              <span className="text-xs font-mono font-bold text-carbon-blue uppercase block">Start Decisions Pivot</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white mt-2">
                Schedule Architecture Valuation
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Connect and sync connected databases securely on full enterprise trials today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t dark:border-neutral-900 pt-10">
              
              {/* Left Column: Form Intake */}
              <div className="lg:col-span-7 p-6 border dark:border-carbon-gray-900 bg-white dark:bg-[#262626] rounded-lg shadow-sm space-y-6">
                
                {contactSuccessMessage ? (
                  <div className="p-4 bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 rounded border border-emerald-500/30 text-xs text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                    <strong>{contactSuccessMessage}</strong>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 text-xs text-left">
                    <div>
                      <label htmlFor="input-fullname" className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        id="input-fullname"
                        type="text"
                        required
                        placeholder="Elena Rostov"
                        value={contactForm.fullName}
                        onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                        className="w-full p-2.5 border dark:border-neutral-850 rounded bg-gray-50 dark:bg-[#161616] text-gray-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-carbon-blue"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="input-email" className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                          Work Email *
                        </label>
                        <input
                          id="input-email"
                          type="email"
                          required
                          placeholder="elena@company.com"
                          value={contactForm.workEmail}
                          onChange={(e) => setContactForm({ ...contactForm, workEmail: e.target.value })}
                          className="w-full p-2.5 border dark:border-neutral-850 rounded bg-gray-50 dark:bg-[#161616] text-gray-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-carbon-blue"
                        />
                      </div>
                      <div>
                        <label htmlFor="input-company" className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                          Company Name *
                        </label>
                        <input
                          id="input-company"
                          type="text"
                          required
                          placeholder="Acme Corp"
                          value={contactForm.companyName}
                          onChange={(e) => setContactForm({ ...contactForm, companyName: e.target.value })}
                          className="w-full p-2.5 border dark:border-neutral-850 rounded bg-gray-50 dark:bg-[#161616] text-gray-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-carbon-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="select-sources" className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                          Estimated Legacy Data Sources
                        </label>
                        <select
                          id="select-sources"
                          value={contactForm.estimatedSources}
                          onChange={(e) => setContactForm({ ...contactForm, estimatedSources: e.target.value })}
                          className="w-full p-2.5 border dark:border-neutral-850 rounded bg-gray-50 dark:bg-[#161616] text-gray-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-carbon-blue"
                        >
                          <option>Under 5 sources</option>
                          <option>5-10 sources</option>
                          <option>10-25 sources</option>
                          <option>25+ sources</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="select-objective" className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                          Contact Objective
                        </label>
                        <select
                          id="select-objective"
                          value={contactForm.objective}
                          onChange={(e) => setContactForm({ ...contactForm, objective: e.target.value })}
                          className="w-full p-2.5 border dark:border-neutral-850 rounded bg-gray-50 dark:bg-[#161616] text-gray-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-carbon-blue"
                        >
                          <option>Demo Booking</option>
                          <option>Start Free Trial Assistance</option>
                          <option>General Custom Pricing Quotes</option>
                          <option>Security Check Sheets</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="input-msg" className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                        How can our architecture group assist you?
                      </label>
                      <textarea
                        id="input-msg"
                        rows={4}
                        placeholder="e.g., We plan to unify up to 10 Salesforce endpoints with read-only Snowflake variables..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full p-2.5 border dark:border-neutral-850 rounded bg-gray-50 dark:bg-[#161616] text-gray-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-carbon-blue"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-carbon-blue hover:bg-carbon-blue-hover text-white font-bold rounded cursor-pointer uppercase tracking-wider text-xs shadow"
                    >
                      Complete Registration & Setup Tunnel Trial
                    </button>
                  </form>
                )}

              </div>

              {/* Right Column: Calendly integration mockup and details */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Simulated Calendly console */}
                <div className="p-6 border dark:border-carbon-gray-900 bg-[#262626]/5 dark:bg-[#262626]/20 rounded-lg space-y-4 text-xs text-left">
                  <div className="flex items-center gap-2 border-b dark:border-neutral-850 pb-2.5">
                    <Calendar className="w-4.5 h-4.5 text-carbon-blue animate-pulse-glow" />
                    <div>
                      <strong className="block text-gray-900 dark:text-white font-display">Simulated 15-Min Strategic Synch</strong>
                      <span className="text-[10px] text-gray-400 block mt-0.5">Select a priority developer timing:</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Tomorrow at 10:00 AM",
                      "Tomorrow at 1:30 PM",
                      "Thursday at 9:00 AM",
                      "Thursday at 4:30 PM",
                    ].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-2.5 border text-center transition-all rounded font-mono text-[10px] cursor-pointer ${
                          selectedTimeSlot === slot
                            ? "border-carbon-blue bg-carbon-blue text-white font-bold"
                            : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#161616] hover:border-carbon-blue/40"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  {selectedTimeSlot ? (
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400 rounded text-[10px] font-mono font-semibold animate-fade-in text-center">
                      Timing Lock: {selectedTimeSlot}. Fill in the left form fields to dispatch calendar invite lists automatically.
                    </div>
                  ) : (
                    <span className="text-[9px] text-gray-400 block text-center">
                      Selecting calendar slots auto-aligns executive invitations.
                    </span>
                  )}
                </div>

                {/* Newsletter Box */}
                <div className="p-6 border border-dashed dark:border-neutral-800 rounded-lg text-left text-xs bg-white dark:bg-[#262626]">
                  <strong className="font-semibold text-gray-805 dark:text-white font-display flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4 text-carbon-blue animate-pulse-glow" />
                    Subscribe to Strategic Briefs
                  </strong>
                  <p className="text-gray-500 leading-relaxed mb-3">
                    Weekly research reports covering database performance and cloud security compliance structures.
                  </p>

                  {newsletterSuccess ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold block bg-emerald-500/5 p-2 rounded">
                      Success! You have subscribed to Strategic Analytics briefings.
                    </span>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                      <input
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="flex-1 p-2 border dark:border-neutral-850 rounded bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white focus:outline-none"
                      />
                      <button type="submit" className="p-2 bg-carbon-blue text-white rounded cursor-pointer leading-none">
                        Join
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

      </main>

      {/* 5. USER PERSISTENT FLOATING AI CONCIERGE WIDGET */}
      <AiAssistant />

      {/* 6. SYSTEM FOOTER */}
      <footer className="w-full bg-[#161616] text-white border-t border-gray-800 p-8 md:p-12 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-8 items-start select-none">
          
          {/* Logo brand info */}
          <div className="col-span-full md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-carbon-blue flex items-center justify-center text-white font-bold text-[13px]">
                IF
              </div>
              <span className="text-sm font-display font-semibold font-bold">InsightFlow AI</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Helping modern organization leaders automate decision agility without committing expensive technical time into disconnected database dashboards.
            </p>

            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">
              ● backed by y combinator seed round
            </span>
          </div>

          {/* Links Column 1: Product */}
          <div className="col-span-1 md:col-span-2 space-y-3 text-left">
            <strong className="text-gray-300 font-mono tracking-wider uppercase">SaaS Product</strong>
            <div className="flex flex-col gap-2 text-gray-400 select-none">
              <button onClick={() => navigateTo("home")} className="hover:text-white text-left text-[11px] cursor-pointer">Platform Overview</button>
              <button onClick={() => navigateTo("features")} className="hover:text-white text-left text-[11px] cursor-pointer">Features Catalog</button>
              <button onClick={() => navigateTo("usecases")} className="hover:text-white text-left text-[11px] cursor-pointer">Target Use Cases</button>
              <button onClick={() => navigateTo("pricing")} className="hover:text-white text-left text-[11px] cursor-pointer">Tier Pricing Plans</button>
            </div>
          </div>

          {/* Links Column 2: Resources */}
          <div className="col-span-1 md:col-span-2 space-y-3 text-left">
            <strong className="text-gray-300 font-mono tracking-wider uppercase">Resources</strong>
            <div className="flex flex-col gap-2 text-gray-400 select-none">
              <button onClick={() => navigateTo("resources")} className="hover:text-white text-left text-[11px] cursor-pointer">InsightFlow Blog</button>
              <button onClick={() => navigateTo("docs")} className="hover:text-white text-left text-[11px] cursor-pointer">API References</button>
              <button onClick={() => navigateTo("designhub")} className="hover:text-white text-left text-[11px] cursor-pointer">Carbon Tokens Hub</button>
              <span className="text-gray-600 block text-[10px] select-none">Careers (Hiring Q3)</span>
            </div>
          </div>

          {/* Links Column 3: Trust */}
          <div className="col-span-1 md:col-span-2 space-y-3 text-left">
            <strong className="text-gray-300 font-mono tracking-wider uppercase">Information Security</strong>
            <div className="flex flex-col gap-2 text-gray-400">
              <span className="block text-[11px] select-none">SOC 2 Safeguards</span>
              <span className="block text-[11px] select-none">GDPR Compliance</span>
              <span className="block text-[11px] select-none">ISO 27001 Posture</span>
              <span className="block text-[11px] select-none">End-to-End Encryption</span>
            </div>
          </div>

          {/* Links Column 4: Legals */}
          <div className="col-span-1 md:col-span-2 space-y-3 text-left">
            <strong className="text-gray-300 font-mono tracking-wider uppercase font-bold">Legals</strong>
            <div className="flex flex-col gap-2 text-gray-450 text-gray-400 select-none">
              <span className="block text-[11px] select-none text-left">Privacy Policy</span>
              <span className="block text-[11px] select-none text-left">Terms of Service</span>
              <span className="block text-[11px] select-none text-left">SLA Commitments</span>
            </div>
          </div>

        </div>

        {/* Global legal disclaimer */}
        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-gray-800 flex flex-col md:flex-row md:items-center justify-between text-gray-500 text-[11px] gap-4 select-none">
          <span>&copy; 2026 InsightFlow AI, Inc. Backed by Y Combinator. All organizational data connections are protected via AES-256 E2E keys.</span>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer" onClick={() => navigateTo("designhub")}>WCAG 2.2 Checked</span>
            <span className="hover:text-white cursor-pointer" onClick={() => navigateTo("designhub")}>Sitemap xml</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
