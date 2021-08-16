import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './work.style';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MainLayouts from '../../Components/layouts/MainLayouts';
import axios from 'axios';
import { IFullVacancy } from '../../Components/Interfaces/IVacancy';
import { URL } from '../../Components/utils/http/utils';

interface IWorkProps {
  currentVacancy: IFullVacancy;
}

const Work: React.FC<IWorkProps> = ({ currentVacancy }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.backGround}>
        <MainLayouts>
          <div>
            <Typography gutterBottom>Санкт-Петербург</Typography>
          </div>
          <div>
            <Typography variant="h5" gutterBottom>
              {currentVacancy.info?.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {currentVacancy.info?.startSalary === null
                ? 'Зарплата не указана'
                : `От ${currentVacancy.info?.startSalary} ${currentVacancy.info?.currency} на руки`}
            </Typography>
          </div>
          <div>
            <p>
              Требуемый опыт:&nbsp;
              {currentVacancy.workExperiences?.map((element) => element)}
            </p>
            <p>{currentVacancy.typeEmployment?.map((element) => element)}</p>
          </div>
          <Link href="/company/ОнлайнТрейд">
            <div className={classes.companyTag}>
              <Typography className={classes.titleTag}>Онлайн Трейд</Typography>
            </div>
          </Link>
        </MainLayouts>
      </div>
      <Container maxWidth="md">
        <div className={classes.companyInfo}>
          <div className={classes.flex}>
            <Typography>{currentVacancy.info?.userName}</Typography>
            <Button color="primary">
              <ArrowForwardIosIcon />
            </Button>
          </div>
          <Divider />
          <div className={classes.city}>
            <Typography>{currentVacancy.info?.city}</Typography>
          </div>
          <Divider />
          <div>
            <Typography>{currentVacancy.description}</Typography>
          </div>
          <div className={classes.marginTop}>
            <Typography variant="h6">Ключевые навыки</Typography>
            <div className={classes.skills}>
              {currentVacancy.skills?.map((element, index) => (
                <div className={classes.skill} key={index}>
                  {element}
                </div>
              ))}
            </div>
          </div>
          <div className={classes.marginTop}>
            <Typography gutterBottom>
              Вакансия опубликована {new Date(currentVacancy.info?.date).toLocaleString()}
            </Typography>
            <Divider />
          </div>
          <div className={classes.marginTop}>
            <Typography variant="h6" gutterBottom>
              {currentVacancy.info?.userName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              +{currentVacancy.phone}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {currentVacancy.email}
            </Typography>
            <Divider />
            <Typography variant="h6">Похожие вакансии</Typography>
            <div className={classes.moreVacancies}>
              {/* <Vacancy /> */}
              {/* <Vacancy /> */}
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

export const getServerSideProps = async (ctx: any) => {
  const { work } = ctx.query;
  const currentVacancy = await axios.get(`${URL}/vacancy/${work}`);
  return {
    props: { currentVacancy: currentVacancy.data },
  };
};
