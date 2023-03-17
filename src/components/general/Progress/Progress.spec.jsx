import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Progress from '../Progress';

const animation = {
    animationDuration: '2s',
    animationDelay: null,
    animationTimingFunction: 'cubic-bezier(.6, 0, .5, .9)',
};

describe('Progress', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Progress value={50} />
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('with animation match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Progress value={50} animation={animation} />
            </HoiPoiProvider>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
