import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
const Favorite: React.FC = () => {
  return (
    <Container maxWidth="md">
      <div>
        <Typography variant="h4">Избранное</Typography>
      </div>
      <div>
        <Button variant="contained" color="default">
          Вакансии
        </Button>
        <Button variant="contained" color="default">
          Подписки
        </Button>
      </div>
      {/* {subscribe ?} */}
      <div>
        <NotificationsIcon />
        <Typography variant="h6">Подписывайтесь на поиски</Typography>
        <Typography variant="subtitle2">
          Получайте уведомления о новых вакансиях по интересующим вас параметрам
        </Typography>
      </div>
      <div>
        <Button variant="contained" color="primary">
          Создать подписку
        </Button>
      </div>
    </Container>
  );
};

export default Favorite;
