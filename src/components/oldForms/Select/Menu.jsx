import React from 'react';
import { components } from 'react-select';
import Link from '../../typography/Link';

export default (className, actionClassName, actions, onClickAction) => {
    return React.memo(({ children, ...props }) => {
        return (
            components.Menu && (
                <components.Menu {...props} className={className}>
                    {children}
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
                </components.Menu>
            )
        );
    });
};
