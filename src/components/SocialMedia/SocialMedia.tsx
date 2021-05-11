import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';
import GithubAvatar from '../../assets/github.svg';
import MediaAvatar from '../../assets/media.svg';

import DiscordAvatar from '../../assets/discord.svg';

import TwitterAvatar from '../../assets/twitter.svg';

import TelegramAvatar from '../../assets/telegram.svg';
import styled from 'styled-components';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '28px',
        lineHeight: '38px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
        '&:hover': {
            fontSize: '29px',
        },
    },
}));

const StyledImg = styled.img`
    height: 100px;
    @media screen and (max-width: 400px) {
        height: 60px;
    }
`;

export default function SocialMedia() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={2}>
                    <div className={classes.paper}>
                        <Tooltip title="Github">
                            <IconButton
                                aria-label="Github"
                                href="https://github.com/StablePay"
                                target="blank"
                            >
                                <StyledImg
                                    src={GithubAvatar}
                                    alt="StablePay-github"
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className={classes.paper}>
                        <Tooltip title="Media">
                            <IconButton
                                aria-label="Media"
                                href="https://stablepayio.medium.com/"
                                target="blank"
                            >
                                <StyledImg
                                    src={MediaAvatar}
                                    alt="StablePay-Media"
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className={classes.paper}>
                        <Tooltip title="Telegram">
                            <IconButton
                                aria-label="Telegram"
                                href="https://t.me/joinchat/BgU0cRRKyJW6Tn3zchSUvQ"
                                target="blank"
                            >
                                <StyledImg
                                    src={TelegramAvatar}
                                    alt="StablePay-telegram"
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className={classes.paper}>
                        <Tooltip title="Discord">
                            <IconButton
                                aria-label="Discord"
                                href="https://github.com/StablePay"
                                target="blank"
                            >
                                <StyledImg
                                    src={DiscordAvatar}
                                    alt="StablePay-discord"
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className={classes.paper}>
                        <Tooltip title="Twitter">
                            <IconButton
                                aria-label="Twitter"
                                href="https://twitter.com/StablePay"
                                target="blank"
                            >
                                <StyledImg
                                    src={TwitterAvatar}
                                    alt="StablePay-twitter"
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <div className={classes.paper}>
                        {' '}
                        <a
                            href="https://certificate.quantstamp.com/full/stable-pay"
                            className={classes.paper}
                        >
                            Terms of Service
                        </a>{' '}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.paper}>
                        Built on Ethereum <br />
                        <a
                            href="https://certificate.quantstamp.com/full/stable-pay"
                            className={classes.paper}
                        >
                            Secured by Quantstamp
                        </a>{' '}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
