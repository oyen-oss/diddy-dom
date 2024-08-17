import type { AbstractParentNode } from './AbstractParentNode.js';
import { LeafNode } from './LeafNode.js';
import { NodeType, type CommentNodeJSON } from './types.js';

export type CommentNodeData = {
  readonly comment: string;
};

export class CommentNode extends LeafNode<
  NodeType.COMMENT_NODE,
  CommentNodeData
> {
  constructor(parentNode: AbstractParentNode, data: CommentNodeData) {
    super(NodeType.COMMENT_NODE, parentNode, data);
  }

  public static from(parentNode: AbstractParentNode, data: CommentNodeJSON) {
    return new CommentNode(parentNode, data);
  }

  public get textContent() {
    return `<!--${this.data.comment}-->`;
  }

  public override toString(): string {
    return `${this.constructor.name}(${this.data.comment})`;
  }
}
