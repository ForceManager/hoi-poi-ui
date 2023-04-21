import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Markdown from '../../general/Markdown';

const markdown = `
# Heading 1

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

You can create a link by using square brackets followed by the URL in parentheses: [Google](https://www.google.com/)

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

describe('Markdown', () => {
    test('is rendered without crashes', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Markdown content={markdown} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
