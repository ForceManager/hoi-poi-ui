export const getVar = (cssVar) => {
    if (!cssVar?.startsWith('var(')) return cssVar;
    cssVar = cssVar.replace(/^var\(|\)$/g, '');
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(cssVar).trim();
};
