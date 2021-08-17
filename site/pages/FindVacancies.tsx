import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/index.style';
import Vacancy from '../Components/vacancies/Vacancy';
import MainLayouts from '../Components/layouts/MainLayouts';
import FilterVacancies from '../Components/index/FilterVacancies';
import axios from 'axios';
import { IVacancy } from '../Components/Interfaces/IVacancy';
import { URL } from '../Components/utils/http/utils';
import nookies from 'nookies';
import { changeFavoriteVacancies } from '../Components/utils/api/vacancyApi';
import SnackBar from '../Components/layouts/SnackBar';
import { useSnackbar } from 'notistack';
interface IHomeProps {
  vacancies: [IVacancy];
  favorite: [];
  isAuth?: boolean;
}

const FindVacancies: React.FC<IHomeProps> = ({ isAuth, vacancies, favorite }) => {
  const [filter, setFilter] = React.useState<string>('');
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const filterVacancies = React.useMemo(() => {
    return vacancies.filter((element) =>
      element.info.title.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  const changeFavorite = async (id: string) => {
    const favoriteData = await changeFavoriteVacancies(id);
    if (favoriteData.status === 200) {
      const message = favoriteData.data.message;
      return enqueueSnackbar(message, { variant: 'success' });
    }
    enqueueSnackbar('Error', { variant: 'error' });
  };

  return (
    <MainLayouts>
      <div>
        <div className={classes.flex}>
          <FilterVacancies classes={classes} setFilter={setFilter} />
        </div>
        <Typography variant="h6" gutterBottom>
          Вакансии для вас
        </Typography>
        <div className={classes.cardsWrapper}>
          {filterVacancies.map((element) => (
            <Vacancy
              vacancy={element.info}
              id={element._id}
              key={element._id}
              favorite={favorite}
              changeFavoriteOnServer={changeFavorite}
              isAuth={isAuth}
            />
          ))}
        </div>
      </div>
    </MainLayouts>
  );
};

export default FindVacancies;

export const getServerSideProps = async (ctx: any) => {
  const { refreshToken } = nookies.get(ctx);
  const vacanciesData = await axios.get(`${URL}/vacancy`, {
    headers: { refreshToken: refreshToken ? refreshToken : '' },
    withCredentials: true,
  });

  if (vacanciesData.data.favorite) {
    return {
      props: {
        isAuth: true,
        vacancies: vacanciesData.data.vacancyData,
        favorite: vacanciesData.data.favorite.list,
      },
    };
  }
  return {
    props: {
      vacancies: vacanciesData.data.vacancyData,
      favorite: [],
    },
  };
};
