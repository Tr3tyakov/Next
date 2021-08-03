import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStyles } from './style';
import Link from 'next/link';
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
  const classes = useStyles();

  const handleClose = (): void => {
    setMenu(null);
  };
  const handleOpen = (event: any): void => {
    setMenu(event.currentTarget);
  };

  const makeLogout = (): void => {};
  return (
    <AppBar position="relative">
      <Toolbar className={classes.flex}>
        {/* {isAuth ? } */}
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
