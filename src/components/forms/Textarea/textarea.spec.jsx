import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Textarea from '.';

describe('Textarea', () => {
    test('default match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Textarea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    value="Hello"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with hint match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Textarea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    hint="Hello"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is required match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Textarea
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
                <Textarea
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
                <Textarea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    isReadOnly
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('horizontal label mode match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Textarea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    labelMode="horizontal"
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('without label mode match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Textarea placeholder="Write here" onChange={() => {}} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('hide clear match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Textarea
                    label="Lorem ipsum"
                    placeholder="Write here"
                    onChange={() => {}}
                    hideClear
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
