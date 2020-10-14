import React, {memo} from 'react';
import { components } from 'react-select';
// import Checkbox from '../../../general/Checkbox';

const Option = memo(({value, label, ...props}) => {
    console.log(props)
    return (
        <components.Option {...props} >{label}</components.Option>
    )
});

export default Option;