import type { Metadata } from 'next';

import AboutContent from '@/components/About/Sections';
import { PersonSchema } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn about Asad Ullah Aziz, Senior Backend Engineer with 5+ years building distributed systems, event-driven microservices, and production AI/LLM features.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <PageWrapper mainClassName="page-main--wide">
      <PersonSchema />
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About</h1>
        </header>
        <AboutContent markdown={aboutMarkdown} />
      </section>
    </PageWrapper>
  );
}
