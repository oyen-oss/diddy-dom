import { DocumentTree } from '@oyen-oss/dom';

const tree = DocumentTree.from({
  nodeType: 9,
  children: [
    {
      nodeType: 10,
      name: 'html',
      publicId: '',
      systemId: '',
    },
    {
      nodeType: 1,
      tagName: 'html',
      children: [
        {
          nodeType: 1,
          tagName: 'head',
          children: [
            {
              nodeType: 1,
              tagName: 'meta',
              attributes: [['charset', 'UTF-8']],
            },
            {
              nodeType: 1,
              tagName: 'title',
              children: [{ nodeType: 3, text: 'Hello' }],
            },
          ],
        },
        {
          nodeType: 1,
          tagName: 'body',
          children: [
            {
              nodeType: 1,
              tagName: 'a',
              attributes: [['href', 'https://www.example.com']],
              children: [{ nodeType: 3, text: 'Link' }],
            },
          ],
        },
      ],
    },
  ],
});

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
tree.innerHtml; // <html><head><meta charset="UTF-8"><title>Hello</title></head><body><a href="https://www.example.com">Link</a></body></html>
