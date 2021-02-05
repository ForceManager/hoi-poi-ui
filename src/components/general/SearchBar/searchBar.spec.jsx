import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Chip from '../Chip';

describe('Chip', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip>Lorem ipsum</Chip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
