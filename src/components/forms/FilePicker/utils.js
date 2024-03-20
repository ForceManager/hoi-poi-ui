export function checkBrowserCanRender(url) {
    return (
        (url?.toLowerCase()?.includes('.heic') &&
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) ||
        !url?.toLowerCase()?.includes('.heic')
    );
}
