import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import CircularProgress from '../CircularProgress';

describe('Circular progress', () => {
    test('simple', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <CircularProgress value={10} text="10%" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('success', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <CircularProgress type="success" value={10} text="10%" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('warning', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <CircularProgress type="warning" value={10} text="10%" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('danger', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <CircularProgress value={10} type="danger" text="10%" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('custom content', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <CircularProgress value={75} type="success" size="large">
                    Good!
                </CircularProgress>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
