import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Progress from '../Progress';

describe('Progress', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Progress />
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
