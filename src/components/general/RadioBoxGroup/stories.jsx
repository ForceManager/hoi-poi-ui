import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './Readme.md';
import RadioBox from '../../components/RadioBox';

storiesOf('Components|RadioBox', module).add('example', () => <RadioBox />, {
    notes: {
        markdown: Readme,
    },
});
