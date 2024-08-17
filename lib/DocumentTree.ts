import { AbstractParentNode } from './AbstractParentNode.js';
import { DocumentNode } from './DocumentNode.js';
import { ElementNode } from './ElementNode.js';
import type {
  ChildNode,
  DocumentNodeJSON,
  DocumentTreeJSON,
  NodeType,
} from './types.js';

const kdocumentNode = Symbol('documentNode');

export class DocumentTree {
  public currentNode: AbstractParentNode<
    NodeType.DOCUMENT_NODE | NodeType.ELEMENT_NODE,
    unknown
  >;

  private [kdocumentNode]: DocumentNode;

  constructor(documentNode = new DocumentNode()) {
    this[kdocumentNode] = documentNode;
    this.currentNode = this[kdocumentNode];
  }

  public static from(data: DocumentNodeJSON) {
    return new DocumentTree(DocumentNode.from(data));
  }

  public toJSON(): DocumentTreeJSON {
    return this[kdocumentNode].toJSON();
  }

  public addNode(node: ChildNode) {
    this.currentNode.appendChild(node);
    if (node instanceof AbstractParentNode) {
      this.currentNode = node;
    }
  }

  public nextNode() {
    if (this.currentNode instanceof ElementNode) {
      this.currentNode = this.currentNode.parentNode;
    }
  }

  public get innerHtml() {
    return this[kdocumentNode].innerHtml;
  }

  public querySelectorAll(selector: string) {
    return this[kdocumentNode].querySelectorAll(selector);
  }

  public querySelector(selector: string) {
    return this[kdocumentNode].querySelector(selector);
  }
}
