States default:

```jsx
<div>
    <RadioBox
        icon="addAccount"
        title={'Create new accounts'}
        text={'Import data to add new accounts to ForceManager'}
        style={{ marginBottom: 20 }}
    />
    <RadioBox
        icon="accountDetails"
        title={'Update existing accounts'}
        text={'Import data to update ForceManager accounts'}
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
-   input - Hidden native input
-   svg - icon determined by the checkbox state
