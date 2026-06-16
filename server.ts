import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded GoogleGenAI client to avoid crashes on load if key missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// Fixed fallback knowledge base for static preview mode when no Gemini Key is provided
const DEFAULT_ANSWERS = [
  {
    k: ["price", "pricing", "cost", "how much", "starter", "growth", "plan"],
    a: "InsightFlow AI offers three tailored pricing tiers:\n\n1. **Starter Plan** ($79/mo, billed annually): Perfect for high-growth startups. Includes 5 data sources, real-time alerts, and standard predictive dashboards.\n2. **Growth Plan** ($249/mo, billed annually): Optimized for expanding operations. Includes 20+ data sources, advanced forecasting models, and automated slide generation.\n3. **Enterprise Plan** (Custom Pricing): Complete single source of truth, custom SLAs, SOC 2 compliance reporting, role-based access control, dedicated support, and unlimited data sources.\n\nWhich of these align with your organization's current scale?"
  },
  {
    k: ["integration", "connect", "source", "salesforce", "hubspot", "sap", "snowflake", "postgresql"],
    a: "InsightFlow AI natively integrates with the modern enterprise data stack, including:\n- **CRMs**: Salesforce and HubSpot\n- **ERPs**: SAP and Oracle\n- **Analytics & BI**: Google Analytics, Microsoft Power BI\n- **Databases & Warehouses**: Snowflake, PostgreSQL, BigQuery, and standard spreadsheets.\n\nAll sources sync in real-time, completely eliminating information silos."
  },
  {
    k: ["security", "soc 2", "gdpr", "compliance", "encrypt", "iso"],
    a: "Security is built into the architecture of InsightFlow AI:\n- **Certifications**: Fully SOC 2 Type II certified, GDPR compliant, and aligned with ISO 27001 standard frameworks.\n- **Encryption**: End-to-End Encryption (AES-256 for data-at-rest and TLS 1.3 for data-in-transit).\n- **Control**: Advanced Role-Based Access Control (RBAC) to ensure strict data governance and user action logging."
  },
  {
    k: ["yc", "y combinator", "venture", "fund", "backing"],
    a: "InsightFlow AI is backed by **Y Combinator (YC)**. We successfully closed our Seed round with top-tier enterprise software investors, allowing us to build a durable, scalable, and highly reliable intelligence engine for high-growth companies and enterprises."
  },
  {
    k: ["benefit", "roi", "save", "metric", "why", "value"],
    a: "Our customers achieve substantial, measurable business outcomes:\n- **65% Faster Decision-Making**: Spot trends and take actions instantly.\n- **80% Workload Reduction**: Automate complex manual reporting cycles.\n- **50% Better Forecasting**: Minimize operational risks through deep neural-predictive modeling.\n- **30% Accelerated Growth**: Detect untapped optimization pathways before your competitors do."
  },
];

// Helper to find key-match answer
function getLocalFallbackResponse(userMessage: string): string {
  const msgLower = userMessage.toLowerCase();
  for (const item of DEFAULT_ANSWERS) {
    if (item.k.some(key => msgLower.includes(key))) {
      return item.a;
    }
  }
  return "Hello! I am your InsightFlow AI Assistant. I can help answer queries about our YC-backed Business Intelligence platform, our interactive features (AI-Powered Analytics, Predictive Forecasting, Risk Alerts), pricing plans, SOC-2 security standards, and seamless product integrations (Salesforce, Snowflake, SAP, HubSpot). Ask me about our features, pricing, or security compliance!";
}

// API: Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const client = getGeminiClient();
    
    if (client) {
      // Create chat context using gemini-3.5-flash
      const systemInstruction = `You are the primary AI Assistant of InsightFlow AI, a premium YC-backed enterprise Business Intelligence and Decision Support Platform. 
      Your tone of voice is highly crisp, professional, strategic, and polished. You embody the corporate and product clarity of companies like Stripe, Linear, and Snowflake.
      
      Key features of InsightFlow AI to highlight when relevant:
      - AI-Powered Analytics & Natural Language Insights
      - Predictive Forecasting (50% improved accuracy)
      - Automated Report Generation & Risk Alerts (80% manual reduction)
      - Seamless enterprise integrations (Salesforce, HubSpot, SAP, Snowflake, PostgreSQL, Oracle, Power BI)
      - High-grade security (SOC 2, GDPR, ISO 27001, End-to-End Encryption)
      
      Pricing structure:
      - Starter Plan ($79/mo billed annually) - Startups. 5 sources.
      - Growth Plan ($249/mo billed annually) - Expansion. 20+ sources. 
      - Enterprise Plan (Custom) - Big corporations/full RBAC/compliance.
      
      Always summarize metrics clearly: 65% faster decisions, 80% reporting optimization, 30% faster growth.
      Keep responses structured, concise, and focused on assisting users to book a demo or sign up.`;

      // Format previous history into parts or content arrays if provided
      const chat = client.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      // Send single message with history context if history is valid
      const response = await chat.sendMessage({ message });
      const reply = response.text || "I was unable to formulate a response. Please try again.";
      return res.json({ response: reply });
    } else {
      // Simulated preview response
      const fallbackResponse = getLocalFallbackResponse(message);
      // Wait a short time to simulate API network response
      await new Promise((resolve) => setTimeout(resolve, 600));
      return res.json({ response: fallbackResponse, isDemoMode: true });
    }
  } catch (err: any) {
    console.error("Gemini API error:", err);
    return res.status(500).json({ 
      error: "Error processing with Gemini API", 
      details: err.message || err 
    });
  }
});

// Start server function incorporating Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[InsightFlow AI Server] running on http://localhost:${PORT}`);
  });
}

startServer();
