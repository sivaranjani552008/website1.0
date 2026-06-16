import React, { useState } from "react";
import { DollarSign, ShieldAlert, CheckCircle, Calculator, Info } from "lucide-react";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(25);
  const [prepTime, setPrepTime] = useState(8); // hours weekly per person spent doing manual spreadsheet/reporting
  const [legacyCost, setLegacyCost] = useState(1200); // legacy SaaS BI tools monthly fees

  // Standard business assumptions
  const averageHourlyRate = 65; // average blended labor rate in USD
  const averageAutomationFactor = 0.82; // we automate 82% of reporting
  const decisionSpeedFactor = 0.65; // 65% faster decision processes

  // Computations
  const totalHoursSpentYearly = teamSize * prepTime * 52;
  const hoursSavedYearly = Math.round(totalHoursSpentYearly * averageAutomationFactor);
  const laborValueSavedYearly = Math.round(hoursSavedYearly * averageHourlyRate);
  
  const licenseCostYearly = legacyCost * 12;
  // Assumes they buy Growth plan at $249/mo paid annually which is $2,988/yr
  const runningInsightFlowCostYearly = 2988;
  const softwareSavingsYearly = Math.max(0, licenseCostYearly - runningInsightFlowCostYearly);
  const netFinancialReturnYearly = laborValueSavedYearly + softwareSavingsYearly;

  const roiRatio = Math.max(0, Math.round((netFinancialReturnYearly / runningInsightFlowCostYearly) * 100));

  return (
    <div className="w-full bg-white dark:bg-carbon-gray-100 border border-carbon-gray-200 dark:border-carbon-gray-900 rounded-md shadow-lg overflow-hidden font-sans">
      <div className="p-6 md:p-8 bg-carbon-gray-10 dark:bg-carbon-gray-90/50 border-b border-carbon-gray-200 dark:border-carbon-gray-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-carbon-blue" />
            Strategic Business ROI Architect
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Calculate exact labor hours optimized and direct license savings realized by switching to InsightFlow AI.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-carbon-blue/10 rounded border border-carbon-blue/30 text-carbon-blue dark:text-blue-400 text-xs font-mono">
          <Info className="w-3.5 h-3.5" />
          Based on Blended Labor Rates
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Sliders Input Column */}
        <div className="lg:col-span-5 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-carbon-gray-200 dark:border-carbon-gray-900 space-y-6">
          {/* Slider 1: Team Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="range-team-size" className="text-xs font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-300">
                Active Organization Size
              </label>
              <span className="text-sm font-mono font-bold text-carbon-blue dark:text-blue-400 bg-carbon-blue/5 dark:bg-carbon-blue/15 px-2.5 py-0.5 rounded">
                {teamSize} Stakeholders
              </span>
            </div>
            <input
              id="range-team-size"
              type="range"
              min="5"
              max="250"
              step="5"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-carbon-blue"
            />
            <span className="text-[10px] text-gray-400">Number of users compiling or requiring business indicators.</span>
          </div>

          {/* Slider 2: Weekly Prep Hours */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="range-prep-time" className="text-xs font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-300">
                Reporting Overhead (Weekly)
              </label>
              <span className="text-sm font-mono font-bold text-carbon-blue dark:text-blue-400 bg-carbon-blue/5 dark:bg-carbon-blue/15 px-2.5 py-0.5 rounded">
                {prepTime} Hours/Person
              </span>
            </div>
            <input
              id="range-prep-time"
              type="range"
              min="2"
              max="40"
              step="2"
              value={prepTime}
              onChange={(e) => setPrepTime(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-carbon-blue"
            />
            <span className="text-[10px] text-gray-400">Average weekly hours spent formatting reports, spreadsheets, & slides.</span>
          </div>

          {/* Slider 3: Legacy Software budget */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="range-legacy-cost" className="text-xs font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-300">
                Legacy BI Software Costs
              </label>
              <span className="text-sm font-mono font-bold text-carbon-blue dark:text-blue-400 bg-carbon-blue/5 dark:bg-carbon-blue/15 px-2.5 py-0.5 rounded">
                ${legacyCost.toLocaleString()}/Month
              </span>
            </div>
            <input
              id="range-legacy-cost"
              type="range"
              min="100"
              max="5000"
              step="100"
              value={legacyCost}
              onChange={(e) => setLegacyCost(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-carbon-blue"
            />
            <span className="text-[10px] text-gray-400">Current direct spending on disparate reporting software & database pipelines.</span>
          </div>
        </div>

        {/* Outputs Column */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-gray-50/50 dark:bg-carbon-gray-100/20 space-y-6">
          <span className="text-xs font-mono font-semibold tracking-widest text-carbon-blue uppercase block">
            PROSPECTED SAVINGS PROJECTIONS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Visual Block 1 */}
            <div className="p-4 rounded border dark:border-carbon-gray-900 bg-white dark:bg-carbon-gray-100 shadow-sm">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Optimized Labor Capacity</span>
              <span className="text-2xl md:text-3xl font-display font-medium text-gray-900 dark:text-white block mt-1 tracking-tight">
                {hoursSavedYearly.toLocaleString()} hrs
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">
                Saved annually per business unit
              </span>
            </div>

            {/* Visual Block 2 */}
            <div className="p-4 rounded border dark:border-carbon-gray-900 bg-white dark:bg-carbon-gray-100 shadow-sm">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Decision Acceleration Index</span>
              <span className="text-2xl md:text-3xl font-display font-medium text-gray-900 dark:text-white block mt-1 tracking-tight">
                65% Faster
              </span>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block mt-1">
                Immediate response to pipeline risks
              </span>
            </div>
          </div>

          {/* Large Financial Output Banner */}
          <div className="p-5 rounded bg-carbon-gray-10 dark:bg-carbon-gray-90 border dark:border-carbon-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-widest">
                Net Recovered Financial Value (Year One)
              </span>
              <span className="text-3xl md:text-4xl font-display font-bold text-carbon-blue dark:text-blue-400 block mt-1 leading-none tracking-tight">
                ${netFinancialReturnYearly.toLocaleString()}
              </span>
              <p className="text-[11px] text-gray-500 mt-1.5 leading-snug">
                Combines direct tool savings worth <span className="font-semibold text-gray-800 dark:text-gray-200">${softwareSavingsYearly.toLocaleString()}</span> and reclaimed workforce potential.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3.5 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 rounded min-w-[120px] text-center">
              <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-400 font-bold uppercase tracking-widest">
                PROJECTED ROI
              </span>
              <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                {roiRatio}%
              </span>
            </div>
          </div>

          {/* Summary notes */}
          <div className="pt-2 flex gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
              Based on standard YC enterprise cohort metrics. Demonstrates average net productivity improvements after unified CRM, ERP and Snowflake data connectors are fully commissioned on InsightFlow AI platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
