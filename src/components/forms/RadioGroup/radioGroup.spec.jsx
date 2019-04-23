import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import RadioGroup from './index';

describe('RadioGroup', () => {
    test('default match', () => {
        const options = [
            {
                label: 'Lorem ipsum',
                name: 'lorem',
            },
            {
                label: 'Lorem ipsum 2',
                name: 'lorem2',
            },
            {
                label: 'Lorem ipsum 3',
                name: 'lorem3',
            },
        ];
        const wrapper = mount(
            <HoiPoiProvider>
                <RadioGroup label="Lorem ipsum" options={options} onChange={() => {}} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with values match', () => {
        const options = [
            {
                label: 'Lorem ipsum',
                name: 'lorem',
            },
            {
                label: 'Lorem ipsum 2',
                name: 'lorem2',
            },
            {
                label: 'Lorem ipsum 3',
                name: 'lorem3',
            },
        ];

        const value = 'lorem2';

        const wrapper = mount(
            <HoiPoiProvider>
                <RadioGroup
                    label="Lorem ipsum"
                    options={options}
                    onChange={() => {}}
                    value={value}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('disabled match', () => {
        const options = [
            {
                label: 'Lorem ipsum',
                name: 'lorem',
            },
            {
                label: 'Lorem ipsum 2',
                name: 'lorem2',
            },
            {
                label: 'Lorem ipsum 3',
                name: 'lorem3',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <RadioGroup label="Lorem ipsum" options={options} onChange={() => {}} isReadOnly />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
