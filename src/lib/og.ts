import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

// Share images (1200 x 630) for LinkedIn and other link previews, drawn at
// build time in the site's own type and colours.
const W = 1200;
const H = 630;
const NIGHT = '#161816';
const INK = '#e9ebe7';
const SOFT = '#a4aaa6';
const BLUE = '#9aa7ff';

const fontDir = path.resolve('node_modules/@fontsource/schibsted-grotesk/files');
const fonts = [
  { name: 'Schibsted', data: fs.readFileSync(path.join(fontDir, 'schibsted-grotesk-latin-500-normal.woff')), weight: 500 as const, style: 'normal' as const },
  { name: 'Schibsted', data: fs.readFileSync(path.join(fontDir, 'schibsted-grotesk-latin-700-normal.woff')), weight: 700 as const, style: 'normal' as const },
];
const portrait = `data:image/jpeg;base64,${fs.readFileSync(path.resolve('src/assets/portrait.jpg')).toString('base64')}`;

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

async function render(tree: unknown) {
  const svg = await satori(tree as any, { width: W, height: H, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
}

/** Card for one article: its title, large, with the author and domain. */
export function articleCard(title: string, date: string) {
  const size = title.length > 90 ? 54 : title.length > 60 ? 62 : 72;
  return render(
    h('div', { width: W, height: H, display: 'flex', background: NIGHT, fontFamily: 'Schibsted', color: INK }, [
      h('div', { width: 16, height: H, background: BLUE }),
      h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px 56px 64px', flex: 1 }, [
        h('div', { display: 'flex', fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }, 'Lamine Lahouasnia'),
        h('div', { display: 'flex', fontSize: size, fontWeight: 700, lineHeight: 1.06, letterSpacing: -2 }, title),
        h('div', { display: 'flex', justifyContent: 'space-between', fontSize: 26, fontWeight: 500, color: SOFT }, [
          h('span', {}, date),
          h('span', {}, 'laminelahouasnia.com'),
        ]),
      ]),
    ]),
  );
}

/** Card for the home and About pages: portrait, name and role. */
export function profileCard() {
  return render(
    h('div', { width: W, height: H, display: 'flex', background: NIGHT, fontFamily: 'Schibsted', color: INK }, [
      { type: 'img', props: { src: portrait, width: 630, height: 630, style: { width: 630, height: 630 } } },
      h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px', flex: 1 }, [
        h('div', { display: 'flex', flexDirection: 'column', fontSize: 84, fontWeight: 700, lineHeight: 0.95, letterSpacing: -3 }, [
          h('span', {}, 'Lamine'),
          h('span', {}, 'Lahouasnia'),
        ]),
        h('div', { display: 'flex', marginTop: 32, fontSize: 30, fontWeight: 500, lineHeight: 1.3 }, 'Director of Gen AI, Euromonitor International'),
        h('div', { display: 'flex', marginTop: 40, fontSize: 24, fontWeight: 500, color: BLUE }, 'laminelahouasnia.com'),
      ]),
    ]),
  );
}
