import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import RichText from '../../forms/RichText';

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
});
