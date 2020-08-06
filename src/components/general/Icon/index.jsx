import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getOverrides, useClasses } from '../../../utils/overrides';

import Chevron from './icons/Chevron';
import Info from './icons/Info';
import Close from './icons/Close';
import Lock from './icons/Lock';
import ThickEnabled from './icons/ThickEnabled';
import Warning from './icons/Warning';
import WarningRounded from './icons/WarningRounded';
import Drag from './icons/Drag';
import Edit from './icons/Edit';
import Trash from './icons/Trash';
import Magnifier from './icons/Magnifier';
import Tick from './icons/Tick';
import VisibilityOff from './icons/VisibilityOff';
import VisibilityOn from './icons/VisibilityOn';
import ThreeDots from './icons/ThreeDots';
import Download from './icons/Download';
import Duplicate from './icons/Duplicate';
import ArrowRight from './icons/ArrowRight';
import ArrowLeft from './icons/ArrowLeft';
import ArrowTop from './icons/ArrowTop';
import ArrowBottom from './icons/ArrowBottom';
import ThickDisabled from './icons/ThickDisabled';
import Funnel from './icons/Funnel';
import ThickEnabledFilled from './icons/ThickEnabledFilled';
import Folder from './icons/Folder';
import Calendar from './icons/Calendar';
import VerticalDivider from './icons/VerticalDivider';
import CloudUpload from './icons/CloudUpload';
import Sync from './icons/Sync';
import Asterisk from './icons/Asterisk';
import AddButton from './icons/AddButton';
import LessButton from './icons/LessButton';
import Dash from './icons/Dash';
import AddUser from './icons/AddUser';
import SingleUser from './icons/SingleUser';
import MultipleUsers from './icons/MultipleUsers';
import AddMultipleUsers from './icons/AddMultipleUsers';
import SmartPhone from './icons/SmartPhone';
import ExecuteIcon from './icons/ExecuteIcon';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Icon');

const ICONS = {
    chevron: Chevron,
    info: Info,
    close: Close,
    lock: Lock,
    thickEnabledFilled: ThickEnabledFilled,
    thickEnabled: ThickEnabled,
    thickDisabled: ThickDisabled,
    warning: Warning,
    warningRounded: WarningRounded,
    drag: Drag,
    edit: Edit,
    trash: Trash,
    magnifier: Magnifier,
    tick: Tick,
    visibilityOn: VisibilityOn,
    visibilityOff: VisibilityOff,
    duplicate: Duplicate,
    threeDots: ThreeDots,
    download: Download,
    arrowRight: ArrowRight,
    arrowLeft: ArrowLeft,
    arrowTop: ArrowTop,
    arrowBottom: ArrowBottom,
    funnel: Funnel,
    folder: Folder,
    calendar: Calendar,
    verticalDivider: VerticalDivider,
    cloudUpload: CloudUpload,
    sync: Sync,
    asterisk: Asterisk,
    add: AddButton,
    less: LessButton,
    dash: Dash,
    addUser: AddUser,
    singleUser: SingleUser,
    addMultipleUsers: AddMultipleUsers,
    multipleUsers: MultipleUsers,
    smartPhone: SmartPhone,
    execute: ExecuteIcon,
};

function Icon({
    name,
    color,
    size,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onClick,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const theme = useTheme();
    let SelectedIcon = ICONS[name];
    if (!SelectedIcon) return null;

    // Overrides
    const override = getOverrides(overridesProp, Icon.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        classes[size],
        {
            [classes.clickable]: !!onClick,
        },
        classNameProp,
    );

    return (
        <span onClick={onClick} className={rootClassName} {...override.root}>
            <SelectedIcon color={color || theme.colors.greySoft} {...override.icon} />
        </span>
    );
}

Icon.overrides = ['root', 'icon'];

Icon.defaultProps = {
    size: 'medium',
    overrides: {},
};

Icon.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'huge']),
    name: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default React.memo(Icon);
