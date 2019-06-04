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
    test('type bold', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Text type="bold">Hello</Text>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('type light', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Text type="light">Hello</Text>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
