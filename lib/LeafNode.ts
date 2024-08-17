import type { AbstractParentNode } from './AbstractParentNode.js';
import { Node } from './Node.js';
import type { NodeType } from './types.js';

export abstract class LeafNode<
  TNodeType extends
    | NodeType.COMMENT_NODE
    | NodeType.TEXT_NODE
    | NodeType.DOCUMENT_TYPE_NODE,
  TData,
> extends Node<TNodeType, TData> {
  public parentNode: AbstractParentNode;

  constructor(
    nodeType: TNodeType,
    parentNode: AbstractParentNode,
    data: TData,
  ) {
    super(nodeType, data);
    this.parentNode = parentNode;
  }

  // cant be implemented as there are no selectors for this node
  // eslint-disable-next-line class-methods-use-this
  public nodeMatchesAstRuleItem() {
    return false;
  }

  public toJSON() {
    return {
      nodeType: this.nodeType,
      ...this.data,
    };
  }
}
