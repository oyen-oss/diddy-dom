import { describe, expect, test } from 'vitest';
import {
  DocumentTree,
  DocumentTypeNode,
  ElementNode,
  NodeType,
  TextNode,
  type DocumentNodeJSON,
} from '../src/main.js';

const treeFixtureJson = {
  nodeType: NodeType.DOCUMENT_NODE,
  children: [
    {
      nodeType: NodeType.DOCUMENT_TYPE_NODE,
      name: 'html',
      publicId: '',
      systemId: '',
    },
    {
      nodeType: NodeType.ELEMENT_NODE,
      tagName: 'html',
      children: [
        {
          nodeType: NodeType.ELEMENT_NODE,
          tagName: 'head',
          children: [
            {
              nodeType: NodeType.ELEMENT_NODE,
              tagName: 'meta',
              attributes: [['charset', 'utf-8']],
            },
            {
              nodeType: NodeType.ELEMENT_NODE,
              tagName: 'meta',
              attributes: [
                ['name', 'viewport'],
                ['content', 'width=device-width'],
              ],
            },
            {
              nodeType: NodeType.ELEMENT_NODE,
              tagName: 'meta',
              attributes: [
                ['name', 'description'],
                ['content', 'A simple webpage'],
              ],
            },

            {
              nodeType: NodeType.ELEMENT_NODE,
              tagName: 'title',
              children: [{ nodeType: NodeType.TEXT_NODE, text: 'Hello' }],
            },
          ],
        },
        {
          nodeType: NodeType.ELEMENT_NODE,
          tagName: 'body',
          children: [
            {
              nodeType: NodeType.ELEMENT_NODE,
              tagName: 'a',
              attributes: [['href', 'https://www.example.com']],
              children: [
                {
                  nodeType: NodeType.TEXT_NODE,
                  text: 'Go to Example Website',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} satisfies DocumentNodeJSON;

describe('DocumentTree', () => {
  test('fundamentals', async () => {
    const tree = DocumentTree.from(treeFixtureJson);
    expect(tree.innerHtml).toMatchSnapshot('tree.innerHtml');
    // console.log('tree.innerHtml', tree.innerHtml);
  });

  test('import/export', async () => {
    const tree = DocumentTree.from(treeFixtureJson);
    const exported = tree.toJSON();
    const importedTree = DocumentTree.from(exported);

    expect(tree.innerHtml).toEqual(importedTree.innerHtml);
    expect(importedTree.toJSON()).toStrictEqual(exported);
    expect(exported).toMatchSnapshot('tree.JSON');
  });

  test('query selectors', async () => {
    const tree = DocumentTree.from(treeFixtureJson);

    const metas = tree.querySelectorAll('meta');
    expect(metas).toHaveLength(3);
    expect(metas).toMatchSnapshot('querySelectorAll meta');

    const anchors = tree.querySelector('a');
    expect(anchors).toBeTruthy();
    expect(anchors).toMatchSnapshot('querySelector a');
  });

  test('new doctree', async () => {
    const tree = new DocumentTree();
    tree.addNode(new DocumentTypeNode(tree.currentNode));
    tree.addNode(new ElementNode(tree.currentNode, { tagName: 'html' }));
    tree.addNode(new ElementNode(tree.currentNode, { tagName: 'head' }));
    tree.addNode(new ElementNode(tree.currentNode, { tagName: 'title' }));
    tree.addNode(new TextNode(tree.currentNode, { text: 'Hello' }));
    tree.nextNode();
    tree.addNode(new ElementNode(tree.currentNode, { tagName: 'body' }));
    tree.addNode(
      new ElementNode(tree.currentNode, {
        tagName: 'a',
        attributes: [['href', 'https://www.example.com']],
      }),
    );
    tree.addNode(
      new TextNode(tree.currentNode, { text: 'Go to Example Website' }),
    );

    expect(tree.innerHtml).toEqual(
      '<!DOCTYPE html><html><head><title>Hello</title><body><a href="https://www.example.com">Go to Example Website</a></body></head></html>',
    );

    expect(tree.querySelector('title')?.textContent).toBeTruthy('Hello');
  });
});
