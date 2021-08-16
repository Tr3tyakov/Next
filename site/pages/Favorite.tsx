import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from '../styles/favorite.style';
import MainLayouts from '../Components/layouts/MainLayouts';
import { NextThunkDispatch, wrapper } from '../Components/store/reducers/rootReducer';
import { useActions } from '../Components/Hooks/useAction';
import { useTypedSelector } from '../Components/Hooks/useTypedSelector';
import Vacancy from '../Components/vacancies/Vacancy';
import { IVacancy } from '../Components/Interfaces/IVacancy';
import nookies from 'nookies';
import axios from 'axios';
import { URL } from '../Components/utils/http/utils';
import FavoriteVacancies from '../Components/vacancies/FavoriteVacancy';

interface IFavoriteProps {
  favorite: string[];
  vacancies: IVacancy[];
}

const Favorite: React.FC<IFavoriteProps> = ({ favorite, vacancies }) => {
  const classes = useStyles();

  const [favoriteVacancies, setFavoriteVacancies] = React.useState<IVacancy[]>(vacancies);

  const changeFavoriteState = (id: string) => {
    setFavoriteVacancies(favoriteVacancies.filter((element) => element._id !== id));
  };
  if (favoriteVacancies.length) {
    return (
      <MainLayouts>
        <Typography variant="h5" color="primary">
          Избранное
        </Typography>
        <div className={classes.cardsWrapper}>
          {favoriteVacancies.map((element) => (
            <FavoriteVacancies
              vacancy={element.info}
              id={element._id}
              key={element._id}
              favorite={favorite}
              setFavoriteState={changeFavoriteState}
            />
          ))}
        </div>
      </MainLayouts>
    );
  }

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

export const getServerSideProps = async (ctx: any) => {
  const { refreshToken } = nookies.get(ctx);
  const favoriteVacancies = await axios.get(`${URL}/vacancy/favorite`, {
    headers: { refreshToken },
    withCredentials: true,
  });

  if (favoriteVacancies.data) {
    return {
      props: { favorite: favoriteVacancies.data.list, vacancies: favoriteVacancies.data.vacancy },
    };
  }

  return {
    props: {
      vacancies: [],
      favorite: favoriteVacancies.data,
    },
  };
};
