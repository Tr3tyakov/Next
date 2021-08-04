import React from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { useStyles } from './vacancy.style';

const Vacancy: React.FC = () => {
  const classes = useStyles();

  const check = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <Paper className={classes.paper}>
      <Link href="/currentWork/ee">
        <a style={{ textDecoration: 'none' }}>
          <Card className={classes.card}>
            <CardHeader
              title={
                <div className={classes.cardMainInfo}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Сейчас просматривают: 43 чел.
                  </Typography>
                  <Typography className={classes.work} variant="h6">
                    Начинающий специалист по организации выставки
                  </Typography>
                  <Typography gutterBottom>80 000 — 130 000 ₽</Typography>
                  <Typography>Санкт-Петербург</Typography>
                  <Typography>Валов Евгений Дмитриевич</Typography>
                </div>
              }
              subheader={
                <div className={classes.cardTags}>
                  <span className={classes.cardTag}>Можно без резюме</span>
                  <span className={classes.cardTag}>Можно без резюме</span>
                  <span className={classes.cardTag}>Можно без резюме</span>
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
                Опубликовано 21.04.2021
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
