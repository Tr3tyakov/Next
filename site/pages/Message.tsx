import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
const message: React.FC = () => {
  return (
    <Container>
      <div>
        <Typography>Сообщения</Typography>
      </div>
      <div>
        <EmailIcon />
        <Typography variant="h6">Сообщений пока нет</Typography>
        <Typography variant="subtitle2">
          Здесь будут находиться ваши чаты с работодателями
        </Typography>
      </div>
      <div>
        <Button variant="contained" color="primary">
          Искать Вакансии
        </Button>
      </div>
    </Container>
  );
};

export default message;
