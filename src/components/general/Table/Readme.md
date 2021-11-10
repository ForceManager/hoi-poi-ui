Default:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const columns = [
    { label: 'Product name', id: 'label' },
    { label: 'SKU', id: 'SKU' },
];

const rows = [
    {
        label: 'Red and black plaid scarf with thin red stripes and thick black stripes',
        SKU: 124689325,
    },
    {
        label: 'Yellow plaid scarf',
        SKU: 124689389,
    },
    {
        label: 'polloloco',
        SKU: 3333,
    },
];

// const columns = [
//     'Product name',
//     'SKU',
//     'Stock quantity',
//     'Wholesale cost',
//     'Sale price',
//     'Quantity sold',
//     'Gross sales',
//     'Net sales',
//     'Notes',
// ];
// const rows = [
//     [
//         label: 'Red and black plaid scarf with thin red stripes and thick black stripes',
//         SKU: 124689325,
//     ],

//       [  label: 'Yellow plaid scarf',
//         SKU: 124689389,]
// ,

//      [   label: 'polloloco',
//         SKU: 3333,]
//     ,
// ];

<div>
    <TableConf columns={columns} rows={rows} />
</div>;
```

### Component tree

---

-   [root](https://github.com/reactjs/react-modal)
-   header - header wrapper.
-   container
-   content - inner content and `children` wrapper.
-   preComponent
-   postComponent
-   footer - footer wrapper
-   [title](#/Typography/Text)
-   [confirmButton](#/General/Button)
-   [cancelButton](#/General/Button)
-   [closeIcon](#/General/Icon)
