Default:

```jsx
import { Button } from 'hoi-poi-ui';
let isOpen = state.isOpen || false;
let side = state.side || 'right';

<div>
    <Button maxLine={1} color="primary" onClick={() => setState({ side: 'left', isOpen: !isOpen })}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut,enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut,enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est .
    </Button>
    <span> </span>
    <Button color="primary" onClick={() => setState({ side: 'right', isOpen: !isOpen })}>
        Right
    </Button>
    <span> </span>
    <Drawer side={state.side} isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
        <span onClick={() => setState({ isOpen: false })}>Close</span>
    </Drawer>
</div>;
```

Custom width:

```jsx
import { Button } from 'hoi-poi-ui';
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
