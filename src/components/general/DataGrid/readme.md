Simple:

```jsx
let i = 10;
let rowData = [];
while (i--) {
    rowData.push({
        make: 'Toyota',
        model: 'Celica',
        price: Math.round(Math.random() * 1000) + '$',
    });
}
<div style={{ height: 350 }}>
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
</div>;
```

Loading:

```jsx
let i = 10;
let rowData = [];
while (i--) {
    rowData.push({
        make: 'Toyota',
        model: 'Celica',
        price: Math.round(Math.random() * 1000) + '$',
    });
}
<div style={{ height: 250 }}>
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
</div>;
```

Lazy-load:

```jsx
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

<div style={{ height: 350 }}>
    <DataGrid
        columnDefs={[
            {
                headerName: 'Athlete',
                field: 'athlete',
                width: 200,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Age',
                field: 'age',
                width: 100,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Country',
                field: 'country',
                width: 150,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Year',
                field: 'year',
                width: 100,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Date',
                field: 'date',
                width: 150,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Sport',
                field: 'sport',
                width: 200,
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
</div>;
```

### Component tree

---

-   root - root element
-   label - Button inner content and `children` wrapper.
-   [Loader](#/Loader)
-   [Text](#/typography/Text)
