import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Label from '../../forms/Label';

describe('Label', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Label>Lorem ipsum</Label>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is required match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Label isRequired>Lorem ipsum</Label>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with hint match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Label hint="I am a hint">Lorem ipsum</Label>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
