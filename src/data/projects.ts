export type ProjectCategory = 'professional' | 'freelance' | 'learning';

export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  category: ProjectCategory;
  featured?: boolean;
}

// Screenshots are pending — each project points at a shared placeholder.
// Drop a real image in /public/images/projects/ and update the `image` path.
const PLACEHOLDER = '/images/projects/placeholder.svg';

const data: Project[] = [
  // Xenia — AI-powered operations platform
  {
    title: 'AI Template Digitizer',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: PLACEHOLDER,
    date: '2025-03-01',
    desc: 'Built an AI feature that converts uploaded inspection sheets (Word, PDF, image) into reusable digital templates using LangChain, GPT-4o, and RAG with PGVector. Drove a 99% reduction in platform-wide churn, a 20% increase in signups, and a 60% improvement in prompt accuracy.',
    tech: ['LangChain', 'GPT-4o', 'RAG', 'PGVector', 'Langfuse'],
    category: 'professional',
    featured: true,
  },
  {
    title: 'Multi-Agent AI Copilot',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: PLACEHOLDER,
    date: '2025-01-01',
    desc: 'Architected a multi-agent chatbot that answers natural-language operations questions across business locations — one agent extracts entities from PGVector embeddings, another builds and runs structured ClickHouse queries. A key feature in closing the McDonald’s USA enterprise deal.',
    tech: ['LangChain', 'LangGraph', 'PGVector', 'ClickHouse', 'OpenAI'],
    category: 'professional',
    featured: true,
  },
  {
    title: 'Notification System Refactor',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: PLACEHOLDER,
    date: '2024-12-01',
    desc: 'Re-architected the notification system from a cron-polling monolith to event-driven microservices, scaling from ~100K to 5M+ daily notifications across email, SMS, WhatsApp, and push — eliminating lock contention, duplicate delivery, and multi-minute delays.',
    tech: ['Event-Driven', 'Microservices', 'Kafka', 'Node.js'],
    category: 'professional',
    featured: true,
  },
  {
    title: 'PDF Generation Service',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: PLACEHOLDER,
    date: '2024-11-01',
    desc: 'Built a PDF generation service with Handlebars, Puppeteer, and Ghostscript, plus an AWS Lambda pipeline for image compression — cutting generation time for image-heavy documents from 30+ minutes to under 1 minute (~98% faster).',
    tech: ['Puppeteer', 'Handlebars', 'Ghostscript', 'AWS Lambda'],
    category: 'professional',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: PLACEHOLDER,
    date: '2024-10-01',
    desc: 'Built a real-time analytics dashboard on Change Data Capture (CDC) pipelines over ClickHouse, surfacing task completion rates, missed tasks, and failed audit steps for operations managers. Contributed to onboarding Dave’s Hot Chicken.',
    tech: ['CDC', 'ClickHouse', 'PostgreSQL', 'Node.js'],
    category: 'professional',
  },
  {
    title: 'Xenia MCP Server',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: PLACEHOLDER,
    date: '2025-02-01',
    desc: 'Built a Model Context Protocol (MCP) server enabling LLMs to create and assign tasks, manage projects, and generate templates through natural language — extending the AI Copilot from read-only visibility to full write actions across the platform.',
    tech: ['MCP', 'LLM', 'TypeScript', 'Node.js'],
    category: 'professional',
  },

  // WriteSea — AI-assisted resume & cover letter SaaS
  {
    title: 'Stripe Connect Payouts',
    subtitle: 'WriteSea',
    link: 'https://www.writesea.com',
    image: PLACEHOLDER,
    date: '2024-04-01',
    desc: 'Integrated Stripe Connect with Express Accounts to enable career coaches and resume writers to receive payouts — generating $35K in platform revenue and disbursing $28K to partners within the first month of launch.',
    tech: ['Stripe Connect', 'NestJS', 'Webhooks'],
    category: 'professional',
  },
  {
    title: 'Resume & Cover Letter AI Service',
    subtitle: 'WriteSea',
    link: 'https://www.writesea.com',
    image: PLACEHOLDER,
    date: '2024-06-01',
    desc: 'Built a personalized, job-tailored resume and cover letter generation service with FastAPI, LangChain, OpenAI, and Pinecone — the key feature in closing the University of Alabama deal.',
    tech: ['FastAPI', 'LangChain', 'OpenAI', 'Pinecone'],
    category: 'professional',
  },

  // Venturenox — TestFuse technical assessment platform
  {
    title: 'TestFuse: Monolith → Microservices',
    subtitle: 'Venturenox',
    link: 'https://venturenox.com',
    image: PLACEHOLDER,
    date: '2023-06-01',
    desc: 'As founding engineer, migrated a FastAPI monolith MVP to 5 event-driven microservices following 12-Factor methodology — using Apache Kafka for inter-service communication and the saga pattern for distributed transaction coordination.',
    tech: ['NestJS', 'Apache Kafka', 'PostgreSQL', 'Saga Pattern'],
    category: 'professional',
  },
  {
    title: 'Strandguard — Multi-Tenant Auth',
    subtitle: 'Venturenox',
    link: 'https://venturenox.com',
    image: PLACEHOLDER,
    date: '2023-01-01',
    desc: 'Built the authentication microservice from scratch (NestJS + PostgreSQL) with multi-tenant RBAC, dynamic roles, resource scoping, tenant isolation, Google OAuth, and SSO, plus a Super Admin app for the content and support teams.',
    tech: ['NestJS', 'PostgreSQL', 'RBAC', 'OAuth', 'SSO'],
    category: 'professional',
  },
];

export default data;
