import { AbstractParentNode } from './AbstractParentNode.js';
import { CommentNode } from './CommentNode.js';
import { TextNode } from './TextNode.js';
import { type AstRuleItem, resolveAstString } from './ast.js';
import type { ChildNodeJSON } from './types.js';
import { NodeType } from './types.js';
import { isPopulatedArray } from './utils.js';

export type ElementNodeData = {
  tagName: string;
  attributes?: [name: string, value: string][];
  children?: ChildNodeJSON[];
};

export class ElementNode<
  TData extends ElementNodeData = ElementNodeData,
> extends AbstractParentNode<NodeType.ELEMENT_NODE, TData> {
  public readonly parentNode: AbstractParentNode;

  constructor(parentNode: AbstractParentNode, data: TData) {
    super(NodeType.ELEMENT_NODE, data);
    this.parentNode = parentNode;
  }

  public toJSON(): any {
    return {
      nodeType: this.nodeType,
      ...(isPopulatedArray(this.children) && {
        children: Array.from(this.children).map((child) => child.toJSON()),
      }),
      tagName: this.tagName,
      ...(isPopulatedArray(this.data.attributes) && {
        attributes: this.data.attributes,
      }),
    };
  }

  public static from<TData extends ElementNodeData>(
    parentNode: AbstractParentNode,
    data: TData,
  ) {
    const node = new ElementNode(parentNode, data);

    if (!data.children) {
      return node;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const childData of data.children) {
      switch (childData.nodeType) {
        case NodeType.ELEMENT_NODE:
          node.appendChild(ElementNode.from(node, childData));
          break;
        case NodeType.TEXT_NODE:
          node.appendChild(TextNode.from(node, childData));
          break;
        case NodeType.COMMENT_NODE:
          node.appendChild(CommentNode.from(node, childData));
          break;
        default:
          throw new Error(`Unknown node type: ${childData.nodeType}`);
      }
    }

    return node;
  }

  public toString() {
    return `${this.constructor.name}(${this.tagName})`;
  }

  public get tagName(): string {
    return this.data.tagName;
  }

  public getAttribute(name: string) {
    const [value = null] =
      this.data.attributes?.find(([attrName]) => attrName === name) || [];
    return value;
  }

  public get outerHtml(): string {
    const { innerHtml } = this;

    const tagNamePlus = isPopulatedArray(this.data.attributes)
      ? `${this.tagName} ${this.data.attributes
          .map(([name, value]) => `${name}="${value}"`)
          .join(' ')}`
      : `${this.tagName}`;

    return innerHtml
      ? `<${tagNamePlus}>${innerHtml}</${this.tagName}>`
      : `<${tagNamePlus} />`;
  }

  public nodeMatchesAstRuleItem(item: AstRuleItem): boolean {
    const { attributes = [], tagName } = this.data;

    switch (item.type) {
      case 'ClassName': {
        return attributes.some(
          ([name, value]) =>
            name === 'class' && value.split(' ').includes(item.name),
        );
      }
      case 'Attribute': {
        return attributes.some(([attributeName, attributeValue]) => {
          if (attributeName === item.name) {
            if (item.operator) {
              const itemValue = resolveAstString(item.value);
              switch (item.operator) {
                case '=':
                  return attributeValue === itemValue;
                case '^=':
                  return attributeValue.startsWith(itemValue);
                case '$=':
                  return attributeValue.endsWith(itemValue);
                case '*=':
                  return attributeValue.includes(itemValue);
                case '~=':
                  return attributeValue.split(' ').includes(itemValue);
                case '|=':
                  return (
                    attributeValue === itemValue ||
                    attributeValue.startsWith(`${item.value}-`)
                  );
                default:
                  throw new Error(`Unsupported operator: ${item.operator}`);
              }
            }
            return true;
          }
          return false;
        });
      }
      case 'TagName': {
        return tagName === item.name;
      }
      case 'Id': {
        return attributes.some(
          ([name, value]) => name === 'id' && value === item.name,
        );
      }
      case 'WildcardTag': {
        return true;
      }
      default:
        return false;
    }
  }
}
