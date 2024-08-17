# @oyen-oss/diddy-dom

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Description

Lightweight way to create, and query, HTML documents using CSS selectors.

Does not include a parser, but can be used to build a DOM tree from any source.

Currently under active development.

## Examples

#### Create a document tree manually.

```typescript
import { DocumentTree } from '@oyen-oss/diddy-dom';

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

tree.addNode(new TextNode(tree.currentNode, { text: 'Go to Example Website' }));

console.log(tree.innerHtml);

// <!DOCTYPE html><html><head><title>Hello</title><body><a href="https://www.example.com">Go to Example Website</a></body></head></html>
```

#### Export a tree to JSON

```typescript
const treeJson = tree.toJSON();

console.log(treeJson);

// {
//   nodeType: 9,
//   children: [
//     {
//       nodeType: 10,
//       name: 'html',
//       publicId: '',
//       systemId: '',
//     },
//     {
//       nodeType: 1,
//       tagName: 'html',
//       children: [
//         {
//           nodeType: 1,
//           tagName: 'head',
//           children: [
//             {
//               nodeType: 1,
//               tagName: 'meta',
//               attributes: [['charset', 'UTF-8']],
//             },
//             {
//               nodeType: 1,
//               tagName: 'title',
//               children: [{ nodeType: 3, text: 'Hello' }],
//             },
//           ],
//         },
//         {
//           nodeType: 1,
//           tagName: 'body',
//           children: [
//             {
//               nodeType: 1,
//               tagName: 'a',
//               attributes: [['href', 'https://www.example.com']],
//               children: [{ nodeType: 3, text: 'Go to Example Website' }],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }
```

#### Create a document tree from a JSON object and get the inner HTML.

```typescript
const tree = DocumentTree.from(treeJson);

console.log(tree.innerHtml);

// <html><head><meta charset="UTF-8"><title>Hello</title></head><body><a href="https://www.example.com">Go to Example Website</a></body></html>
```

#### Query a tree using CSS selectors.

```typescript
const tree = DocumentTree.from(treeJson);

console.log(tree.querySelector('title')?.textContent);

// Hello
```

## License

Licensed under the terms of the MIT license. See the [LICENSE](LICENSE.md) file for more details.

```

```
