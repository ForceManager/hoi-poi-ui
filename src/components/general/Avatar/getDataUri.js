const getDataUri = (src) => {
    return new Promise((resolve, reject) => {
        if (!src) resolve();
        let img = new Image();
        img.crossOrigin = 'Anonymous';
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
        img.src = src;
    });
};

export default getDataUri;
