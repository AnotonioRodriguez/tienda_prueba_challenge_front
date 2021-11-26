import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    image: {
		maxHeight: '100%',
		maxWidth: '100%',
        display: 'flex',
        justifyItems: 'center',
        alignContent: 'center',
        alignItems: 'center'
	},
	containerImage:{
		width: 100,
		height: 90
	},
	imageRes: {
		maxHeight: '100%',
		maxWidth: '100%',
        display: 'flex',
        justifyItems: 'center',
        alignContent: 'center',
        alignItems: 'center'
	},
	containerImageRes:{
		width: 34,
		height: 30
	},
	containerImageDrawer:{
		width: 100,
		height: 100
	}
});

export default useStyles;