import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
    test('is rendered without crashes', () => {
        renderer.create(<Button>Hello</Button>);
    });
});
