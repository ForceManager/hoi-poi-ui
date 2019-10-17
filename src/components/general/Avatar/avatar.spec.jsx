import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Avatar from '../../general/Avatar';

describe('Avatar', () => {
    test('default case', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Avatar
                    size="medium"
                    placeholder="/public/placeholder.png"
                    src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
                    alt="image"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('default case with wrong src', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Avatar
                    size="medium"
                    placeholder="/public/placeholder.png"
                    src="https://live.staticflickr.com/2862/9899551176_b8c9c7"
                    alt="image"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('only placeholder', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Avatar placeholder="/public/placeholder.png" alt="image" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
