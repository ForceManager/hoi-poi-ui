import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Spacer from '../Spacer';

describe('Spacer', () => {
    test('match default snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Spacer />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('match x prop', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Spacer x={2} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('match y prop', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Spacer y={2} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('match x and y prop', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Spacer x={2} y={2} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
