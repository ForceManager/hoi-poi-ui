import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';
import HoiPoiProvider from '../../src/utils/styles/HoiPoiProvider';

// Global addons and decorators
setAddon(JSXAddon);
addDecorator(
    withInfo({
        header: false,
    })
);

addDecorator(
    withOptions({
        name: 'HoiPoi Storybook',
    })
);

addDecorator((storyFn) => <HoiPoiProvider>{storyFn()}</HoiPoiProvider>);

const req = require.context('../../src/components', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
