import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from '../styles/favorite.style';
import MainLayouts from '../Components/layouts/MainLayouts';

const Favorite: React.FC = () => {
  const classes = useStyles();
  return (
    <MainLayouts>
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
    </MainLayouts>
  );
};

export default Favorite;
