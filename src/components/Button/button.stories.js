import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import Button from '../Button';

storiesOf('Button', module).add('[interactive]', () => (
    <Button
        size={select(
            'Size',
            {
                Big: 'big',
                Small: 'small',
                Medium: 'medium',
            },
            'medium',
        )}
        color={select(
            'Color',
            {
                Primary: 'primary',
                Danger: 'danger',
                White: 'white',
            },
            'primary',
        )}
        type={select(
            'Type',
            {
                Filled: 'filled',
                Outlined: 'outlined',
            },
            'filled',
        )}
        isLoading={boolean('Loading', false)}
        isDisabled={boolean('Disabled', false)}
        isFullWidth={boolean('Full Width', false)}
    >
        {text('Children', 'ACTION')}
    </Button>
));

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
