import React from 'react';
import { ThemeProvider, JssProvider, createGenerateId } from 'react-jss';

import jss from './jss';
import defaultTheme from './defaultTheme';

const CLASS_NAME_PREFIX = 'HoiPoi__';
const isDev = ['development', 'test'].includes(process.env.NODE_ENV);
let providerCounter = 0;
const customCreateGenerateId = () => {
    let counter = 0;
    return (rule, sheet) => {
        return `${CLASS_NAME_PREFIX}${sheet.options.name}__${
            rule.key
        }-${providerCounter}-${counter++}`;
    };
};

export default React.memo(({ children, theme = defaultTheme }) => {
    let generateId;
    if (isDev) {
        generateId = customCreateGenerateId();
        providerCounter++;
    } else {
        generateId = createGenerateId();
    }

    return (
        <ThemeProvider theme={theme}>
            <JssProvider
                id={{ minify: !isDev }}
                jss={jss}
                generateId={generateId}
                classNamePrefix={CLASS_NAME_PREFIX}
            >
                {children}
            </JssProvider>
        </ThemeProvider>
    );
});
