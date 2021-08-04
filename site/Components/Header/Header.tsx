import React, { SyntheticEvent } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Link from 'next/link';
import { useStyles } from './header.style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useTypedSelector } from '../../Components/Hooks/useTypedSelector';
import { useActions } from '../Hooks/useAction';
const navigation = [
  {
    title: 'Поиск',
    href: '/',
    img: <SearchIcon />,
  },
  {
    title: 'Избранное',
    href: '/Favorite',
    img: <StarIcon />,
  },
  { title: 'Сообщения', href: '/Message', img: <AccountCircleIcon /> },
];

const Header: React.FC = () => {
  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const [modal, setModal] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  // const isAuth = useTypedSelector(({ userReducer }) => userReducer.isAuth);
  const isAuth = false;
  const classes = useStyles();
  const { setRegistration, setLogin, setLogout } = useActions();
  //menu
  const handleClose = (): void => {
    setMenu(null);
  };
  const handleOpen = (event: any): void => {
    setMenu(event.currentTarget);
  };

  //modal
  const openModal = (): void => {
    setModal(true);
  };
  const closeModal = (): void => {
    setModal(false);
  };
  //input
  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    console.log(email);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    console.log(password);
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
  const login = () => {
    setLogin(email, password);
  };
  const makeLogout = (): void => {};

  return (
    <AppBar position="relative">
      <Toolbar className={classes.flex}>
        <Typography variant="h5">TT.ru</Typography>
        <div className={classes.flex}>
          {navigation.map((element) => {
            return (
              <Link href={element.href} key={element.title}>
                <Button variant="text" startIcon={element.img} color="default">
                  <a className={classes.navigation}>{element.title}</a>
                </Button>
              </Link>
            );
          })}
        </div>
        {isAuth ? (
          <>
            <IconButton onClick={handleOpen}>
              <Avatar />
            </IconButton>
            <Menu id="menu" open={Boolean(menu)} onClose={handleClose} anchorEl={menu}>
              <MenuItem>
                <Link href="/Account">
                  <a className={classes.textDecortation}>Мой аккаунт</a>
                </Link>
              </MenuItem>
              <MenuItem className={classes.textDecortation} onClick={() => makeLogout}>
                Выйти
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button variant="contained" onClick={openModal}>
            Войти
          </Button>
        )}

        <Modal open={modal} onClose={closeModal} className={classes.modal}>
          <Fade in={modal}>
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
                    <Typography
                      align="center"
                      color="textSecondary"
                      variant="subtitle2"
                      gutterBottom>
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
      </Toolbar>
    </AppBar>
  );
};

export async function getServerSideProps() {}
export default Header;
