Default:

```jsx
import { Carousel } from 'hoi-poi-ui';

<div style={{ width: 400, height: 400 }}>
    <Carousel
        placeholder="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        images={[
            {
                original: 'https://picsum.photos/1200/900',
                thumbnail: 'https://picsum.photos/1200/900',
            },
            {
                original: 'https://picsum.photos/1000/900',
                thumbnail: 'https://picsum.photos/1200/900',
            },
            {
                original: 'https://picsum.photos/400/400',
                thumbnail: 'https://picsum.photos/1200/900',
            },
            {
                original: 'https://picsum.photos/200/600',
                thumbnail: 'https://picsum.photos/200/600',
            },
        ]}
    />
</div>;
```

Minimalist version:

```jsx
import { Carousel } from 'hoi-poi-ui';

<div style={{ width: 400, height: 400 }}>
    <Carousel
        placeholder="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        images={[
            {
                original: 'https://picsum.photos/1200/900',
                thumbnail: 'https://picsum.photos/1200/900',
            },
            {
                original: 'https://picsum.photos/1000/900',
                thumbnail: 'https://picsum.photos/1200/900',
            },
            {
                original: 'https://picsum.photos/400/400',
                thumbnail: 'https://picsum.photos/1200/900',
            },
            {
                original: 'https://picsum.photos/200/1200',
                thumbnail: 'https://picsum.photos/200/1200',
            },
        ]}
        minVersion
    />
</div>;
```

### Component tree

---

-   root - root element
-   [ImageGallery](https://github.com/xiaolin/react-image-gallery)
