import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from '../../../styles/MainInfo.style';
import MainLayouts from '../../../Components/layouts/MainLayouts';
import TextField from '@material-ui/core/TextField';
import { useTypedSelector } from '../../../Components/Hooks/useTypedSelector';
import { useActions } from '../../../Components/Hooks/useAction';

function MainInfo() {
  const classes = useStyles();
  const { userName, userLastName, userEmail, userPhone, userCity, userDate, userGender } =
    useTypedSelector(({ userReducer }) => {
      return {
        userName: userReducer.mainInfo.name,
        userLastName: userReducer.mainInfo.lastName,
        userEmail: userReducer.mainInfo.email,
        userPhone: userReducer.mainInfo.phone,
        userCity: userReducer.mainInfo.city,
        userDate: userReducer.mainInfo.date,
        userGender: userReducer.mainInfo.gender,
      };
    });
  const [avatar, setAvatar] = React.useState<string>('');
  const [name, setName] = React.useState<string>(userName);
  const [lastName, setLastName] = React.useState<string>(userLastName);
  const [date, setDate] = React.useState<string>(userDate);
  const [email, setEmail] = React.useState<string>(userEmail);
  const [phone, setPhone] = React.useState<string>(userPhone);
  const [city, setCity] = React.useState<string>(userCity);
  const [gender, setGender] = React.useState<string>(userGender || 'Мужской');

  const { setMainInfo } = useActions();

  //textField
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };
  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLastName(value);
  };
  const changeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDate(value);
  };
  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };
  const changePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhone(value);
  };
  const changeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCity(value);
  };
  const changeGender = (event: React.ChangeEvent<any>) => {
    const value = event.target.firstChild!.textContent;
    setGender(value);
  };
  const changeAvatar = (event: any) => {
    const file = event.target.files[0];
    const img = URL.createObjectURL(file);
    setAvatar(img);
  };
  const saveData = () => {
    setMainInfo(avatar, gender, name, lastName, date, email, phone, city);
  };
  return (
    <MainLayouts>
      <div className={classes.user}>
        {avatar ? (
          <img className={classes.avatar} src={avatar} alt="Picture of the author"></img>
        ) : (
          <Avatar className={classes.userIcon} />
        )}
      </div>
      <div className={classes.flex}>
        <label htmlFor="button-file">
          <Typography className={classes.changePhoto} variant="subtitle1" color="primary">
            Сменить фото профиля
          </Typography>
        </label>
        <TextField
          style={{ display: 'none' }}
          className={classes.inputFile}
          id="button-file"
          type="file"
          onChange={changeAvatar}
        />
      </div>
      <div className={classes.mainInfo}>
        <Typography gutterBottom>Основная информация</Typography>
        <div className={classes.name}>
          <TextField
            style={{ margin: '10px 0' }}
            variant="filled"
            value={name}
            label="Имя"
            fullWidth
            onChange={changeName}></TextField>
          <TextField
            style={{ margin: '10px 0' }}
            variant="filled"
            value={lastName}
            label="Фамилия"
            fullWidth
            onChange={changeLastName}></TextField>
          <TextField
            style={{ margin: '10px 0' }}
            variant="filled"
            value={date}
            type="date"
            fullWidth
            onChange={changeDate}></TextField>
          <TextField
            style={{ margin: '10px 0' }}
            variant="filled"
            value={email}
            label="Email"
            fullWidth
            onChange={changeEmail}></TextField>
          <TextField
            style={{ margin: '10px 0' }}
            variant="filled"
            value={phone}
            label="Мобильный телефон"
            fullWidth
            onChange={changePhone}></TextField>
          <TextField
            style={{ margin: '10px 0' }}
            variant="filled"
            value={city}
            label="Город проживания"
            fullWidth
            onChange={changeCity}></TextField>
        </div>
      </div>
      <div>
        <Typography gutterBottom>Пол</Typography>
        <div className={classes.btns}>
          <Button variant={gender === 'Мужской' ? 'contained' : 'outlined'} onClick={changeGender}>
            Мужской
          </Button>
          <Button variant={gender === 'Женский' ? 'contained' : 'outlined'} onClick={changeGender}>
            Женский
          </Button>
        </div>
        <div className={classes.saveData}>
          <Button variant="contained" color="primary" onClick={saveData}>
            Сохранить данные
          </Button>
        </div>
      </div>
    </MainLayouts>
  );
}

export default MainInfo;
