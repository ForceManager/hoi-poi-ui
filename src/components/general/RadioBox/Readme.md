States:

```jsx
<div>
    <RadioBox
        icon="addAccount"
        title={'Create new accounts'}
        text={'Import data to add new accounts to ForceManager'}
    />
    <br />
    <RadioBox
        icon="accountDetails"
        title={'Update existing accounts'}
        text={'Import data to update ForceManager accounts'}
        checked
    />
    <br />
    <RadioBox
        icon="addAccount"
        title={'Create new accounts'}
        text={'Import data to add new accounts to ForceManager'}
        isReadOnly
    />
    <br />
    <RadioBox
        icon="accountDetails"
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
    icon="accountDetails"
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
-   [Radio](#/Forms?id=radio)
-   [Icon](#/General?id=icon)
-   [Text](#/Typography?id=text)
