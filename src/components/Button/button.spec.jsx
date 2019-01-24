import React from 'react';
import { HoiPoiProvider } from '../../utils/styles';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
    test('is rendered without crashes', () => {
        renderer.create(
            <HoiPoiProvider>
                <Button>Hello</Button>
            </HoiPoiProvider>,
        );
    });
});
