import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ListIcon from '@material-ui/icons/List';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles/index.style';
import Vacancy from '../Components/vacancies/Vacancy';
import MainLayouts from '../Components/layouts/MainLayouts';
import { useActions } from '../Components/Hooks/useAction';
import { useTypedSelector } from '../Components/Hooks/useTypedSelector';

const Home: React.FC = () => {
  const classes = useStyles();
  const { getVacancies } = useActions();
  const vacancies = useTypedSelector(({ vacancyReducer }) => vacancyReducer.vacancies);

  React.useEffect(() => {
    getVacancies();
  }, []);
  console.log(vacancies);
  return (
    <MainLayouts>
      <div>
        <div className={classes.flex}>
          <TextField
            variant="filled"
            label="Должность, которая вас интересует"
            fullWidth></TextField>
          <Button className={classes.filterBtn} variant="contained" color="primary">
            <ListIcon />
          </Button>
        </div>
        <Typography variant="h6" gutterBottom>
          Вакансии для вас
        </Typography>
        <div className={classes.cardsWrapper}>
          {vacancies.map((element) => (
            <Vacancy vacancy={element.info} id={element._id} key={element._id} />
          ))}
        </div>
      </div>
    </MainLayouts>
  );
};

export default Home;

// title
// startSalary
// endSalary
// city
// userName
// specializations
//date
