const getDataUri = (src, placeholder) => {
    return new Promise((resolve, reject) => {
        if (!src) return resolve();
        const img = new Image();
        img.crossOrigin = 'Anonymous';

        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            canvas.getContext('2d').drawImage(this, 0, 0);
            const dataUri = canvas.toDataURL('image/jpg');
            resolve(dataUri);
        };

        img.onerror = reject;

        img.src = src;
    });
};

export default getDataUri;
