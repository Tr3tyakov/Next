import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from '../../../styles/MainInfo.style';
import Box from '@material-ui/core/Box';
import MainLayouts from '../../../Components/layouts/MainLayouts';
import TextField from '@material-ui/core/TextField';

function MainInfo() {
  const classes = useStyles();
  return (
    <MainLayouts>
      <div className={classes.user}>
        <Avatar className={classes.userIcon} />
      </div>
      <div className={classes.flex}>
        <Typography className={classes.changePhoto} variant="subtitle1" color="primary">
          Сменить фото профиля
        </Typography>
      </div>
      <div className={classes.mainInfo}>
        <div className={classes.name}>
          <TextField variant="filled" label="Имя" fullWidth></TextField>
          <TextField variant="filled" label="Фамилия" fullWidth></TextField>
          <TextField variant="filled" type="date" fullWidth></TextField>
        </div>
        <div className={classes.secondInfo}>
          <TextField
            variant="filled"
            label="Email"
            value={'Pilot-30050@mail.ru'}
            fullWidth></TextField>
          <TextField variant="filled" label="Мобильный телефон" fullWidth></TextField>
          <TextField variant="filled" label="Город проживания" fullWidth></TextField>
        </div>
      </div>
      <div>
        <Typography>Пол</Typography>
        <input type="checkbox" />
        <Button variant="outlined">Мужской</Button>

        <input type="checkbox" />
        <Button variant="outlined">Женский</Button>
      </div>
      <Box marginTop="10px">
        <Button variant="contained" color="primary">
          Сохранить данные
        </Button>
      </Box>
    </MainLayouts>
  );
}

export default MainInfo;
