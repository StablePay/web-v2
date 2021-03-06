import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logoWhite.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            color: '#ffff',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        title: {
            flexGrow: 1,
        },
    })
);

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <a className={classes.title} href="/">
                        <img
                            src={logo}
                            className="StablePay-logo"
                            alt="logo"
                            width="150"
                            height="100"
                        />
                    </a>
                    <Button
                        className={classes.menuButton}
                        href="https://stablepay.vercel.app/"
                        target="blank"
                        color="inherit"
                    >
                        Dashboard
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
