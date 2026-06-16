import React, { useState } from "react";
import { Search, Database, Layers, Check, ArrowRight, ShieldCheck } from "lucide-react";

interface IntegrationItem {
  name: string;
  category: "CRM" | "Warehouse" | "Analytics" | "ERP";
  status: "Supported" | "Prerelease" | "Beta";
  logoColor: string;
  description: string;
}

const INTEGRATION_LIST: IntegrationItem[] = [
  { name: "Salesforce CRM", category: "CRM", status: "Supported", logoColor: "bg-sky-500", description: "Automated ingestion of pipelines, enterprise quotes, conversion milestones, and representative logs." },
  { name: "HubSpot", category: "CRM", status: "Supported", logoColor: "bg-orange-500", description: "Monitor active marketing funnels, customer acquisition cost indexes, and campaign outcomes." },
  { name: "SAP S/4HANA", category: "ERP", status: "Supported", logoColor: "bg-blue-600", description: "Single point synchronization of global ledgers, inventory balances, and ledger costs." },
  { name: "Oracle Cloud ERP", category: "ERP", status: "Beta", logoColor: "bg-red-600", description: "Analyze global cash outflows, departmental budget adjustments, and compliance indicators." },
  { name: "Snowflake Cloud", category: "Warehouse", status: "Supported", logoColor: "bg-cyan-400", description: "Continuous transactional query streaming via secure non-invasive data warehouses." },
  { name: "PostgreSQL Database", category: "Warehouse", status: "Supported", logoColor: "bg-blue-700", description: "Direct syncing using modern read-only schema introspection connectors." },
  { name: "Google Analytics 4", category: "Analytics", status: "Supported", logoColor: "bg-yellow-500", description: "Observe live product page traffic ratios, attrition behaviors, and channel traffic patterns." },
  { name: "Microsoft Power BI", category: "Analytics", status: "Prerelease", logoColor: "bg-yellow-600", description: "Publish synthesized AI text insights back into corporate report dashboards." },
];

export default function IntegrationsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "CRM" | "Warehouse" | "Analytics" | "ERP">("All");

  const filteredIntegrations = INTEGRATION_LIST.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full font-sans">
      {/* Filters and search block */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-8 pb-6 border-b border-gray-100 dark:border-carbon-gray-900">
        {/* Categories togglers */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full select-none">
          {(["All", "CRM", "Warehouse", "Analytics", "ERP"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-mono tracking-wider font-semibold uppercase rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-carbon-blue text-white"
                  : "bg-carbon-gray-10 dark:bg-carbon-gray-90 hover:bg-carbon-gray-20 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Input box */}
        <div className="w-full md:w-72 relative">
          <input
            type="text"
            placeholder="Search connections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 border dark:border-carbon-gray-900 rounded bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-carbon-blue"
          />
          <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredIntegrations.map((item) => (
          <div
            key={item.name}
            className="p-5 border dark:border-carbon-gray-900 bg-white dark:bg-carbon-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative group"
          >
            {/* Header logo simulation */}
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${item.logoColor} shrink-0 flex items-center justify-center text-white font-extrabold text-[12px]`}>
                  {item.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-gray-900 dark:text-white font-display">
                    {item.name}
                  </h4>
                  <span className="text-[9px] font-mono font-semibold tracking-wider text-gray-400 uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>

            {/* description content */}
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4 min-h-[50px]">
              {item.description}
            </p>

            {/* Bottom link & support status indicator */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-neutral-850 mt-auto">
              <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                item.status === 'Supported' 
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                  : item.status === 'Beta' 
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
              }`}>
                {item.status}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-carbon-blue dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Configure
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}

        {filteredIntegrations.length === 0 && (
          <div className="col-span-full py-12 text-center border border-dashed rounded dark:border-neutral-800">
            <span className="text-gray-400 text-xs block font-mono">No matching database or tool nodes detected.</span>
            <span className="text-[10px] text-gray-500 mt-1 block">Our open SDK support modules allow you to write custom connectors.</span>
          </div>
        )}
      </div>

      {/* Trust reassurance banner */}
      <div className="mt-8 p-4 bg-carbon-gray-10 dark:bg-carbon-gray-90/30 border dark:border-carbon-gray-900 rounded flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
            Data connections are protected via <span className="font-semibold text-gray-800 dark:text-gray-200">End-to-End Encryption (AES-256)</span> and use strict read-only query permissions. We never write back or alter schema architecture.
          </p>
        </div>
        <button className="text-[11px] font-mono font-bold text-carbon-blue hover:underline whitespace-nowrap">
          Integration SDK Docs &rarr;
        </button>
      </div>
    </div>
  );
}
