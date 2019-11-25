import { useMemo } from 'react';

export function getOverrides(props = {}, keys = []) {
    return keys.reduce((result, key) => {
        result[key] = props[key] || {};
        return result;
    }, {});
}

export function useClasses(useStyles, classes, ...props) {
    const styleClasses = useStyles(props);
    return useMemo(() => {
        if (!classes) return styleClasses;

        return Object.keys(styleClasses).reduce((classNames, key) => {
            const overrideClassName = classes[key];
            if (overrideClassName) classNames[key] = `${styleClasses[key]} ${overrideClassName}`;
            else classNames[key] = styleClasses[key];
            return classNames;
        }, {});
    }, [classes, styleClasses]);
}
