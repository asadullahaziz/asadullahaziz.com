import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    'Asad Ullah Aziz — Senior Backend Engineer. Xenia, WriteSea, Venturenox, Sentwitt. Node.js, TypeScript, Python, LangChain, PostgreSQL, AWS, Kafka.',
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <a
            href="/Asad-Ullah-Aziz-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary resume-pdf-btn"
            download="Asad_Ullah_Aziz_Resume.pdf"
          >
            Download PDF
          </a>
          <p className="resume-summary">
            Senior Backend Engineer with 5+ years building distributed systems,
            event-driven microservices, and AI-powered SaaS products. Currently
            leading backend and AI engineering at Xenia, where the AI features I
            led contributed directly to a $12M Series A and the McDonald&apos;s
            USA enterprise deal. Experienced in production LLM integration, RAG
            pipelines, and multi-agent workflows using LangChain, LangGraph,
            PGVector, and OpenAI.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
