export interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
}

export interface Whitepaper {
  title: string;
  topic: string;
  pages: number;
  downloads: string;
  summary: string;
}

export interface DocCategory {
  category: string;
  items: {
    title: string;
    description: string;
    codeSnippet?: string;
    language?: string;
  }[];
}

export interface UseCaseData {
  role: string;
  badge: string;
  icon: string;
  focus: string;
  problem: string;
  solution: string;
  roi: string;
  quote: string;
  author: string;
  roleTitle: string;
}

// Design deliverables types
export interface DesignToken {
  name: string;
  lightValue: string;
  darkValue: string;
  purpose: string;
}

export interface ComponentMap {
  carbonConcept: string;
  ourImplementation: string;
  tailwindClasses: string;
}

export interface SitemapNode {
  path: string;
  title: string;
  type: string;
  purpose: string;
}

export interface AccessibilityStandard {
  standard: string;
  implementedCode: string;
  status: "Passed" | "Partial";
}

export interface FutureMilestone {
  horizon: string;
  milestone: string;
  features: string[];
}

export const MARKETING_BLOGS: BlogPost[] = [
  {
    title: "Unifying Fragmented Enterprise Data Across 20+ Legacy ERP Systems",
    category: "Engineering Strategy",
    readTime: "7 min read",
    date: "June 12, 2026",
    summary: "How modern AI agents safely query and synthesize metrics from distributed relational databases without exposing PII.",
    content: "Enterprise systems are notoriously disconnected. InsightFlow AI uses non-invasive pipeline connectors that automatically crawl metadata schemas to build a semantic knowledge graph. Read how we achieved GDPR-compliant analytics."
  },
  {
    title: "The Death of Static PDF Dashboards: Spotting Growth Opportunities in Real-Time",
    category: "SaaS Analytics",
    readTime: "5 min read",
    date: "June 10, 2026",
    summary: "Relying on monthly manual spreadsheets causes delay. Real-time predictive forecasting keeps leadership teams ahead of risk margins.",
    content: "When KPIs are calculated post-facto, decisions are reaction-based. By utilizing neural temporal models, our customers reduce manual analysis lag by 65%, responding to opportunities before the next close cycle."
  },
  {
    title: "Why High-Growth Startups Fail Their First SOC 2 Compliance Audit",
    category: "Security & Governance",
    readTime: "9 min read",
    date: "May 28, 2026",
    summary: "A practical guide for technical founders preparing for auditing processes under continuous integration models.",
    content: "Venture-backed enterprises need more than marketing claims. We outline the automated checklist InsightFlow AI uses to secure continuous SOC-2 validation across all CRM, spreadsheet and database sync ports."
  }
];

export const MARKETING_WHITEPAPERS: Whitepaper[] = [
  {
    title: "Next-Generation Predictive Forecasting: Architecture and Error Reduction Margins",
    topic: "Neural Temporal Models",
    pages: 34,
    downloads: "2.4k downloads",
    summary: "A mathematical breakdown of our multi-sourced predictive engine model, reducing forecasting deviation under 4.2%."
  },
  {
    title: "Enterprise BI Modernization Framework 2026",
    topic: "Platform Architecture",
    pages: 48,
    downloads: "4.1k downloads",
    summary: "Best practices for migrating from outdated manual SQL reports and disconnected BI tabs to consolidated AI agents."
  }
];

export const DOCUMENTATION_SECTIONS: DocCategory[] = [
  {
    category: "Get Started",
    items: [
      {
        title: "Platform Overview",
        description: "InsightFlow AI unifies distributed business systems through secure OAuth sync pipelines. Once authenticated, the platform interprets relational schemas and builds real-time, queryable AI data cubes.",
      },
      {
        title: "Developer Installs",
        description: "Integrate InsightFlow AI notifications and telemetry into your internal developer dashboards using our lightweight Node and Python packages.",
        codeSnippet: "npm install @insightflow-ai/node-sdk\n# or\npip install insightflow-sdk",
        language: "bash"
      }
    ]
  },
  {
    category: "API Reference",
    items: [
      {
        title: "Synchronize Data Source",
        description: "Trigger a remote synchronization task for a connected PostgreSQL database, SAP node, or CRM portal.",
        codeSnippet: `curl -X POST "https://api.insightflow.ai/v1/sync" \\\n  -H "Authorization: Bearer $INSIGHTFLOW_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "source_id": "src_8f902acdf8e",\n    "sync_mode": "incremental_delta"\n  }'`,
        language: "bash"
      },
      {
        title: "Query Narrative Insights",
        description: "Utilize natural language query endpoints to receive structured recommendation answers and predictive forecast data vectors.",
        codeSnippet: `import { InsightFlow } from '@insightflow-ai/node-sdk';\n\nconst client = new InsightFlow({ apiKey: 'if_live_...' });\n\nconst insights = await client.insights.generate({\n  target_kpis: ['contract_renewal_rate', 'customer_acquisition_cost'],\n  predictive_months: 6\n});\n\nconsole.log(insights.recommendations);`,
        language: "typescript"
      }
    ]
  },
  {
    category: "Data Security Guides",
    items: [
      {
        title: "Restricted Row-Level Guards",
        description: "Configure custom policy scopes to omit PII and sensitive compensation data at the router gateway prior to vector embedding generation.",
        codeSnippet: `{\n  "governance_policies": {\n    "anonymize_fields": ["ssn", "social_security", "salary_usd"],\n    "authorized_roles": ["exec", "finance_leads"]\n  }\n}`,
        language: "json"
      }
    ]
  }
];

