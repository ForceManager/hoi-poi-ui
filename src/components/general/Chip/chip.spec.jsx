import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Chip from '../Chip';

describe('Chip', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip>Lorem ipsum</Chip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('filled variation match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip
                    src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
                    placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="image"
                    onRemove={() => {}}
                    isFolded
                    isActive
                    isFilled
                >
                    Lorem ipsum
                </Chip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('outlined variation match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip
                    src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
                    placeholder="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="image"
                    onRemove={() => {}}
                    isFolded
                    isReadOnly
                    isOutlined
                >
                    Lorem ipsum
                </Chip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('big size match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip size="large">Lorem ipsum</Chip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
