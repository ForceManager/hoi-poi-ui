import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import DatePicker from '../DatePicker';

describe('DatePicker', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker label="Lorem ipsum" placeholder="Write here" onChange={() => {}} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with outputType string', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    outputType="string"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with different format', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    dateFormat="Z"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with different locale', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    locale="ru"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with hint match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker label="Lorem ipsum" onChange={() => {}} hint="Hello" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is required match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker label="Lorem ipsum" onChange={() => {}} isRequired />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with error match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker label="Lorem ipsum" onChange={() => {}} error="I am an error" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is read only match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker label="Lorem ipsum" onChange={() => {}} isReadOnly />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('vertical label mode match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DatePicker label="Lorem ipsum" onChange={() => {}} labelMode="vertical" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
