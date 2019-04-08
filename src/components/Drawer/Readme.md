Default buttons:

```jsx
import Button from 'hoi-poi-ui/Button';
let isOpen = state.isOpen || false;
<div>
    <Button color="primary" onClick={() => setState({ isOpen: !isOpen })}>
        Toggle
    </Button>
    <Drawer isOpen={isOpen} />
</div>;
```

### Component tree

---

-   [modal](https://github.com/reactjs/react-modal)
-   content - inner content and `children` wrapper.
