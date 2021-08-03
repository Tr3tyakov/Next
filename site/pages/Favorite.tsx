import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Header from '../Components/Header/Header';
import { useStyles } from '../styles/favorite.style';
const Favorite: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <div className={classes.wrapper}>
          <div>
            <Typography variant="h4">Избранное</Typography>
          </div>
          <div className={classes.btns}>
            <Button className={classes.btn} variant="contained" color="default">
              Вакансии
            </Button>
            <Button className={classes.btn} variant="contained" color="default">
              Подписки
            </Button>
          </div>
          {/* {subscribe ?} */}
          <div className={classes.flex}>
            <NotificationsIcon className={classes.img} />
            <Typography variant="h6">Подписывайтесь на поиски</Typography>
            <Typography variant="subtitle2">
              Получайте уведомления о новых вакансиях по интересующим вас параметрам
            </Typography>
          </div>
          <div>
            <Button variant="contained" color="primary">
              Создать подписку
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Favorite;
