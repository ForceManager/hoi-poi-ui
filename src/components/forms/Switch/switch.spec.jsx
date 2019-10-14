import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Switch from './index';

describe('Switch', () => {
    test('unchecked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Switch />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('checked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Switch checked />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('disabled match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Switch isDisabled />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
