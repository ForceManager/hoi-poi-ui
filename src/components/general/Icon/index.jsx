import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getOverrides, useClasses } from '../../../utils/overrides';

import Chevron from './icons/Chevron';
import Info from './icons/Info';
import InfoOutlined from './icons/InfoOutlined';
import Lock from './icons/Lock';
import ThickEnabled from './icons/ThickEnabled';
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
import DownloadAlt from './icons/DownloadAlt';
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
import AddButton from './icons/AddButton';
import LessButton from './icons/LessButton';
import Dash from './icons/Dash';
import AddUser from './icons/AddUser';
import SingleUser from './icons/SingleUser';
import MultipleUsers from './icons/MultipleUsers';
import AddMultipleUsers from './icons/AddMultipleUsers';
import SmartPhone from './icons/SmartPhone';
import ExecuteIcon from './icons/ExecuteIcon';
import Clock from './icons/Clock';
import VideoCamera from './icons/VideoCamera';
import Chat from './icons/Chat';
import ChatFilled from './icons/ChatFilled';
import Send from './icons/Send';
import EmptyAvatar from './icons/EmptyAvatar';
import DraggableSort from './icons/DraggableSort';
import FileDownload from './icons/FileDownload';
import Columns from './icons/Columns';
import Crop from './icons/Crop';

//Actions
import AccountCheckin from './icons/actions/AccountCheckin';
import AccountDetails from './icons/actions/AccountDetails';
import AccountsAdd from './icons/actions/AccountsAdd';
import AccountsEdit from './icons/actions/AccountsEdit';
import ContactAdd from './icons/actions/ContactAdd';
import ContactEdit from './icons/actions/ContactEdit';
import OpportunityAdd from './icons/actions/OpportunityAdd';
import OpportunityEdit from './icons/actions/OpportunityEdit';
import ValueListAdd from './icons/actions/ValueListAdd';
import ValueListEdit from './icons/actions/ValueListEdit';
import AddActivity from './icons/actions/AddActivity';
import AddEvent from './icons/actions/AddEvent';
import Autorenew from './icons/actions/Autorenew';
import Cached from './icons/actions/Cached';
import Cognitive from './icons/actions/Cognitive';
import CognitiveTwoToned from './icons/actions/CognitiveTwoToned';
import CreditCard from './icons/actions/CreditCard';
import Dashboard from './icons/actions/Dashboard';
import DateRange from './icons/actions/DateRange';
import Delete from './icons/actions/Delete';
import Documents from './icons/actions/Documents';
import Done from './icons/actions/Done';
import DoneAll from './icons/actions/DoneAll';
import EditArea from './icons/actions/EditArea';
import Email from './icons/actions/Email';
import EmailLate from './icons/actions/EmailLate';
import EmailReceive from './icons/actions/EmailReceive';
import Event from './icons/actions/Event';
import EventDetail from './icons/actions/EventDetail';
import ExitToApp from './icons/actions/ExitToApp';
import Expand from './icons/actions/Expand';
import FastCheckin from './icons/actions/FastCheckin';
import Favorite from './icons/actions/Favorite';
import FavoriteBorder from './icons/actions/FavoriteBorder';
import FilterList from './icons/actions/FilterList';
import FilterListActive from './icons/actions/FilterListActive';
import Forms from './icons/actions/Forms';
import Help from './icons/actions/Help';
import HighlightOff from './icons/actions/HighlightOff';
import HourglassEmpty from './icons/actions/HourglassEmpty';
import HourglassFull from './icons/actions/HourglassFull';
import Input from './icons/actions/Input';
import Launch from './icons/actions/Launch';
import LocationSearching from './icons/actions/LocationSearching';
import LockOpen from './icons/actions/LockOpen';
import LockOutline from './icons/actions/LockOutline';
import OpportunityCheckin from './icons/actions/OpportunityCheckin';
import OpportunityThumbsDown from './icons/actions/OpportunityThumbsDown';
import OpportunityThumbsUp from './icons/actions/OpportunityThumbsUp';
import RelatedContact from './icons/actions/RelatedContact';
import Route from './icons/actions/Route';
import Search from './icons/actions/Search';
import ShoppingBasketThumbsDown from './icons/actions/ShoppingBasketThumbsDown';
import ShoppingBasketThumbsUp from './icons/actions/ShoppingBasketThumbsUp';
import ShoppingThumbsDown from './icons/actions/ShoppingThumbsDown';
import ShoppingThumbsUp from './icons/actions/ShoppingThumbsUp';
import Signature from './icons/actions/Signature';
import SwitchOff from './icons/actions/SwitchOff';
import ThumbDown from './icons/actions/ThumbDown';
import ThumbUp from './icons/actions/ThumbUp';
import Visibility from './icons/actions/Visibility';
import Workflow from './icons/actions/Workflow';

