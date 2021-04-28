import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            [theme.breakpoints.only('lg')]: {
                margin: '50px',
            },
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },

        text: {
            color: 'white',
        },
        button: {
            borderRadius: 40,
            backgroundColor: '#FF6C6C',
            color: '#fff',
            padding: 15,
            '&:hover': {
                backgroundColor: '#f95151',
            },

            [theme.breakpoints.only('lg')]: {
                marginLeft: 50,
            },
        },
        button2: {
            borderRadius: 40,
            backgroundColor: '#7C85FF',
            '&:hover': {
                backgroundColor: '#5e68f0',
            },
            color: '#fff',
            padding: 15,

            [theme.breakpoints.only('lg')]: {
                marginLeft: 50,
            },
        },
    })
);

export default function Title() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className={classes.title}>
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    className={classes.text}
                                >
                                    A SOCIAL CRYPTO PAYMENT PROTOCOL
                                </Typography>
                                <br />
                                <Typography
                                    variant="h6"
                                    component="h6"
                                    className={classes.text}
                                >
                                    An open-source and non-custodial layer 1 and
                                    layer2 protocol enabling split bill, makes
                                    instant payments, earn rewards and yields,
                                    send ,deposit and withdraw in your desired
                                    crypto token in Genuine conversion rate.
                                    <br />
                                    <br />
                                    <i>Everything in one platform.</i>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                href="https://stablepay.vercel.app/"
                                target="blank"
                                fullWidth
                                className={classes.button}
                            >
                                Go to app
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth className={classes.button2}>
                                learn more
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
