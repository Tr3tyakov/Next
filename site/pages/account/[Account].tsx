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
import { useStyles } from '../../styles/account.style';
import Paper from '@material-ui/core/Paper';
import MainLayouts from '../../Components/layouts/MainLayouts';
import AccountModal from '../../Components/account/ModalSkills';
import Link from 'next/link';
import ModalPosition from '../../Components/account/ModalPosition';
import { useTypedSelector } from '../../Components/Hooks/useTypedSelector';
import { useActions } from '../../Components/Hooks/useAction';

const Account: React.FC = () => {
  const { sphereActivity, desiredSalary, desiredPosition } = useTypedSelector(({ userReducer }) => {
    return {
      sphereActivity: userReducer.sphereActivity,
      desiredPosition: userReducer.position,
      desiredSalary: userReducer.salary,
    };
  });
  const { setSphere } = useActions();
  const [modalSkills, setModalSkills] = React.useState<boolean>(false);
  const [position, setPosition] = React.useState<boolean>(false);
  //skillsModal
  const openModalSkills = () => {
    setModalSkills(true);
  };
  const closeModalSkills = () => {
    setModalSkills(false);
  };

  //positionModal
  const openModalPosition = () => {
    setPosition(true);
  };
  const closeModalPosition = () => {
    setPosition(false);
  };
  const classes = useStyles();
  return (
    <MainLayouts>
      <div>
        <MenuIcon />
      </div>
      <div className={classes.user}>
        <Button>
          <ShareIcon />
        </Button>
        <Avatar className={classes.userIcon} />
        <Button>
          <MoreVertIcon />
        </Button>
      </div>
      <div className={classes.flex}>
        <Typography variant="h5">Начинающий специалист</Typography>
        <Typography variant="subtitle1">name</Typography>
      </div>
      <div className={classes.info}>
        <Paper className={classes.paper}>
          {/* {confirm ?} */}
          <Typography className={classes.gutterBottom} variant="h5">
            Подтвердите номер телефона
          </Typography>
          <Typography variant="subtitle2">
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
            <Typography variant="subtitle2">
              Многие работадатели не видят это резюме.
              <br />
              Чтобы быстрее найти работу, измените его видимость
            </Typography>
            <div className={classes.btns}>
              <Button className={classes.btn} variant="contained" color="primary">
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
            <Typography className={classes.gutterBottom} variant="h5">
              Дополните свое резюме
            </Typography>
            <Typography variant="subtitle2">
              Добавьте информацию о себе. Это поможет привлечь внимание работадателя
            </Typography>
            <div className={classes.skills}>
              <Typography variant="h6">Ключевые навыки</Typography>
              <Button variant="contained" color="primary" onClick={openModalSkills}>
                <AddIcon />
              </Button>
              <AccountModal modal={modalSkills} closeModalSkills={closeModalSkills} />
            </div>
          </div>
        </Paper>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.flexBetween}>
          <Typography className={classes.gutterBottom} variant="h5">
            Основная информация
          </Typography>
          <Link href="/account/mainInfo/1">
            <a>
              <Button color="primary">
                <ArrowForwardIosIcon />
              </Button>
            </a>
          </Link>
        </div>
        <div>
          <p>Третьяков Михаил</p>
          <p>Санкт-Петербург</p>

          {/* <Box component="p">Санкт-Петербург</Box> */}
          {/* <Box component="p">{country}</Box> */}
          {/* <Box component="p">{email}</Box> */}
          {/* <Box component="p">{number}</Box> */}
        </div>
      </Paper>
      <Divider />
      <Paper className={classes.paper}>
        <Typography variant="h5">Желаемая должность :</Typography>
        <div className={classes.flexBetween}>
          <div className={classes.lineHeight}>
            <Typography variant="subtitle2" className={classes.gutterBottom}>
              {desiredPosition}
            </Typography>
            <p>{desiredSalary ? desiredSalary : 'Уровень дохода не указан'} ₽</p>
          </div>
          <Button color="primary" onClick={openModalPosition}>
            <ArrowForwardIosIcon />
          </Button>
          <ModalPosition
            position={position}
            closeModalPosition={closeModalPosition}
            setSphere={setSphere}
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
