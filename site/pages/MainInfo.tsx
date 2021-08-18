import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from '../styles/mainInfo.style';
import MainLayouts from '../Components/layouts/MainLayouts';
import TextField from '@material-ui/core/TextField';
import MyTextField from '../Components/account/MainTextField';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import nookies from 'nookies';
import axios from 'axios';
import { URL as ServerURL } from '../Components/utils/http/utils';
import { updateMainInfo } from '../Components/utils/api/userApi';

interface IMainInfoProps {
  mainInfo: {
    name: string;
    secondName: string;
    avatar: string;
    bithday: string;
    gender: string;
    phone: string;
    city: string;
    country: string;
  };
  userEmail: string;
}
const MainInfo: React.FC<IMainInfoProps> = ({ mainInfo, userEmail }) => {
  const [avatar, setAvatar] = React.useState<{ file: string; img: string }>({
    file: mainInfo.avatar,
    img: '',
  });
  const [name, setName] = React.useState<string>(mainInfo.name);
  const [secondName, setSecondName] = React.useState<string>(mainInfo.secondName);
  const [bithday, setBithday] = React.useState<string>(mainInfo.bithday);
  const [email, setEmail] = React.useState<string>(userEmail);
  const [phone, setPhone] = React.useState<string>(mainInfo.phone);
  const [city, setCity] = React.useState<string>(mainInfo.city);
  const [country, setCountry] = React.useState<string>(mainInfo.country);
  const [gender, setGender] = React.useState<string>(mainInfo.gender);

  const classes = useStyles();

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
};

export default MainInfo;

export const getServerSideProps = async (ctx: any) => {
  const { refreshToken } = nookies.get(ctx);
  const userData = await axios.get(`${ServerURL}/user/mainInfo`, {
    headers: { refreshToken },
    withCredentials: true,
  });
  return {
    props: { mainInfo: userData.data[0].mainInfo, userEmail: userData.data[0].email },
  };
};
