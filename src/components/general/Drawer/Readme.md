Default:

```jsx
import { Button } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});

let isOpen = state.isOpen || false;
let side = state.side || 'right';

const onTransitionEnds = () => {
    console.log('Transition is finished');
};

<div>
    <Button color="primary" onClick={() => setState({ side: 'left', isOpen: !isOpen })}>
        Left
    </Button>
    <span> </span>
    <Button color="primary" onClick={() => setState({ side: 'right', isOpen: !isOpen })}>
        Right
    </Button>
    <span> </span>
    <Drawer
        onTransitionEnds={onTransitionEnds}
        side={state.side}
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
    >
        <span onClick={() => setState({ isOpen: false })}>Close</span>
    </Drawer>
</div>;
```

Custom width:

```jsx
import { Button } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});

let isOpen = state.isOpen || false;
let side = state.side || 'right';

<div>
    <Button color="primary" onClick={() => setState({ side: 'left', isOpen: !isOpen })}>
        Left
    </Button>
    <span> </span>
    <Button color="primary" onClick={() => setState({ side: 'right', isOpen: !isOpen })}>
        Right
    </Button>
    <span> </span>
    <Drawer
        side={state.side}
        isOpen={isOpen}
        width="80%"
        onRequestClose={() => setState({ isOpen: false })}
    >
        <span onClick={() => setState({ isOpen: false })}>Close</span>
    </Drawer>
</div>;
```

### Component tree

---

-   root - root element
-   [modal](https://github.com/reactjs/react-modal)
-   content - inner content and `children` wrapper.
-   [Text](#/typography/Text)
