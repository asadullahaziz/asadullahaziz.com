import type { Metadata } from 'next';

import { PersonSchema, WebSiteSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Senior Software Engineer with 5+ years building distributed systems, event-driven microservices, and production AI/LLM features. Currently leading backend and AI engineering at Xenia.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <WebSiteSchema />
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
