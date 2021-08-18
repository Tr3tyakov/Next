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
import { useSnackbar } from 'notistack';
import { Box } from '@material-ui/core';
import Link from 'next/link';
interface IHomeProps {
  resume: any;
  isAuth?: boolean;
}

const FindResume: React.FC<IHomeProps> = ({ isAuth, resume }) => {
  console.log(resume);
  const [filter, setFilter] = React.useState<string>('');
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  //   const filterVacancies = React.useMemo(() => {
  //     return vacancies.filter((element) =>
  //       element.info.title.toLowerCase().includes(filter.toLowerCase()),
  //     );
  //   }, [filter]);

  //   const changeFavorite = async (id: string) => {
  //     const favoriteData = await changeFavoriteVacancies(id);
  //     if (favoriteData.status === 200) {
  //       const message = favoriteData.data.message;
  //       return enqueueSnackbar(message, { variant: 'success' });
  //     }
  //     enqueueSnackbar('Error', { variant: 'error' });
  //   };
  return <div></div>;
  return (
    <MainLayouts>
      <div>
        <div className={classes.flex}>
          <FilterVacancies
            classes={classes}
            setFilter={setFilter}
            title={'Вакансия, которая вас интересует'}
          />
        </div>
        <Box display="flex">
          <Box margin="0 10px 0 0">
            <Link href="/FindVacancies">
              <a className={classes.textDecoration}>
                <Typography variant="h6" gutterBottom color="textSecondary">
                  Вакансии
                </Typography>
              </a>
            </Link>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Резюме
            </Typography>
          </Box>
        </Box>

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

export default FindResume;

export const getServerSideProps = async (ctx: any) => {
  const { refreshToken } = nookies.get(ctx);
  const resumeData = await axios.get(`${URL}/resume`, {
    headers: { refreshToken: refreshToken ? refreshToken : '' },
    withCredentials: true,
  });

  return {
    props: {
      resume: resumeData.data,
    },
  };
};
///chekc error seriallize
