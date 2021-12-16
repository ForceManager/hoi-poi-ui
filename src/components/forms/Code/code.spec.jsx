import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Code from '../Code';

describe('Code', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Code label="Lorem ipsum" onChange={() => {}} value="const a = 10;" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with error match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Code label="Lorem ipsum" onChange={() => {}} error="I am an error" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('isReadOnly match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Code label="Lorem ipsum" onChange={() => {}} isReadOnly />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('vertical label mode match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Code label="Lorem ipsum" onChange={() => {}} labelMode="vertical" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
