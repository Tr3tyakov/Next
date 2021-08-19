import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import { useActions } from '../Components/Hooks/useAction';
import { useStyles } from '../Components/header/header.style';
import MainLayouts from '../Components/layouts/MainLayouts';
import { setRegistration } from '../Components/utils/api/userApi';
import { useSnackbar } from 'notistack';

const Authorization: React.FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const { setLogin } = useActions();

  //inputs
  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const enter = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const userData = await setLogin(email, password);
      console.log(userData);
    }
  };

  //auth
  const registration = async () => {
    const userData = await setRegistration(email, password);
    if (userData.status === 200) {
      return enqueueSnackbar(userData.data, { variant: 'success' });
    }
    enqueueSnackbar(userData.data.message, { variant: 'error' });
  };
  const login = async () => {
    setLogin(email, password);
  };

  return (
    <MainLayouts>
      <div className={classes.wrapper}>
        <div>
          <Typography align="center" color="primary" variant="h5" gutterBottom>
            Вход в TT.ru
          </Typography>
          <form onKeyPress={enter}>
            <TextField
              margin="dense"
              variant="standard"
              label="Email"
              fullWidth
              value={email}
              onChange={changeEmail}></TextField>
            <TextField
              margin="dense"
              variant="standard"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={changePassword}></TextField>
          </form>
        </div>
        <div className={classes.forgotPassword}>
          <Link href="/password">
            <a className={classes.textDecortation}>
              <Typography align="center" color="textSecondary" variant="subtitle2" gutterBottom>
                Забыли пароль?
              </Typography>
            </a>
          </Link>
        </div>
        <div className={classes.btns}>
          <Button className={classes.outlineBtn} onClick={login} variant="outlined" color="primary">
            Войти
          </Button>
          <Button
            className={classes.btn}
            onClick={registration}
            variant="contained"
            color="primary">
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Authorization;
