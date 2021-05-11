import { makeStyles } from '@material-ui/core/styles';
import myNetsCoins from '../../assets/netCoins.svg';
import maker from '../../assets/maker.svg';
import ethereumFoundation from '../../assets/ethereumFoundation.svg';
import { Grid, Container, Typography, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
    },
    link: {
        color: '#fff',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '24px',

        '&:hover': {
            fontSize: '25px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
        },
    },
}));

export default function Grant() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Container className={classes.paper}>
                        {' '}
                        <Hidden xsDown>
                            {' '}
                            <img
                                src={myNetsCoins}
                                alt="stablepay"
                                height={'350px'}
                            />
                        </Hidden>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.paper}>
                        <Typography
                            variant="h3"
                            component="h2"
                            style={{
                                fontFamily: 'Noto Sans',
                                fontStyle: 'normal',
                                fontWeight: 800,
                                fontSize: '24px',
                                lineHeight: '33px',
                            }}
                        >
                            Supported by
                        </Typography>
                    </div>
                    <br />
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={6}>
                            <div className={classes.paper}>
                                {' '}
                                <img
                                    src={maker}
                                    alt="stablepay"
                                    height={'100px'}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.paper}>
                                <img
                                    src={ethereumFoundation}
                                    alt="stablepay"
                                    height={'100px'}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={6}>
                            <div className={classes.paper}>
                                <a
                                    className={classes.link}
                                    target="blank"
                                    href="https://makerdao.com/en/"
                                >
                                    MAKERDAO
                                </a>{' '}
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.paper}>
                                <div className={classes.paper}>
                                    <a
                                        className={classes.link}
                                        target="blank"
                                        href="https://ethereum.org/en/"
                                    >
                                        ETHEREUM FOUNDATION
                                    </a>{' '}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
