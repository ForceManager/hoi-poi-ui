import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Advice from '../../general/Advice';

describe('Badge', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Advice>Lorem ipsum</Advice>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with type match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Advice type="success">Lorem ipsum</Advice>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with icon match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Advice showIcon>Lorem ipsum</Advice>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with icon and type match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Advice type="error" showIcon>
                    Lorem ipsum
                </Advice>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
