Chips without picture:

Default:

```jsx
function onClose() {
    alert('close');
}

<Chip onClose={onClose}>Loremipsu</Chip>;
```

Chips with picture:

Dismissable Chip:

```jsx
function onClose() {
    alert('close');
}

<Chip
    url="https://images.pexels.com/photos/2116234/pexels-photo-2116234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    onClose={onClose}
>
    Lorena Smith
</Chip>;
```

No dismissable Chip:

```jsx
<Chip url="https://images.pexels.com/photos/2116234/pexels-photo-2116234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
    Lorena Smith
</Chip>
```

Shrinked Chip with/without picture:

```jsx
<Chip url='https://images.pexels.com/photos/2116234/pexels-photo-2116234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' isShrinked={true} >
    Lorena Smith
</Chip>

<Chip isShrinked={true} >
    Lorena Smith
</Chip>
```

### Component tree

---

-   [Icon](#/General?id=icon) : It will be shown if property onClose is true
-   text - inner content and `children` wrapper
