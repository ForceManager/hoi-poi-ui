Default:

```jsx
const items = [
    'Amelia Matthews',
    'Leo Rodriguez',
    'Maya Patel',
    'Oscar Kim',
    'Alice Wong',
    'Lucas Foster',
    'Ava Thompson',
    'Gabriel Gonzalez',
    'Hazel Carter',
    'Isaac Davis',
];

<EllipsedInlineList items={items} />;
```

With custom postComponent:

```jsx
import { Tooltip, Text } from 'hoi-poi-ui';

const items = [
    'Amelia Matthews',
    'Leo Rodriguez',
    'Maya Patel',
    'Oscar Kim',
    'Alice Wong',
    'Lucas Foster',
    'Ava Thompson',
    'Gabriel Gonzalez',
    'Hazel Carter',
    'Isaac Davis',
];

const PostComponent = ({ count, className: className }) => {
    return (
        <Tooltip content={<span>Hello!</span>}>
            <Text color="blue500" className={className}>
                +{count}
            </Text>
        </Tooltip>
    );
};

<EllipsedInlineList items={items} postComponent={PostComponent} />;
```