//Alert
import AddAlert from './icons/alert/AddAlert';
import Asterisk from './icons/alert/Asterisk';
import Error from './icons/alert/Error';
import ErrorOutline from './icons/alert/ErrorOutline';
import ErrorOutlineTwoToned from './icons/alert/ErrorOutlineTwoToned';
import Warning from './icons/alert/Warning';
import WarningOutline from './icons/alert/WarningOutline';
import WarningOutlineTwoToned from './icons/alert/WarningOutlineTwoToned';

//Logos
import Mailchimp from './icons/logos/Mailchimp';
import MicrosoftTeams from './icons/logos/MicrosofTeams';
import ZoomCam from './icons/logos/ZoomCam';
import ZoomList from './icons/logos/ZoomList';

//Navigation
import Apps from './icons/navigation/Apps';
import ArrowBack from './icons/navigation/ArrowBack';
import ArrowDownward from './icons/navigation/ArrowDownward';
import ArrowDropDownCircle from './icons/navigation/ArrowDropDownCircle';
import ArrowDropDown from './icons/navigation/ArrowDropDown';
import ArrowDropUp from './icons/navigation/ArrowDropUp';
import ArrowForward from './icons/navigation/ArrowForward';
import ArrowUpward from './icons/navigation/ArrowUpward';
import Check from './icons/navigation/Check';
import ChevronLeft from './icons/navigation/ChevronLeft';
import ChevronRight from './icons/navigation/ChevronRight';
import Close from './icons/navigation/Close';
import CloseSmall from './icons/navigation/CloseSmall';
import DragAndDrop from './icons/navigation/DragAndDrop';
import Plus from './icons/navigation/Plus';
import ExpandLess from './icons/navigation/ExpandLess';
import ExpandMore from './icons/navigation/ExpandMore';
import Fullscreen from './icons/navigation/Fullscreen';
import FullscreenExit from './icons/navigation/FullscreenExit';
import FullscreenArrows from './icons/navigation/FullscreenArrows';
import FullscreenArrowsExit from './icons/navigation/FullscreenArrowsExit';
import Menu from './icons/navigation/Menu';
import MoreHoriz from './icons/navigation/MoreHoriz';
import MoreVert from './icons/navigation/MoreVert';
import Refresh from './icons/navigation/Refresh';
import SortArrowDownward from './icons/navigation/SortArrowDownward';
import SortArrowUpward from './icons/navigation/SortArrowUpward';
import SubdirectoryArrowLeft from './icons/navigation/SubdirectoryArrowLeft';
import SubdirectoryArrowRight from './icons/navigation/SubdirectoryArrowRight';
import UnfoldLess from './icons/navigation/UnfoldLess';

//Content
import ContentCopy from './icons/content/ContentCopy';
import ContentCut from './icons/content/ContentCut';
import ContentPaste from './icons/content/ContentPaste';

//Toggle
import CheckBox from './icons/toggle/CheckBox';
import CheckBoxOutlineBlank from './icons/toggle/CheckBoxOutlineBlank';
import IndeterminateCheckBox from './icons/toggle/IndeterminateCheckBox';
import RadioButtonChecked from './icons/toggle/RadioButtonChecked';
import RadioButtonUnchecked from './icons/toggle/RadioButtonUnchecked';
import Star from './icons/toggle/Star';
import StarBorder from './icons/toggle/StarBorder';
import StarHalf from './icons/toggle/StarHalf';
import StarsCircle from './icons/toggle/StarsCircle';

//File Icons
import File from './fileIcons/File';
import Img from './fileIcons/Img';
import Mov from './fileIcons/Mov';
import Doc from './fileIcons/Doc';
import Ppt from './fileIcons/Ppt';
import Xls from './fileIcons/Xls';
import Pdf from './fileIcons/Pdf';
import Mdb from './fileIcons/Mdb';
import Txt from './fileIcons/Txt';
import Mp3 from './fileIcons/Mp3';
import App from './fileIcons/App';
import Mpp from './fileIcons/Mpp';
import One from './fileIcons/One';
import Pub from './fileIcons/Pub';
import Vsd from './fileIcons/Vsd';
import Xsn from './fileIcons/Xsn';
import Bdd from './fileIcons/Bdd';
import Html from './fileIcons/Html';
import Zip from './fileIcons/Zip';
import Link from './fileIcons/Link';

