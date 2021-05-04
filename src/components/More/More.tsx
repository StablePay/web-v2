import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import GasStation from '../../assets/gasStation.svg';
import GasAnimated from '../../assets/GasStationAnimate.svg';
import FlashAnimated from '../../assets/flasAnimated.svg';
import LockAnimated from '../../assets/secureAnimate.svg';
import SocialAnimated from '../../assets/socialAnimated.svg';
import Flash from '../../assets/flash.svg';
import Lock from '../../assets/lock.svg';
import Social from '../../assets/social.svg';
import Frame1 from '../../assets/Frame.svg';
import Frame from './Frame';
import Frame2 from './Frame2';
import Frame3 from './Frame3';
import Frame4 from './Frame4';
import MuiButton from '../common/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            color: '#fff',
            textAlign: 'center',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },

        button: {
            // margin: theme.spacing(1),
            borderRadius: 40,
            borderColor: '#7C85FF',
            '&:hover': {
                backgroundColor: '#7C85FF',
            },
            color: '#fff',
            padding: '15px 15px 15px 100px',
            display: 'flex',
            justifyContent: 'flex-start',
        },
    })
);

export default function More() {
    const classes = useStyles();
    const [selectedFrame, setFrame] = useState(1);

    const onClickFrame = (number: number) => {
        setFrame(number);
    };

    const renderFrame = () => {
        if (selectedFrame === 1) {
            return <Frame />;
        } else if (selectedFrame === 2) {
            return <Frame2 />;
        } else if (selectedFrame === 3) {
            return <Frame3 />;
        } else if (selectedFrame === 4) {
            return <Frame4 />;
        }
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                        Pay or send money with your preferred crypto tokens. All
                        at genuine & live conversion rates of market.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <MuiButton
                        label="tnx with low gas costs"
                        image={selectedFrame === 1 ? GasAnimated : GasStation}
                        onClickFrame={() => onClickFrame(1)}
                        selected={selectedFrame === 1 ? true : false}
                    />
                    <br />
                    <MuiButton
                        label=" Faster"
                        image={selectedFrame === 2 ? FlashAnimated : Flash}
                        onClickFrame={() => onClickFrame(2)}
                        selected={selectedFrame === 2 ? true : false}
                    />
                    <br />
                    <MuiButton
                        label="secure"
                        image={selectedFrame === 3 ? LockAnimated : Lock}
                        onClickFrame={() => onClickFrame(3)}
                        selected={selectedFrame === 3 ? true : false}
                    />
                    <br />
                    <MuiButton
                        label="social-friendly"
                        image={selectedFrame === 4 ? SocialAnimated : Social}
                        onClickFrame={() => onClickFrame(4)}
                        selected={selectedFrame === 4 ? true : false}
                    />
                    <br />
                </Grid>
                <Grid item xs={8}>
                    {renderFrame()}
                </Grid>
            </Grid>
        </div>
    );
}
