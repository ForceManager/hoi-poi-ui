import React from 'react';
import { createTheming, JssProvider, createUseStyles as createUseStylesJSS } from 'react-jss';

import jss from './jss';
import defaultTheme from './defaultTheme';

// Theming namespaced
const ThemeContext = React.createContext({});
const theming = createTheming(ThemeContext);
const { ThemeProvider } = theming;

const CLASS_NAME_PREFIX = 'HoiPoi__';
let providerCounter = 0;
const customCreateGenerateId = () => {
    let counter = 0;
    return (rule, sheet) => {
        let className = sheet.options.classNamePrefix;
        className = className.replace('-', '');
        className = `${className}__${rule.key}-${providerCounter}-${counter++}`;
        className = className.replace('____', '__');
        return className;
    };
};

export default React.memo(({ children, theme = defaultTheme, jssProvider = {} }) => {
    const generateId = customCreateGenerateId();
    providerCounter++;

    return (
        <ThemeProvider theme={theme}>
            <JssProvider
                jss={jss}
                generateId={generateId}
                classNamePrefix={CLASS_NAME_PREFIX}
                {...jssProvider}
            >
                {children}
            </JssProvider>
        </ThemeProvider>
    );
});

export const createUseStyles = (styles, name = '') => createUseStylesJSS(styles, { theming, name });

export const useTheme = theming.useTheme;
