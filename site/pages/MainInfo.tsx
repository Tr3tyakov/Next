import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from '../styles/MainInfo.style';
import MainLayouts from '../Components/layouts/MainLayouts';
import TextField from '@material-ui/core/TextField';
import { useTypedSelector } from '../Components/Hooks/useTypedSelector';
import { useActions } from '../Components/Hooks/useAction';
import MyTextField from '../Components/account/MainTextField';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function MainInfo() {
  const {
    userName,
    userSecondName,
    userEmail,
    userAvatar,
    userPhone,
    userCity,
    userCountry,
    userDate,
    userGender,
  } = useTypedSelector(({ userReducer }) => {
    return {
      userName: userReducer.mainInfo?.name,
      userSecondName: userReducer.mainInfo?.secondName,
      userEmail: userReducer.email,
      userAvatar: userReducer.mainInfo?.avatar,
      userPhone: userReducer.mainInfo?.phone,
      userCity: userReducer.mainInfo?.city,
      userCountry: userReducer.mainInfo?.country,
      userDate: userReducer.mainInfo?.bithday,
      userGender: userReducer.mainInfo?.gender,
    };
  });

  React.useEffect(() => {
    setName(userName);
    setAvatar({ ...avatar, file: userAvatar });
    setSecondName(userSecondName);
    setBithday(userDate);
    setEmail(userEmail);
    setPhone(userPhone);
    setCity(userCity);
    setCountry(userCountry);
    setGender(userGender);
  }, [userEmail]);

  const [avatar, setAvatar] = React.useState<{ file: string; img: string }>({
    file: userAvatar,
    img: '',
  });
  const [name, setName] = React.useState<string>(userName || '');
  const [secondName, setSecondName] = React.useState<string>(userSecondName || '');
  const [bithday, setBithday] = React.useState<string>(userDate || '');
  const [email, setEmail] = React.useState<string>(userEmail || '');
  const [phone, setPhone] = React.useState<string>(userPhone || '');
  const [city, setCity] = React.useState<string>(userCity || '');
  const [country, setCountry] = React.useState<string>(userCountry || '');
  const [gender, setGender] = React.useState<string>(userGender || '');
  const { setMainInfo, updateMainInfo } = useActions();
  const classes = useStyles();
  console.log(bithday);

  const changeGender = (event: React.ChangeEvent<any>) => {
    const value = event.target.firstChild!.textContent;
    setGender(value);
  };
  const changeAvatar = (event: any) => {
    const file = event.target.files[0];
    const img = URL.createObjectURL(file);
    setAvatar({ ...avatar, img, file });
  };
  const saveData = () => {
    const mainInfo = {
      avatar: avatar.file,
      gender,
      name,
      secondName,
      bithday,
      email,
      phone,
      city,
      country,
    };
    updateMainInfo(mainInfo);
  };

  return (
    <MainLayouts>
      <Breadcrumbs>
        <Link href="/Account">
          <a className={classes.link}>Мой аккаунт</a>
        </Link>
        <Typography color="textPrimary">Основная информация</Typography>
      </Breadcrumbs>
      <div className={classes.user}>
        {avatar.img ? (
          <img className={classes.avatar} src={avatar.img} />
        ) : avatar.file ? (
          <Image
            className={classes.avatar}
            src={`http://localhost:5000/${avatar.file}`}
            layout="intrinsic"
            width={200}
            height={200}
          />
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
          <MyTextField value={name} label="Имя" setState={setName} />
          <MyTextField value={secondName} label="Фамилия" setState={setSecondName} />
          <MyTextField value={bithday} label="Дата Рождения" setState={setBithday} />
          <MyTextField value={email} label="Email" setState={setEmail} />
          <MyTextField value={phone} label="Мобильный Телефон" setState={setPhone} />
          <MyTextField value={city} label="Город проживания" setState={setCity} />
          <MyTextField value={country} label="Страна" setState={setCountry} />
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
