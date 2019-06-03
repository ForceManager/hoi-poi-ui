import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Title from '../../typography/Title';

describe('Title', () => {
    test('Default Title', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Title>H1</Title>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
