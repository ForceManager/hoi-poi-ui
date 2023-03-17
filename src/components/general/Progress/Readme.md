Default:

```jsx
<div style={{ display: 'flex', flexFlow: 'column', gap: 8 }}>
    <Progress value={15} />
    <Progress value={35} />
    <Progress value={55} />
    <Progress value={75} />
    <Progress value={100} />
</div>
```

Animated:

```jsx
import { useState, useEffect, useRef } from 'react';

const [value, setValue] = useState(50);
const interval = useRef();

const animation = {
    animationDuration: '2s',
    animationDelay: null,
    animationTimingFunction: 'cubic-bezier(.6, 0, .5, .9)',
};

useEffect(() => {
    interval.current = setInterval(() => {
        const newValue = Math.floor(Math.random() * 101);
        setValue(newValue);
    }, 4000);
    return () => {
        if (interval.current) clearInterval(interval.current);
    };
}, []);

<div style={{ display: 'flex', flexFlow: 'column', gap: 8 }}>
    <Progress value={value} animation={animation} />
</div>;
```
