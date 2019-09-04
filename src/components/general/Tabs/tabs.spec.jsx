import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Tabs from '.';

describe('Tabs', () => {
    test('default', () => {
        let tabs = [...Array(5)].fill(0).map((_, i) => ({ key: `tab-${i}`, title: `Tab ${i}` }));
        const activeKey = 'tab-2';
        const wrapper = mount(
            <HoiPoiProvider>
                <Tabs activeKey={activeKey} tabs={tabs} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('with scrolling', () => {
        let tabs = [...Array(100)].fill(0).map((_, i) => ({ key: `tab-${i}`, title: `Tab ${i}` }));
        const activeKey = 'tab-2';
        const wrapper = mount(
            <HoiPoiProvider>
                <Tabs activeKey={activeKey} tabs={tabs} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
