import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
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

        const loadOptions = (text, cb) =>
            new Promise(
                (resolve, reject) =>
                    setTimeout(() => {
                        const newOptions = options.filter((current) => {
                            return current.value.includes(text);
                        });
                        resolve(newOptions);
                    }, 10000),
                [],
            );

        const typeOptions = [
            {
                label: 'All',
                value: 'all',
            },
            {
                label: 'Only name',
                value: 'only-name',
            },
            {
                label: 'Lorem ipsum',
                value: 'lorem-ipsum',
            },
            {
                label: 'Lorem ipsum dolor amet',
                value: 'lorem-ipsum-dolor-amet',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <SearchBar
                    placeholder="Search"
                    loadOptions={loadOptions}
                    typeOptions={typeOptions}
                    type="lorem-ipsum-1"
                    onChangeType={() => {}}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('small match', () => {
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

        const loadOptions = (text, cb) =>
            new Promise(
                (resolve, reject) =>
                    setTimeout(() => {
                        const newOptions = options.filter((current) => {
                            return current.value.includes(text);
                        });
                        resolve(newOptions);
                    }, 10000),
                [],
            );

        const typeOptions = [
            {
                label: 'All',
                value: 'all',
            },
            {
                label: 'Only name',
                value: 'only-name',
            },
            {
                label: 'Lorem ipsum',
                value: 'lorem-ipsum',
            },
            {
                label: 'Lorem ipsum dolor amet',
                value: 'lorem-ipsum-dolor-amet',
            },
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <SearchBar
                    placeholder="Search"
                    loadOptions={loadOptions}
                    typeOptions={typeOptions}
                    type="lorem-ipsum-1"
                    onChangeType={() => {}}
                    size="small"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
