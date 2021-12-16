import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AceEditor from 'react-ace';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/theme-monokai';

import { useClasses } from '../../../utils/overrides';
import InputWrapper from '../components/InputWrapper';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'Code');

const Code = memo(
    ({
        className: classNameProp,
        classes: classesProp,
        overrides: overridesProp,
        error,
        isFullWidth,
        isReadOnly,
        onChange,
        value,
        minLines,
        maxLines,
        ...props
    }) => {
        const classes = useClasses(useStyles, classesProp);

        const rootClassName = classnames(
            classes.root,
            {
                [classes.error]: error,
                [classes.isFullWidth]: isFullWidth,
                [classes.isReadOnly]: isReadOnly,
            },
            classNameProp,
        );

        return (
            <InputWrapper
                {...props}
                error={error}
                className={rootClassName}
                overrides={overridesProp}
                isFullWidth={isFullWidth}
                isReadOnly={isReadOnly}
            >
                <AceEditor
                    value={value}
                    onChange={onChange}
                    readOnly={isReadOnly}
                    width={'100%'}
                    mode="javascript"
                    theme="monokai"
                    showPrintMargin={false}
                    showGutter
                    wrapEnabled
                    minLines={minLines}
                    maxLines={maxLines}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    showLineNumbers={true}
                    tabSize={2}
                    editorProps={{ $blockScrolling: Infinity }}
                    {...overridesProp.AceEditor}
                />
            </InputWrapper>
        );
    },
);

Code.overrides = ['AceEditor'];

Code.defaultProps = {
    ...InputWrapper.defaultProps,
    isFullWidth: false,
    isReadOnly: false,
    onChange: () => {},
    value: '',
    minLines: 20,
    maxLines: Infinity,
};

Code.propTypes = {
    className: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    minLines: PropTypes.number,
    maxLines: PropTypes.number,
};

export default Code;
