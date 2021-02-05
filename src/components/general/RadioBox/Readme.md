States:

```jsx
<div>
    <RadioBox
        icon="accountsAdd"
        title={'Create new accounts'}
        text={'Import data to add new accounts to ForceManager'}
    />
    <br />
    <RadioBox
        icon="accountsEdit"
        title={'Update existing accounts'}
        text={'Import data to update ForceManager accounts'}
        checked
    />
    <br />
    <RadioBox
        icon="opportunityAdd"
        title={'Create new accounts'}
        text={'Import data to add new accounts to ForceManager'}
        isReadOnly
    />
    <br />
    <RadioBox
        icon="opportunityEdit"
        title={'Update existing accounts'}
        text={'Import data to update ForceManager accounts'}
        isReadOnly
        checked
    />
</div>
```

With children

```jsx
import { Text } from 'hoi-poi-ui';

<RadioBox
    icon="accountsAdd"
    title={'Update existing accounts'}
    text={'Import data to update ForceManager accounts'}
    checked
>
    <Text style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>Children</Text>
</RadioBox>;
```

### Component tree

---

-   root - root element
-   [Icon](#/General?id=icon)
-   [Text](#/Typography?id=text)
-   [Radio](#/Forms?id=radio)
