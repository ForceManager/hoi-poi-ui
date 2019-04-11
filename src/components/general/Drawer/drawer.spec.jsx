import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from 'utils/styles';
import Drawer from 'components/general/Drawer';

describe('Drawer', () => {
    test('is rendering closed', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Drawer isOpen={false} />
            </HoiPoiProvider>,
        );
        expect(wrapper.exists('.ReactModal__Content--after-open')).toEqual(false);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('is rendering opened with content', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Drawer isOpen={true}>
                    <span>Lorem Ipsum</span>
                </Drawer>
            </HoiPoiProvider>,
        );

        expect(wrapper.exists('.ReactModal__Content--after-open')).toEqual(true);
        expect(wrapper.find('.ReactModal__Content').contains('Lorem Ipsum')).toEqual(true);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('pass width and classnames to modal', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Drawer
                    isOpen={true}
                    width="400px"
                    className="className-ipsum"
                    classes={{ overlay: 'overlay-ipsum' }}
                >
                    <span>Lorem Ipsum</span>
                </Drawer>
            </HoiPoiProvider>,
        );
        expect(wrapper.find('.ReactModal__Content').hasClass('className-ipsum')).toEqual(true);
        expect(wrapper.find('.ReactModal__Overlay').hasClass('overlay-ipsum')).toEqual(true);
        expect(wrapper.find('Modal').prop('style').content.width).toBe('400px');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
