Default:

```jsx
<Advice>This is an important information that will help you out in this process.</Advice>
<br />
<Advice showIcon>This is an important information that will help you out in this process.</Advice>
```

Error:

```jsx
<Advice type="error">An error occurred while uploading your file.</Advice>
<br />
<Advice type="error" showIcon>An error occurred while uploading your file.</Advice>
```

Info:

```jsx
<Advice type="info">
    This is an important information that will help you out in this process.
</Advice>
<br />
<Advice type="info" showIcon>
    This is an important information that will help you out in this process.
</Advice>
```

Success:

```jsx
<Advice type="success">Success! Everything went pretty well.</Advice>
<br />
<Advice type="success" showIcon>Success! Everything went pretty well.</Advice>
```

Warning:

```jsx
<Advice type="warning">Watchout! This might be dangerous!</Advice>
<br />
<Advice type="warning" showIcon>Watchout! This might be dangerous!</Advice>
```

With ellipsis:

```jsx
const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis eros ultrices ullamcorper. Vestibulum vulputate vestibulum orci, vel mattis felis vehicula euismod. Vivamus vulputate ligula quis turpis consectetur posuere quis eu massa. Vivamus sit amet facilisis orci. Nulla nec orci ut diam semper bibendum. Donec sed arcu vitae justo tincidunt varius eu ac erat. Phasellus sit amet facilisis erat, gravida vestibulum enim. Praesent at mattis tortor, vel faucibus erat. Aliquam erat volutpat. In in dolor est. Ut sit amet dignissim risus.';
<div>
    <Advice>{text}</Advice>
    <br />
    <Advice showIcon>{text}</Advice>
</div>;
```

### Component tree

---

-   root - root element
-   textContainer - text and dropdown icon container
-   text - inner content and `children` wrapper
-   [Icon](#/General?id=icon)
-   [DropdownIcon](#/General?id=icon)
-   [react-animate-height])(https://github.com/Stanko/react-animate-height)
