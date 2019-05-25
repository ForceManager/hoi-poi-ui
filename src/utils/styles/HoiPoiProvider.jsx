import React from 'react';
import { ThemeProvider, JssProvider, createGenerateId } from 'react-jss';

import jss from './jss';
import defaultTheme from './defaultTheme';

const CLASS_NAME_PREFIX = 'HoiPoi__';
const customCreateGenerateId = () => {
    let counter = 0;
    return (rule, sheet) => {
        return `${CLASS_NAME_PREFIX}${sheet.options.name}__${rule.key}-${counter++}`;
    };
};

const generateId =
    process.env.NODE_ENV === 'development' ? customCreateGenerateId() : createGenerateId();

export default React.memo(({ children, theme = defaultTheme }) => (
    <ThemeProvider theme={theme}>
        <JssProvider jss={jss} generateId={generateId} classNamePrefix={CLASS_NAME_PREFIX}>
            {children}
        </JssProvider>
    </ThemeProvider>
));
