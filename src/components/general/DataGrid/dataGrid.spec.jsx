import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import DataGrid from '../../general/DataGrid';

describe('DataGrid', () => {
    test('is rendered without crashes', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid>Hello</DataGrid>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('is rendered combining props', () => {
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid color="danger" type="outlined" size="big">
                    ACTION
                </DataGrid>
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
