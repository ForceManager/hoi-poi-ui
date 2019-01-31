import React from 'react';
import { JssProvider } from 'react-jss';
import { ThemeProvider } from 'react-jss';

import jss from './jss';
import defaultTheme from './defaultTheme';

export default ({ children, theme = defaultTheme }) => (
    <ThemeProvider theme={theme}>
        <JssProvider jss={jss} classNamePrefix="HoiPoi-">
            {children}
        </JssProvider>
    </ThemeProvider>
);
