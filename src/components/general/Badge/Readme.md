Default:

```jsx
<div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
    <Badge>Lorem ipsum</Badge>
    <Badge variant="inverted">Lorem ipsum</Badge>
</div>
```

Success:

```jsx
<div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
    <Badge type="success">Lorem ipsum</Badge>
    <Badge type="success" variant="inverted">
        Lorem ipsum
    </Badge>
</div>
```

Warning:

```jsx
<div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
    <Badge type="warning">Lorem ipsum</Badge>
    <Badge type="warning" variant="inverted">
        Lorem ipsum
    </Badge>
</div>
```

Error:

```jsx
<div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
    <Badge type="error">Lorem ipsum</Badge>
    <Badge type="error" variant="inverted">
        Lorem ipsum
    </Badge>
</div>
```

Info:

```jsx
<div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
    <Badge type="info">Lorem ipsum</Badge>
    <Badge type="info" variant="inverted">
        Lorem ipsum
    </Badge>
</div>
```

Ongoing:

```jsx
<div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
    <Badge type="ongoing">Lorem ipsum</Badge>
    <Badge type="ongoing" variant="inverted">
        Lorem ipsum
    </Badge>
</div>
```

Promotion:

```jsx
<div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
    <Badge type="promotion">Lorem ipsum</Badge>
    <Badge type="promotion" variant="inverted">
        Lorem ipsum
    </Badge>
</div>
```

Truncated with tooltip:

```jsx
<div>
    <Badge type="promotion" isTruncated useTooltip style={{ width: 200 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nulla, pretium
        fermentum semper vel, iaculis a libero. Nam sed hendrerit ante
    </Badge>
</div>
```

### Component tree

---

-   root - root element
-   [Text](#/Typography?id=text)
