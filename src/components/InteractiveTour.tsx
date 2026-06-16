import React, { useState } from "react";
import { HelpCircle, ChevronRight, ChevronLeft, X, Play, Sparkles } from "lucide-react";

interface TourStep {
  target: string;
  title: string;
  description: string;
  highlightClass: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    target: "connector-hub",
    title: "1. Unified Data Pipelines",
    description: "Connect HubSpot, Salesforce, Snowflake or SAP in 2 clicks. Our systems auto-inspect relational keys to construct a master ledger.",
    highlightClass: "border-carbon-blue shadow-[0_0_20px_rgba(15,98,254,0.3)]"
  },
  {
    target: "predictive-modeling",
    title: "2. Neural Temporal Forecasts",
    description: "Look 6 to 12 months ahead. Neural pathways automatically estimate customer conversion margins with 95.8% historic accuracy.",
    highlightClass: "border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
  },
  {
    target: "alert-center",
    title: "3. Early Risk & Churn Warnings",
    description: "Identify revenue leaks instantly. Receive automated proactive pings to Slack if anomaly variances trend above customized alert metrics.",
    highlightClass: "border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
  },
  {
    target: "narrative-generator",
    title: "4. Natural Language Insights",
    description: "Query details in human English. Receive synthesized enterprise growth guidance without waiting for SQL expert reports.",
    highlightClass: "border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
  }
];

export default function InteractiveTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsOpen(false);
      setCurrentStep(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {/* Quick Launch Banner */}
      <button
        id="btn-launch-tour"
        onClick={() => {
          setIsOpen(true);
          setCurrentStep(0);
        }}
        className="flex items-center gap-2 px-4 py-2 border.5 border-carbon-blue/30 bg-carbon-blue/10 hover:bg-carbon-blue/20 text-carbon-blue dark:text-blue-400 font-sans text-xs font-semibold rounded-md tracking-wider transition-all duration-200 select-none cursor-pointer uppercase"
        aria-label="Start interactive product tour"
      >
        <Sparkles className="w-3.5 h-3.5" />
        Interactive Product Walkthrough
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div
            id="tour-dialog"
            className="w-full max-w-md bg-white dark:bg-carbon-gray-100 border border-carbon-gray-200 dark:border-carbon-gray-900 rounded-md shadow-2xl overflow-hidden font-sans relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-carbon-gray-200 dark:border-carbon-gray-900 bg-carbon-gray-10 dark:bg-carbon-gray-90/50">
              <span className="text-xs font-mono font-semibold tracking-widest text-carbon-blue uppercase flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Product Integration Tour
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close tour modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Illustration of step */}
            <div className="p-6">
              <span className="text-[10px] font-mono select-none px-2 py-0.5 rounded-full bg-carbon-blue/10 text-carbon-blue font-bold">
                STEP {currentStep + 1} OF {TOUR_STEPS.length}
              </span>
              <h4 className="mt-3 text-lg font-display text-gray-900 dark:text-white font-semibold">
                {TOUR_STEPS[currentStep].title}
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {TOUR_STEPS[currentStep].description}
              </p>

              {/* Graphical representation/Mock layout showing highlighted UI card */}
              <div className="mt-6 p-4 rounded border dark:border-carbon-gray-900 bg-carbon-gray-10 dark:bg-carbon-gray-90/40 relative overflow-hidden">
                <div className="flex items-center gap-3 border-b dark:border-carbon-gray-950 pb-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[9px] font-mono text-gray-400">InsightFlow_Dashboard_Sandbox</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div
                    className={`p-2 rounded border text-[10px] font-mono flex flex-col justify-between ${
                      currentStep === 0
                        ? "border-carbon-blue bg-carbon-blue/5 text-carbon-blue"
                        : "border-dashed border-gray-300 dark:border-gray-800 text-gray-400"
                    }`}
                  >
                    <span>CRM & ERP SYNC</span>
                    <span className="text-[9px] font-semibold">● CONNECTED</span>
                  </div>
                  <div
                    className={`p-2 rounded border text-[10px] font-mono flex flex-col justify-between ${
                      currentStep === 1
                        ? "border-emerald-500 bg-emerald-500/5 text-emerald-600"
                        : "border-dashed border-gray-300 dark:border-gray-800 text-gray-400"
                    }`}
                  >
                    <span>6M FORECAST</span>
                    <span className="text-[9px] font-semibold">ARR +34% ACCURACY</span>
                  </div>
                  <div
                    className={`p-2 rounded border text-[10px] font-mono flex flex-col justify-between ${
                      currentStep === 2
                        ? "border-rose-500 bg-rose-500/5 text-rose-600"
                        : "border-dashed border-gray-300 dark:border-gray-800 text-gray-400"
                    }`}
                  >
                    <span>RISK ANALYTICS</span>
                    <span className="text-[9px] font-semibold">1 ANOMALY FLAGGED</span>
                  </div>
                  <div
                    className={`p-2 rounded border text-[10px] font-mono flex flex-col justify-between ${
                      currentStep === 3
                        ? "border-indigo-500 bg-indigo-500/5 text-indigo-600"
                        : "border-dashed border-gray-300 dark:border-gray-800 text-gray-400"
                    }`}
                  >
                    <span>AI INSIGHTS</span>
                    <span className="text-[9px] font-semibold">"PIPELINE BULLET"</span>
                  </div>
                </div>

                <div className="mt-3 text-[9px] font-mono text-gray-400 text-right">
                  Interactive Highlight Activated
                </div>
              </div>
            </div>

            {/* Stepper Footer Action */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-carbon-gray-200 dark:border-carbon-gray-900 bg-carbon-gray-10 dark:bg-carbon-gray-90/50">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer text-gray-500"
              >
                Skip Tour
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="p-1 px-3 border dark:border-carbon-gray-900 hover:bg-gray-100 dark:hover:bg-carbon-gray-90 text-xs rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-gray-700 dark:text-gray-300"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextStep}
                  className="p-1.5 px-4 bg-carbon-blue hover:bg-carbon-blue-hover text-white text-xs font-medium rounded shadow transition-colors flex items-center gap-1 cursor-pointer"
                  aria-label="Next step"
                >
                  {currentStep === TOUR_STEPS.length - 1 ? "Finish" : "Next"}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
