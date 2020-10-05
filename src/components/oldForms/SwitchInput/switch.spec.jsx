import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import SwitchInput from './index';

describe('SwitchInput', () => {
    test('unchecked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <SwitchInput value={false} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('checked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <SwitchInput value={true} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
