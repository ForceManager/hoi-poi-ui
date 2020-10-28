import React, { Fragment, memo, useCallback, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ContentState, EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import {
    BoldButton,
    ItalicButton,
    UnderlineButton,
    OrderedListButton,
    UnorderedListButton,
} from 'draft-js-buttons';
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from 'draft-js-export-html';
import { useClasses } from '../../../utils/overrides';
import InputWrapper from '../components/InputWrapper';
import Tooltip from '../../utils/Tooltip';
import Icon from '../../general/Icon';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'RichText');

const RichText = memo(
    ({
        className: classNameProp,
        classes: classesProp,
        error,
        info,
        isFullWidth,
        isReadOnly,
        onBlur,
        onChange,
        onClick,
        onFocus,
        placeholder,
        toolbar,
        value,
        ...props
    }) => {
        const editorEl = useRef(null);

        const [focused, setFocused] = useState(false);
        const [editorState, setEditorState] = useState(() =>
            EditorState.createWithContent(stateFromHTML(value)),
        );
        const [editorContent, setEditorContent] = useState({});

        const [{ plugins, InlineToolbar }] = useState(() => {
            const inlineToolbarPlugin = createInlineToolbarPlugin();
            const { InlineToolbar } = inlineToolbarPlugin;
            const plugins = [inlineToolbarPlugin];
            return {
                plugins,
                InlineToolbar,
            };
        });

        const classes = useClasses(useStyles, classesProp);
        const theme = useTheme();

        const rootClassName = classnames(
            classes.root,
            {
                [classes.focused]: focused,
                [classes.error]: error,
                [classes.isFullWidth]: isFullWidth,
                [classes.isReadOnly]: isReadOnly,
            },
            classNameProp,
        );

        const handleClear = useCallback(
            (e) => {
                e.stopPropagation();
                setEditorState((editorState) => {
                    let newState = EditorState.push(
                        editorState,
                        ContentState.createFromText(''),
                        'remove-range',
                    );
                    newState = EditorState.moveFocusToEnd(newState);
                    setFocused(true);
                    return newState;
                });
                setEditorContent({});
            },
            [setEditorContent, setEditorState],
        );

        const handleClick = useCallback(
            (e) => {
                if (!focused && !isReadOnly) {
                    editorEl.current.focus();
                    setFocused(true);
                }
                onClick && onClick(e);
            },
            [focused, isReadOnly, onClick],
        );

        const handleOnBlur = useCallback(
            (e) => {
                setFocused(false);
                onBlur && onBlur(e);
            },
            [onBlur],
        );

        const handleOnChange = useCallback(
            (e) => {
                const rawContent = e.getCurrentContent();

                const content = {
                    html: stateToHTML(rawContent),
                    text: rawContent.getPlainText(),
                };

                setEditorState(e);
                setEditorContent(content);
                onChange(content);
            },
            [onChange, setEditorContent, setEditorState],
        );

        const handleOnFocus = useCallback(
            (e) => {
                setFocused(true);
                onFocus && onFocus(e);
            },
            [onFocus],
        );

        const getToolbarItem = (externalProps, item) =>
            ({
                b: <BoldButton {...externalProps} />,
                i: <ItalicButton {...externalProps} />,
                u: <UnderlineButton {...externalProps} />,
                ol: <OrderedListButton {...externalProps} />,
                ul: <UnorderedListButton {...externalProps} />,
            }[item]);

        const getToolbar = (externalProps, toolbar) =>
            toolbar.map(({ hint, item }, i) => (
                <Tooltip placement="top" content={<span>{hint}</span>} key={i}>
                    {/* SPAN needed to make the tooltip work */}
                    <span>{getToolbarItem(externalProps, item)}</span>
                </Tooltip>
            ));

        let inputProps = useMemo(() => {
            return {
                className: classes.editor,
                editorState: editorState,
                onBlur: handleOnBlur,
                onChange: handleOnChange,
                onFocus: handleOnFocus,
                placeholder: placeholder,
                plugins: plugins,
                readOnly: isReadOnly,
            };
        }, [
            classes.editor,
            editorState,
            handleOnBlur,
            handleOnChange,
            handleOnFocus,
            isReadOnly,
            placeholder,
            plugins,
        ]);

        return (
            <InputWrapper {...props} className={rootClassName} error={error} info={info}>
                <div className={classes.editorWrapper} onClick={handleClick}>
                    <Editor {...inputProps} ref={editorEl} />
                    <InlineToolbar>
                        {(externalProps) => (
                            <Fragment>{getToolbar(externalProps, toolbar)}</Fragment>
                        )}
                    </InlineToolbar>
                    {editorContent.text && !isReadOnly && (
                        <Icon
                            name="closeSmall"
                            size="large"
                            className={classes.closeIcon}
                            onClick={handleClear}
                        />
                    )}
                    {isReadOnly && (
                        <Icon
                            name="lockOutline"
                            size="large"
                            className={classes.closeIcon}
                            color={theme.colors.neutral600}
                        />
                    )}
                </div>
            </InputWrapper>
        );
    },
);

RichText.defaultProps = {
    ...InputWrapper.defaultProps,
    isFullWidth: false,
    isReadOnly: false,
    onBlur: () => {},
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    toolbar: [
        {
            hint: 'Bold',
            item: 'b',
        },
        {
            hint: 'Italic',
            item: 'i',
        },
        {
            hint: 'Underline',
            item: 'u',
        },
        {
            hint: 'Ordered List',
            item: 'ol',
        },
        {
            hint: 'Unordered List',
            item: 'ul',
        },
    ],
    value: '',
};

RichText.propTypes = {
    className: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    /** Info will be displayed below the component */
    info: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    toolbar: PropTypes.arrayOf(
        PropTypes.shape({
            hint: PropTypes.string,
            item: PropTypes.oneOf(['b', 'i', 'u', 'ol', 'ul']),
        }),
    ),
    /** An HTML string */
    value: PropTypes.string,
};

export default RichText;
