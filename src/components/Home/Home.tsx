import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import BackgroundTitle from '../../assets/backgroundTitle.svg';
import books from '../../assets/books.svg';
import backgroundBooks from '../../assets/backgroundBooks.svg';
import BackgroundTitleResponsive from '../../assets/backgroundTitleResponsive.svg';
import Container from '@material-ui/core/Container';
import More from '../More/More';
import MoreResponsive from '../More/MoreResponsive';
import Hidden from '@material-ui/core/Hidden';
import LayerSDK from '../LayerSDK/LayerSDK';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            [theme.breakpoints.down('sm')]: {
                backgroundImage: `url(${BackgroundTitleResponsive})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                height: '855px',
            },
            [theme.breakpoints.up('md')]: {
                backgroundImage: `url(${BackgroundTitle})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '950px',
            },
            [theme.breakpoints.only('lg')]: {
                backgroundImage: `url(${BackgroundTitle})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '700px',
            },
        },
        more: {
            background:
                'linear-gradient(116.72deg, #000330 0%, #FF6C6C 99.43%)',
        },
        sdk: {
            background:
                'linear-gradient(116.72deg, #000330 0%, #7C85FF 99.43%)',
        },
    })
);
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.title}>
                <Container>
                    <NavBar />
                    <Title />
                </Container>
            </section>
            <section className={classes.more}>
                <Container>
                    <Hidden xsDown>
                        <More />
                    </Hidden>
                    <Hidden smUp>
                        <MoreResponsive />
                    </Hidden>
                </Container>
            </section>
            <section className={classes.sdk}>
                <Container>
                    <LayerSDK />
                </Container>
            </section>
        </div>
    );
};

export default Home;
