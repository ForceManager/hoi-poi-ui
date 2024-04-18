Horizontal label:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    const dropped = [...state, ...acceptedFiles].map((current, index) => {
        if (index % 2 !== 0) current.canRemove = false;
        return current;
    });
    setState([...dropped]);
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
        handleDownload={() => alert('File downloaded')}
        downloadTooltip="Download file"
        deleteTooltip="Delete file"
        maxFiles={1}
        showDragzone
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
        maxFiles={1}
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

Preview Images With maxFiles and maxVisible:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);

const renameDuplicates = (oldFiles, newFiles) => {
    const oldFilesMapped = oldFiles.reduce((obj, current) => {
        obj[current.name] = current;
        return obj;
    }, {});

    let renamedFiles = [];
    newFiles.forEach((newFile) => {
        if (oldFilesMapped[newFile.name]) {
            for (let i = 1; i <= oldFiles.length; i++) {
                const sufix = `_${i}`;
                const nameSplitted = newFile.name.split('.');
                const proposalName = `${nameSplitted[0]}${sufix}.${nameSplitted[1]}`;

                if (!oldFilesMapped[proposalName]) {
                    let finalFile = new File([newFile], proposalName, {
                        type: newFile.type,
                        lastModified: newFile.lastModified,
                    });
                    if (newFile.id) {
                        Object.assign(finalFile, {
                            id: newFile.id,
                        });
                    }
                    renamedFiles.push(finalFile);
                    break;
                }
            }
        } else renamedFiles.push(newFile);
    });

    return renamedFiles;
};

const onDrop = (acceptedFiles) => {
    setState([...state, ...renameDuplicates(state, acceptedFiles)]);
};

const onExceedFileLimitDrop = () => {
    console.log('File limit exceeded');
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
        maxFiles={4}
        maxVisible={2}
        foldedText="See More"
        unfoldedText="See Less"
        onExceedFileLimitDrop={onExceedFileLimitDrop}
    />
</div>;
```

Preview Images Group:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);

const renameDuplicates = (oldFiles, newFiles) => {
    const oldFilesMapped = oldFiles.reduce((obj, current) => {
        obj[current.name] = current;
        return obj;
    }, {});

    let renamedFiles = [];
    newFiles.forEach((newFile) => {
        if (oldFilesMapped[newFile.name]) {
            for (let i = 1; i <= oldFiles.length; i++) {
                const sufix = `_${i}`;
                const nameSplitted = newFile.name.split('.');
                const proposalName = `${nameSplitted[0]}${sufix}.${nameSplitted[1]}`;

                if (!oldFilesMapped[proposalName]) {
                    let finalFile = new File([newFile], proposalName, {
                        type: newFile.type,
                        lastModified: newFile.lastModified,
                    });
                    if (newFile.id) {
                        Object.assign(finalFile, {
                            id: newFile.id,
                        });
                    }
                    renamedFiles.push(finalFile);
                    break;
                }
            }
        } else renamedFiles.push(newFile);
    });

    return renamedFiles;
};

const onDrop = (acceptedFiles) => {
    return new Promise((resolve) => {
        setState([...state, ...renameDuplicates(state, acceptedFiles)]);
        resolve();
    });
};

const onExceedFileLimitDrop = () => {
    console.log('File limit exceeded');
};

const onCrop = (file, index) => {
    const files = [...state];

    files[index] = file;
    setState(files);
};

const onRemove = (deletedFile) => {
    return new Promise((resolve) => {
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
        resolve();
    });
};

const formats = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/gif',
    'image/bmp',
    'image/tiff',
];

const groups = [
    {
        title: 'Images',
        maxFiles: 10,
        maxVisible: 3,
        validateFiles: (file) => {
            if (formats.includes(file.type)) return true;
            else return false;
        },
    },
    {
        title: 'Other Files',
        maxFiles: 10,
        maxVisible: 3,
        validateFiles: (file) => {
            if (!formats.includes(file.type)) return true;
            else return false;
        },
    },
];

<div>
    <FilePicker
        label="File"
        title="Drop files here"
        subtitle="Logo image shouyld be at least 609x81px"
        foldedText="See More"
        unfoldedText="See Less"
        buttonLabel="Select file"
        onCrop={onCrop}
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        multiple
        isFullWidth
        previewImages
        cropImages
        groups={groups}
        maxVisible={4}
        onExceedFileLimitDrop={onExceedFileLimitDrop}
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
    'https://www.vhv.rs/dpng/d/486-4864616_generic-company-logo-png-example-logo-png-transparent.png';
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

Preloaded Image from file with with id:

```jsx
import { useState, useEffect, useRef } from 'react';
import Loader from '../../general/Loader';

const images = [
    {
        id: '15',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCRxRlrCGOjsiBnFL_Q6iIc4ylwlD9wPXoD-xnf6tp8gPsz6ifRrQD6cuzYNF6ipKsZc&usqp=CAU',
    },
    {
        id: '72',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/1794_Samuel_Dunn_Wall_Map_of_the_World_in_Hemispheres_-_Geographicus_-_World2-dunn-1794.jpg/260px-1794_Samuel_Dunn_Wall_Map_of_the_World_in_Hemispheres_-_Geographicus_-_World2-dunn-1794.jpg',
    },
    {
        id: '134',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhniiUEqnWVhqx-DGK8oj4siB2w2qkquhWSkd6DqM-z5sE4g2_DMW-t_EGOMVowhSkI8&usqp=CAU',
    },
];

const [state, setState] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const isFirstRender = useRef(true);

useEffect(() => {
    if (isFirstRender.current) {
        isFirstRender.current = false;

        setIsLoading(true);
        const promises = images.map((current, index) => {
            return fetch(current.url)
                .then((res) => res.blob())
                .then((blob) => {
                    const file = new File([blob], `testImage_${index}`, {
                        type: 'image/png',
                    });
                    return { id: current.id, file: file };
                });
        });

        Promise.all(promises)
            .then((result) => setState(result))
            .finally(() => setIsLoading(false));
    }
}, []);

const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onCrop = (file, index) => {
    const files = [...state];
    files[index] = file;
    setState(files);
};

const onRemove = (deletedFile) => {
    setState(state.filter((file) => file.id !== deletedFile.id));
};

<div>
    {isLoading && (
        <div
            style={{
                width: '100%',
                height: '240px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Loader />
        </div>
    )}
    {!isLoading && (
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
    )}
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
        accept={['application/zip', 'application/vnd.rar', 'image/heic']}
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
