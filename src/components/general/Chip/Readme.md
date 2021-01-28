Default:

```jsx
<Chip>Lorem ipsum</Chip>
<span> </span>
<Chip isActive>Lorem ipsum</Chip>
<span> </span>
<Chip isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip isReadOnly>Lorem ipsum</Chip>
<br/>
<br/>
<Chip isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip isFilled isActive>Lorem ipsum</Chip>
<span> </span>
<Chip isFilled isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip isFilled isReadOnly>Lorem ipsum</Chip>
```

Filled:

```jsx
<Chip onClick={() => {}}>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}}  isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}}  isReadOnly>Lorem ipsum</Chip>
<span> </span>
<br/>
<br/>
<Chip onClick={() => {}} isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isReadOnly>Lorem ipsum</Chip>
<br/>
<br/>
<br/>
<Chip onClick={() => {}} onRemove={() => {}}>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} onRemove={() => {}} isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}}  isDisabled>Lorem ipsum</Chip>
<span> </span>
<br/>
<br/>
<Chip onRemove={() => {}} isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFilled isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFilled isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFilled isReadOnly>Lorem ipsum</Chip>
<span> </span>
<br/>
<br/>
<br/>
<Chip isFolded onRemove={() => {}}>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFolded isActive>Lorem ipsum</Chip>
<span> </span>
<Chip isFolded onRemove={() => {}}  isDisabled>Lorem ipsum</Chip>
<span> </span>
<br/>
<br/>
<Chip onRemove={() => {}} isFolded isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFolded isFilled isActive>Lorem ipsum</Chip>
<span> </span>
<Chip isFolded onRemove={() => {}} isFilled isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip isFolded onRemove={() => {}} isFilled isReadOnly>Lorem ipsum</Chip>
<span> </span>
```

With avatar:

```jsx
<Chip
  onClick={() => {}}
  src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip
  onClick={() => {}}
  isActive
  src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip
  onClick={() => {}}
  src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  isFilled
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip
  onClick={() => {}}
  isFilled
  isActive
  src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
>
  Lorem ipsum
</Chip>
<span> </span>
```

With icon:

```jsx
<Chip onClick={() => {}} icon="send">Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isActive isFilled>Lorem ipsum</Chip>
<span> </span>
```

Interactive:

```jsx
import { useState } from 'react';

const [state, setState] = useState({
    isFolded: true,
});

<div>
    <Chip
        onClick={() =>
            setState({
                isFolded: !state.isFolded,
            })
        }
        isFolded={state.isFolded}
        isUnfolded={!state.isFolded}
    >
        Lorem ipsum
    </Chip>
    <span> </span>
    <Chip
        onClick={() =>
            setState({
                isFolded: !state.isFolded,
            })
        }
        isFolded={state.isFolded}
        isUnfolded={!state.isFolded}
        onRemove={() => {}}
        isFilled
    >
        Lorem ipsum
    </Chip>
    <span> </span>
    <Chip
        onClick={() =>
            setState({
                isFolded: !state.isFolded,
            })
        }
        isFolded={state.isFolded}
        isUnfolded={!state.isFolded}
        onRemove={() => {}}
        isFilled
        isActive
    >
        Lorem ipsum
    </Chip>
</div>;
```

Size:

```jsx
<Chip>Lorem ipsum</Chip>
<span> </span>
<Chip isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip size="large">Lorem ipsum</Chip>
<span> </span>
<Chip  isFilled size="large">Lorem ipsum</Chip>
```

### Component tree

---

-   root - root element
-   wrapper - div container
-   [Text](#/Typography?id=text)
