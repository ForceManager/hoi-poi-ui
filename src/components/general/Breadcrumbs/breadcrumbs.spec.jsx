import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Breadcrumbs from '../Breadcrumbs';

describe('Breadcrumbs', () => {
    test('default match', () => {
        const items = [
            {
                id: 'level1',
                text: 'Level 1',
            },
            {
                id: 'level2',
                text: 'Level 2',
            },
            {
                id: 'level3',
                text: 'Level 3',
            },
            {
                id: 'level4',
                text: 'Level 4',
            },
        ];
        const wrapper = mount(
            <HoiPoiProvider>
                <Breadcrumbs items={items} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('clickables match', () => {
        const items = [
            {
                id: 'level1',
                text: 'Level 1',
            },
            {
                id: 'level2',
                text: 'Level 2',
            },
            {
                id: 'level3',
                text: 'Level 3',
            },
            {
                id: 'level4',
                text: 'Level 4',
            },
        ];
        const wrapper = mount(
            <HoiPoiProvider>
                <Breadcrumbs onClick={(item) => console.log(item)} items={items} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
