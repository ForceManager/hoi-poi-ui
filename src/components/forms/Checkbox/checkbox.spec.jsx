import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from 'utils/styles';
import Checkbox from 'components/forms/Checkbox';

describe('Checkbox', () => {
    test('unchecked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Checkbox />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('checked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Checkbox checked />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('indeterminate match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Checkbox checked indeterminate />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('disabled match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Checkbox isDisabled />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
