import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListIcon from '@material-ui/icons/List';
import { useStyles } from '../styles/account.style';
import { Paper } from '@material-ui/core';
const Account: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <div>
        <MenuIcon />
      </div>
      <div>
        <Button>
          <ShareIcon />
        </Button>
        <Avatar />
        <Button>
          <MoreVertIcon />
        </Button>
      </div>
      <div>
        <Typography variant="h6">Начинающий специалист</Typography>
        <Typography variant="subtitle2">name</Typography>
      </div>
      <div className={classes.info}>
        <div className={classes.confirm}>
          {/* {confirm ?} */}
          <Typography variant="h6">Подтвердите номер телефона</Typography>
          <Typography variant="subtitle2">
            Работодатели чаще звонят на подтвержденные номера телефонов{' '}
          </Typography>
        </div>
        <Paper className={classes.informationList}>
          <div>
            <Typography variant="h6">Статистика за неделю</Typography>
            <div>{/* {table} */}</div>
            <Typography variant="subtitle2">
              Многие работадатели не видят это резюме.
              <br />
              Чтобы быстрее найти работу, измените его видимость
            </Typography>
            <Button variant="contained" color="primary">
              Сделать видимым
            </Button>
            <Button variant="outlined" color="primary">
              {/* {количество подходящих вакансий} */}
            </Button>
          </div>
        </Paper>
      </div>
      <div>
        <Paper>
          <div>
            <Typography variant="h6"> Дополните свое резюме</Typography>
            <Typography variant="subtitle2">
              Добавьте информацию о себе. Это поможет привлечь внимание работадателя
            </Typography>
            <div className={classes.skills}>
              <Typography variant="h6">Ключевые навыки</Typography>
              <Button>
                <AddCircleIcon />
              </Button>
            </div>
          </div>
        </Paper>
      </div>
      <div className={classes.mainInfo}>
        <div>
          <Typography variant="h5">Основная информация</Typography>
          <Button>
            <ListIcon />
          </Button>
        </div>
        <div className={classes.userData}>
          {/* <Box component="p">{userName}</Box> */}
          {/* <Box component="p">{city}</Box> */}
          {/* <Box component="p">{country}</Box> */}
          {/* <Box component="p">{email}</Box> */}
          {/* <Box component="p">{number}</Box> */}
        </div>
      </div>
      <Divider />
      <div className={classes.informationList}>
        <div>
          <Typography variant="h5">Желаемая должность</Typography>
          <Button>
            <ListIcon />
          </Button>
        </div>
        <div>
          <Typography variant="h6">Начинающий специалист</Typography>
          <Box component="p">Уровень дохода не указан</Box>
        </div>
      </div>
    </Container>
  );
};

export default Account;
