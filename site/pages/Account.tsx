import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useStyles } from '../styles/account.style';
import Paper from '@material-ui/core/Paper';
import MainLayouts from '../Components/layouts/MainLayouts';
import Link from 'next/link';
import ModalPosition from '../Components/account/ModalPosition';
import { useTypedSelector } from '../Components/Hooks/useTypedSelector';
import { useActions } from '../Components/Hooks/useAction';
import ModalSkills from '../Components/account/ModalSkills';
import { NextThunkDispatch, wrapper } from '../Components/store/reducers/rootReducer';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
// import { getUser } from '../Components/store/actions/userAsyncAction';

const Account: React.FC = () => {
  const { sphereActivity, desiredSalary, desiredPosition, skills, mainInfo } = useTypedSelector(
    ({ userReducer }) => {
      return {
        sphereActivity: userReducer.sphereActivity,
        desiredPosition: userReducer.position,
        desiredSalary: userReducer.salary,
        skills: userReducer.skills,
        mainInfo: userReducer.mainInfo,
      };
    },
  );
  const [modalSkills, setModalSkills] = React.useState<boolean>(false);
  const [modalPosition, setModalPosition] = React.useState<boolean>(false);
  const classes = useStyles();

  //skillstModal
  const openModalSkills = () => {
    setModalSkills(true);
  };
  const closeModalSkills = React.useCallback(() => {
    setModalSkills(false);
  }, []);

  //positionModal
  const openModalPosition = () => {
    setModalPosition(true);
  };
  const closeModalPosition = React.useCallback(() => {
    setModalPosition(false);
  }, []);

  return (
    <MainLayouts>
      <div className={classes.user}>
        <Button>
          <ShareIcon />
        </Button>

        {mainInfo.avatar ? (
          <Box m={2}>
            <Image
              className={classes.avatar}
              src={`http://localhost:5000/${mainInfo.avatar}`}
              layout="intrinsic"
              width={200}
              height={200}
            />
          </Box>
        ) : (
          <Avatar className={classes.userIcon} />
        )}
        <Button>
          <MoreVertIcon />
        </Button>
      </div>
      <div className={classes.flex}>
        <Typography variant="h5">{desiredPosition || 'Начинающий специалист'}</Typography>
        <Typography variant="subtitle1">
          {mainInfo?.name && mainInfo?.secondName
            ? `${mainInfo?.name} ${mainInfo?.secondName}`
            : 'User'}
        </Typography>
      </div>
      <div className={classes.info}>
        <Paper className={classes.paper}>
          {/* {confirm ?} */}
          <Typography className={classes.gutterBottom} variant="h5">
            Подтвердите номер телефона
          </Typography>
          <Typography variant="subtitle2" className={classes.gutterBottom}>
            Работодатели чаще звонят на подтвержденные номера телефонов
          </Typography>
          <div className={classes.phone}>
            <Button variant="contained" color="primary">
              Подтвердить телефон
            </Button>
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div>
            <Typography className={classes.gutterBottom} variant="h5">
              Статистика за неделю
            </Typography>
            <div>{/* {table} */}</div>
            <Typography variant="subtitle2" className={classes.gutterBottom}>
              Многие работадатели не видят это резюме.
              <br />
              Чтобы быстрее найти работу, измените его видимость
            </Typography>
            <div className={classes.btns}>
              <Button variant="contained" color="primary">
                Сделать видимым
              </Button>
              <Button className={classes.btn} variant="outlined" color="primary">
                5873 подходящих вакансий
              </Button>
            </div>
          </div>
        </Paper>
      </div>
      <div>
        <Paper className={classes.paper}>
          <div>
            {skills.length ? (
              ''
            ) : (
              <>
                <Typography variant="h5">Дополните свое резюме</Typography>
                <Typography variant="subtitle2" className={classes.gutterBottom}>
                  Добавьте информацию о себе. Это поможет привлечь внимание работодателей
                </Typography>
              </>
            )}
            <div className={classes.skills}>
              <Typography variant="h5">Ключевые навыки</Typography>
              <Button variant="contained" color="primary" onClick={openModalSkills}>
                <AddIcon />
              </Button>
              <ModalSkills
                modal={modalSkills}
                closeModalSkills={closeModalSkills}
                skills={skills}
              />
            </div>
            <div className={classes.spheres}>
              {skills.map((element, index) => (
                <div className={classes.skill} key={index}>
                  {element}
                </div>
              ))}
            </div>
          </div>
        </Paper>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.flexBetween}>
          <Typography variant="h5">Основная информация</Typography>
          <Link href="/MainInfo">
            <a>
              <Button color="primary">
                <ArrowForwardIosIcon />
              </Button>
            </a>
          </Link>
        </div>
        <div>
          <p>{`${mainInfo?.name} ${mainInfo?.secondName}`}</p>
          <p>{mainInfo?.city}</p>
          <p>{mainInfo?.country}</p>
          <p>{mainInfo?.phone}</p>
        </div>
      </Paper>

      <Paper className={classes.paper}>
        <div className={classes.flexBetween}>
          <Typography variant="h5">Желаемая должность</Typography>
          <Button color="primary" onClick={openModalPosition}>
            <ArrowForwardIosIcon />
          </Button>
        </div>
        <div className={classes.flexBetween}>
          <div className={classes.lineHeight}>
            <Typography variant="subtitle2">{desiredPosition}</Typography>
            <p className={classes.salary}>
              {desiredSalary ? desiredSalary + ' ₽' : 'Уровень дохода не указан'}
            </p>
          </div>
          <ModalPosition
            modal={modalPosition}
            closeModalPosition={closeModalPosition}
            desiredSalary={desiredSalary}
            desiredPosition={desiredPosition}
            sphereActivity={sphereActivity}
          />
        </div>
        <div className={classes.spheres}>
          {sphereActivity.map((element, index) => (
            <div className={classes.skill} key={index}>
              {element}
            </div>
          ))}
        </div>
      </Paper>
    </MainLayouts>
  );
};

export default Account;

// export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req, res }) => {
//   const cookies = req.headers.cookie;
//   const dispatch = store.dispatch as NextThunkDispatch;
// await dispatch(await getUser());
// });
