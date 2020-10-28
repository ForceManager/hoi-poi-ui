import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Text from '../../typography/Text';

describe('Text', () => {
    test('is rendered without crashes', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Text>Hello</Text>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('type h1', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Text type="h1">Hello</Text>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('type subtitle', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Text type="subtitle">Hello</Text>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('isTruncated', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Text isTruncated>Hello</Text>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('bold', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Text bold>Hello</Text>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
