import type { AstRule, AstString, AstSubstitution } from 'css-selector-parser';

export type AstRuleItems = AstRule['items'];
export type AstRuleItem = AstRule['items'][number];

export function resolveAstString(
  value: AstString | AstSubstitution | undefined,
): string {
  if (!value) {
    return '';
  }

  if (value.type === 'String') {
    return value.value;
  }

  throw new Error('Substitution not supported');
}