export const USE_CASES: UseCaseData[] = [
  {
    role: "CEOs & Executives",
    badge: "Strategic Visibility",
    icon: "Briefcase",
    focus: "Single Source of Truth",
    problem: "Executives waste precious hours reviewing conflicting charts across 5 departments. Strategic pivots are delayed because of outdated reporting cycles.",
    solution: "InsightFlow AI aggregates cross-departmental telemetry instantly, generating text-based summaries and forecast models on request.",
    roi: "65% faster decision-making; zero boardroom arguments about manual KPI discrepancies.",
    quote: "InsightFlow altered how we run executive planning. I can ask natural questions and get data-backed forecasting results certified across our Salesforce, ERP, and Snowflake warehouses in three seconds flat.",
    author: "Elena Rostov",
    roleTitle: "Chief Executive Officer at TechScale Systems"
  },
  {
    role: "Operations Teams",
    badge: "Workflow Automation",
    icon: "Cpu",
    focus: "Process Streamlining",
    problem: "Operational units spend 12-16 hours weekly copy-pasting data into slide templates and sending manual weekly status emails manually.",
    solution: "Automatic scheduled report assembly delivers high-resolution analytics and anomaly risk notifications directly to Slack and Teams engines.",
    roi: "80% reduction in reporting friction, allowing operations teams to focus purely on fixing risks.",
    quote: "The automated anomalies alert saved us from a severe database replication slip within minutes. It has completely eliminated the manual Sunday prep work.",
    author: "Marcus Van Der Berg",
    roleTitle: "VP of Global Operations at Apex Logistics"
  },
  {
    role: "Finance Teams",
    badge: "Risk Mitigation",
    icon: "TrendingUp",
    focus: "Predictive Intelligence",
    problem: "Traditional spreadsheet projections fail to adapt to macro market volatility, producing static static formulas.",
    solution: "Neural Temporal Models ingest legacy data vectors to project margin outcomes, cash runways, and expansion indicators dynamically.",
    roi: "50% improvement in revenue and operational expenditure forecasting accuracy.",
    quote: "We compared static linear models against InsightFlow's neural forecasts. The accuracy disparity is staggering. We adjusted margins ahead of cash constraints safely.",
    author: "Clara Jenkins",
    roleTitle: "Chief Financial Officer at Sterling Fintech"
  },
  {
    role: "Sales & Marketing",
    badge: "Pipeline Diagnostics",
    icon: "Target",
    focus: "Revenue Expansion",
    problem: "Information disparity between Marketo, HubSpot, and Salesforce results in mismatched attribution and lost pipeline deals.",
    solution: "A unified customer acquisition funnel visualizer that maps touchpoints and surfaces top indicators of target prospect churn.",
    roi: "30% faster detection of high-converting outbound pipelines.",
    quote: "No more engineering support tickets just to map out marketing attribution. The AI correctly identified why our enterprise deals were stalling at the mid-funnel stage.",
    author: "Julian Thorne",
    roleTitle: "VP of Global Sales & Revenue at CloudBase Corp"
  },
  {
    role: "Product Teams",
    badge: "User Engagement",
    icon: "Activity",
    focus: "Churn Reduction",
    problem: "User interactions are scattered inside logs and Mixpanel dashboards, rendering active product alerts highly reactive.",
    solution: "Continuous event monitoring correlates transactional telemetry against customer success databases to flag high-churn risks automatically.",
    roi: "22% reduction in unprompted customer account attritions.",
    quote: "We connected our database query tables to InsightFlow. Within 48 hours, it flagged a critical friction block in our signup flow that was causing customer drop-offs.",
    author: "Sarah Lin",
    roleTitle: "Director of Product at NextGen SaaS"
  }
];

