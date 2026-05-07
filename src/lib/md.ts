// Tiny, dependency-free Markdown → HTML for the blog body.
// Supports: H2/H3, paragraphs, bullet lists, numbered lists, **bold**, *italic*,
// inline code, and [text](url) links. Good enough for our blog posts and
// keeps the build dependency footprint small.

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const inline = (s: string) =>
  escapeHtml(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text: string, href: string) => {
      const safeHref = /^https?:\/\//i.test(href) || href.startsWith('/') || href.startsWith('#')
        ? href
        : '#';
      const isExternal = /^https?:\/\//i.test(href);
      const rel = isExternal ? ' rel="noopener nofollow"' : '';
      const target = isExternal ? ' target="_blank"' : '';
      return `<a href="${safeHref}"${target}${rel}>${text}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

export function renderMarkdown(md: string): string {
  const lines = md.split(/\r?\n/);
  const out: string[] = [];
  let para: string[] = [];
  let ul: string[] = [];
  let ol: string[] = [];

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' '))}</p>`);
      para = [];
    }
  };
  const flushUl = () => {
    if (ul.length) {
      out.push(`<ul>${ul.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`);
      ul = [];
    }
  };
  const flushOl = () => {
    if (ol.length) {
      out.push(`<ol>${ol.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`);
      ol = [];
    }
  };
  const flushAll = () => {
    flushPara();
    flushUl();
    flushOl();
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushAll();
      continue;
    }
    const h2 = /^##\s+(.*)$/.exec(line);
    const h3 = /^###\s+(.*)$/.exec(line);
    const li = /^[-*]\s+(.*)$/.exec(line);
    const oli = /^\d+\.\s+(.*)$/.exec(line);
    if (h2) {
      flushAll();
      out.push(`<h2>${inline(h2[1])}</h2>`);
    } else if (h3) {
      flushAll();
      out.push(`<h3>${inline(h3[1])}</h3>`);
    } else if (li) {
      flushPara();
      flushOl();
      ul.push(li[1]);
    } else if (oli) {
      flushPara();
      flushUl();
      ol.push(oli[1]);
    } else {
      flushUl();
      flushOl();
      para.push(line);
    }
  }
  flushAll();
  return out.join('\n');
}
