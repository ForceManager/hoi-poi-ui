import React, { memo, useMemo, useState, useCallback, useRef, useEffect } from 'react';
import classnames from 'classnames';
import Text from '../../../typography/Text';
import Icon from '../../../general/Icon';
import Popover from '../../../utils/Popover';
import FilesList from './FilesList';
import { useTheme } from '../../../../utils/styles';

const ROW_HEIGHT = 45;

const Groups = memo(
    ({
        classes,
        files,
        groups,
        foldedText,
        unfoldedText,
        overrides,
        imageTypes,
        imageExtensions,
        previewImages,
        cropImages,
        cropTooltip,
        filesData,
        handleOnCrop,
        onRemove,
        maxVisible,
        maxFiles,
        totalDroppedTooltip,
        totalDroppedByGroupTooltip,
        handleDownload,
        downloadTooltip,
        deleteTooltip,
        customTitle,
    }) => {
        const theme = useTheme();

        const [groupsFolded, setGroupsFolded] = useState({});
        const [isFolded, setIsFolded] = useState(true);
        const isFirstRender = useRef(true);

        useEffect(() => {
            if (isFirstRender.current) {
                isFirstRender.current = false;

                if (!groups?.length) return;
                const initialGroupsFolded = groups.reduce((obj, current, index) => {
                    obj[index] = true;
                    return obj;
                }, {});
                setGroupsFolded(initialGroupsFolded);
            }
        }, [groups]);

        const handleOnRemove = useCallback(
            (group, index) => (deletedFile) => {
                onRemove &&
                    Promise.resolve(onRemove(deletedFile)).then((result) => {
                        const groupFiles = files.filter((file) => group.validateFiles(file));
                        if (groupFiles.length - 1 <= 0)
                            setGroupsFolded({ ...groupsFolded, [index]: true });
                    });
            },
            [onRemove, files, groupsFolded],
        );

        const onClick = useCallback(
            (index) => {
                if (groups?.length && !isNaN(index)) {
                    setGroupsFolded({ ...groupsFolded, [index]: !groupsFolded[index] });
                } else setIsFolded((isFolded) => !isFolded);
            },
            [groupsFolded, groups],
        );

        const getIconClassNames = useCallback(
            (index) => {
                return classnames(classes.groupFooterIcon, {
                    [classes.groupFooterIconRotate]: !isNaN(index)
                        ? !groupsFolded[index]
                        : !isFolded,
                });
            },
            [classes, groupsFolded, isFolded],
        );

        const renderExpand = useCallback(
            (index) => {
                let textFolded = '';
                let textUnfolded = '';
                if (groups?.length) {
                    textFolded = groupsFolded[index] ? foldedText : '';
                    textUnfolded = !groupsFolded[index] ? unfoldedText : '';
                } else {
                    textFolded = isFolded ? foldedText : '';
                    textUnfolded = !isFolded ? unfoldedText : '';
                }

                const content = (
                    <div
                        className={classes.groupFooterTextContainer}
                        onClick={() => onClick(index)}
                    >
                        <Text type="caption" color="orange500">
                            {textFolded}
                            {textUnfolded}
                        </Text>
                        <Icon
                            className={getIconClassNames(index)}
                            name="chevron"
                            size="small"
                            color={theme.colors.actionMajor[500]}
                        />
                    </div>
                );

                if (groups && totalDroppedByGroupTooltip[index]) {
                    return (
                        <Popover
                            content={
                                <Text color="neutralBase">{`+ ${totalDroppedByGroupTooltip[index]}`}</Text>
                            }
                            visible={!!totalDroppedByGroupTooltip[index]}
                            overlayStyle={{ zIndex: 99999 }}
                            className={classes.uploadedFilesPopover}
                        >
                            {content}
                        </Popover>
                    );
                } else if (!groups && totalDroppedTooltip) {
                    return (
                        <Popover
                            content={<Text color="neutralBase">{`+ ${totalDroppedTooltip}`}</Text>}
                            visible={!!totalDroppedTooltip}
                            overlayStyle={{ zIndex: 99999 }}
                            className={classes.uploadedFilesPopover}
                        >
                            {content}
                        </Popover>
                    );
                } else return content;
            },
            [
                groupsFolded,
                getIconClassNames,
                classes,
                foldedText,
                unfoldedText,
                groups,
                isFolded,
                onClick,
                theme,
                totalDroppedTooltip,
                totalDroppedByGroupTooltip,
            ],
        );

        const renderGroups = useMemo(() => {
            if (!groups?.length) return null;
            return groups.map((group, index) => {
                const selectedFiles = files.filter((file) => group.validateFiles(file));

                let title = group?.title || '';
                if (group.customTitle) {
                    title = group.customTitle;
                } else if (group?.maxFiles) {
                    title = `${title} (${selectedFiles.length}/${group.maxFiles})`;
                } else {
                    title = `${title} (${selectedFiles.length})`;
                }

                if (!selectedFiles?.length) return null;

                const groupListWrapperClassNames = classnames(classes.groupListWrapper, {
                    [classes.groupListWrapperMargin]: selectedFiles.length <= 3,
                });

                const groupClassNames = classnames(classes.group, {
                    [classes.groupMargin]: index > 0,
                });

                let inlineStyles = {};

                const stylesUnfolded = {
                    height: ROW_HEIGHT * selectedFiles.length,
                    overflow: 'auto',
                };

                const stylesFolded = {
                    height: ROW_HEIGHT * group.maxVisible,
                    overflow: 'hidden',
                };

                if (groupsFolded[index]) {
                    if (
                        group.hasOwnProperty('maxVisible') &&
                        selectedFiles.length > group.maxVisible
                    ) {
                        inlineStyles = stylesFolded;
                    } else {
                        inlineStyles = {
                            height: ROW_HEIGHT * selectedFiles.length,
                            overflow: 'auto',
                        };
                    }
                } else {
                    inlineStyles = stylesUnfolded;
                }

                const displayGroupFooter =
                    group.hasOwnProperty('maxVisible') &&
                    selectedFiles.length > group.maxVisible &&
                    foldedText &&
                    unfoldedText;

                return (
                    <div key={index} className={groupClassNames} {...overrides.group}>
                        <div className={classes.groupHeader} {...overrides.groupHeader}>
                            <div className={classes.groupTitle} {...overrides.groupTitle}>
                                <Text color="neutral700">{title}</Text>
                            </div>
                        </div>
                        <div className={classes.groupTitleDivider} />
                        <div className={groupListWrapperClassNames} style={inlineStyles}>
                            <FilesList
                                classes={classes}
                                files={selectedFiles}
                                imageTypes={imageTypes}
                                imageExtensions={imageExtensions}
                                previewImages={previewImages}
                                cropImages={cropImages}
                                cropTooltip={cropTooltip}
                                downloadTooltip={downloadTooltip}
                                deleteTooltip={deleteTooltip}
                                handleOnCrop={handleOnCrop}
                                setIsFolded={setIsFolded}
                                onRemove={handleOnRemove(group, index)}
                                filesData={filesData}
                                overrides={overrides}
                                handleDownload={handleDownload}
                            />
                        </div>
                        {displayGroupFooter && (
                            <div className={classes.groupFooter}>{renderExpand(index)}</div>
                        )}
                    </div>
                );
            });
        }, [
            groups,
            files,
            classes,
            groupsFolded,
            foldedText,
            unfoldedText,
            overrides,
            imageTypes,
            imageExtensions,
            previewImages,
            cropImages,
            cropTooltip,
            downloadTooltip,
            handleOnCrop,
            handleOnRemove,
            filesData,
            handleDownload,
            renderExpand,
            deleteTooltip,
        ]);

        const displayFooter = useMemo(() => {
            if (
                !isNaN(parseInt(maxVisible, 10)) &&
                files.length > maxVisible &&
                foldedText &&
                unfoldedText
            ) {
                return true;
            } else return false;
        }, [files, maxVisible, foldedText, unfoldedText]);

        const renderList = useMemo(() => {
            let title = '';
            if (customTitle) {
                title = customTitle;
            } else if (maxFiles) {
                title = `(${files.length}/${maxFiles})`;
            }

            let inlineStyles = {};

            const stylesUnfolded = {
                height: ROW_HEIGHT * files.length,
                overflow: 'auto',
            };

            const stylesFolded = {
                height: ROW_HEIGHT * maxVisible,
                overflow: 'hidden',
            };

            if (isFolded) {
                if (maxVisible && files.length > maxVisible) {
                    inlineStyles = stylesFolded;
                } else {
                    inlineStyles = {
                        height: ROW_HEIGHT * files.length,
                        overflow: 'auto',
                    };
                }
            } else {
                inlineStyles = stylesUnfolded;
            }

            if (!files.length) return null;

            return (
                <div className={classes.group} {...overrides.group}>
                    {maxFiles && (
                        <>
                            <div className={classes.groupHeader} {...overrides.groupHeader}>
                                <div className={classes.groupTitle} {...overrides.groupTitle}>
                                    <Text color="neutral700">{title}</Text>
                                </div>
                            </div>
                            <div className={classes.groupTitleDivider} />
                        </>
                    )}
                    <div className={classes.filesListWrapper} style={inlineStyles}>
                        <FilesList
                            classes={classes}
                            files={files}
                            imageTypes={imageTypes}
                            imageExtensions={imageExtensions}
                            previewImages={previewImages}
                            cropImages={cropImages}
                            cropTooltip={cropTooltip}
                            downloadTooltip={downloadTooltip}
                            deleteTooltip={deleteTooltip}
                            handleOnCrop={handleOnCrop}
                            setIsFolded={setIsFolded}
                            onRemove={onRemove}
                            filesData={filesData}
                            overrides={overrides}
                            handleDownload={handleDownload}
                        />
                    </div>
                    {displayFooter && <div className={classes.groupFooter}>{renderExpand()}</div>}
                </div>
            );
        }, [
            maxFiles,
            customTitle,
            files,
            maxVisible,
            isFolded,
            classes,
            overrides,
            imageTypes,
            imageExtensions,
            previewImages,
            cropImages,
            cropTooltip,
            downloadTooltip,
            deleteTooltip,
            handleOnCrop,
            onRemove,
            filesData,
            handleDownload,
            displayFooter,
            renderExpand,
        ]);

        if (groups) return renderGroups;
        return renderList;
    },
);

export default Groups;
