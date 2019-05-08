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
<Chip
    url={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}
    onClose={true}
>
    Lorena Smith
</Chip>
```

Single Owner / Account / Contact chip:

```jsx
<Chip url={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}>
    Lorena Smith
</Chip>
```

Shrinked Chip

```jsx
<Chip isShrinked={true} url="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg">Lorena Smith</Chip>
<span> </span>
<Chip isShrinked={true}>Lorena Smith</Chip>
```

### Component tree

---
