Default:

```jsx
import { Button, Text, Loader } from 'hoi-poi-ui';
import { useState, useEffect } from 'react';

const [isOpen, setIsOpen] = useState(false);
const [image, setImage] = useState(null);

const url = 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg';

const onCrop = (file, index) => {
    setImage(file);
};

const onAccept = (file) => {
    setIsOpen(false);
    setTimeout(() => {
        setImage(file);
    }, 300);
};

const onCancel = () => setIsOpen(false);

useEffect(() => {
    if (!image) {
        fetch(url)
            .then((res) => res.blob())
            .then((blob) => {
                const file = new File([blob], `testImage`, {
                    type: 'image/png',
                });
                setImage(file);
            });
    }
});

<div>
    {image && (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundImage: `url("${URL.createObjectURL(image)}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: 4,
                marginBottom: '8px',
            }}
        />
    )}
    {!image && (
        <div
            style={{
                width: '100px',
                height: '100px',
                borderRadius: 4,
                border: '1px solid lightgrey',
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Loader />
        </div>
    )}
    <Button onClick={() => setIsOpen(!isOpen)} isDisabled={!image}>
        Show
    </Button>
    <span> </span>
    <CropModal
        title="Lorem modal"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        confirmText="Confirm"
        cancelText="Cancel"
        file={image}
        onCancel={onCancel}
        onAccept={onAccept}
    />
</div>;
```
