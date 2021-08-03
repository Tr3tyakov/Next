import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../../Components/Header/Header';
import { useStyles } from './work.style';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Vacancy from '../../Components/Vacancies/Vacancy';
const Work: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.backGround}>
        <Header />
        <Container maxWidth="md" className={classes.container}>
          <div>
            <Typography gutterBottom>Санкт-Петербург</Typography>
          </div>
          <div>
            <Typography variant="h5" gutterBottom>
              Начинающий специалист с бесплатным обучением
            </Typography>
            <Typography variant="h6" gutterBottom>
              От 115 000 ₽ на руки
            </Typography>
          </div>
          <div>
            <p>Требуемый опыт: нет опыта</p>
            <p>Полная занятось, полный день</p>
          </div>
          <Link href="/company/ОнлайнТрейд">
            <div className={classes.companyTag}>
              <Typography className={classes.titleTag}>Онлайн Трейд</Typography>
            </div>
          </Link>
        </Container>
      </div>
      <Container maxWidth="md">
        <div className={classes.companyInfo}>
          <div className={classes.flex}>
            <Typography>Валов Евгений Дмитриевич</Typography>
            <Button color="primary">
              <ArrowForwardIosIcon />
            </Button>
          </div>
          <Divider />
          <div className={classes.city}>
            <Typography>Санкт-Петербург</Typography>
          </div>
          <Divider />
          <div>
            <Typography>
              С 2010 года компания ОнлайнТрейд занимается полной организацией, подготовкой,
              поставкой, закупой и продажей одежды Классический текст-«рыба». Является искажённым
              отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла»,
              написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается
              Ричарду МакКлинтоку. Распространился в 1970-х годах из-за трафаретов компании
              Letraset, a затем - из-за того, что служил примером текста в программе PageMaker.
              Испорченный текст, вероятно, происходит от его издания в Loeb Classical Library 1914
              года, в котором слово dolorem разбито переносом так,
            </Typography>
          </div>
          <div className={classes.marginTop}>
            <Typography variant="h6">Ключевые навыки</Typography>
            <div className={classes.skills}>
              <div className={classes.skill}>Работа в команде</div>
              <div className={classes.skill}>Коммуникабельность</div>
              <div className={classes.skill}>Организаторские навыки</div>
              <div className={classes.skill}>Грамотная речь</div>
            </div>
          </div>
          <div className={classes.marginTop}>
            <Typography gutterBottom>Вакансия опубликована 21.04.2021</Typography>
            <Divider />
          </div>
          <div className={classes.marginTop}>
            <Typography variant="h6" gutterBottom>
              Яковлева Анастасия
            </Typography>
            <Typography variant="h6" gutterBottom>
              Телефон
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Divider />
            <Typography variant="h6">Похожие вакансии</Typography>
            <div className={classes.moreVacancies}>
              <Vacancy />
              <Vacancy />
            </div>
            <div className={classes.btnVacancies}>
              <Button variant="outlined" color="primary" endIcon={<ArrowForwardIosIcon />}>
                Показать все похожие вакансии
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Work;
