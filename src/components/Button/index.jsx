import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, children }) {
    return <div onClick={onClick}>{children}</div>;
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default React.memo(Button);
