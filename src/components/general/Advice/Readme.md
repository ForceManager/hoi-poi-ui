Default:

```jsx
<Advice>This is an important information that will help you out in this process.</Advice>
<br />
<Advice showIcon>This is an important information that will help you out in this process.</Advice>
```

semanticInfo:

```jsx
<Advice type='semanticInfo'>This is an important information that will help you out in this process.</Advice>
<br />
<Advice type='semanticInfo' showIcon>This is an important information that will help you out in this process.</Advice>
```

semanticNegative:

```jsx
<Advice type="semanticNegative">An error occurred while uploading your file.</Advice>
<br />
<Advice type="semanticNegative" showIcon>An error occurred while uploading your file.</Advice>
```

semanticPositive:

```jsx
<Advice type="semanticPositive">Success! Everything went pretty well.</Advice>
<br />
<Advice type="semanticPositive" showIcon>Success! Everything went pretty well.</Advice>
```

semanticFocus:

```jsx
<Advice type="semanticFocus">Watchout! This might be dangerous!</Advice>
<br />
<Advice type="semanticFocus" showIcon>Watchout! This might be dangerous!</Advice>
```

With ellipsis:

```jsx
const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nNullam nec massa quis eros ultrices ullamcorper. Vestibulum vulputate vestibulum orci, vel mattis felis vehicula euismod. Vivamus vulputate ligula quis turpis consectetur posuere quis eu massa. Vivamus sit amet facilisis orci. \nNulla nec orci ut diam semper bibendum. Donec sed arcu vitae justo tincidunt varius eu ac erat. \nPhasellus sit amet facilisis erat, gravida vestibulum enim. Praesent at mattis tortor, vel faucibus erat. Aliquam erat volutpat. In in dolor est. Ut sit amet dignissim risus.';
<div>
    <Advice>{text}</Advice>
    <br />
    <Advice showIcon>{text}</Advice>
</div>;
```

Long text without expand

```jsx
const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis eros ultrices ullamcorper. Vestibulum vulputate vestibulum orci, vel mattis felis vehicula euismod. Vivamus vulputate ligula quis turpis consectetur posuere quis eu massa. Vivamus sit amet facilisis orci. Nulla nec orci ut diam semper bibendum. Donec sed arcu vitae justo tincidunt varius eu ac erat. Phasellus sit amet facilisis erat, gravida vestibulum enim. Praesent at mattis tortor, vel faucibus erat. Aliquam erat volutpat. In in dolor est. Ut sit amet dignissim risus.';
<div>
    <Advice showCollapse={false}>{text}</Advice>
    <br />
    <Advice showCollapse={false} showIcon>
        {text}
    </Advice>
</div>;
```

Title mode:

```jsx
<Advice defaultCollapsed={false} title="Advice" >This is an important information that will help you out in this process.</Advice>
<br />
<Advice title="Advice" showIcon>This is an important information that will help you out in this process.</Advice>
```

Dismissable:

```jsx
import { useState } from 'react';

const [state, setState] = useState({
    isOpen: true,
});

state.isOpen && (
    <Advice
        type="info"
        isDismissable
        dismissText="Understood"
        onDismiss={() => setState({ isOpen: false })}
    >
        This is an important information that will help you out in this process.
    </Advice>
);
```

### Component tree

---

-   root - root element
-   textContainer - text and title container
-   collapseContainer - content and icon container
-   [Icon](#/General?id=icon)
-   [ArrowDropDown](#/General?id=icon)
-   [react-collapse](https://github.com/nkbt/react-collapse)
-   [Text](#/Typography?=text)
