Types:

```jsx
<span> </span>
<Button>Push me</Button>
<span> </span>
<Button type="primary-error">Push me</Button>
<span> </span>
<Button type="secondary">Push me</Button>
<span> </span>
<Button type="secondary-error">Push me</Button>
<span> </span>
<Button type="terciary">Push me</Button>
<span> </span>
<Button type="dashed">Push me</Button>
<span> </span>
<Button type="promotion">Push me</Button>
<span> </span>
<Button type="primary-soft">Push me</Button>
<span> </span>
<Button type="text">Push me</Button>
```

Sizes:

```jsx
<Button size="small">Push me</Button>
<span> </span>
<Button>Push me</Button>
<span> </span>
<Button size="big">Push me</Button>
```

Disabled:

```jsx
<Button type="primary" isDisabled>Push me</Button>
<span> </span>
<Button type="primary-error" isDisabled>Push me</Button>
<span> </span>
<Button type="secondary" isDisabled>Push me</Button>
<span> </span>
<Button type="secondary-error" isDisabled>Push me</Button>
<span> </span>
<Button type="terciary" isDisabled>Push me</Button>
<span> </span>
<Button type="dashed" isDisabled>Push me</Button>
<span> </span>
<Button type="promotion" isDisabled>Push me</Button>
<span> </span>
<Button type="primary-soft" isDisabled>Push me</Button>
<span> </span>
<Button type="text" isDisabled>Push me</Button>
```

Loading:

```jsx
const [loadingPs, setLoadingPs] = React.useState(false);
const [loadingPes, setLoadingPes] = React.useState(false);
const [loadingPm, setLoadingPm] = React.useState(false);
const [loadingPem, setLoadingPem] = React.useState(false);
const [loadingPb, setLoadingPb] = React.useState(false);
const [loadingPeb, setLoadingPeb] = React.useState(false);

const onClickPs = () => onClick(setLoadingPs);
const onClickPes = () => onClick(setLoadingPes);
const onClickPm = () => onClick(setLoadingPm);
const onClickPem = () => onClick(setLoadingPem);
const onClickPb = () => onClick(setLoadingPb);
const onClickPeb = () => onClick(setLoadingPeb);

const onClick = (set) => {
    set(true);
    setTimeout(() => {
        set(false);
    }, 3000);
};
<div>
    <Button type="primary" size="small" isLoading={loadingPs} onClick={onClickPs}>
        Push me
    </Button>
    <span> </span>
    <Button type="primary-error" size="small" isLoading={loadingPes} onClick={onClickPes}>
        Push me
    </Button>
    <span> </span>
    <Button type="primary" size="medium" isLoading={loadingPm} onClick={onClickPm}>
        Push me
    </Button>
    <span> </span>
    <Button type="primary-error" size="medium" isLoading={loadingPem} onClick={onClickPem}>
        Push me
    </Button>
    <span> </span>
    <Button type="primary" size="big" isLoading={loadingPb} onClick={onClickPb}>
        Push me
    </Button>
    <span> </span>
    <Button type="primary-error" size="big" isLoading={loadingPeb} onClick={onClickPeb}>
        Push me
    </Button>
    <span> </span>
</div>;
```

Icon Left:

```jsx
<span> </span>
<Button type="primary" size="small" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="primary-error" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="secondary" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="secondary-error" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="terciary" size="big" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="dashed" size="big" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="promotion" size="big" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="primary-soft" size="big" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="text" size="big" icon="cloudUpload">Push me</Button>
```

Icon Right:

```jsx
<span> </span>
<Button type="primary" size="small" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="primary-error" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="secondary" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="secondary-error" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="terciary" size="big" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="dashed" size="big" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="promotion" size="big" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="primary-soft" size="big" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="text" size="big" icon="cloudUpload" iconPosition="right">Push me</Button>
```

Icon Only:

```jsx
<span> </span>
<Button type="primary" icon="cloudUpload" />
<span> </span>
<Button type="primary-error" icon="cloudUpload" />
<span> </span>
<Button type="secondary" icon="cloudUpload" />
<span> </span>
<Button type="secondary-error" icon="cloudUpload" />
<span> </span>
<Button type="terciary" icon="cloudUpload" />
<span> </span>
<Button type="dashed" icon="cloudUpload" />
<span> </span>
<Button type="promotion" icon="cloudUpload" />
<span> </span>
<Button type="primary-soft" icon="cloudUpload" />
<span> </span>
<Button type="text" icon="cloudUpload" />
<span> </span>
<Button type="primary" icon="cloudUpload" size="small"/>
<span> </span>
<Button type="primary" icon="cloudUpload" size="big"/>
```

Full-width

```jsx
<Button isFullWidth>Push me</Button>
<br />
<br />
<Button isFullWidth type="primary" icon="cloudUpload">Push me</Button>
<br />
<br />
<Button isDisabled isFullWidth>Push me</Button>
<br />
<br />
<Button isFullWidth isLoading>Push me</Button>
```

Ref

```jsx
import { useRef } from 'react';

const buttonRef = useRef(null);
const onClickPs = () => console.log('buttonRef', buttonRef.current);

<Button ref={(ref) => (buttonRef.current = ref)} onClick={onClickPs}>
    Push me
</Button>;
```

With href

```jsx
<Button href="https://github.com/ForceManager/hoi-poi-ui">Push me</Button>
```

### Component tree

---

-   root - root element
-   label - Button inner content and `children` wrapper.
-   [Loader](#/Loader)
-   [Text](#/typography/Text)
