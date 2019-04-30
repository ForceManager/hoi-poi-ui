export function checkPathTarget(target, className) {
    if (!target) return false;
    if (target === document.body) return false;
    if (target.className && target.className.includes && target.className.includes(className))
        return true;
    return checkPathTarget(target.parentElement, className);
}
