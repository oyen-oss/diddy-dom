import type { AbstractParentNode } from './AbstractParentNode.js';
import { LeafNode } from './LeafNode.js';
import { NodeType, type TextNodeJSON } from './types.js';

export type TextNodeData = {
  text: string;
};

export class TextNode extends LeafNode<NodeType.TEXT_NODE, TextNodeData> {
  public static from(parentNode: AbstractParentNode, data: TextNodeJSON) {
    return new TextNode(parentNode, data);
  }

  constructor(parentNode: AbstractParentNode, data: TextNodeData) {
    super(NodeType.TEXT_NODE, parentNode, data);
  }

  public toString() {
    return `${this.constructor.name}(${this.data.text})`;
  }

  public get textContent() {
    return this.data.text;
  }
}
