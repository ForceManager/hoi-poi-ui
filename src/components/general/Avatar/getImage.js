function getImage(url, placeholder, alt, successCallback, errorCallback) {
    let img = new Image();
    let placeholderDataUri;
    if (placeholder) {
        getDataUri(placeholder).then((dataUri) => {
            placeholderDataUri = dataUri;
            img.style.backgroundImage = dataUri;
            console.log('dataUri', dataUri);
            console.log(img.style.backgroundImage);
        });
    }

    img.onload = () => {
        successCallback && successCallback();
    };
    img.onerror = () => {
        if (placeholderDataUri) {
            img.src = placeholderDataUri;
        }
        errorCallback && errorCallback();
    };

    if (url) img.src = url;
    else if (!url && placeholderDataUri) img.src = placeholderDataUri;

    if (alt) img.alt = alt;

    ///
    // const placeholderDataUri = await getDataUri(placeholder);
    // const img = await loadImage(url, placeholderDataUri, alt, successCallback, errorCallback)
    ///
    return img;
}

const loadImage = (url, placeholderDataUri, alt, successCallback, errorCallback) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        if (placeholderDataUri) img.style.backgroundImage = placeholderDataUri;

        img.onload = (pol) => {
            successCallback && successCallback();
            resolve();
        };
        img.onerror = () => {
            if (placeholderDataUri) {
                img.src = placeholderDataUri;
            }
            errorCallback && errorCallback();
            reject();
        };

        if (url) img.src = url;
        else if (!url && placeholderDataUri) img.src = placeholderDataUri;

        if (alt) img.alt = alt;
    });
};

const getDataUri = (url) => {
    return new Promise((resolve, reject) => {
        if (!url) resolve();

        let img = new Image();
        let dataUri;

        img.onload = function() {
            let canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            canvas.getContext('2d').drawImage(this, 0, 0);
            dataUri = canvas.toDataURL('image/png');
            resolve(dataUri);
        };

        img.onerror = reject;
        img.src = url;
    });
};

export default getImage;
