import React, { memo, useMemo } from 'react';
import File from './File';

const FilesList = memo(
    ({
        classes,
        // classesProp,
        files,
        imageTypes,
        imageExtensions,
        previewImages,
        cropImages,
        cropTooltip,
        handleOnCrop,
        onRemove,
        filesData,
        overrides,
    }) => {
        const renderFiles = useMemo(() => {
            if (!files.length) return null;
            return files.map((file, i) => {
                let newFile = file;
                let fileId = '';
                if (file.file) newFile = file.file;
                // if there is file.file then file.id will be used to keep tracking of the file
                // and the file will be returned with the same format in onRemove and onCrop {id, file}
                if (file.id && file.file) fileId = file.id;
                const isUrl = typeof newFile === 'string';
                const isImage =
                    (!isUrl && imageTypes.includes(newFile.type)) ||
                    (isUrl && imageExtensions.includes(newFile.split('.').pop()?.toLowerCase()));
                const preview = previewImages && isImage;
                const crop = cropImages && isImage;
                const data = filesData?.[newFile.id] || {};

                return (
                    <File
                        key={i}
                        index={i}
                        id={fileId}
                        classes={classes}
                        crop={crop}
                        cropTooltip={cropTooltip}
                        loading={data.loading}
                        error={data.error}
                        progress={data.progress}
                        file={newFile}
                        isUrl={isUrl}
                        onCrop={handleOnCrop}
                        onRemove={onRemove}
                        overrides={overrides}
                        preview={preview}
                    />
                );
            });
        }, [
            classes,
            imageExtensions,
            imageTypes,
            cropImages,
            cropTooltip,
            files,
            filesData,
            handleOnCrop,
            onRemove,
            overrides,
            previewImages,
        ]);

        return (
            <div className={classes.filesList} {...overrides.filesList}>
                {renderFiles}
            </div>
        );
    },
);

export default FilesList;
