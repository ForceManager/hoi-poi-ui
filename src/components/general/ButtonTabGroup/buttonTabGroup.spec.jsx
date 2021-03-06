import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import ButtonTabGroup from '../ButtonTabGroup';

describe('ButtonTabGroup', () => {
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
                <ButtonTabGroup buttons={buttons} value={true}></ButtonTabGroup>;
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
                <ButtonTabGroup buttons={buttons} value={true}></ButtonTabGroup>;
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
                <ButtonTabGroup
                    buttons={buttons}
                    value={true}
                    onChange={undefined}
                ></ButtonTabGroup>
                ;
            </HoiPoiProvider>,
        );

        expect(() => {
            wrapper.find('ButtonTabGroup').find('button').first().simulate('click');
        }).not.toThrow();
    });
});
