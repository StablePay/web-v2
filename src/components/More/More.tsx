import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import GasStation from '../../assets/gasStation.svg';
import Flash from '../../assets/flash.svg';
import Lock from '../../assets/lock.svg';
import Social from '../../assets/social.svg';
import Frame1 from '../../assets/frame1.svg';
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
        div: {
            backgroundImage: `url(${Frame1})`,
            backgroundRepeat: 'no-repeat',
            height: 500,
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
                        image={GasStation}
                        onClickFrame={() => onClickFrame(1)}
                    />
                    <br />
                    <MuiButton
                        label=" Faster"
                        image={Flash}
                        onClickFrame={() => onClickFrame(2)}
                    />
                    <br />
                    <MuiButton
                        label="secure"
                        image={Lock}
                        onClickFrame={() => onClickFrame(3)}
                    />
                    <br />
                    <MuiButton
                        label="social-friendly"
                        image={Social}
                        onClickFrame={() => onClickFrame(4)}
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
