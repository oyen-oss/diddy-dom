import { AbstractParentNode } from './AbstractParentNode.js';
import { DocumentTypeNode } from './DocumentTypeNode.js';
import { ElementNode } from './ElementNode.js';
import type { ChildNodeJSON } from './types.js';
import { NodeType } from './types.js';

export type DocumentNodeData = {
  children?: ChildNodeJSON[];
};

export class DocumentNode<
  TData extends DocumentNodeData = DocumentNodeData,
> extends AbstractParentNode<NodeType.DOCUMENT_NODE, DocumentNodeData> {
  constructor(data?: TData) {
    super(NodeType.DOCUMENT_NODE, data || {});
  }

  public toString() {
    return `${this.constructor.name}`;
  }

  public toJSON() {
    return {
      nodeType: this.nodeType,
      children: this.children.map((child) => child.toJSON()),
    };
  }

  public static from<TData extends DocumentNodeData>(
    data: TData,
  ): DocumentNode<TData> {
    const node = new DocumentNode(data);

    if (data.children) {
      // eslint-disable-next-line no-restricted-syntax
      for (const childData of data.children) {
        switch (childData.nodeType) {
          case NodeType.ELEMENT_NODE:
            node.appendChild(ElementNode.from(node, childData));
            break;
          case NodeType.DOCUMENT_TYPE_NODE:
            node.appendChild(DocumentTypeNode.from(node, childData));
            break;
          default:
            throw new Error(`Unsupported node type: ${childData.nodeType}`);
        }
      }
    }
    return node;
  }

  // cant be implemented as there is no selector for the document node
  // eslint-disable-next-line class-methods-use-this
  public override nodeMatchesAstRuleItem() {
    return false;
  }
}