// Raw icons
import LockRaw from './rawIcons/Lock';
import CloseRaw from './rawIcons/Close';
import ArrowDropUpRaw from './rawIcons/ArrowDropUp';
import ArrowDropDownRaw from './rawIcons/ArrowDropDown';
import ArrowDropLeftRaw from './rawIcons/ArrowDropLeft';
import ArrowDropRightRaw from './rawIcons/ArrowDropRight';
import ArrowUpRaw from './rawIcons/ArrowUp';
import ArrowDownRaw from './rawIcons/ArrowDown';
import ArrowLeftRaw from './rawIcons/ArrowLeft';
import ArrowRightRaw from './rawIcons/ArrowRight';
import SearchRaw from './rawIcons/Search';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Icon');

const ICONS = {
    chevron: Chevron,
    info: Info,
    infoOutlined: InfoOutlined,
    lock: Lock,
    thickEnabledFilled: ThickEnabledFilled,
    thickEnabled: ThickEnabled,
    thickDisabled: ThickDisabled,
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
    downloadAlt: DownloadAlt,
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
    add: AddButton,
    less: LessButton,
    dash: Dash,
    addUser: AddUser,
    singleUser: SingleUser,
    addMultipleUsers: AddMultipleUsers,
    multipleUsers: MultipleUsers,
    smartPhone: SmartPhone,
    execute: ExecuteIcon,
    clock: Clock,
    videoCamera: VideoCamera,
    chat: Chat,
    chatFilled: ChatFilled,
    emptyAvatar: EmptyAvatar,
    draggableSort: DraggableSort,
    fileDownload: FileDownload,
    columns: Columns,
    crop: Crop,
    //Actions
    accountCheckin: AccountCheckin,
    accountDetails: AccountDetails,
    accountsAdd: AccountsAdd,
    accountsEdit: AccountsEdit,
    contactAdd: ContactAdd,
    contactEdit: ContactEdit,
    opportunityAdd: OpportunityAdd,
    opportunityEdit: OpportunityEdit,
    valueListAdd: ValueListAdd,
    valueListEdit: ValueListEdit,
    addActivity: AddActivity,
    addEvent: AddEvent,
    autorenew: Autorenew,
    cached: Cached,
    cognitive: Cognitive,
    cognitiveTwoToned: CognitiveTwoToned,
    creditCard: CreditCard,
    dashboard: Dashboard,
    dateRange: DateRange,
    delete: Delete,
    documents: Documents,
    done: Done,
    doneAll: DoneAll,
    editArea: EditArea,
    email: Email,
    emailLate: EmailLate,
    emailReceive: EmailReceive,
    event: Event,
    eventDetail: EventDetail,
    exitToApp: ExitToApp,
    expand: Expand,
    fastCheckin: FastCheckin,
    favorite: Favorite,
    favoriteBorder: FavoriteBorder,
    filterList: FilterList,
    filterListActive: FilterListActive,
    forms: Forms,
    help: Help,
    highlightOff: HighlightOff,
    hourglassEmpty: HourglassEmpty,
    hourglassFull: HourglassFull,
    input: Input,
    launch: Launch,
    locationSearching: LocationSearching,
    lockOpen: LockOpen,
    lockOutline: LockOutline,
    opportunityCheckin: OpportunityCheckin,
    opportunityThumbsDown: OpportunityThumbsDown,
    opportunityThumbsUp: OpportunityThumbsUp,
    relatedContact: RelatedContact,
    route: Route,
    search: Search,
    shoppingBasketThumbsDown: ShoppingBasketThumbsDown,
    shoppingBasketThumbsUp: ShoppingBasketThumbsUp,
    shoppingThumbsDown: ShoppingThumbsDown,
    shoppingThumbsUp: ShoppingThumbsUp,
    signature: Signature,
    switchOff: SwitchOff,
    thumbDown: ThumbDown,
    thumbUp: ThumbUp,
    visibility: Visibility,
    workflow: Workflow,
    //Alert
    addAlert: AddAlert,
    asterisk: Asterisk,
    error: Error,
    errorOutline: ErrorOutline,
    errorOutlineTwoToned: ErrorOutlineTwoToned,
    warning: Warning,
    warningOutline: WarningOutline,
    warningOutlineTwoToned: WarningOutlineTwoToned,
    //Logos
    mailchimp: Mailchimp,
    microsofTeams: MicrosoftTeams,
    zoomCam: ZoomCam,
    zoomList: ZoomList,
    //Navigation
    apps: Apps,
    arrowBack: ArrowBack,
    arrowDownward: ArrowDownward,
    arrowDropDownCircle: ArrowDropDownCircle,
    arrowDropDown: ArrowDropDown,
    arrowDropUp: ArrowDropUp,
    arrowForward: ArrowForward,
    arrowUpward: ArrowUpward,
    check: Check,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    close: Close,
    closeSmall: CloseSmall,
    dragAndDrop: DragAndDrop,
    plus: Plus,
    expandLess: ExpandLess,
    expandMore: ExpandMore,
    fullscreen: Fullscreen,
    fullscreenExit: FullscreenExit,
    fullscreenArrows: FullscreenArrows,
    fullscreenArrowsExit: FullscreenArrowsExit,
    menu: Menu,
    moreHoriz: MoreHoriz,
    moreVert: MoreVert,
    refresh: Refresh,
    sortArrowDownward: SortArrowDownward,
    sortArrowUpward: SortArrowUpward,
    subdirectoryArrowLeft: SubdirectoryArrowLeft,
    subdirectoryArrowRight: SubdirectoryArrowRight,
    unfoldLess: UnfoldLess,
    //Content
    contentCopy: ContentCopy,
    contentCut: ContentCut,
    contentPaste: ContentPaste,
    //File Icons
    file: File,
    img: Img,
    mov: Mov,
    doc: Doc,
    ppt: Ppt,
    xls: Xls,
    pdf: Pdf,
    mdb: Mdb,
    txt: Txt,
    mp3: Mp3,
    app: App,
    mpp: Mpp,
    one: One,
    pub: Pub,
    vsd: Vsd,
    xsn: Xsn,
    bdd: Bdd,
    html: Html,
    zip: Zip,
    link: Link,
    //Toggle
    checkBox: CheckBox,
    checkBoxOutlineBlank: CheckBoxOutlineBlank,
    indeterminateCheckBox: IndeterminateCheckBox,
    radioButtonChecked: RadioButtonChecked,
    radioButtonUnchecked: RadioButtonUnchecked,
    star: Star,
    starBorder: StarBorder,
    starHalf: StarHalf,
    starsCircle: StarsCircle,
    send: Send,
    //Raw
    lockRaw: LockRaw,
    closeRaw: CloseRaw,
    arrowDropUpRaw: ArrowDropUpRaw,
    arrowDropDownRaw: ArrowDropDownRaw,
    arrowDropLeftRaw: ArrowDropLeftRaw,
    arrowDropRightRaw: ArrowDropRightRaw,
    arrowUpRaw: ArrowUpRaw,
    arrowDownRaw: ArrowDownRaw,
    arrowLeftRaw: ArrowLeftRaw,
    arrowRightRaw: ArrowRightRaw,
    searchRaw: SearchRaw,
};

