import { getCollection } from 'astro:content';

export const SITE = {
  name: 'Lamine Lahouasnia',
  title: 'Director of Gen AI, Euromonitor International',
  description:
    'Lamine Lahouasnia leads Gen AI at Euromonitor International in Singapore, and writes about building AI that market researchers can trust.',
  linkedin: 'https://www.linkedin.com/in/laminelahouasnia',
};

/** Prefix an internal path with the site's base path. */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

export async function getPosts() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Ideas named in the articles, with the piece that introduced each one. */
export const LEXICON = [
  { term: 'The Plausibility Trap', slug: 'the-plausibility-trap', meaning: 'An AI answer that looks well researched enough to bet on, and falls apart at the first question about method.' },
  { term: 'The Digital Yes-Man', slug: 'feel-right-versus-be-right', meaning: 'AI trained to agree with you, delivering confirmation bias as a service.' },
  { term: 'The Slot Machine Effect', slug: 'crisis-of-consistency', meaning: 'Pull the same prompt twice and get a different market. Without reproducibility, it is anecdote, not research.' },
  { term: 'The Symmetry Tax', slug: 'the-symmetry-tax', meaning: 'AI squeezing messy reality into tidy lists of three, deleting the outliers where insight usually hides.' },
  { term: 'Insight Engineers', slug: 'insight-engineers', meaning: 'Researchers who build with AI, not just use it: domain expertise plus strategic fluency.' },
  { term: 'The Action Layer', slug: 'three-ai-predictions-2026', meaning: 'The shift from what AI knows to what it can touch: browsers, files and the work itself.' },
  { term: 'Research versus retrieval', slug: 'economics-of-agentic-ai', meaning: 'Pay agents to research. Use a data pipe for the facts, instead of paying them to click around for it.' },
  { term: 'Institutional skills', slug: 'reliability-gap-ai-knowledge-architect', meaning: 'Codifying a firm’s methods once, so every colleague’s AI works the way the firm does.' },
];
