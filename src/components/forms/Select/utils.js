import { stripDiacritics } from './diacritics';

function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function defaultStringify(option) {
    return `${option.label}`;
}

export function createFilter(option, rawInput) {
    const ignoreCase = true;
    const ignoreAccents = true;
    const trim = true;
    const matchFrom = 'any';

    let input = trim ? trimString(rawInput) : rawInput;
    let candidate = trim ? trimString(defaultStringify(option)) : defaultStringify(option);
    if (ignoreCase) {
        input = input.toLowerCase();
        candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
        input = stripDiacritics(input);
        candidate = stripDiacritics(candidate);
    }
    return matchFrom === 'start'
        ? candidate.substr(0, input.length) === input
        : candidate.indexOf(input) > -1;
}
