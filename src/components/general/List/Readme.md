Default:

```jsx
const items = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Aenean euismod elementum nisi quis eleifend quam adipiscing.',
    'Aliquet porttitor lacus luctus accumsan tortor posuere ac.',
    'In fermentum posuere urna nec tincidunt.',
    'Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.',
];

<List items={items} />
```

Ordered List:

```jsx
const items = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Aenean euismod elementum nisi quis eleifend quam adipiscing.',
    'Aliquet porttitor lacus luctus accumsan tortor posuere ac.',
    'In fermentum posuere urna nec tincidunt.',
    'Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.',
];

<List items={items} type="ordered" />
```

Unstyled List:

```jsx
const items = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Aenean euismod elementum nisi quis eleifend quam adipiscing.',
    'Aliquet porttitor lacus luctus accumsan tortor posuere ac.',
    'In fermentum posuere urna nec tincidunt.',
    'Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.',
];

<List items={items} unStyled />
```

With custom bullet:

```jsx
const items = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Aenean euismod elementum nisi quis eleifend quam adipiscing.',
    'Aliquet porttitor lacus luctus accumsan tortor posuere ac.',
    'In fermentum posuere urna nec tincidunt.',
    'Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.',
];

<List items={items} bullet="arrowRight" />
```

### Component tree

-   root - root element
-   [Icon](#/General?id=icon)
-   [Text](#/Typography?id=text)