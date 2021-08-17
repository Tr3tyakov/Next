import React from 'react';
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
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import { useStyles } from './header.style';
import { useTypedSelector } from '../../Components/Hooks/useTypedSelector';
import { useActions } from '../Hooks/useAction';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import Image from 'next/image';

const navigation = [
  {
    title: 'Поиск',
    href: '/FindVacancies',
    img: <SearchIcon />,
  },
  {
    title: 'Избранное',
    href: '/Favorite',
    img: <StarIcon />,
  },
  { title: 'Сообщения', href: '/Message', img: <EmailIcon /> },
  { title: 'Cоздать резюме', href: '/CreateOffer', img: <WorkIcon /> },
];

const Header: React.FC = () => {
  React.useEffect(() => {
    if (localStorage.getItem('Token')) {
      checkAuth();
    }
  }, []);

  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const { setLogout, checkAuth } = useActions();
  const classes = useStyles();

  const { isAuth, mainInfo } = useTypedSelector(({ userReducer }) => {
    return {
      isAuth: userReducer.isAuth,
      mainInfo: userReducer.mainInfo,
    };
  });
  //menu
  const handleClose = () => {
    setMenu(null);
  };
  const handleOpen = (event: any) => {
    setMenu(event.currentTarget);
  };

  const makeLogout = (): void => {
    setLogout();
  };
  return (
    <AppBar position="relative">
      <Toolbar className={classes.flex}>
        <Link href="/">
          <a className={classes.textDecortation}>
            <Typography variant="h5">TW.ru</Typography>
          </a>
        </Link>
        <div className={classes.flex}>
          {isAuth &&
            navigation.map((element) => (
              <Link href={element.href} key={element.title}>
                <Button variant="text" startIcon={element.img} color="default">
                  <a className={classes.navigation}>{element.title}</a>
                </Button>
              </Link>
            ))}
        </div>
        {isAuth ? (
          <>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography>{`${mainInfo.name} ${mainInfo.secondName}`}</Typography>
              <IconButton onClick={handleOpen}>
                {mainInfo.avatar ? (
                  <Image
                    className={classes.avatar}
                    src={`http://localhost:5000/${mainInfo.avatar}`}
                    layout="intrinsic"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar />
                )}
              </IconButton>
            </Box>
            <Menu id="menu" open={Boolean(menu)} onClose={handleClose} anchorEl={menu}>
              <MenuItem>
                <Link href="/Account">
                  <a className={classes.textDecortation}>Мой аккаунт</a>
                </Link>
              </MenuItem>
              <MenuItem className={classes.textDecortation} onClick={makeLogout}>
                Выйти
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div>
            {!isAuth && (
              <Link href="/FindVacancies">
                <Button variant="text" startIcon={<SearchIcon />} color="default">
                  <a className={classes.navigation}>Поиск</a>
                </Button>
              </Link>
            )}
            <Link href="/Authorization">
              <a className={classes.textDecortation}>
                <Button variant="contained">Войти</Button>
              </a>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
