import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from 'utils/styles';
import Link from 'components/general/Link';

describe('Link', () => {
    test('is rendered without crashes', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Link>Hello</Link>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is rendered as a link', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Link href="https://github.com/ForceManager/hoi-poi-ui">Hello</Link>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is rendered with different props', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Link size="big">ACTION</Link>
                <Link size="medium">ACTION</Link>
                <Link size="small">ACTION</Link>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is disabled', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Link onClick={() => console.log('Hello')} size="big" isDisabled>
                    ACTION
                </Link>
            </HoiPoiProvider>,
        );
        expect(wrapper.find('button').props().onClick).toEqual(null);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
