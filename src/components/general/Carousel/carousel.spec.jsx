import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Carousel from '../Carousel';

describe('Carousel', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Carousel />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
