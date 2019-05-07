import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import { Toast, toast } from '../../utils/Toast';

describe('Toast', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Toast />
            </HoiPoiProvider>,
        );
        toast({
            type: 'info',
            text: 'Lorem ipsum dolor amet',
            title: 'Info toast',
        });
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
