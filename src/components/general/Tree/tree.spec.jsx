import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import Tree from '../Tree';

describe('Tree', () => {
    test('match', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <Tree />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
