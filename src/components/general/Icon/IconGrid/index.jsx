import React, { memo, useCallback, useMemo, useState } from 'react';
import Text from '../../../typography/Text';
import SearchBar from '../../../general/SearchBar';
import Icon, { ICONS } from '../index';
import { useClasses } from '../../../../utils/overrides';
import { createUseStyles } from '../../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'IconGrid');

const IconGrid = ({ classes: classesProp }) => {
    const [search, setSearch] = useState(undefined);
    const classes = useClasses(useStyles, classesProp);

    const onChange = useCallback((value) => {
        const newSearch = value?.target?.value || value;
        setSearch(newSearch ? newSearch.toLowerCase() : newSearch);
    }, []);

    const icons = useMemo(() => Object.keys(ICONS), []);

    const iconCells = useMemo(() => {
        return icons
            .filter((icon) => (search ? icon.toLowerCase().indexOf(search) !== -1 : true))
            .sort()
            .map((icon) => (
                <div className={classes.cell}>
                    <Icon name={icon} />
                    <Text type="caption">{icon}</Text>
                </div>
            ));
    }, [classes.cell, icons, search]);

    return (
        <>
            <Text type="subtitle1">Looking for a particular icon?</Text>
            <SearchBar
                placeholder={`Search across ${icons.length} icons`}
                useAsSimpleSearch
                onChange={onChange}
                onBlurSearch={onChange}
            />
            <div className={classes.root}>{iconCells}</div>
        </>
    );
};

export default memo(IconGrid);
