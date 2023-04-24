import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import Text from '../../typography/Text';
import Link from '../../typography/Link';
import List from './components/List';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Markdown');

const Markdown = memo(
    ({ classes: classesProp, className: classNameProp, content, overrides: overridesProp }) => {
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Markdown.overrides);

        const rootProps = useMemo(
            () => ({
                className: classNames(classes.root, classNameProp),
                children: content,
                components: {
                    a: ({ node, children, ...props }) => (
                        <Link {...props} {...override.a}>
                            {children}
                        </Link>
                    ),
                    p: ({ children }) => (
                        <Text type="body" as="p" {...override.p}>
                            {children}
                        </Text>
                    ),
                    h1: ({ children }) => (
                        <Text type="h1" as="h1" {...override.h1}>
                            {children}
                        </Text>
                    ),
                    h2: ({ children }) => (
                        <Text type="h2" as="h2" {...override.h2}>
                            {children}
                        </Text>
                    ),
                    h3: ({ children }) => (
                        <Text type="h3" as="h3" {...override.h3}>
                            {children}
                        </Text>
                    ),
                    h4: ({ children }) => (
                        <Text type="h4" as="h4" {...override.h4}>
                            {children}
                        </Text>
                    ),
                    h5: ({ children }) => (
                        <Text type="h5" as="h5" {...override.h5}>
                            {children}
                        </Text>
                    ),
                    h6: ({ children }) => (
                        <Text type="h6" as="h6" {...override.h6}>
                            {children}
                        </Text>
                    ),
                    ul: ({ children }) => <List items={children} />,
                    ol: ({ children }) => <List items={children} type="ordered" />,
                },
                ...override.root,
            }),
            [classNameProp, classes.root, content, override],
        );

        return <ReactMarkdown {...rootProps} />;
    },
);

Markdown.overrides = ['root', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol'];

Markdown.defaultProps = {
    className: '',
    overrides: {},
};

Markdown.propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    overrides: PropTypes.object,
};

export default Markdown;
