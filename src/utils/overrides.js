export function getOverrides(props = {}, keys = []) {
    return keys.reduce((result, key) => {
        result[key] = props[key] || {};
        return result;
    }, {});
}
