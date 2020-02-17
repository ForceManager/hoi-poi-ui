import React, { useState } from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import ButtonSwitch from '../../general/ButtonSwitch';

describe('Button', () => {
    test('is rendered without crashes', () => {
        const buttons = [
            {
                label: 'ON',
                value: true,
            },
            {
                label: 'OFF',
                value: false,
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <ButtonSwitch buttons={buttons} value={true}></ButtonSwitch>;
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('is rendering with string values', () => {
        const buttons = [
            {
                label: 'ON',
                value: 'on',
            },
            {
                label: 'OFF',
                value: 'false',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <ButtonSwitch buttons={buttons} value={true}></ButtonSwitch>;
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('is not throwing an error if no onChange prop is defined', () => {
        const buttons = [
            {
                label: 'ON',
                value: 'on',
            },
            {
                label: 'OFF',
                value: 'false',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <ButtonSwitch buttons={buttons} value={true} onChange={undefined}></ButtonSwitch>;
            </HoiPoiProvider>,
        );

        expect(() => {
            wrapper
                .find('ButtonSwitch')
                .find('Button')
                .first()
                .simulate('click');
        }).not.toThrow();
    });
});
