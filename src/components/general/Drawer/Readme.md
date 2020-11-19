Default:

```jsx
import { Button } from 'hoi-poi-ui';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);
const [side, setSide] = useState('right');

const onTransitionEnds = () => {
    console.log('Transition is finished');
};

<div>
    <Button
        color="primary"
        onClick={() => {
            setIsOpen(!isOpen);
            setSide('left');
        }}
    >
        Left
    </Button>
    <span> </span>
    <Button
        color="primary"
        onClick={() => {
            setIsOpen(!isOpen);
            setSide('right');
        }}
    >
        Right
    </Button>
    <span> </span>
    <Drawer
        onTransitionEnds={onTransitionEnds}
        side={side}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
    >
        <span onClick={() => setIsOpen(false)}>Close</span>
    </Drawer>
</div>;
```

Overlay close and "Esc" close:

```jsx
import { Button } from 'hoi-poi-ui';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);
const [side, setSide] = useState('right');

const onTransitionEnds = () => {
    console.log('Transition is finished');
};

<div>
    <Button
        color="primary"
        onClick={() => {
            setIsOpen(!isOpen);
            setSide('left');
        }}
    >
        Left
    </Button>
    <span> </span>
    <Button
        color="primary"
        onClick={() => {
            setIsOpen(!isOpen);
            setSide('right');
        }}
    >
        Right
    </Button>
    <span> </span>
    <Drawer
        onTransitionEnds={onTransitionEnds}
        side={side}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        classes={{ overlay: 'overlay-ipsum' }}
    >
        <span onClick={() => setIsOpen(false)}>Close</span>
    </Drawer>
</div>;
```

Hidden Overlay:

```jsx
import { Button } from 'hoi-poi-ui';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);
const [side, setSide] = useState('right');

const onTransitionEnds = () => {
    console.log('Transition is finished');
};

<div>
    <Button
        color="primary"
        onClick={() => {
            setIsOpen(!isOpen);
            setSide('left');
        }}
    >
        Left
    </Button>
    <span> </span>
    <Button
        color="primary"
        onClick={() => {
            setIsOpen(!isOpen);
            setSide('right');
        }}
    >
        Right
    </Button>
    <span> </span>
    <Drawer
        onTransitionEnds={onTransitionEnds}
        side={side}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        hideOverlay={true}
    >
        <span onClick={() => setIsOpen(false)}>Close</span>
    </Drawer>
</div>;
```

Custom width:

```jsx
import { Button } from 'hoi-poi-ui';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);
const [side, setSide] = useState('right');

<div>
    <Button
        color="primary"
        onClick={() => {
            setIsOpen(!isOpen);
            setSide('left');
        }}
    >
        Left
    </Button>
    <span> </span>
    <Button
        color="primary"
        onClick={() => {
            setIsOpen(!isOpen);
            setSide('right');
        }}
    >
        Right
    </Button>
    <span> </span>
    <Drawer side={side} isOpen={isOpen} width="80%" onRequestClose={() => setIsOpen(false)}>
        <span onClick={() => setIsOpen(false)}>Close</span>
    </Drawer>
</div>;
```

### Component tree

---

-   root - root element
-   [modal](https://github.com/reactjs/react-modal)
-   content - inner content and `children` wrapper.
-   [Text](#/typography/Text)
