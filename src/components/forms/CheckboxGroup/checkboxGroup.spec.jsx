import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import CheckboxGroup from '../../forms/CheckboxGroup';

describe('CheckboxGroup', () => {
    test('default match', () => {
        const options = [
            {
                label: 'Lorem ipsum',
                value: 'lorem',
            },
            {
                label: 'Lorem ipsum 2',
                value: 'lorem2',
            },
            {
                label: 'Lorem ipsum 3',
                value: 'lorem3',
            },
        ];
        const wrapper = mount(
            <HoiPoiProvider>
                <CheckboxGroup label="Lorem ipsum" options={options} onChange={() => {}} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with values match', () => {
        const options = [
            {
                label: 'Lorem ipsum',
                value: 'lorem',
            },
            {
                label: 'Lorem ipsum 2',
                value: 'lorem2',
            },
            {
                label: 'Lorem ipsum 3',
                value: 'lorem3',
            },
        ];

        const value = {
            lorem: true,
            lorem3: true,
        };

        const wrapper = mount(
            <HoiPoiProvider>
                <CheckboxGroup
                    label="Lorem ipsum"
                    options={options}
                    onChange={() => {}}
                    value={value}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
