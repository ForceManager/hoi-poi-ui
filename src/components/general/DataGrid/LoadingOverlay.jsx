import React from 'react';
import withStyles from 'react-jss';
import { Loader } from 'hoi-poi-ui';

import styles from './styles/loadingOverlay.styles';

function LoadingOverlay({ classes }) {
    return (
        <div className={classes.root}>
            <Loader size="massive" />
        </div>
    );
}

export default React.memo(
    withStyles(styles, {
        name: 'LoadingOverlay',
    })(LoadingOverlay),
);
