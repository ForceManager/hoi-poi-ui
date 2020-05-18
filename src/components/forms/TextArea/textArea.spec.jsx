import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import TextArea from '../../forms/TextArea';

describe('TextArea', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <TextArea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    value="Hello"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is required match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <TextArea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    isRequired
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with error match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <TextArea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    error="I am an error"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is read only match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <TextArea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    isReadOnly
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('vertical label mode match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <TextArea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    labelMode="vertical"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with pre/post component match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <TextArea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    preComponent={<span>$</span>}
                    postComponent={<span>$</span>}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
