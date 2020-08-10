Images:

```jsx
const content = [
    <img
        src="https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
    />,
    <img
        src="https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
    />,
    <img
        src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
    />,
];
<Carousel content={content} arrows={true} />;
```

Other Content:

```jsx
const styles = {
    height: '100px',
    backgroundColor: '#FAE7E7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
const content = [
    <div style={styles}>Hello</div>,
    <div style={styles}>There</div>,
    <div style={styles}>!</div>,
];
<Carousel content={content} dots={true} />;
```

### Component tree

---

-   root - root element
-   [Slider](https://react-slick.neostack.com/)
