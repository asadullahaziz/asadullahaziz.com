export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Languages
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Languages', 'DevOps'],
  },
  // Backend
  {
    title: 'Node.js',
    competency: 5,
    category: ['Backend'],
  },
  {
    title: 'NestJS',
    competency: 5,
    category: ['Backend'],
  },
  {
    title: 'Express.js',
    competency: 5,
    category: ['Backend'],
  },
  {
    title: 'FastAPI',
    competency: 5,
    category: ['Backend'],
  },
  {
    title: 'Django REST Framework',
    competency: 4,
    category: ['Backend'],
  },
  {
    title: 'Spring Boot',
    competency: 3,
    category: ['Backend'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Backend'],
  },
  {
    title: 'REST APIs',
    competency: 5,
    category: ['Backend'],
  },
  // AI / LLM Engineering
  {
    title: 'LangChain',
    competency: 5,
    category: ['AI / LLM'],
  },
  {
    title: 'LangGraph',
    competency: 5,
    category: ['AI / LLM'],
  },
  {
    title: 'RAG',
    competency: 5,
    category: ['AI / LLM'],
  },
  {
    title: 'PGVector',
    competency: 5,
    category: ['AI / LLM', 'Databases'],
  },
  {
    title: 'Prompt Engineering',
    competency: 5,
    category: ['AI / LLM'],
  },
  {
    title: 'OpenAI / GPT-4o',
    competency: 5,
    category: ['AI / LLM'],
  },
  {
    title: 'Langfuse',
    competency: 4,
    category: ['AI / LLM', 'Monitoring'],
  },
  {
    title: 'Hugging Face Transformers',
    competency: 4,
    category: ['AI / LLM'],
  },
  {
    title: 'MCP',
    competency: 5,
    category: ['AI / LLM'],
  },
  {
    title: 'Claude Code',
    competency: 5,
    category: ['AI / LLM'],
  },
  // Databases
  {
    title: 'PostgreSQL',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'ClickHouse',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Databases', 'Messaging'],
  },
  {
    title: 'Elasticsearch',
    competency: 4,
    category: ['Databases', 'Monitoring'],
  },
  // Messaging / Async
  {
    title: 'Apache Kafka',
    competency: 4,
    category: ['Messaging'],
  },
  {
    title: 'BullMQ',
    competency: 5,
    category: ['Messaging', 'Backend'],
  },
  {
    title: 'Trigger.dev',
    competency: 4,
    category: ['Messaging'],
  },
  {
    title: 'Change Data Capture (CDC)',
    competency: 4,
    category: ['Messaging', 'Architecture'],
  },
  // Cloud / DevOps
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'GCP',
    competency: 3,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['DevOps'],
  },
  {
    title: 'CI/CD',
    competency: 4,
    category: ['DevOps'],
  },
  // Architecture
  {
    title: 'Microservices',
    competency: 5,
    category: ['Architecture'],
  },
  {
    title: 'Event-Driven Architecture',
    competency: 5,
    category: ['Architecture'],
  },
  {
    title: 'Distributed Systems',
    competency: 5,
    category: ['Architecture'],
  },
  {
    title: 'Saga Pattern',
    competency: 4,
    category: ['Architecture'],
  },
  {
    title: 'Multi-Tenancy & RBAC',
    competency: 4,
    category: ['Architecture', 'Backend'],
  },
  // Integrations
  {
    title: 'Stripe',
    competency: 5,
    category: ['Integrations'],
  },
  {
    title: 'Stytch',
    competency: 4,
    category: ['Integrations'],
  },
  {
    title: 'Judge0',
    competency: 4,
    category: ['Integrations'],
  },
  {
    title: 'Puppeteer',
    competency: 4,
    category: ['Integrations'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 *
 * Hex values from tailwind.css @theme block:
 * --color-skill-1: #6968b3, --color-skill-2: #37b1f5, --color-skill-3: #40494e
 * --color-skill-4: #515dd4, --color-skill-5: #e47272, --color-skill-6: #cc7b94
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' }, // #6968b3 - dark bg
  { color: 'var(--color-skill-2)', textColor: 'dark' }, // #37b1f5 - light bg
  { color: 'var(--color-skill-3)', textColor: 'light' }, // #40494e - dark bg
  { color: 'var(--color-skill-4)', textColor: 'light' }, // #515dd4 - dark bg
  { color: 'var(--color-skill-5)', textColor: 'dark' }, // #e47272 - light bg
  { color: 'var(--color-skill-6)', textColor: 'dark' }, // #cc7b94 - light bg
];

// Fallback colors for categories beyond the predefined set (with pre-computed contrast)
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with type-safe color assignment.
 * Logs a warning in development if there are more categories than colors.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
