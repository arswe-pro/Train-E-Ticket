import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

    },

    container: {
        margin: '0 auto'
    },

    NoMatch: {
        textAlign: 'center',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#1976d2'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: '#fff',
    },
    

}));

export default useStyles;