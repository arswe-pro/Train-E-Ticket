import { makeStyles } from '@material-ui/core/styles';
import road from '../../images/road.jpg';
import trains from '../../images/trains.jpg';
import bg from '../../images/1.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    homeBg: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
    },
    NoMatch: {
        textAlign: 'center',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },

    btn: {
        margin: '1rem 0',
    },
    media: {
        height: 140,
    },
    searchResultBg: {
        backgroundImage: `url(${road})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
    },

    searchLocationBg: {
        backgroundImage: `url(${trains})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    },

    mt: {
        marginTop: '2rem',
    },
    textAlign: {
        textAlign: 'center',
    }
}));

export default useStyles;