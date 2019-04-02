import deepmerge from 'deepmerge';
import defaultTheme from './defaultTheme';

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

export default function createHoiPoiTheme(theme = {}) {
    return deepmerge(defaultTheme, theme, { arrayMerge: overwriteMerge });
}
