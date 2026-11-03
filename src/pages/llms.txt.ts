import type { APIRoute } from 'astro';
import { LEXICON, SITE, getPosts } from '../lib/site';

// A plain-text guide to the site for AI tools (llmstxt.org format).
export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const abs = (p: string) => new URL(p, site).href;
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} is Director of Gen AI at Euromonitor International, based in Singapore. He writes about building AI that market researchers and their clients can trust: the gap between an AI answer that looks right and one that is right.`,
    '',
    `- [About](${abs('/about/')}): biography and career`,
    `- [Writing](${abs('/writing/')}): all articles`,
    `- [LinkedIn](${SITE.linkedin})`,
    '',
    '## Ideas he has named',
    '',
    ...LEXICON.map((i) => `- [${i.term}](${abs(`/writing/${i.slug}/`)}): ${i.meaning}`),
    '',
    '## Articles',
    '',
    ...posts.map((p) => `- [${p.data.title}](${abs(`/writing/${p.id}/`)}) (${p.data.pubDate.toISOString().slice(0, 10)}): ${p.data.description}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
