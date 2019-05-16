Chips Group:

```jsx
let chipProps = [
    {
        label: 'Lorena Smith',
        url:
            'https://images.pexels.com/photos/2092709/pexels-photo-2092709.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
        label: 'Dani Balastegui',
    },
    {
        label: 'Jordi Gandia',
        url:
            'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        label: 'John Smith',
        url:
            'https://images.pexels.com/photos/2099225/pexels-photo-2099225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        label: 'Jordi Gandia',
    },
];

<ChipGroup chips={chipProps} />;
```

### Component tree

---

-   [Chip](#/General?id=chip)
-   root - `Chip` wrapper
-   label - inner content
-   url - string with direct link to the picture
