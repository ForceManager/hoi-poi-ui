import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import LinkComponent from '../../../typography/Link';

const validLinkAttributes = [
    'charset',
    'className',
    'crossorigin',
    'download',
    'hreflang',
    'id',
    'integrity',
    'media',
    'ping',
    'referrerpolicy',
    'rel',
    'target',
    'title',
    'type',
];

const Link = ({ callback, href, target, title, ...otherProps }) => {
    const [finalTitle, setFinalTitle] = useState(undefined);
    const [attributes, setAttributes] = useState(null);

    const handleClick = useCallback(
        (event) => {
            if (callback) {
                event.preventDefault();
                const link = () => {
                    const finalTarget = target || attributes?.target;
                    if (!finalTarget || finalTarget === '_self') {
                        window.location.href = href;
                    } else {
                        window.open(href, finalTarget);
                    }
                };
                callback({ event, attributes, link });
            }
        },
        [attributes, callback, href, target],
    );

    const parseTitleString = useCallback((str) => {
        try {
            const parsedJson = JSON.parse(str);
            const finalAttributes = Object.entries(parsedJson).reduce((acc, [key, value]) => {
                if (validLinkAttributes.includes(key)) {
                    acc[key] = value;
                }
                return acc;
            }, {});
            setAttributes(finalAttributes);
        } catch (error) {
            setFinalTitle(str);
        }
    }, []);

    useEffect(() => {
        title && parseTitleString(title);
    }, [parseTitleString, title]);

    const linkProps = useMemo(() => {
        return {
            href,
            target,
            title: finalTitle,
            onClick: handleClick,
            ...attributes,
            ...otherProps,
        };
    }, [attributes, finalTitle, handleClick, href, otherProps, target]);

    return <LinkComponent {...linkProps} />;
};

export default memo(Link);
