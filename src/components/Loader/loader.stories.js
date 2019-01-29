import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../Loader';

storiesOf('Loader', module).add('primary/default', () => <Loader color="primary" />);
storiesOf('Loader', module).add('danger', () => <Loader color="danger" />);
storiesOf('Loader', module).add('white', () => (
    <div style={{ background: 'black', display: 'inline-block', padding: 20 }}>
        <Loader color="white" />
    </div>
));

storiesOf('Loader', module).add('mini', () => <Loader size="mini" />);
storiesOf('Loader', module).add('tiny', () => <Loader size="tiny" />);
storiesOf('Loader', module).add('small', () => <Loader size="small" />);
storiesOf('Loader', module).add('medium', () => <Loader size="medium" />);
storiesOf('Loader', module).add('large', () => <Loader size="large" />);
storiesOf('Loader', module).add('big', () => <Loader size="big" />);
storiesOf('Loader', module).add('huge', () => <Loader size="huge" />);
storiesOf('Loader', module).add('massive', () => <Loader size="massive" />);
