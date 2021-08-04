import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'next/link';
import { useStyles } from '../styles/message.style';
import MainLayouts from '../Components/layouts/MainLayouts';

const Message: React.FC = () => {
  const classes = useStyles();
  return (
    <MainLayouts>
      <div className={classes.wrapper}>
        <div>
          <Typography variant="h4">Сообщения</Typography>
        </div>
        <div className={classes.flex}>
          <EmailIcon className={classes.img} />
          <Typography variant="h6">Сообщений пока нет</Typography>
          <Typography variant="subtitle2">
            Здесь будут находиться ваши чаты с работодателями
          </Typography>
        </div>
        <div>
          <Link href="/">
            <a>
              <Button variant="contained" color="primary">
                Искать подписки
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Message;
