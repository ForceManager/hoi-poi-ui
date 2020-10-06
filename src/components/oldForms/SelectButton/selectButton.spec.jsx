import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import SelectButton from '../SelectButton';

describe('Select Button', () => {
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
                <SelectButton placeholder="Select one" options={options} value="lorem-ipsum-2">
                    <button>Select button</button>
                </SelectButton>
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
        wrapper.find('.HoiPoi__SelectButton__button-1-1').simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('with grouped options match', () => {
        const options = [
            {
                label: 'Lorem ipsum',
                options: [
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
                ],
            },
            {
                label: 'Dolor amet',
                options: [
                    {
                        label: 'Dolor amet 1',
                        value: 'dolor-amet-1',
                    },
                    {
                        label: 'Dolor amet 2',
                        value: 'dolor-amet-2',
                    },
                    {
                        label: 'Dolor amet 3',
                        value: 'dolor-amet-3',
                    },
                    {
                        label: 'Dolor amet 4',
                        value: 'dolor-amet-4',
                    },
                ],
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <SelectButton placeholder="Select one" options={options} value="lorem-ipsum-2">
                    <button>Select button</button>
                </SelectButton>
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();

        wrapper.find('.HoiPoi__SelectButton__button-2-1').simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('with actions match', () => {
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
                <SelectButton
                    placeholder="Select one"
                    options={options}
                    value="lorem-ipsum-2"
                    actions={[
                        {
                            label: 'Create a new status',
                            onClick: () => console.log('click'),
                        },
                    ]}
                >
                    <button>Select button</button>
                </SelectButton>
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
        wrapper.find('.HoiPoi__SelectButton__button-3-1').simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
