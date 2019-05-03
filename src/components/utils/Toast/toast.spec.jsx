import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import { Toast } from '../../utils/Toast';

describe('Toast', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Toast />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
