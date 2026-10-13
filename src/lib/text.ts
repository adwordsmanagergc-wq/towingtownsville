// Break a long single-paragraph string into readable paragraphs of roughly
// `perPara` sentences each. Splits only on sentence-ending punctuation that is
// followed by a capital letter, so "Mt. Louisa"-style abbreviations survive.
export function toParagraphs(text: string, perPara = 3): string[] {
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z"'“])/);
  const out: string[] = [];
  for (let i = 0; i < sentences.length; i += perPara) {
    out.push(sentences.slice(i, i + perPara).join(' '));
  }
  // Avoid a dangling one-sentence final paragraph.
  if (out.length > 1 && sentences.length % perPara === 1) {
    out[out.length - 2] += ` ${out.pop()}`;
  }
  return out;
}

// Anchor-text variants for contextual links back to the home page, the target
// page for "towing Townsville" / "tow truck Townsville". Rotated by slug so
// anchors vary across the site instead of repeating one exact phrase.
const homeAnchors = [
  'tow truck Townsville',
  'towing Townsville',
  'Townsville tow truck',
  'towing in Townsville',
  'tow truck in Townsville',
];

export function homeAnchor(seed: string): string {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return homeAnchors[h % homeAnchors.length];
}
