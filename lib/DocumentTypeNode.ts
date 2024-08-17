import type { AbstractParentNode } from './AbstractParentNode.js';
import type { DocumentNode } from './DocumentNode.js';
import { LeafNode } from './LeafNode.js';
import { NodeType } from './types.js';

export type DocumentTypeData = {
  name: string | null;
  publicId: string | null;
  systemId: string | null;
};

export class DocumentTypeNode extends LeafNode<
  NodeType.DOCUMENT_TYPE_NODE,
  DocumentTypeData
> {
  constructor(
    parentNode: AbstractParentNode,
    data: Partial<DocumentTypeData> = {},
  ) {
    if (parentNode.nodeType !== NodeType.DOCUMENT_NODE) {
      throw new Error('DocumentTypeNode must have a DocumentNode parent');
    }

    super(NodeType.DOCUMENT_TYPE_NODE, parentNode, {
      name: data.name ?? 'html',
      publicId: data.publicId ?? null,
      systemId: data.systemId ?? null,
    });
  }

  public static from(parentNode: DocumentNode, data: DocumentTypeData) {
    return new DocumentTypeNode(parentNode, data);
  }

  public get textContent() {
    return `<!DOCTYPE ${[this.data.name, this.data.publicId, this.data.systemId].filter(Boolean).join(' ')}>`;
  }

  public toString() {
    return `${this.constructor.name}(${this.data.name})`;
  }
}
