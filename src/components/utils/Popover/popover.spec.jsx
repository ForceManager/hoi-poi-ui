import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Popover from '../../forms/Section';
import Button from '../../general/Button';

describe('Popover', () => {
    test('match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Popover placement="top" content={<span>Hello!</span>}>
                    <Button>top</Button>
                </Popover>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('visible match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Popover placement="top" content={<span>Hello!</span>}>
                    <Button>top</Button>
                </Popover>
            </HoiPoiProvider>,
        );
        wrapper.simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
