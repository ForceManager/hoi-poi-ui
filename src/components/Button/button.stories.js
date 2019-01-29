import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';

storiesOf('Button', module).add('default', () => <Button>ACTION</Button>);

storiesOf('Button', module).add('primary', () => <Button color="primary">ACTION</Button>);

storiesOf('Button', module).add('danger', () => <Button color="danger">ACTION</Button>);

storiesOf('Button', module).add('small', () => (
    <Button size="small" color="primary">
        ACTION
    </Button>
));

storiesOf('Button', module).add('big', () => (
    <Button size="big" color="primary">
        ACTION
    </Button>
));

storiesOf('Button', module).add('disabled', () => (
    <Button isDisabled={true} color="primary">
        ACTION
    </Button>
));

storiesOf('Button', module).add('full-width', () => (
    <Button isFullWidth={true} color="primary">
        ACTION
    </Button>
));

storiesOf('Button', module).add('loading', () => <Button isLoading={true}>ACTION</Button>);

storiesOf('Button', module).add('primary outlined', () => (
    <Button color="primary" type="outlined">
        ACTION
    </Button>
));

storiesOf('Button', module).add('primary outlined disabled', () => (
    <Button color="primary" type="outlined" isDisabled={true}>
        ACTION
    </Button>
));

storiesOf('Button', module).add('danger outlined', () => (
    <Button color="danger" type="outlined">
        ACTION
    </Button>
));

storiesOf('Button', module).add('primary with href', () => (
    <Button color="primary" href="https://github.com/ForceManager/hoi-poi-ui">
        ACTION
    </Button>
));
