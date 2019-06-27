import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import DataGrid from '.';

const rows = [
    {
        id: 1,
        title: 'Lorem',
        subtitle: 'Ipsum',
        url: 'https://lipsum.com',
    },
    {
        id: 2,
        title: 'Lorem',
        subtitle: 'Ipsum',
        url: 'https://lipsum.com',
    },
    {
        id: 3,
        title: 'Lorem',
        subtitle: 'Ipsum',
        url: 'https://lipsum.com',
    },
    {
        id: 4,
        title: 'Lorem',
        subtitle: 'Ipsum',
        url: 'https://lipsum.com',
    },
];

describe('DataGrid', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid
                    columns={[
                        { key: 'id', name: 'ID' },
                        { key: 'title', name: 'Title' },
                        { key: 'subtitle', name: 'Subtitle' },
                        { key: 'url', name: 'Url' },
                    ]}
                    rows={rows}
                    count={rows.length}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with frozen column match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid
                    columns={[
                        { key: 'id', name: 'ID', frozen: true },
                        { key: 'title', name: 'Title' },
                        { key: 'subtitle', name: 'Subtitle' },
                        { key: 'url', name: 'Url' },
                    ]}
                    rows={rows}
                    count={rows.length}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with resizable column match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid
                    columns={[
                        { key: 'id', name: 'ID', resizable: true },
                        { key: 'title', name: 'Title' },
                        { key: 'subtitle', name: 'Subtitle' },
                        { key: 'url', name: 'Url' },
                    ]}
                    rows={rows}
                    count={rows.length}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with a formatted column match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid
                    columns={[
                        { key: 'id', name: 'ID' },
                        { key: 'title', name: 'Title' },
                        { key: 'subtitle', name: 'Subtitle' },
                        {
                            key: 'url',
                            name: 'Url',
                            formatter: ({ value }) => <a href={value}>{value}</a>,
                        },
                    ]}
                    rows={rows}
                    count={rows.length}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('loading match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid
                    columns={[
                        { key: 'id', name: 'ID' },
                        { key: 'title', name: 'Title' },
                        { key: 'subtitle', name: 'Subtitle' },
                        { key: 'url', name: 'Url' },
                    ]}
                    rows={rows}
                    count={rows.length}
                    isLoading={true}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('error match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid
                    columns={[
                        { key: 'id', name: 'ID' },
                        { key: 'title', name: 'Title' },
                        { key: 'subtitle', name: 'Subtitle' },
                        { key: 'url', name: 'Url' },
                    ]}
                    rows={rows}
                    count={rows.length}
                    hasError={true}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('empty match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid columns={[]} rows={rows} count={rows.length} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with actions match', () => {
        const actions = [
            () => <span onClick={() => console.log('Edit')}>Edit</span>,
            () => <span onClick={() => console.log('Remove')}>Remove</span>,
        ];

        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid
                    columns={[
                        { key: 'id', name: 'ID' },
                        { key: 'title', name: 'Title' },
                        { key: 'subtitle', name: 'Subtitle' },
                        { key: 'url', name: 'Url' },
                    ]}
                    rows={rows}
                    count={rows.length}
                    actions={actions}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
