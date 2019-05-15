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
    url="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
    onClose={onClose}
>
    Lorena Smith
</Chip>;
```

No dismissable Chip:

```jsx
<Chip url="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg">
    Lorena Smith
</Chip>
```

Shrinked Chip with/without picture:

```jsx
<Chip url='https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg' isShrinked={true} >
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
