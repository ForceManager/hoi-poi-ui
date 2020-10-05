import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Section from '../../forms/Section';

describe('Section', () => {
    test('match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Section title="Title here">Lorem ipsum</Section>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('open and close', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Section title="Title here">Lorem ipsum</Section>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
        wrapper.simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
