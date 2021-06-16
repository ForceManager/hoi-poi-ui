Horizontal label:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        title="or drop files here"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
    />
</div>;
```

Horizontal label:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        labelMode="horizontal"
        multiple={false}
        title="or drop files here"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
    />
</div>;
```

Preview Images:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onCrop = (file, index) => {
    const files = [...state];

    files[index] = file;
    setState(files);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        title="Drop files here"
        subtitle="Logo image shouyld be at least 609x81px"
        buttonLabel="Select file"
        onCrop={onCrop}
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        multiple
        isFullWidth
        previewImages
        cropImages
    />
</div>;
```

Single Image Preview:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onCrop = (file, index) => {
    const files = [...state];

    files[index] = file;
    setState(files);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        title="Drop files here"
        subtitle="Logo image shouyld be at least 609x81px"
        buttonLabel="Select file"
        onCrop={onCrop}
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        maxFiles={1}
        previewImages
        singleImagePreview
        cropImages
    />
</div>;
```

Crop aspect ratio:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onCrop = (file, index) => {
    const files = [...state];

    files[index] = file;
    setState(files);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        title="Drop files here"
        subtitle="Logo image shouyld be at least 609x81px"
        buttonLabel="Select file"
        onCrop={onCrop}
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        maxFiles={1}
        previewImages
        singleImagePreview
        cropAspect={16 / 9}
        cropImages
    />
</div>;
```

Preloaded Image from url:

```jsx
import { useState } from 'react';

const imageUrl =
    // 'https://fmcloudfrontsta.forcemanager.com/logos/59340-customerSidebarLogoSquareUrlWeb-20210610170245.png';
    'https://m.media-amazon.com/images/I/51v13RAJJ2L._AC_SR500,460_.jpg';
const [state, setState] = useState([imageUrl]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onCrop = (file, index) => {
    const files = [...state];

    files[index] = file;
    setState(files);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        title="Drop files here"
        subtitle="Logo image shouyld be at least 609x81px"
        buttonLabel="Select file"
        onCrop={onCrop}
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        maxFiles={1}
        previewImages
        singleImagePreview
        cropAspect={16 / 9}
        cropImages
    />
</div>;
```

Upload progress:

```jsx
import { useState } from 'react';

const file = new File([''], 'file.txt', { type: 'text/plain', lastModified: Date.now() });
const [files, setFiles] = useState(
    [file].map((file) =>
        Object.assign(file, {
            id: Date.now(),
        }),
    ),
);
const [filesData, setFilesData] = useState({});

const uploadFilesData = (data) => {
    setFilesData({ ...filesData, ...data });
};

const uploadFile = (file) =>
    new Promise((resolve, reject) => {
        let progress = 0;
        let interval = setInterval(function () {
            uploadFilesData({
                [file.id]: {
                    loading: true,
                    progress,
                    error: false,
                },
            });
            progress = progress + 10;
        }, 300);
        setTimeout(() => {
            clearInterval(interval);
            if (Math.random() < 0.5) resolve();
            else reject();
        }, 3000);
    });

const onDrop = (acceptedFiles) => {
    const acceptedFilesData = acceptedFiles.reduce(
        (acc, el) => ({ ...acc, [el.id]: { loading: true, progress: 0, error: null } }),
        {},
    );
    const newFiles = [...files, ...acceptedFiles];

    setFiles(newFiles);
    setFilesData({ ...filesData, ...acceptedFilesData });
    acceptedFiles.forEach((file) => {
        uploadFile(file)
            .then(() => {
                setFilesData({
                    ...filesData,
                    [file.id]: {
                        loading: false,
                        progress: null,
                        error: null,
                    },
                });
            })
            .catch(() => {
                setFilesData({
                    ...filesData,
                    [file.id]: {
                        loading: false,
                        progress: null,
                        error: 'Invalid file',
                    },
                });
            });
    });
};

const onRemove = (deletedFile) => {
    if (filesData[deletedFile.id]) {
        const newFilesData = { ...filesData };
        delete newFilesData[deletedFile.id];
        setFilesData(newFilesData);
    }
    setFiles(files.filter((file) => !(file.id === deletedFile.id)));
};

<div>
    <FilePicker
        label="File"
        title="Drop file here"
        subtitle="Only one file at time"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={files}
        filesData={filesData}
        isFullWidth
        previewImages
    />
</div>;
```

Max files:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        title="or drop files here"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        maxFiles={1}
    />
</div>;
```

Accept:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        title="or drop files here"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        accept={['application/zip', 'application/vnd.rar']}
    />
</div>;
```

Full Width:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        title="or drop files here"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        isFullWidth={true}
    />
</div>;
```

### Component tree

---

-   root - root element
-   [Label](#/Forms?id=label)
-   formControl - Input wrapper excluding label
-   [react-dropzone](https://github.com/react-dropzone/react-dropzone)
-   input - Native input
-   [Title](#/Typography/Text)
-   [Subtitle](#/Typography/Text)
-   [Button](#/General/Button)
-   info - Info text wrapper
-   error - Error wrapper
-   file - File wrapper
-   fileDataContainer
-   fileIconContainer
-   [Loader](#/General/Loader)
-   [Tooltip](#/General/Tooltip)
-   fileTextContainer
-   [FileName](#/Typography/Text)
-   [FileSize](#/Typography/Text)
-   [FileErrorText](#/Typography/Text)
-   actions
-   clear - Clear icon wrapper
-   [Icon](#/General/Icon)
-   progress
-   crop - Crop modal wrapper
-   [Modal](#/General/Modal)
-   cropModalContent - crop content wrapper
-   [react-image-crop](https://github.com/DominicTobias/react-image-crop)
