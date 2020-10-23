import React from 'react';
// import { components } from 'react-select';
import Loader from '../../../general/Loader';
import defaultTheme from '../../../../utils/styles/defaultTheme';
import styles from './../styles.jsx';

const newStyles = styles(defaultTheme);

export default (props) => {
    let className = `${props.className} hoi-poi-select__loading-indicator`;
    return (
        <div className={className} style={newStyles.loadingIndicator}>
            <Loader size="tiny" />
        </div>
    );
};
