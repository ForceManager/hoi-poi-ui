import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Badge from '../../general/Badge';

describe('Badge', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Badge>Lorem ipsum</Badge>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('type success match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Badge type="success">Lorem ipsum</Badge>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('type error match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Badge type="error">Lorem ipsum</Badge>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('type info match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Badge type="info">Lorem ipsum</Badge>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('type warning match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Badge type="warning">Lorem ipsum</Badge>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('type ongoing match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Badge type="ongoing">Lorem ipsum</Badge>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
