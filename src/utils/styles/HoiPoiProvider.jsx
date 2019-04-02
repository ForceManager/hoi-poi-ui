import React from 'react';
import { ThemeProvider, JssProvider } from 'react-jss';

import jss from './jss';
import defaultTheme from './defaultTheme';

export default React.memo(({ children, theme = defaultTheme }) => (
    <ThemeProvider theme={theme}>
        <JssProvider jss={jss} classNamePrefix="HoiPoi-">
            {children}
        </JssProvider>
    </ThemeProvider>
));
