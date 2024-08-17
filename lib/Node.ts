import type { AstRuleItem, AstRuleItems } from './ast.js';
import type { NodeType, NodeTypeJSON } from './types.js';

export abstract class Node<TNodeType extends NodeType, TData = unknown> {
  public readonly nodeType: TNodeType;

  public abstract toString(): string;

  public abstract toJSON(): NodeTypeJSON<TNodeType, TData>;

  public abstract get textContent(): string | null;

  protected data: TData;

  constructor(nodeType: TNodeType, data: TData) {
    this.nodeType = nodeType;
    this.data = data;
  }

  protected abstract nodeMatchesAstRuleItem(item: AstRuleItem): boolean;

  public nodeMatchesAstRuleItems(items: AstRuleItems): boolean {
    return items.every((item) => this.nodeMatchesAstRuleItem(item));
  }
}
