import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import HoiPoiProvider from '../../src/utils/styles/HoiPoiProvider';

// Global addons and decorators
addDecorator(
    withInfo({
        header: false,
        inline: true,
        source: true,
    })
);

addDecorator(
    withOptions({
        name: 'HoiPoi Storybook',
    })
);

addDecorator(withKnobs);

addDecorator((storyFn) => <HoiPoiProvider>{storyFn()}</HoiPoiProvider>);

const req = require.context('../../src/components', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
