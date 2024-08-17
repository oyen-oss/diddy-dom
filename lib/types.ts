import type { CommentNode } from './CommentNode.js';
import type { DocumentNode } from './DocumentNode.js';
import type { DocumentTypeNode } from './DocumentTypeNode.js';
import type { ElementNode } from './ElementNode.js';
import type { Node } from './Node.js';
import type { TextNode } from './TextNode.js';

export enum NodeType {
  ELEMENT_NODE = 1,
  TEXT_NODE = 3,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCUMENT_TYPE_NODE = 10,
}

export type ChildNode = ElementNode | CommentNode | TextNode | DocumentTypeNode;

export type NonLeafNode = ElementNode;

export type InferJsonType<T> =
  T extends Node<infer TNodeType, infer TData>
    ? NodeTypeJSON<TNodeType, TData>
    : never;

export type NodeTypeJSON<TNodeType, TData = unknown> = {
  nodeType: TNodeType;
} & TData;

export type DocumentNodeJSON = InferJsonType<DocumentNode>;

export type ChildNodeJSON =
  | ElementNodeJSON
  | TextNodeJSON
  | CommentNodeJSON
  | DocumentTypeNodeJSON;

export type ElementNodeJSON = InferJsonType<ElementNode>;

export type TextNodeJSON = InferJsonType<TextNode>;

export type CommentNodeJSON = InferJsonType<CommentNode>;

export type DocumentTypeNodeJSON = InferJsonType<DocumentTypeNode>;

export type DocumentTreeJSON = DocumentNodeJSON;
