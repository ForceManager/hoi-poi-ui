import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import CheckboxInput from '../../forms/CheckboxInput';

describe('Checkbox', () => {
    test('unchecked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <CheckboxInput value={false} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('checked match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <CheckboxInput value={true} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
