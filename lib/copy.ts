const replacements: Array<[string, string]> = [
  ['â€“', '-'],
  ['â€‘', '-'],
  ['â€™', "'"],
  ['â€œ', '"'],
  ['â€', '"'],
  ['â†’', '->'],
  ['Â©', '©'],
];

export function normalizeCopy(value: string) {
  return replacements.reduce((text, [from, to]) => text.split(from).join(to), value);
}
