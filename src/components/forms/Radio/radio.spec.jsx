import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Radio from './Radio';

describe('Radio', () => {
    test('unchecked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Radio />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('checked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Radio checked />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('disabled match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Radio isDisabled />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
