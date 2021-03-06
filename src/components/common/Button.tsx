import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface ButtonProps {
    label?: string;
    image?: string;
    onClickFrame?: () => void;
    selected?: boolean;
}
const MuiButton = ({ label, image, onClickFrame, selected }: ButtonProps) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            button: {
                borderRadius: 40,
                borderColor: '#7C85FF',
                backgroundColor: selected ? '#7C85FF' : '',
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
    const classes = useStyles(selected);

    return (
        <Button
            onMouseEnter={onClickFrame}
            onMouseLeave={onClickFrame}
            onClick={onClickFrame}
            fullWidth
            variant="outlined"
            size="large"
            className={classes.button}
            startIcon={<img src={image} alt="Low Gas" width="45" height="45" />}
        >
            {label}
        </Button>
    );
};

export default MuiButton;
