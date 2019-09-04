Default buttons:

```jsx
<Button>PUSH ME</Button>
<span> </span>
<Button color="primary">PUSH ME</Button>
<span> </span>
<Button color="danger">PUSH ME</Button>
<span> </span>
<Button color="white">PUSH ME</Button>
```

Sizes:

```jsx
<Button size="small" color="primary">PUSH ME</Button>
<span> </span>
<Button size="medium" color="primary">PUSH ME</Button>
<span> </span>
<Button size="big" color="primary">PUSH ME</Button>
```

Outlined buttons:

```jsx
<Button size="small" type="outlined">PUSH ME</Button>
<span> </span>
<Button size="medium" color="primary" type="outlined">PUSH ME</Button>
<span> </span>
<Button size="big" color="danger" type="outlined">PUSH ME</Button>
```

Squared buttons:

```jsx
<Button size="small" type="squared">PUSH ME</Button>
<span> </span>
<Button size="medium" color="primary" type="squared">PUSH ME</Button>
<span> </span>
<Button size="big" color="danger" type="squared">PUSH ME</Button>
<span> </span>
<Button size="medium" color="primary" type="squared" isDisabled>PUSH ME</Button>
```

Squared outlined buttons:

```jsx
<Button size="small" type="squared-outlined">PUSH ME</Button>
<span> </span>
<Button size="medium" color="primary" type="squared-outlined">PUSH ME</Button>
<span> </span>
<Button size="big" color="danger" type="squared-outlined">PUSH ME</Button>
<span> </span>
<Button size="big" color="danger" type="squared-outlined" isDisabled>PUSH ME</Button>
```

Disabled buttons:

```jsx
<Button size="small" color="primary" isDisabled>PUSH ME</Button>
<span> </span>
<Button size="medium" color="primary" isDisabled>PUSH ME</Button>
<span> </span>
<Button size="big" color="primary" isDisabled>PUSH ME</Button>
<span> </span>
<Button size="big" color="primary" type="outlined" isDisabled>PUSH ME</Button>
<span> </span>
<Button type="squared" isDisabled>PUSH ME</Button>
```

Loading buttons:

```jsx
<Button size="small" color="primary" isLoading>PUSH ME</Button>
<span> </span>
<Button size="medium" color="primary" isLoading>PUSH ME</Button>
<span> </span>
<Button size="big" color="primary" isLoading>PUSH ME</Button>
<span> </span>
<Button size="big" color="primary" type="outlined" isLoading>PUSH ME</Button>
<span> </span>
<Button type="squared" color="primary" isLoading>PUSH ME</Button>
```

Full-width

```jsx
<Button size="big" color="primary" isFullWidth>PUSH ME</Button>
<br />
<br />
<Button size="big" color="primary" type="outlined" isFullWidth>PUSH ME</Button>
<br />
<br />
<Button size="big" color="primary" isFullWidth isLoading>PUSH ME</Button>
```

### Component tree

---

-   root - root element
-   label - Button inner content and `children` wrapper.
-   [Loader](#/Loader)
-   [Text](#/typography/Text)
