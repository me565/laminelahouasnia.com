import type { APIRoute } from 'astro';
import { articleCard, profileCard } from '../../lib/og';
import { formatDate, getPosts } from '../../lib/site';

export async function getStaticPaths() {
  const posts = await getPosts();
  return [
    { params: { slug: 'profile' }, props: { post: undefined } },
    ...posts.map((post) => ({ params: { slug: post.id }, props: { post } })),
  ];
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post?: Awaited<ReturnType<typeof getPosts>>[number] };
  const png = post ? await articleCard(post.data.title, formatDate(post.data.pubDate)) : await profileCard();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
