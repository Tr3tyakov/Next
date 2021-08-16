import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/index.style';
import Vacancy from '../Components/vacancies/Vacancy';
import MainLayouts from '../Components/layouts/MainLayouts';
import FilterVacancies from '../Components/index/FilterVacancies';
import axios from 'axios';
import { IVacancy } from '../Components/Interfaces/IVacancy';
import { URL } from '../Components/utils/http/utils';

interface IHomeProps {
  vacancies: [IVacancy];
}

const Home: React.FC<IHomeProps> = ({ vacancies }) => {
  const [filter, setFilter] = React.useState<string>('');
  const classes = useStyles();
  const filterVacancies = React.useMemo(() => {
    return vacancies.filter((element) =>
      element.info.title.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

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
            <Vacancy vacancy={element.info} id={element._id} key={element._id} />
          ))}
        </div>
      </div>
    </MainLayouts>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const vacanciesData = await axios.get(`${URL}/vacancy`);
  return {
    props: { vacancies: vacanciesData.data },
  };
};
