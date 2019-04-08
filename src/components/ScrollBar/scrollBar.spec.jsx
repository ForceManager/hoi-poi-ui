import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../utils/styles';
import ScrollBar from '../ScrollBar';

describe('ScrollBar', () => {
    test('match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <ScrollBar>Lorem ipsum</ScrollBar>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
