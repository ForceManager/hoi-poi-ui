import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import RichText from '../../forms/RichText';
import Button from '../../general/Button';

const lorem =
    '<p>Lorem ipsum <strong>dolor sit amet</strong>, consectetur <em>adipiscing elit</em>.</p>';

const toolbar = [
    {
        hint: 'Negrita',
        item: 'b',
    },
    {
        hint: 'Cursiva',
        item: 'i',
    },
    {
        hint: 'Subrayado',
        item: 'u',
    },
];

const fetchSuggestions = (query) =>
    [
        {
            id: 0,
            name: 'Lea Thompson',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 1,
            name: 'Cyndi Lauper',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 2,
            name: 'Tom Cruise',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 3,
            name: 'Jerry Hall',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 4,
            name: 'Madonna',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 5,
            name: 'Joan Collins',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 6,
            name: 'Winona Ryder',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 7,
            name: 'Christina Applegate',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 8,
            name: 'Alyssa Milano',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 9,
            name: 'Molly Ringwald',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
    ]
        .filter((item) => item.name.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5);

describe('RichText', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText label="Editor" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with placeholder match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText label="Editor with placeholder" placeholder="Type something…" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with error match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText label="Editor with error" error="Error message" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with initial value match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText
                    label="Editor with content and info message"
                    info="Info message"
                    value={lorem}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is full width match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText label="Editor Full-Width" value={lorem} isFullWidth />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is read-only match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText label="Read-Only Editor" value={lorem} isReadOnly />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with custom toolbar match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText label="Editor with custom toolbar" value={lorem} toolbar={toolbar} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with fixed toolbar, mentions & custom actions match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText
                    label="Editor with fixed toolbar, mentions & custom actions"
                    toolbarStyle="fixed"
                    mention={{
                        fetchSuggestions,
                        tooltip: 'Mention',
                        texts: {
                            advice: 'Lorem ipsum dolor sit amet',
                            noResults: 'No Results...',
                        },
                    }}
                    customActions={
                        <>
                            <Button size="small" type="secondary">
                                Cancel
                            </Button>
                            <Button size="small" type="primary">
                                Save
                            </Button>
                        </>
                    }
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with compact mode and mentions', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <RichText
                    label="Editor in 'compact' mode with mentions"
                    placeholder="Write @ to mention a colleague"
                    mention={{
                        fetchSuggestions,
                        tooltip: 'Mention',
                        texts: {
                            advice: 'Lorem ipsum dolor sit amet',
                            noResults: 'No Results...',
                        },
                    }}
                    compactMode
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
