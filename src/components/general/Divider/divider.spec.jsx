import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Divider from '../Divider';

describe('Divider', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Divider />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
