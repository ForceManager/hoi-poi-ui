import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from 'utils/styles';
import Tooltip from 'components/forms/Section';
import Button from 'components/general/Button';

describe('Tooltip', () => {
    test('match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Tooltip placement="top" content={<span>Hello!</span>}>
                    <Button>top</Button>
                </Tooltip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('visible match snapshot', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Tooltip placement="top" content={<span>Hello!</span>}>
                    <Button>top</Button>
                </Tooltip>
            </HoiPoiProvider>,
        );
        wrapper.simulate('mouseover');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