function Icon({
    name,
    color,
    size,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onClick,
    onMouseOver,
    onMouseOut,
    onMouseDown,
    onMouseUp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const theme = useTheme();

    const [newColor, setNewColor] = useState(color || theme.colors.neutral700);

    useEffect(() => {
        if (color && color !== newColor) {
            setNewColor(color);
        }
    }, [color, newColor]);

    const handleOnMouseOver = useCallback(() => {
        onClick && setNewColor(theme.colors.neutral800);
        onMouseOver && onMouseOver();
    }, [onClick, theme, onMouseOver]);

    const handleOnMouseOut = useCallback(() => {
        onClick && setNewColor(theme.colors.neutral700);
        onMouseOut && onMouseOut();
    }, [onClick, theme, onMouseOut]);

    const handleOnMouseDown = useCallback(() => {
        onClick && setNewColor(theme.colors.neutral600);
        onMouseDown && onMouseDown();
    }, [onClick, theme, onMouseDown]);

    const handleOnMouseUp = useCallback(() => {
        onClick && setNewColor(theme.colors.neutral700);
        onMouseUp && onMouseUp();
    }, [onClick, theme, onMouseUp]);

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
        <span
            onClick={onClick}
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            className={rootClassName}
            {...override.root}
        >
            <SelectedIcon color={newColor} {...override.icon} />
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
    size: PropTypes.oneOf(['raw', 'small', 'medium', 'large', 'big', 'huge']),
    name: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default React.memo(Icon);
