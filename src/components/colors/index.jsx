import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import defaultTheme from '../../utils/styles/defaultTheme';
import { createUseStyles, useTheme } from '../../utils/styles';
import { useClasses } from '../../utils/overrides';
import Text from '../typography/Text';
import styles from './styles';

const useStyles = createUseStyles(styles, 'Colors');

/**
 * Returns "black" or "white" depending on whether the input color is light or dark.
 * Supports hex, RGB, and RGBA formats.
 * @param {string} color - A color in hex format (e.g., "#ffffff"), RGB format (e.g., "rgb(255, 255, 255)"), or RGBA format (e.g., "rgba(255, 255, 255, 0.5)").
 * @returns {string} "black" if the color is light, "white" if the color is dark.
 */
function getContrastColor(color) {
    // Helper function to convert hex to RGB
    function hexToRgb(hex) {
        // Expand shorthand hex codes
        if (hex.length === 4) {
            hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
                  a: 1, // Default alpha for hex colors
              }
            : null;
    }

    // Helper function to extract RGB or RGBA values
    function parseRgbString(rgbString) {
        const match = rgbString.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
        return match
            ? {
                  r: parseInt(match[1], 10),
                  g: parseInt(match[2], 10),
                  b: parseInt(match[3], 10),
                  a: match[4] !== undefined ? parseFloat(match[4]) : 1, // Default alpha is 1
              }
            : null;
    }

    let rgba;
    if (color.startsWith('#')) {
        rgba = hexToRgb(color);
    } else if (color.startsWith('rgb')) {
        rgba = parseRgbString(color);
    } else {
        throw new Error('Unsupported color format. Use hex, RGB, or RGBA.');
    }

    if (!rgba) {
        throw new Error('Invalid color format.');
    }

    // Calculate relative luminance of the color
    const { r, g, b, a } = rgba;
    const luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);

    // Adjust luminance for alpha transparency (if alpha is < 1, blend with white background)
    const adjustedLuminance = a * luminance + (1 - a) * 1; // Blend with white (luminance = 1)

    // Return black for light backgrounds, white for dark backgrounds
    return adjustedLuminance > 0.5 ? 'black' : 'white';
}

const Colors = () => {
    const classes = useClasses(useStyles);
    const theme = useTheme();

    const renderSwatch = useCallback(
        (name, color) => {
            const textClass =
                getContrastColor(color) === 'black'
                    ? classes.swatchTextDark
                    : classes.swatchTextLight;
            return (
                <div
                    key={name}
                    style={{ backgroundColor: color }}
                    className={classNames(classes.swatch, {
                        [classes.swatchWhite]: color === defaultTheme.colors.primary.white,
                    })}
                >
                    <Text type="caption" className={textClass}>
                        {name}
                    </Text>
                    <Text type="badges" className={textClass}>
                        {color}
                    </Text>
                </div>
            );
        },
        [classes.swatch, classes.swatchTextDark, classes.swatchTextLight, classes.swatchWhite],
    );

    const renderSection = useCallback(
        (palette, swatches) => (
            <div key={palette} className={classes.section}>
                <Text type="subtitle" className={classes.sectionTitle}>
                    {palette}
                </Text>
                <div
                    className={classNames(classes.swatches, {
                        [classes.swatchesDark]: ['textDark'].includes(palette),
                    })}
                >
                    {Object.entries(swatches).map(([name, color]) => renderSwatch(name, color))}
                </div>
            </div>
        ),
        [
            classes.section,
            classes.sectionTitle,
            classes.swatches,
            classes.swatchesDark,
            renderSwatch,
        ],
    );

    return (
        <div className={classes.root}>
            {Object.entries(theme.colors).reduce((arr, [palette, swatches]) => {
                if (
                    [
                        'primary',
                        'accessible',
                        'textLight',
                        'textDark',
                        'background',
                        'grey',
                        'actionMajor',
                        'actionMinor',
                        'semantic',
                        'temp',
                    ].includes(palette)
                )
                    arr.push(renderSection(palette, swatches));
                return arr;
            }, [])}
        </div>
    );
};

export default memo(Colors);
