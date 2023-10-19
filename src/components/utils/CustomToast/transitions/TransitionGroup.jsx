import React, { memo } from 'react';
import { TransitionGroup } from 'react-transition-group';

const Fade = ({ children }) => {
    return (
        <TransitionGroup component={null} appear={true}>
            {children}
        </TransitionGroup>
    );
};

export default memo(Fade);
