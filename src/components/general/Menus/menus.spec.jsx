import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Menus from '../../general/Menus';

describe('Menus', () => {
    test('default', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Menus title="Menus" mode="horizontal"></Menus>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
