import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

import GoogleTagManager from '@/components/Template/GoogleTagManager';
import Navigation from '@/components/Template/Navigation';
import ScrollToTop from '@/components/Template/ScrollToTop';
import {
  AUTHOR_NAME,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  SITE_URL,
  TWITTER_HANDLE,
} from '@/lib/utils';
import './tailwind.css';

const twitterHandle = TWITTER_HANDLE.trim();
const homepageTitle = `${AUTHOR_NAME} — Senior Backend Engineer (AI/LLM)`;

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const raleway = Raleway({
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const siteDescription =
  'Senior Backend Engineer with 5+ years building distributed systems, event-driven microservices, and production AI/LLM features. Currently leading backend and AI engineering at Xenia.';

export const metadata: Metadata = {
  title: {
    default: homepageTitle,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: siteDescription,
  keywords: [
    AUTHOR_NAME,
    'Senior Backend Engineer',
    'AI Engineer',
    'LLM Engineer',
    'RAG',
    'LangChain',
    'Node.js',
    'TypeScript',
    'NestJS',
    'PostgreSQL',
    'backend engineering',
    'distributed systems',
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  manifest: '/manifest.webmanifest',
  // A single self-contained "A" monogram (white glyph on a dark rounded
  // square) serves both themes — it reads well against light and dark
  // browser chrome, so there is no light/dark favicon swap.
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/`,
    siteName: AUTHOR_NAME,
    title: homepageTitle,
    description: siteDescription,
    images: [
      {
        url: OG_IMAGE_PATH,
        secureUrl: new URL(OG_IMAGE_PATH, SITE_URL).toString(),
        type: OG_IMAGE_TYPE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: AUTHOR_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    ...(twitterHandle ? { site: twitterHandle, creator: twitterHandle } : {}),
    title: homepageTitle,
    description: siteDescription,
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* CSP-safe theme initialization - prevents flash on load. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=window.localStorage.getItem('theme');var theme;if(t==='dark'||t==='light'){theme=t}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){theme='dark'}else{theme='light'}document.documentElement.setAttribute('data-theme',theme)}catch(e){}})();`}
        </Script>
      </head>
      <body>
        <GoogleTagManager />
        <ScrollToTop />
        <div className="site-wrapper">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
