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
```

Loading:

```jsx
const [loading, setLoading] = React.useState(false);
const onClick = () => setLoading(true);
<div>
    <Button type="primary" size="small" isLoading>
        Push me
    </Button>
    <span> </span>
    <Button type="primary-error" isLoading>
        Push me
    </Button>
    <span> </span>
    <Button type="secondary" isLoading>
        Push me
    </Button>
    <span> </span>
    <Button type="secondary-error" isLoading>
        Push me
    </Button>
    <span> </span>
    <Button type="terciary" size="big" isLoading>
        Push me
    </Button>
    <span> </span>
    <Button type="primary" size="small" isLoading={loading} onClick={onClick}>
        Push me
    </Button>
    <span> </span>
    <Button type="primary-error" isLoading={loading} onClick={onClick}>
        Push me
    </Button>
</div>;
```

Icon Left:

```jsx
<span> </span>
<Button type="primary" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="primary-error" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="secondary" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="secondary-error" icon="cloudUpload">Push me</Button>
<span> </span>
<Button type="terciary" icon="cloudUpload">Push me</Button>
```

Icon Right:

```jsx
<span> </span>
<Button type="primary" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="primary-error" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="secondary" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="secondary-error" icon="cloudUpload" iconPosition="right">Push me</Button>
<span> </span>
<Button type="terciary" icon="cloudUpload" iconPosition="right">Push me</Button>
```

Full-width

```jsx
<Button isFullWidth>Push me</Button>
<br />
<br />
<Button isDisabled isFullWidth>Push me</Button>
<br />
<br />
<Button isFullWidth isLoading>Push me</Button>
```

### Component tree

---

-   root - root element
-   label - Button inner content and `children` wrapper.
-   [Loader](#/Loader)
-   [Text](#/typography/Text)
