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

### Component tree

---

-   text - inner content and `children` wrapper.
-   [Icon](#/General?id=icon)
