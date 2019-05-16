import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Chip from '../../general/Chip';

describe('Chip', () => {
    test('if onClose is true', () => {
        const mockFunc = jest.fn();
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip onClose={mockFunc}>Lorem ipsum</Chip>
            </HoiPoiProvider>,
        );
        wrapper
            .find('Icon')
            .props()
            .onClick();
        expect(mockFunc.mock.calls.length).toEqual(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('if img is added and onClose true', () => {
        const mockFunc = jest.fn();

        const wrapper = mount(
            <HoiPoiProvider>
                <Chip
                    url="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
                    onClose={mockFunc}
                >
                    Lorem ipsum
                </Chip>
            </HoiPoiProvider>,
        );

        wrapper
            .find('Icon')
            .props()
            .onClick();
        expect(mockFunc.mock.calls.length).toEqual(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('if picture is added and onClose false', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip url="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg">
                    Lorem ipsum
                </Chip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('if isShrinked is true with picture', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip
                    url="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
                    isShrinked={true}
                >
                    Lorem ipsum
                </Chip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('if isShrinked is true without picture', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Chip isShrinked={true}>Lorem ipsum</Chip>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
