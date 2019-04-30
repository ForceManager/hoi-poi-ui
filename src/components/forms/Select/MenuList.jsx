import React from 'react';
import { components } from 'react-select';
import ScrollBar from '../../utils/ScrollBar';
import Link from '../../general/Link';

export default (className, actionClassName, actions, onClickAction) => {
    return React.memo(({ children, ...props }) => {
        return (
            components.MenuList && (
                <components.MenuList {...props} className={className}>
                    <ScrollBar autoHeight>{children}</ScrollBar>
                    {actions && (
                        <div className={actionClassName}>
                            {actions.map((action, idx) => (
                                <Link
                                    key={idx}
                                    className="hoi-poi-select__action"
                                    onClick={() => {
                                        onClickAction && onClickAction(action);
                                        action.onClick && action.onClick();
                                    }}
                                >
                                    {action.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </components.MenuList>
            )
        );
    });
};
