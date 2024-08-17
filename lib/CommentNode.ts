import type { ElementNode } from './ElementNode.js';
import { LeafNode } from './LeafNode.js';
import { NodeType, type CommentNodeJSON } from './types.js';

export type CommentNodeData = {
  readonly comment: string;
};

export class CommentNode extends LeafNode<
  NodeType.COMMENT_NODE,
  CommentNodeData
> {
  constructor(parentNode: ElementNode, data: CommentNodeData) {
    super(NodeType.COMMENT_NODE, parentNode, data);
  }

  public static from(parentNode: ElementNode, data: CommentNodeJSON) {
    return new CommentNode(parentNode, data);
  }

  public get textContent() {
    return `<!--${this.data.comment}-->`;
  }

  public override toString(): string {
    return `${this.constructor.name}(${this.data.comment})`;
  }
}
