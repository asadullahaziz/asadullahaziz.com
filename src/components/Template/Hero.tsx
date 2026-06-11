import Link from 'next/link';

import BookMeetingButton from '@/components/Contact/BookMeetingButton';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Asad Ullah Aziz</span>
        </h1>

        <p className="hero-tagline">
          Senior Backend Engineer with{' '}
          <span className="hero-highlight">5+ years</span> building distributed
          systems, event-driven microservices, and production AI/LLM features.
          <br />
          Specialized in LLM integration, RAG pipelines, and multi-agent
          workflows.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Distributed Systems</span>
          <span className="hero-chip">LLM / RAG Pipelines</span>
          <span className="hero-chip">Event-Driven Microservices</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-secondary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
          <BookMeetingButton />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
