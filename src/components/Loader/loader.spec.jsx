import React from 'react';
import { HoiPoiProvider } from '../../utils/styles';
import Loader from '../Loader';
import renderer from 'react-test-renderer';

describe('Loader', () => {
    test('is rendered without crashes', () => {
        renderer.create(
            <HoiPoiProvider>
                <Loader />
            </HoiPoiProvider>,
        );
    });
});
