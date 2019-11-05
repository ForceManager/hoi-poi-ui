import React from 'react';
import { storiesOf } from '@storybook/react';

import DataGrid from '../DataGrid';

let i = 10000;
let rowData = [];
while (i--) {
    rowData.push({
        make: 'Toyota',
        model: 'Celica',
        price: Math.round(Math.random() * 1000) + '$',
    });
}

let infiniteInitialRowCount = 5;
const onReady = (params) => {
    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
        let dataSource = {
            rowCount: null,
            getRows: function(params) {
                setTimeout(function() {
                    let rowsThisPage = data.slice(params.startRow, params.endRow);
                    let lastRow = -1;
                    if (data.length <= params.endRow) {
                        lastRow = data.length;
                    }
                    params.successCallback(rowsThisPage, lastRow);
                }, 500);
            },
        };
        params.api.setDatasource(dataSource);
    };

    httpRequest.open(
        'GET',
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json',
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            updateData(JSON.parse(httpRequest.responseText));
        }
    };
};

storiesOf('Components|DataGrid', module)
    .add('Simple', () => (
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
    ))
    .add('Loading', () => (
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
            isLoading
        />
    ))
    .add('with error', () => (
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
            hasError
            components={{
                noRowsOverlay: () => <span>Error!</span>,
            }}
        />
    ))
    .add('lazy-load', () => (
        <DataGrid
            columnDefs={[
                {
                    headerName: 'Athlete',
                    field: 'athlete',
                    width: 500,
                    suppressSizeToFit: true,
                },
                {
                    headerName: 'Age',
                    field: 'age',
                    width: 500,
                    suppressSizeToFit: true,
                },
                {
                    headerName: 'Country',
                    field: 'country',
                    width: 500,
                    suppressSizeToFit: true,
                },
                {
                    headerName: 'Year',
                    field: 'year',
                    width: 500,
                    suppressSizeToFit: true,
                },
                {
                    headerName: 'Date',
                    field: 'date',
                    width: 500,
                    suppressSizeToFit: true,
                },
                {
                    headerName: 'Sport',
                    field: 'sport',
                    width: 500,
                    suppressSizeToFit: true,
                },
                {
                    headerName: 'Sport',
                    field: 'sport',
                    width: 500,
                    suppressSizeToFit: true,
                },
            ]}
            defaultColDef={{ resizable: true }}
            rowModelType={'infinite'}
            cacheBlockSize={'60'}
            infiniteInitialRowCount={infiniteInitialRowCount}
            onReady={onReady}
            isLoading={true}
        />
    ));
