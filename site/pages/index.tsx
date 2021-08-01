import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from './Header';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from '../styles/index.style';

const Home: React.FC = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(findJob())
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <div>
          <Typography variant="h6">Вакансии для вас</Typography>
          <div className={classes.cards}>
            {/* <Card className={classes.root} key={element._id}>
              <CardHeader
                action={
                  <div>
                    <IconButton
                      aria-controls={element._id}
                      onClick={(e) => handleClick(e, element._id)}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      className={classes.menu}
                      id={element._id}
                      anchorEl={menu.anchor}
                      open={element._id === menu.id}
                      onClose={closeMenu}>
                      <MenuItem onClick={closeMenu}>Изменить</MenuItem>
                      <MenuItem onClick={() => deleteProduct(element._id)}>Удалить</MenuItem>
                    </Menu>
                  </div>
                }
                title={element.name}
                subheader={new Date(element.data).toLocaleString()}
              />
              <CardMedia
                className={classes.media}
                image={`http://localhost:5000/${element.image}`}
              />
              <CardContent>
                <Typography variant="h6" component="p">
                  {element.cost} Руб.
                </Typography>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
