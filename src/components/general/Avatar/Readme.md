Default:

```jsx
import { Avatar } from 'hoi-poi-ui';

<div>
    <Avatar />
</div>;
```

Sizes

```jsx
import { Avatar } from 'hoi-poi-ui';

<div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Avatar size="huge" />
    <Avatar size="big" />
    <Avatar size="large" />
    <Avatar size="medium" />
    <Avatar size="small" />
    <Avatar size="tiny" />
    <Avatar type="square" size="huge" />
    <Avatar type="square" size="big" />
    <Avatar type="square" size="large" />
    <Avatar type="square" size="medium" />
    <Avatar type="square" size="small" />
    <Avatar type="square" size="tiny" />
</div>;
```

Types:

```jsx
import { Avatar } from 'hoi-poi-ui';

<div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Avatar />
    <Avatar type="square" />
</div>;
```

Placeholder:

```jsx
import { Avatar } from 'hoi-poi-ui';

<div>
    <Avatar
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
</div>;
```

Image:

```jsx
import { Avatar } from 'hoi-poi-ui';

<div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Avatar
        size="huge"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="/public/placeholder.png"
        alt="image"
    />
    <Avatar
        size="big"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        size="large"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        size="medium"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        size="small"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        size="tiny"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        type="square"
        size="huge"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="/public/placeholder.png"
        alt="image"
    />
    <Avatar
        type="square"
        size="big"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        type="square"
        size="large"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        type="square"
        size="medium"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        type="square"
        size="small"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
    <Avatar
        type="square"
        size="tiny"
        src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="image"
    />
</div>;
```

Icon:

```jsx
import { Avatar } from 'hoi-poi-ui';

<div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Avatar icon="singleUser" size="huge" />
    <Avatar icon="singleUser" size="big" />
    <Avatar icon="singleUser" size="large" />
    <Avatar icon="singleUser" size="medium" />
    <Avatar icon="singleUser" size="small" />
    <Avatar icon="singleUser" size="tiny" />
    <Avatar icon="singleUser" type="square" size="huge" />
    <Avatar icon="singleUser" type="square" size="big" />
    <Avatar icon="singleUser" type="square" size="large" />
    <Avatar icon="singleUser" type="square" size="medium" />
    <Avatar icon="singleUser" type="square" size="small" />
    <Avatar icon="singleUser" type="square" size="tiny" />
</div>;
```

Initials

```jsx
import { Avatar } from 'hoi-poi-ui';

<div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Avatar alt="John Smith" size="huge" />
    <Avatar alt="John Smith" size="big" />
    <Avatar alt="John Smith" size="large" />
    <Avatar alt="John Smith" size="medium" />
    <Avatar alt="John Smith" size="small" />
    <Avatar alt="John Smith" size="tiny" />
    <Avatar alt="John Smith" type="square" size="huge" />
    <Avatar alt="John Smith" type="square" size="big" />
    <Avatar alt="John Smith" type="square" size="large" />
    <Avatar alt="John Smith" type="square" size="medium" />
    <Avatar alt="John Smith" type="square" size="small" />
    <Avatar alt="John Smith" type="square" size="tiny" />
</div>;
```

MultiAvatar

```jsx
import { Avatar } from 'hoi-poi-ui';

const sources = [
    {
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        placeholder: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        alt: 'image',
    },
    {
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        placeholder: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        alt: 'image',
    },
    {
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        placeholder: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        alt: 'image',
    },
];

<div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Avatar sources={sources} size="huge" />
    <Avatar sources={sources} size="big" />
    <Avatar sources={sources} size="large" />
    <Avatar sources={sources} size="medium" />
    <Avatar sources={sources} size="small" />
    <Avatar sources={sources} size="tiny" />
    <Avatar sources={sources.slice(0, 2)} size="huge" />
    <Avatar sources={sources.slice(0, 2)} size="big" />
    <Avatar sources={sources.slice(0, 2)} size="large" />
    <Avatar sources={sources.slice(0, 2)} size="medium" />
    <Avatar sources={sources.slice(0, 2)} size="small" />
    <Avatar sources={sources.slice(0, 2)} size="tiny" />
    <Avatar sources={sources.slice(0, 1)} size="huge" />
    <Avatar sources={sources.slice(0, 1)} size="big" />
    <Avatar sources={sources.slice(0, 1)} size="large" />
    <Avatar sources={sources.slice(0, 1)} size="medium" />
    <Avatar sources={sources.slice(0, 1)} size="small" />
    <Avatar sources={sources.slice(0, 1)} size="tiny" />
</div>;
```

MultiAvatar with count

```jsx
import { Avatar } from 'hoi-poi-ui';

const sources = [
    {
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        placeholder: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        alt: 'image',
    },
    {
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        placeholder: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        alt: 'image',
    },
    {
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        placeholder: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        alt: 'image',
    },
];

<div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Avatar sources={sources} size="huge" showCount />
    <Avatar sources={sources} size="big" showCount />
    <Avatar sources={sources} size="large" showCount />
    <Avatar sources={sources} size="medium" showCount />
    <Avatar sources={sources} size="small" showCount />
    <Avatar sources={sources} size="tiny" showCount />
    <Avatar sources={sources.slice(0, 2)} size="huge" showCount />
    <Avatar sources={sources.slice(0, 2)} size="big" showCount />
    <Avatar sources={sources.slice(0, 2)} size="large" showCount />
    <Avatar sources={sources.slice(0, 2)} size="medium" showCount />
    <Avatar sources={sources.slice(0, 2)} size="small" showCount />
    <Avatar sources={sources.slice(0, 2)} size="tiny" showCount />
    <Avatar sources={sources.slice(0, 1)} size="huge" showCount />
    <Avatar sources={sources.slice(0, 1)} size="big" showCount />
    <Avatar sources={sources.slice(0, 1)} size="large" showCount />
    <Avatar sources={sources.slice(0, 1)} size="medium" showCount />
    <Avatar sources={sources.slice(0, 1)} size="small" showCount />
    <Avatar sources={sources.slice(0, 1)} size="tiny" showCount />
</div>;
```

### Component tree

-   root - root element
-   [Icon](#/General?id=icon)
-   [Text](#/Typography?id=text)
