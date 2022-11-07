import reactCropStyles from './reactCrop.styles';

export default (theme) => ({
    cropModal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cropModalContent: {
        position: 'relative',
        borderRadius: 4,
        padding: 22,
        border: `1px dashed ${theme.colors.neutral400}`,
        backgroundColor: theme.colors.neutral300,
    },
    cropCanvas: {
        position: 'relative',
        overflow: 'hidden',
        ...reactCropStyles(theme),
        '&:focus': {
            outline: 'none',
        },
    },
});
