import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import TitleDivider from '../TitleDivider';

describe('TitleDivider', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <TitleDivider>Lorem ipsum</TitleDivider>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('changing text type', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <TitleDivider type="body">Lorem ipsum</TitleDivider>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
