import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HoiPoiProvider } from '../../../utils/styles';
import DataGrid from '.';

describe('DataGrid', () => {
    test('default', () => {
        let i = 10;
        let rowData = [];
        while (i--) {
            rowData.push({
                make: 'Toyota',
                model: 'Celica',
                price: '10000$',
            });
        }
        const wrapper = mount(
            <HoiPoiProvider>
                <DataGrid
                    columnDefs={[
                        {
                            headerName: 'Make',
                            field: 'make',
                        },
                        {
                            headerName: 'Model',
                            field: 'model',
                        },
                        {
                            headerName: 'Price',
                            field: 'price',
                        },
                    ]}
                    rowData={rowData.length ? rowData : null}
                />
            </HoiPoiProvider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
