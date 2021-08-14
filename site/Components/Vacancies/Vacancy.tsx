import React from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/Star';
import { useStyles } from './vacancy.style';
import { IInfoVacancy } from '../Interfaces/IVacancy';

interface IVacanciesProps {
  vacancy: IInfoVacancy;
  id: string;
}

const Vacancy: React.FC<IVacanciesProps> = ({ vacancy, id }) => {
  const classes = useStyles();
  const check = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <Paper className={classes.paper}>
      <Link href={`/currentWork/${id}`}>
        <a style={{ textDecoration: 'none' }}>
          <Card className={classes.card}>
            <CardHeader
              title={
                <div className={classes.cardMainInfo}>
                  {/* <Typography variant="subtitle1" color="primary" gutterBottom>
                    Сейчас просматривают: 43 чел.
                  </Typography> */}
                  <Typography className={classes.work} variant="h6">
                    {vacancy.title}
                  </Typography>
                  <Typography gutterBottom>
                    от {vacancy.startSalary} — до {vacancy.endSalary} ₽
                  </Typography>
                  <Typography>{vacancy.city}</Typography>
                  <Typography>{vacancy.userName}</Typography>
                </div>
              }
              subheader={
                <div className={classes.cardTags}>
                  {vacancy.specializations &&
                    vacancy.specializations.map((element, index) => (
                      <span className={classes.cardTag} key={index}>
                        {element}
                      </span>
                    ))}
                </div>
              }></CardHeader>
            <div className={classes.favorite}>
              <IconButton onClick={check}>
                {/* {addedWork ?} */}
                {/* <StarBorderIcon fontSize="large" /> */}
                <StarIcon className={classes.starAdd} fontSize="medium" />
              </IconButton>
            </div>
            <div className={classes.date}>
              <Typography color="textSecondary" gutterBottom>
                Опубликовано {new Date(vacancy.date).toLocaleString()}
              </Typography>
            </div>
            <div className={classes.btns}>
              <Button color="primary" variant="outlined">
                Контакты
              </Button>
              <Button color="primary" variant="contained">
                Откликнуться
              </Button>
            </div>
          </Card>
        </a>
      </Link>
    </Paper>
  );
};

export default Vacancy;
