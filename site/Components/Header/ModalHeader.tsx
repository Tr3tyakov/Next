import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useActions } from '../Hooks/useAction';
import { IuseStyles } from './header.style';

interface IModalHeaderProps {
  classes: IuseStyles;
  openModal: boolean;
  setCloseModal: any;
}

const ModalHeader: React.FC<IModalHeaderProps> = React.memo(
  ({ classes, openModal, setCloseModal }) => {
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
      <Modal open={openModal} onClose={setCloseModal} className={classes.modal}>
        <Fade in={openModal}>
          <Paper className={classes.paperModal}>
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
              <Button
                className={classes.outlineBtn}
                onClick={login}
                variant="outlined"
                color="primary">
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
          </Paper>
        </Fade>
      </Modal>
    );
  },
);

export default ModalHeader;
