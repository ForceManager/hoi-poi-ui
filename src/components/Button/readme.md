Default buttons:

```jsx
<Button>Push Me</Button>
<span> </span>
<Button color="primary">Push Me</Button>
<span> </span>
<Button color="danger">Push Me</Button>
<span> </span>
<Button color="white">Push Me</Button>
```

Sizes:

```jsx
<Button size="small" color="primary">Push Me</Button>
<span> </span>
<Button size="medium" color="primary">Push Me</Button>
<span> </span>
<Button size="big" color="primary">Push Me</Button>
```

Outlined buttons:

```jsx
<Button size="small" type="outlined">Push Me</Button>
<span> </span>
<Button size="medium" color="primary" type="outlined">Push Me</Button>
<span> </span>
<Button size="big" color="danger" type="outlined">Push Me</Button>
```

Squared buttons:

```jsx
<Button size="small" type="squared">Push Me</Button>
<span> </span>
<Button size="medium" color="primary" type="squared">Push Me</Button>
<span> </span>
<Button size="big" color="danger" type="squared">Push Me</Button>
```

Disabled buttons:

```jsx
<Button size="small" color="primary" isDisabled>Push Me</Button>
<span> </span>
<Button size="medium" color="primary" isDisabled>Push Me</Button>
<span> </span>
<Button size="big" color="primary" isDisabled>Push Me</Button>
<span> </span>
<Button size="big" color="primary" type="outlined" isDisabled>Push Me</Button>
<span> </span>
<Button type="squared" isDisabled>Push Me</Button>
```

Loading buttons:

```jsx
<Button size="small" color="primary" isLoading>Push Me</Button>
<span> </span>
<Button size="medium" color="primary" isLoading>Push Me</Button>
<span> </span>
<Button size="big" color="primary" isLoading>Push Me</Button>
<span> </span>
<Button size="big" color="primary" type="outlined" isLoading>Push Me</Button>
<span> </span>
<Button type="squared" color="primary" isLoading>Push Me</Button>
```

Full-width

```jsx
<Button size="big" color="primary" isFullWidth>Push Me</Button>
<br />
<br />
<Button size="big" color="primary" type="outlined" isFullWidth>Push Me</Button>
<br />
<br />
<Button size="big" color="primary" isFullWidth isLoading>Push Me</Button>
```

### Component tree

---

-   label - Button inner content and `children` wrapper.
-   [Loader](#/Loader)
