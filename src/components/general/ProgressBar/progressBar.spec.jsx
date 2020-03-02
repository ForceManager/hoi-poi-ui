import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import ProgressBar from '../../general/ProgressBar';

describe('ProgressBar', () => {
    test('with different sizes', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <ProgressBar percent={10} />
                <ProgressBar percent={20} />
                <ProgressBar percent={30} />
                <ProgressBar percent={50} />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
