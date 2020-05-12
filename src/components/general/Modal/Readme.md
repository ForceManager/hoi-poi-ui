Default:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button color="primary" onClick={() => setState({ isOpen: !isOpen })}>
        Show
    </Button>
    <span> </span>
    <Modal title="Lorem modal" isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
        <Text>Ipsum content</Text>
    </Modal>
</div>;
```

Small:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button color="primary" onClick={() => setState({ isOpen: !isOpen })}>
        Show
    </Button>
    <span> </span>
    <Modal
        title="Lorem modal"
        size="small"
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
    >
        <Text>Ipsum content</Text>
    </Modal>
</div>;
```

Big:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button color="primary" onClick={() => setState({ isOpen: !isOpen })}>
        Show
    </Button>
    <span> </span>
    <Modal
        title="Lorem modal"
        size="large"
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
    >
        <Text>Ipsum content</Text>
    </Modal>
</div>;
```

Without close icon:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button color="primary" onClick={() => setState({ isOpen: !isOpen })}>
        Show
    </Button>
    <span> </span>
    <Modal
        title="Lorem modal"
        useCornerClose={false}
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
    >
        <Text>Ipsum content</Text>
    </Modal>
</div>;
```

Without header:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button color="primary" onClick={() => setState({ isOpen: !isOpen })}>
        Show
    </Button>
    <span> </span>
    <Modal useHeader={false} isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
        <Text>Ipsum content</Text>
    </Modal>
</div>;
```

Confirm modal:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button color="primary" onClick={() => setState({ isOpen: !isOpen })}>
        Show
    </Button>
    <span> </span>
    <Modal
        title="Lorem modal"
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
        onCancel={() => setState({ isOpen: false })}
        onConfirm={() => {
            setState({ isOpen: false });
            alert('Confirmed!');
        }}
        cancelText="Cancel"
        confirmText="Confirm"
    >
        <Text>Ipsum content</Text>
    </Modal>
</div>;
```

### Component tree

---

-   [root](https://github.com/reactjs/react-modal)
-   header - header wrapper.
-   content - inner content and `children` wrapper.
-   footer - footer wrapper
-   [title](#/Typography/Text)
-   [confirmButton](#/General/Button)
-   [cancelButton](#/General/Button)
-   [closeIcon](#/General/Icon)
