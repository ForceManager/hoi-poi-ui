import React from 'react';
import Loader from '../Loader';

import { useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles/loadingOverlay.styles';
const useStyles = createUseStyles(styles, 'LoadingOverlay');

function LoadingOverlay({ classes: classesProp }) {
    const classes = useClasses(useStyles, classesProp);
    return (
        <div className={classes.root}>
            <Loader size="massive" />
        </div>
    );
}

export default React.memo(LoadingOverlay);
