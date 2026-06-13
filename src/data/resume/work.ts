/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Xenia',
    position: 'Senior Backend Engineer',
    url: 'https://www.xenia.team',
    startDate: '2024-09-01',
    summary: `Leading backend and AI engineering at Xenia (Remote, Chicago IL), an AI-powered
    operations platform for multi-location businesses. Technical lead for 5 of a 12-person
    engineering team, owning system design, Technical Design Documents, and the release
    lifecycle across event-driven microservices.`,
    highlights: [
      'Built an AI Template Digitizer (LangChain, GPT-4o, RAG with PGVector, Langfuse) that converts uploaded inspection sheets into digital templates, driving a 99% reduction in platform-wide churn, a 20% increase in new signups, and a 60% improvement in prompt accuracy.',
      "Architected a multi-agent AI Copilot (LangChain, LangGraph, PGVector, ClickHouse, OpenAI) that answers natural-language operations questions across locations, a key feature in closing the McDonald's USA enterprise deal.",
      'Re-architected the notification system from a cron-polling monolith to event-driven microservices, scaling from ~100K to 5M+ daily notifications across email, SMS, WhatsApp, and push.',
      'Rebuilt the PDF generation service (Handlebars, Puppeteer, Ghostscript) with an AWS Lambda compression pipeline, cutting generation time for image-heavy documents from 30+ minutes to under 1 minute (~98% faster).',
      "Built a real-time analytics dashboard on Change Data Capture (CDC) pipelines over ClickHouse, contributing to onboarding Dave's Hot Chicken.",
      'Integrated Stytch device fingerprinting across web and mobile, eliminating 100% of bot traffic (up to 1M fraudulent signups/day at peak) with zero impact on legitimate users.',
      "Led AI features that directly contributed to Xenia's $12M Series A; built a Model Context Protocol (MCP) server extending the AI Copilot from read-only queries to full task, project, and template creation.",
    ],
  },
  {
    name: 'WriteSea',
    position: 'Senior Software Engineer',
    url: 'https://www.writesea.com',
    startDate: '2024-01-01',
    endDate: '2024-09-01',
    summary: `Built core platform and AI services at WriteSea (Remote, New York), a SaaS platform
    for AI-assisted resume and cover letter generation serving job seekers and career coaches.`,
    highlights: [
      'Integrated Stripe Connect with Express Accounts to enable partner payouts, generating $35K in platform revenue and disbursing $28K to partners within the first month of launch.',
      'Built the resume and cover letter generation service (FastAPI, LangChain, OpenAI, Pinecone) delivering personalized, job-tailored content at scale, a key feature in closing the University of Alabama deal.',
      'Built a performant Next.js frontend with TanStack Query for efficient server-state management, and designed the MongoDB schema and RESTful API with NestJS and Mongoose.',
    ],
  },
  {
    name: 'Venturenox',
    position: 'Backend Engineer (Founding Engineer, TestFuse)',
    url: 'https://venturenox.com',
    startDate: '2022-06-01',
    endDate: '2024-01-01',
    summary: `Founding engineer of TestFuse (Lahore, Hybrid), an online technical assessment platform.
    Took the product from MVP to a full event-driven microservices architecture.`,
    highlights: [
      'Migrated a FastAPI monolith to 5 event-driven microservices (12-Factor methodology) using Apache Kafka for inter-service communication and the saga pattern for distributed transaction coordination.',
      'Built Strandguard, the auth microservice (NestJS + PostgreSQL), with multi-tenant RBAC, dynamic roles, resource scoping, tenant isolation, Google OAuth, and SSO.',
      'Built an online coding assessment feature end-to-end using Judge0 for sandboxed multi-language execution, with public and hidden test cases.',
      'Built an AWS Lambda pipeline (S3 → MediaConvert → Transcribe) for automated transcription of candidate video interviews, and integrated Stripe subscription billing with full webhook handling.',
    ],
  },
  {
    name: 'Sentwitt',
    position: 'Full Stack Engineer',
    url: 'https://www.sentwitt.com',
    startDate: '2021-05-01',
    endDate: '2022-06-01',
    summary: `Full-stack engineering across web and ML services at Sentwitt (Lahore, Remote).`,
    highlights: [
      'Built responsive React UIs with Redux and an Express.js GraphQL microservice for JWT-based authentication with MongoDB.',
      'Fine-tuned a RoBERTa model with Hugging Face Transformers for project-specific NLP text classification, deployed as a scalable Django REST Framework microservice.',
      'Built a Scrapy-based web scraper for keyword- and hashtag-driven content extraction from social media platforms.',
    ],
  },
];

export default work;
