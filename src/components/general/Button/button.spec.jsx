import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Button from '../../general/Button';

describe('Button', () => {
    test('is rendered without crashes', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Button>Hello</Button>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is rendered combining props', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Button color="danger" type="outlined" size="big">
                    ACTION
                </Button>
                <Button type="squared" size="big">
                    ACTION
                </Button>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is rendered as a link', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Button href="https://hello.com">Hello</Button>
            </HoiPoiProvider>,
        );
        expect(wrapper.exists('a')).toEqual(true);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is disabled', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Button isDisabled={true} onClick={() => console.log('Hello')}>
                    Hello
                </Button>
            </HoiPoiProvider>,
        );
        expect(wrapper.find('button').props().onClick).toEqual(null);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("when is loading it's disabled too", () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Button isLoading={true} onClick={() => console.log('Hello')}>
                    Hello
                </Button>
            </HoiPoiProvider>,
        );
        expect(wrapper.find('button').props().onClick).toEqual(null);
        expect(wrapper.find('.HoiPoi__Button__disabled-5-13').length).toBe(1);
    });
});
