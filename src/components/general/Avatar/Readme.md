Avatar only placeholder:

```jsx
import { Avatar } from 'hoi-poi-ui';

<div>
    <Avatar placeholder={'/public/placeholder.png'} url={'/public/placeholder.png'} alt="image" />
</div>;
```

Avatar with image:

```jsx
import { Avatar } from 'hoi-poi-ui';

<div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
    <div>
        <Avatar
            size={'big'}
            url="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image"
        />
    </div>
    <div>
        <Avatar
            size={'large'}
            url="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image"
        />
    </div>
    <div>
        <Avatar
            size={'medium'}
            url="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image"
        />
    </div>
    <div>
        <Avatar
            size={'small'}
            url="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image"
        />
    </div>
</div>;
```

### Component tree
