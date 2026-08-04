/** Remove dashes / separators from case study display copy. */
export function undashText(value: string): string {
  return value
    .replace(/\s*[·•—–]\s*/g, ", ")
    .replace(/-/g, " ")
    .replace(/,\s*,+/g, ",")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function undashList(values: string[]): string[] {
  return values.map(undashText);
}
