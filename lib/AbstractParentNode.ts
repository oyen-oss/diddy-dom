import { createParser, type AstRule } from 'css-selector-parser';
import { LeafNode } from './LeafNode.js';
import { Node } from './Node.js';
import type { NodeType, ChildNode, NonLeafNode } from './types.js';

export const kquerySelectorAll = Symbol('querySelectorAll');
export const kChildren = Symbol('children');

export const selectorParser = createParser({
  syntax: 'css1', // keep it simple for now
});

export abstract class AbstractParentNode<
  TNodeType extends NodeType.DOCUMENT_NODE | NodeType.ELEMENT_NODE =
    | NodeType.DOCUMENT_NODE
    | NodeType.ELEMENT_NODE,
  TData = unknown,
> extends Node<TNodeType, TData> {
  public readonly [kChildren] = new Set<ChildNode>();

  public iterateChildrenQueryAstRule<TRule extends AstRule>(
    rule: TRule,
    skipPredicate: (child: NonLeafNode, rule: TRule) => boolean,
    onMatch: (child: NonLeafNode, rule: TRule) => void,
    shortCircuit: boolean,
  ) {
    // eslint-disable-next-line no-restricted-syntax
    for (const child of this.children) {
      // skip leaf nodes as they have no selectors
      if (!(child instanceof LeafNode)) {
        // see if we should skip this child
        if (!skipPredicate(child, rule)) {
          // check for a rule match
          if (child.nodeMatchesAstRuleItems(rule.items)) {
            onMatch(child, rule);
            if (shortCircuit) {
              break;
            }
          }
        }

        // iterate the child node
        child.iterateChildrenQueryAstRule(
          rule,
          skipPredicate,
          onMatch,
          shortCircuit,
        );
      }
    }
  }

  private [kquerySelectorAll](query: string, shortCircuit: boolean) {
    const ast = selectorParser(query);
    const matches = new Set<NonLeafNode>();

    // eslint-disable-next-line no-restricted-syntax
    for (const rule of ast.rules) {
      if (rule.combinator) {
        throw new Error('combinators not supported yet');
      }

      if (rule.nestedRule) {
        throw new Error('nested rules not supported yet');
      }

      if (matches.size > 0 && shortCircuit) {
        break;
      }

      this.iterateChildrenQueryAstRule(
        rule,
        (child: NonLeafNode) => matches.has(child),
        (child: NonLeafNode) => {
          matches.add(child);
        },
        shortCircuit,
      );
    }

    return Array.from(matches);
  }

  public querySelectorAll(query: string) {
    return this[kquerySelectorAll](query, false);
  }

  public querySelector(query: string) {
    return this[kquerySelectorAll](query, true)?.at(0) || null;
  }

  public get children(): ChildNode[] {
    return Array.from(this[kChildren]);
  }

  public appendChild(child: ChildNode) {
    this[kChildren].add(child);
  }

  public get innerHtml(): string {
    return this.children
      .map((child) => {
        if ('outerHtml' in child) {
          return child.outerHtml;
        }

        return child.textContent;
      })
      .join('');
  }

  public get textContent(): string {
    return this.children.map((child) => child.textContent).join('');
  }
}
