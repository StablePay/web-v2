import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import myBooks from '../../assets/books2.svg';
import myBooksResponsive from '../../assets/booksResponsive.svg';
import { Container, Typography, Button, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    container1: {
        background: 'transparent',

        padding: theme.spacing(2),
        textAlign: 'center',
    },
    img: {
        [theme.breakpoints.down('sm')]: {
            height: '470px',
        },
    },
    container2: {
        padding: theme.spacing(2),

        color: 'white',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            responsiveDirection: {
                flexDirection: 'column-reverse',
            },
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'right',
        },
        [theme.breakpoints.only('lg')]: {
            textAlign: 'right',
        },
    },
    button: {
        borderRadius: 40,
        backgroundColor: '#FF6C6C',
        color: '#fff',
        padding: 15,
        '&:hover': {
            backgroundColor: '#f95151',
        },
        boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.25)',
    },
    button2: {
        borderRadius: 100,
        backgroundColor: '#7C85FF',
        '&:hover': {
            backgroundColor: '#5e68f0',
        },
        boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.25)',

        color: '#fff',
        padding: 15,
    },
}));

export default function LayerSDK() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                alignItems="center"
                className={classes.grid}
            >
                <Grid item xs={12} sm={6}>
                    <Container className={classes.container1}>
                        <Hidden xsDown>
                            {' '}
                            <img src={myBooks} alt="stablepay" />
                        </Hidden>
                        <Hidden smUp>
                            {' '}
                            <img
                                src={myBooksResponsive}
                                alt="stablepay"
                                height={'470px'}
                            />
                        </Hidden>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Container className={classes.container2}>
                        <Typography
                            variant="h3"
                            component="h2"
                            style={{
                                fontFamily: 'Noto Sans',
                                fontStyle: 'normal',
                                fontWeight: 800,
                                fontSize: '64px',
                                lineHeight: '87px',
                            }}
                        >
                            Layer2 SDK
                        </Typography>
                        <Typography
                            variant="body1"
                            component="h2"
                            style={{
                                fontFamily: 'Noto Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '24px',
                                lineHeight: '33px',
                            }}
                        >
                            L2 SDK Alpha
                        </Typography>
                        <br />
                        <Typography
                            variant="h5"
                            component="h2"
                            style={{
                                fontFamily: 'Noto Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '32px',
                                lineHeight: '44px',
                            }}
                        >
                            Layer2 SDK is a library that enables your dapp to
                            connect to several Layer 2 solutions with a single
                            interface.
                        </Typography>
                        <br />
                        <Grid item container spacing={3} alignItems="center">
                            <Grid item xs={6}>
                                <Button
                                    href="https://github.com/StablePay/sdk_l2"
                                    target="blank"
                                    fullWidth
                                    className={classes.button}
                                >
                                    l2-sdk
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    className={classes.button2}
                                    href="https://github.com/StablePay/sdk_l2"
                                    target="blank"
                                >
                                    github
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
}
