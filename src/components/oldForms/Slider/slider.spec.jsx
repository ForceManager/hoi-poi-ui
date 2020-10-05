import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Slider from '../../oldForms/Slider';

describe('Input', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Slider label="Lorem ipsum" onChange={() => {}} value={0} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('disabled match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Slider label="Lorem ipsum" onChange={() => {}} value={0} isReadOnly />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('custom tip match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Slider
                    label="Lorem ipsum"
                    onChange={() => {}}
                    tipFormatter={(v) => `${v}%`}
                    value={0}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('custom max/min/step match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Slider
                    label="Lorem ipsum"
                    onChange={() => {}}
                    value={5000}
                    max={10000}
                    min={5000}
                    step={100}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
