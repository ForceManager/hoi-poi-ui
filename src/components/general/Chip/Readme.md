Default:

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
<Chip onClick={() => {}} onRemove={() => {}}>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} onRemove={() => {}} isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}}  isDisabled>Lorem ipsum</Chip>
<br/>
<br/>
<Chip isFolded onRemove={() => {}}>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFolded isActive>Lorem ipsum</Chip>
<span> </span>
<Chip isFolded onRemove={() => {}}  isDisabled>Lorem ipsum</Chip>
<br/>
<br/>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isActive
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isDisabled
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isReadOnly
>
  Lorem ipsum
</Chip>
<br/>
<br/>
<Chip onClick={() => {}} icon="send" isFolded onRemove={() => {}}>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" onRemove={() => {}} isFolded isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFolded onRemove={() => {}}  isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFolded onRemove={() => {}}  isReadOnly>Lorem ipsum</Chip>
```

Filled:

```jsx
<Chip onClick={() => {}} isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isReadOnly>Lorem ipsum</Chip>
<br/>
<br/>
<Chip onRemove={() => {}} isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFilled isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFilled isDisabled>Lorem ipsum</Chip>
<span> </span>
<br/>
<br/>
<Chip onRemove={() => {}} isFolded isFilled>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFolded isFilled isActive>Lorem ipsum</Chip>
<span> </span>
<Chip isFolded onRemove={() => {}} isFilled isDisabled>Lorem ipsum</Chip>
<br/>
<br/>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isFilled
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isActive
  isFilled
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isDisabled
  isFilled
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isReadOnly
  isFilled
>
  Lorem ipsum
</Chip>
<br/>
<br/>
<Chip onClick={() => {}} icon="send" isFilled isFolded onRemove={() => {}}>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFilled onRemove={() => {}} isFolded isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFilled isFolded onRemove={() => {}}  isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFilled isFolded onRemove={() => {}}  isReadOnly>Lorem ipsum</Chip>
```

Outlined:

```jsx
<Chip onClick={() => {}} isOutlined>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isOutlined isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isOutlined isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isOutlined isReadOnly>Lorem ipsum</Chip>
<br/>
<br/>
<Chip onRemove={() => {}} isOutlined>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isOutlined isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isOutlined isDisabled>Lorem ipsum</Chip>
<span> </span>
<br/>
<br/>
<Chip onRemove={() => {}} isFolded isOutlined>Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFolded isOutlined isActive>Lorem ipsum</Chip>
<span> </span>
<Chip isFolded onRemove={() => {}} isOutlined isDisabled>Lorem ipsum</Chip>
<br/>
<br/>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isOutlined
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isActive
  isOutlined
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isDisabled
  isOutlined
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isReadOnly
  isOutlined
>
  Lorem ipsum
</Chip>
<br/>
<br/>
<Chip onClick={() => {}} icon="send" isOutlined isFolded onRemove={() => {}}>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isOutlined onRemove={() => {}} isFolded isActive>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isOutlined isFolded onRemove={() => {}}  isDisabled>Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isOutlined isFolded onRemove={() => {}}  isReadOnly>Lorem ipsum</Chip>
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
        isOutlined
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
<Chip onClick={() => {}} isFilled size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isActive size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isDisabled size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} isFilled isReadOnly size="large">Lorem ipsum</Chip>
<br/>
<br/>
<Chip onRemove={() => {}} isFilled size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFilled isActive size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFilled isDisabled size="large">Lorem ipsum</Chip>
<span> </span>
<br/>
<br/>
<Chip onRemove={() => {}} isFolded isFilled size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onRemove={() => {}} isFolded isFilled isActive size="large">Lorem ipsum</Chip>
<span> </span>
<Chip isFolded onRemove={() => {}} isFilled isDisabled size="large">Lorem ipsum</Chip>
<br/>
<br/>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isFilled
  size="large"
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isActive
  isFilled
  size="large"
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isDisabled
  isFilled
  size="large"
>
  Lorem ipsum
</Chip>
<span> </span>
<Chip src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
  placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  alt="image"
  onRemove={() => {}}
  isFolded
  isReadOnly
  isFilled
  size="large"
>
  Lorem ipsum
</Chip>
<br/>
<br/>
<Chip onClick={() => {}} icon="send" isFilled isFolded onRemove={() => {}} size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFilled onRemove={() => {}} isFolded isActive size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFilled isFolded onRemove={() => {}}  isDisabled size="large">Lorem ipsum</Chip>
<span> </span>
<Chip onClick={() => {}} icon="send" isFilled isFolded onRemove={() => {}}  isReadOnly size="large">Lorem ipsum</Chip>
```

### Component tree

---

-   root - root element
-   wrapper - div container
-   icons - Right icons wrapper
-   [Icon](#/General?id=icon) - Left icon
-   [Avatar](#/General?id=avatar)
-   [DropDownIcon](#/General?id=icon)
-   [CloseIcon](#/General?id=icon)
-   [DividerIcon](#/General?id=icon)
-   [ReadOnlyIcon](#/General?id=icon)
-   [Text](#/Typography?id=text)
