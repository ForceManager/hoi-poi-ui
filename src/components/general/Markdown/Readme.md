Markdown Code Sandbox:

```jsx
import { useState } from 'react';
import { Code } from 'hoi-poi-ui';

const markdown = `# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Paragraphs are created by simply typing out your text.

You can make text **bold** by using double asterisks or __underscores__.

You can make text *italic* by using single asterisks or _underscores_.

You can create a blockquote by using the greater than symbol:

> This is a blockquote.

You can create a horizontal rule by typing three hyphens:

---

Unordered lists can be created using asterisks, plus signs, or hyphens:

* Item 1
* Item 2
* Item 3

+ Item 1
+ Item 2
+ Item 3

- Item 1
- Item 2
- Item 3

Ordered lists can be created using numbers:

1. Item 1
2. Item 2
3. Item 3

You can create a link by using square brackets followed by the URL in parentheses: [Google](https://www.google.com/ '{"id":"link-1","target":"_blank"}')

You can create an image by using an exclamation mark, followed by square brackets with the alt text, and the image URL in parentheses:

![alt text](https://picsum.photos/200)

You can create inline code by using backticks:

\`var example = "inline code";\`

You can create a code block by using three backticks, optionally followed by the language:

\`\`\`javascript
var example = "code block";
console.log(example);
\`\`\`
`;

const [state, setState] = useState(markdown);

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
    <Code
        isFullWidth
        onChange={setState}
        value={state}
        overrides={{ AceEditor: { mode: 'markdown' } }}
    />
    <Markdown content={state} />
</div>;
```

Custom callback for links:

```jsx
import { Code } from 'hoi-poi-ui';

const markdown = `
Example of how to use the link's \`title\` attribute to add custom attributes to the links in the markdown document and use them in a callback function:

- \`title\` attributes in links are natively supported by the markdown syntax and them can be used like this: [Google](https://www.google.com/ 'Visit Google')
- We have customized the \`Link\` component so it accepts a stringified JSON with an object of valid HTML link attributes like this [Google](https://www.google.com/ '{"title":"Visit Google","id":"link-1","target":"_blank"}'), the attributes in the JSON will be added to the rendered HTML link.
- If a \`linkCallback\` prop is provided, it prevents the default link behavior and invokes the callback function with the event, attributes, and a link function that performs the redirection.

`;

const linkCallback = ({ attributes, link }) => {
    const { id } = attributes;
    switch (id) {
        case 'link-1':
            console.log('The Visit Google link has been clicked');
            link();
            break;
        default:
            link();
            break;
    }
};

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
    <Code isFullWidth value={markdown} overrides={{ AceEditor: { mode: 'markdown' } }} />
    <Markdown content={markdown} linkCallback={linkCallback} />
</div>;
```
