import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import BadgeNotification from '../../general/BadgeNotification';

describe('BadgeNotification', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <BadgeNotification>123</BadgeNotification>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
