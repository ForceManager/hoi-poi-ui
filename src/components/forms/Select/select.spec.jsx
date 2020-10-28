import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Select from './index';

describe('Select', () => {
    test('default match', () => {
        const options = [
            {
                label: 'Lorem ipsum 1',
                value: 'lorem-ipsum-1',
            },
            {
                label: 'Lorem ipsum 2',
                value: 'lorem-ipsum-2',
            },
            {
                label: 'Lorem ipsum 3',
                value: 'lorem-ipsum-3',
            },
            {
                label: 'Lorem ipsum 4',
                value: 'lorem-ipsum-4',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <Select
                    label="Lorem ipsum"
                    placeholder="Select one"
                    options={options}
                    value="lorem-ipsum-2"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with disabled options match', () => {
        const options = [
            {
                label: 'Lorem ipsum 1',
                value: 'lorem-ipsum-1',
                isDisabled: true,
            },
            {
                label: 'Lorem ipsum 2',
                value: 'lorem-ipsum-2',
            },
            {
                label: 'Lorem ipsum 3',
                value: 'lorem-ipsum-3',
                isDisabled: true,
            },
            {
                label: 'Lorem ipsum 4',
                value: 'lorem-ipsum-4',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <Select
                    label="Lorem ipsum"
                    placeholder="Select one"
                    options={options}
                    value="lorem-ipsum-2"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
