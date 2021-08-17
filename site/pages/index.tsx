import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/home.style';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Header from '../Components/header/Header';
import { Box } from '@material-ui/core';
import { useTypedSelector } from '../Components/Hooks/useTypedSelector';
import SnackBar from '../Components/layouts/SnackBar';

const Home: React.FC = () => {
  const classes = useStyles();
  const [mainInput, setMainInput] = React.useState<string>('');
  const isAuth = useTypedSelector(({ userReducer }) => userReducer.isAuth);
  const changeMainInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMainInput(value);
  };

  const setExample = () => {
    setMainInput('Менеджер по продажам');
  };

  return (
    <>
      <Header />

      <div className={classes.content}>
        <div className={classes.black}>
          <div className={classes.titleWrapper}>
            <Typography className={classes.title}>Размещайте обьявления на TW.ru</Typography>
            <Typography className={classes.subTitle}>
              И находите сотрудников среди тех, кто хочет у вас работать. TW.ru — сервис №1 по
              поиску сотрудников в России*
            </Typography>
            <div className={classes.btn}>
              <Link href={isAuth ? '/CreateOffer' : '/Authorization'}>
                <a className={classes.a}>
                  <Button className={classes.btn} variant="contained" color="primary">
                    Создать вакансию
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.gray}>
          <div className={classes.titleWrapper}>
            <Typography className={classes.title}>
              Найдите вашу идеальную работу вместе с TW.ru
            </Typography>
            <Typography className={classes.subTitle}>
              Не ждите откликов — ищете подходящую вакансию сами среди 52 945 272 резюме у 31 763
              572 соискателей
            </Typography>
            <div className={classes.inputWrapper}>
              <input
                className={classes.input}
                type="text"
                value={mainInput}
                onChange={changeMainInput}
              />
              <Link href={isAuth ? '/FindVacancies' : '/Authorization'}>
                <a className={classes.a}>
                  <Button variant="contained" color="primary">
                    Найти вакансию
                  </Button>
                </a>
              </Link>
            </div>
            <div>
              <span className={classes.inputSub}>Чаще всего ищут:&nbsp;</span>
              <span className={classes.inputTarget} onClick={setExample}>
                Менеджер по продажам
              </span>
            </div>
          </div>
        </div>
        <div className={classes.black}>
          <div className={classes.titleWrapper}>
            <Box margin="50px 0 0 0">
              <Typography>
                © 2021 Группа компаний Tail Wind Сегодня на сайте 1 077 216 вакансий, 52 954 874
                резюме, 1 569 407 компании и за неделю 2 285 959 приглашений
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
