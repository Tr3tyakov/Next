import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import { useActions } from '../Components/Hooks/useAction';
import { useStyles } from '../Components/header/header.style';
import MainLayouts from '../Components/layouts/MainLayouts';

const Authorization: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const { setRegistration, setLogin } = useActions();

  //inputs
  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const enter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setLogin(email, password);
    }
  };

  //auth
  const registration = () => {
    setRegistration(email, password);
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
