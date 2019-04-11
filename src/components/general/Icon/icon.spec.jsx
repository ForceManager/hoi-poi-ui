import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from 'utils/styles';
import Icon from 'components/general/Icon';

describe('Icon', () => {
    test('default match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Icon name="chevron" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with size match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Icon name="chevron" size="small" />
                <Icon name="chevron" size="medium" />
                <Icon name="chevron" size="large" />
                <Icon name="chevron" size="big" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with color match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Icon name="chevron" color="#e98789" />
                <Icon name="chevron" color="#e98789" size="small" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
