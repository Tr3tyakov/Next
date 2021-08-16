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
import HeaderModal from './ModalHeader';
import { IMainInfo } from '../Interfaces/IUser';

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
  { title: 'Сообщения', href: '/Message', img: <EmailIcon /> },
  { title: 'Cоздать резюме', href: '/CreateOffer', img: <WorkIcon /> },
];

const Header: React.FC = () => {
  React.useEffect(() => {
    checkAuth();
  }, []);

  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const { setLogout, setModal, checkAuth } = useActions();
  const classes = useStyles();

  const { isAuth, openModal, mainInfo } = useTypedSelector(({ userReducer }) => {
    return {
      isAuth: userReducer.isAuth,
      openModal: userReducer.openModal,
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

  //modal
  const setOpenModal = () => {
    setModal(true);
    handleClose();
  };
  const setCloseModal = React.useCallback(() => {
    setModal(false);
  }, []);

  const makeLogout = (): void => {
    setLogout();
  };
  return (
    <AppBar position="relative">
      <Toolbar className={classes.flex}>
        <Typography variant="h5">TT.ru</Typography>
        <div className={classes.flex}>
          {isAuth ? (
            navigation.map((element) => (
              <Link href={element.href} key={element.title}>
                <Button variant="text" startIcon={element.img} color="default">
                  <a className={classes.navigation}>{element.title}</a>
                </Button>
              </Link>
            ))
          ) : (
            <Link href="/">
              <Button variant="text" startIcon={<SearchIcon />} color="default">
                <a className={classes.navigation}>Поиск</a>
              </Button>
            </Link>
          )}
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
          <Button variant="contained" onClick={setOpenModal}>
            Войти
          </Button>
        )}
        <HeaderModal classes={classes} openModal={openModal} setCloseModal={setCloseModal} />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
