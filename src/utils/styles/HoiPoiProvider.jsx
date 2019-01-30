import React from 'react';
import { create } from 'jss';
import { JssProvider } from 'react-jss';
import preset from 'jss-preset-default';
import { ThemeProvider } from 'react-jss';
import isolate from 'jss-isolate';

import defaultTheme from './defaultTheme';

const jss = create(preset());
jss.use(
    isolate({
        isolate: 'root',
        reset: 'all',
    }),
);

export default ({ children, theme = defaultTheme }) => (
    <ThemeProvider theme={theme}>
        <JssProvider jss={jss} classNamePrefix="HoiPoi-">
            {children}
        </JssProvider>
    </ThemeProvider>
);
