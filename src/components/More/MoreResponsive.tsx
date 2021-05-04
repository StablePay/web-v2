import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import GasAnimated from '../../assets/GasStationAnimate.svg';
import FlashAnimated from '../../assets/flasAnimated.svg';
import LockAnimated from '../../assets/secureAnimate.svg';
import SocialAnimated from '../../assets/socialAnimated.svg';
import logo from '../../assets/logoStablePay.svg';

import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            color: '#fff',
            textAlign: 'justify',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },

        button: {
            backgroundColor: '#7C85FF',
        },

        grid: {
            border: '1px solid #7C85FF',
            padding: 15,
            textAlign: 'justify',
        },
    })
);

export default function MoreResponsive() {
    const classes = useStyles();
    const renderLogo = (
        <div style={{ textAlign: 'center' }}>
            {' '}
            <img
                src={logo}
                alt="tnx with low gas costs"
                height="25"
                width="25"
            />{' '}
        </div>
    );
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                        Pay or send money with your preferred crypto tokens.{' '}
                        <br />
                        All at genuine & live conversion rates of market.
                    </Typography>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={2} style={{ textAlign: 'center' }}>
                        <Fab aria-label="add" className={classes.button}>
                            <img
                                src={GasAnimated}
                                alt="tnx with low gas costs"
                                height="35"
                                width="35"
                            />{' '}
                        </Fab>
                    </Grid>
                    <Grid xs={1}>
                        <hr style={{ borderColor: '#7C85FF ' }} />
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.grid}>
                            {renderLogo}

                            <li>
                                {' '}
                                Make microtransactions at low gas costs and
                                ERC20 token transactions without approval.
                            </li>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.grid}>
                            {renderLogo}
                            <li>
                                {' '}
                                StablePay uses layer2 technology to give you the
                                most simple, fastest , trust-based & Seamlessly
                                Swift experience with your transactions.
                            </li>
                        </div>
                    </Grid>
                    <Grid xs={1}>
                        <hr style={{ borderColor: '#7C85FF ' }} />
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center' }}>
                        <Fab aria-label="Faster" className={classes.button}>
                            <img
                                src={FlashAnimated}
                                alt="faster"
                                height="35"
                                width="35"
                            />
                        </Fab>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center' }}>
                        <Fab aria-label="secure" className={classes.button}>
                            <img
                                src={LockAnimated}
                                alt="secure"
                                height="35"
                                width="35"
                            />
                        </Fab>
                    </Grid>

                    <Grid xs={1}>
                        <hr style={{ borderColor: '#7C85FF ' }} />
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.grid}>
                            {renderLogo}
                            <li>
                                Your privacy and data are self-owned, secure as
                                Gold-Vault.
                            </li>{' '}
                            <li>
                                {' '}
                                Now for the first time, you can experience the
                                most simple, secure & socially classic platform
                                with your favorite tokens.
                            </li>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.grid}>
                            {renderLogo}
                            <li>
                                {' '}
                                A platform for social human beings, you can
                                split your bills with your favorite friends
                                quickly and easily.
                            </li>
                        </div>
                    </Grid>
                    <Grid xs={1}>
                        <hr style={{ borderColor: '#7C85FF ' }} />
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center' }}>
                        <Fab aria-label="secure" className={classes.button}>
                            <img
                                src={SocialAnimated}
                                alt="Social"
                                height="35"
                                width="35"
                            />
                        </Fab>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
