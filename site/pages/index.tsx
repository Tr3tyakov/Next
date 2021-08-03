import styles from '../styles/Home.module.css';
import Header from '../Components/Header/Header';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import ListIcon from '@material-ui/icons/List';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles/index.style';
import Vacancy from '../Components/Vacancies/Vacancy';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="md" className={classes.container}>
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
            {/* {vacanies.map((element) => {
              return <Vacancy element={element} />;
            })} */}
            <Vacancy />
            <Vacancy />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
