import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import List from '../../general/List';

jest.mock('uuid', () => {
    return {
        v4: jest.fn(() => 1),
    };
});

describe('List', () => {
    const items = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Aenean euismod elementum nisi quis eleifend quam adipiscing.',
        'Aliquet porttitor lacus luctus accumsan tortor posuere ac.',
        'In fermentum posuere urna nec tincidunt.',
        'Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.',
    ];

    test('default case', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <List items={items} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('ordered list case', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <List items={items} type="ordered" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('unstyled case', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <List items={items} unStyled />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('custom bullet case', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <List items={items} bullet="arrowRight" />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
