import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from 'utils/styles';
import InputGroup from 'components/forms/InputGroup';

describe('InputGroup', () => {
    test('default match', () => {
        const inputs = [
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
                <InputGroup label="Lorem ipsum" inputs={inputs} onChange={() => {}} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is disabled match', () => {
        const inputs = [
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
                <InputGroup label="Lorem ipsum" inputs={inputs} onChange={() => {}} isDisabled />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with values match', () => {
        const inputs = [
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

        const value = {
            lorem: true,
            lorem3: true,
        };

        const wrapper = mount(
            <HoiPoiProvider>
                <InputGroup label="Lorem ipsum" inputs={inputs} onChange={() => {}} value={value} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