// Design Tokens (Carbon Design inspired)
export const DESIGN_TOKENS: DesignToken[] = [
  { name: "$background-primary", lightValue: "#ffffff", darkValue: "#161616", purpose: "Primary content viewport background" },
  { name: "$background-secondary", lightValue: "#f4f4f4", darkValue: "#262626", purpose: "Structural card surfaces and background cards" },
  { name: "$accent-interactive", lightValue: "#0f62fe", darkValue: "#0f62fe", purpose: "Primary Carbon Blue action buttons and focus states" },
  { name: "$text-primary", lightValue: "#161616", darkValue: "#f4f4f4", purpose: "High contrast displays and title headers" },
  { name: "$text-secondary", lightValue: "#525252", darkValue: "#c6c6c6", purpose: "Body copies and explanatory content layouts" },
  { name: "$border-subtle", lightValue: "#dde1e6", darkValue: "#393939", purpose: "Grid structures and component outlines" },
  { name: "$button-danger", lightValue: "#da1e28", darkValue: "#da1e28", purpose: "System alerts and destructive operations" },
  { name: "$font-family-sans", lightValue: "'IBM Plex Sans', sans-serif", darkValue: "'IBM Plex Sans', sans-serif", purpose: "Universal legible UI layouts" },
  { name: "Spacing Multiplier (Base 4)", lightValue: "4px (mini), 8px, 12px, 16px, 24px, 32px, 48px, 64px", darkValue: "Standard IBM Carbon structural offsets", purpose: "Unified rhythmic spacing framework" }
];

