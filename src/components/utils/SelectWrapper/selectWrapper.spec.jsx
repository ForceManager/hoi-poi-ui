import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import SelectWrapper from './index';
import Button from '../../general/Button';

describe('SelectWrapper', () => {
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
                <SelectWrapper
                    options={options}
                    value={{
                        label: 'Lorem ipsum 2',
                        value: 'lorem-ipsum-2',
                    }}
                >
                    <Button>Select One</Button>
                </SelectWrapper>
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
                <SelectWrapper
                    options={options}
                    value={{
                        label: 'Lorem ipsum 2',
                        value: 'lorem-ipsum-2',
                    }}
                >
                    <Button>Select One</Button>
                </SelectWrapper>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
