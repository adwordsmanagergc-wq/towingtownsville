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