// Carbon Component Mapping Table
export const CARBON_COMPONENTS_MAP: ComponentMap[] = [
  { carbonConcept: "Carbon Header / HeaderNavigation", ourImplementation: "Interactive Sticky Top Navigation", tailwindClasses: "bg-opacity-90 backdrop-blur-md border-b sticky top-0 px-4 py-3" },
  { carbonConcept: "Carbon Grid (Row, Column)", ourImplementation: "Responsive CSS Multi-Column Flex", tailwindClasses: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto" },
  { carbonConcept: "Carbon Tabs (Selector)", ourImplementation: "Stateful Navigation Toggles with Motion Effects", tailwindClasses: "flex border-b border-subtle overflow-x-auto select-none" },
  { carbonConcept: "Carbon Accordion", ourImplementation: "Animated Height Expandable Elements", tailwindClasses: "transition-all duration-300 overflow-hidden border-b border-subtle" },
  { carbonConcept: "Carbon Modal (Enterprise)", ourImplementation: "Dynamic Portals with Backdrop Blur Locks", tailwindClasses: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" },
  { carbonConcept: "Carbon StructuredList", ourImplementation: "Robust Feature Matrixtables with Responsive Columns", tailwindClasses: "w-full border border-subtle text-left rounded-md overflow-hidden font-sans" }
];

// Complete Sitemap Architecture
export const SITEMAP_NODES: SitemapNode[] = [
  { path: "#homepage", title: "Homepage / Dashboard Overview", type: "Core Marketing View", purpose: "Hero converting CTAs, trust signals, feature previews, metrics, and compliance logs." },
  { path: "#product", title: "Product Capabilities Overview", type: "Visual Architecture View", purpose: "Demonstrates telemetry pipeline structures and data security systems." },
  { path: "#features", title: "Feature Showcase Scroll", type: "Interactive Analytics View", purpose: "Highlights core engine capabilities (KPI systems, anomaly modeling, forecast matrix)." },
  { path: "#usecases", title: "Segmented Target Solutions", type: "Stakeholder Dynamic View", purpose: "Identifies problems, custom solutions, and financial savings categorized by executive roles." },
  { path: "#pricing", title: "Interactive Pricing Tiers", type: "Transactional Evaluation View", purpose: "Enables Starter vs Growth vs Enterprise matrix evaluations with custom billing intervals." },
  { path: "#resources", title: "Resources and Knowledge Base", type: "Dynamic Knowledge View", purpose: "Exposes simulated high-impact whitepapers and product update journals." },
  { path: "#docs", title: "Developer API Documentation", type: "Technical Integration View", purpose: "Provides copyable curl snippets and parameters for corporate engineers." },
  { path: "#about", title: "Mission, Vision & Venture Board", type: "Credibility Context View", purpose: "Highlights Seed backing by Y Combinator and organizational principles." },
  { path: "#contact", title: "Calendly Mockup & Registration", type: "Direct Lead Intake View", purpose: "Integrated dynamic contact form, newsletter signup tracker, and interview scheduler." }
];

// WCAG 2.2 Accessibility Audit
export const ACCESSIBILITY_STANDARDS: AccessibilityStandard[] = [
  { standard: "Contrast Ratio (WCAG AA)", implementedCode: "Visual elements ensure text features contrast above 4.5:1 against slate backgrounds dynamically under light/dark modes.", status: "Passed" },
  { standard: "Keyboard Navigation (Tab-Index focus)", implementedCode: "Custom interactive elements include outline ring-accent indicators during keyboard tab traversals.", status: "Passed" },
  { standard: "ARIA Accessibility Labels", implementedCode: "Buttons and toggle icons contain descriptive 'aria-label' and 'role' definitions.", status: "Passed" },
  { standard: "No motion constraints compliance", implementedCode: "Layout triggers and sliders support standard scrolling without forcing flashing triggers.", status: "Passed" }
];

// Expansion Roadmap
export const EXPANSION_ROADMAP: FutureMilestone[] = [
  { horizon: "H2 2026 - Pipeline Expansion", milestone: "Native SAP HANA Client & Custom Database Scans", features: ["Automatic column-level PII tagging with neural metadata classifiers", "Direct integration into Microsoft Fabric and Snowflake workspace APIs"] },
  { horizon: "Q1 2027 - Advanced Chat Agents", milestone: "Self-Repairing Relational Data Agents", features: ["Voice-commanded automated workbook builder tools for CEOs", "Proactive Slack forecast model synthesis triggered on high sales spikes"] },
  { horizon: "H2 2027 - Internationalization", milestone: "L10N Multi-region Language Modules", features: ["Localized legal reporting compliance formats for APAC and EMEA regions", "Distributed ledger storage replication nodes across Europe and Japan"] }
];

// Detailed Low fidelity markup definition
export interface WireframePlan {
  viewId: string;
  sectionTitle: string;
  wireframeLayout: string;
  elements: string[];
}

export const WIREFRAMES_PLANS: WireframePlan[] = [
  {
    viewId: "homepage",
    sectionTitle: "Homepage Hero Wireframe Layout",
    wireframeLayout: `
+--------------------------------------------------------------+
| [LOGO] InsightFlow AI      [P] [F] [U] [PR] [About] [Book CTA] |
+--------------------------------------------------------------+
| [YC TRUST BADGE: BACKED BY Y COMBINATOR]                    |
|                                                              |
|        === TURN DATA INTO DECISIONS INSTANTLY ===            |
|        Actionable forecasts & insights from legacy metrics   |
|                                                              |
|        [ Book Demo (Blue Accent) ]   [ Start Free Trial ]    |
|                                                              |
| +----------------------------------------------------------+ |
| |  [KPI: ARR +34%]  [PRED FORECAST CHART: Neurals 2026]     | |
| |  [ALERT: Customer attrition risk predicted at 12%]       | |
| +----------------------------------------------------------+ |
+--------------------------------------------------------------+
`,
    elements: ["Sticky Carbon header Navigation bar", "YC trust signal label top-centered", "High-contrast action CTAs", "Interactive dashboard mockup outline", "Light-dark selector widget"]
  },
  {
    viewId: "pricing",
    sectionTitle: "Pricing Dynamic Wireframe Grid",
    wireframeLayout: `
+--------------------------------------------------------------+
|                  [Toggle: Monthly / Annual]                  |
|                                                              |
|   +-------------------+  +-------------------+  +----------+ |
|   | STARTER ($79)     |  | GROWTH ($249)     |  | ENTP     | |
|   | - 5 Data Sources  |  | - 20 Data Sources |  | - Custom | |
|   | - Real Alerts     |  | - Neural Models   |  | - SLAs   | |
|   | - Std Dashboard   |  | - Slide Generator |  | - SOC-2  | |
|   | [ Get Started ]   |  | [ Start Free Trial]  | [Contact]| |
|   +-------------------+  +-------------------+  +----------+ |
+--------------------------------------------------------------+
`,
    elements: ["Billing interval state control switch", "Feature comparison check-matrix layout", "Enterprise customized support portal CTA"]
  }
];
