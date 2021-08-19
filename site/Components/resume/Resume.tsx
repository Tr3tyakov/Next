import React from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { useStyles } from './resume.style';
import { IInfoVacancy } from '../Interfaces/IVacancy';
import Image from 'next/image';
import ActiveStar from '../../public/img/activeStar.svg';
import Star from '../../public/img/star.svg';
import { changeFavoriteVacancies } from '../utils/api/vacancyApi';
import { IMainInfo } from '../Interfaces/IUser';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

interface IResumeProps {
  resume: any;
  id: string;
}
const Resume: React.FC<IResumeProps> = ({ resume, id }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Box>
        <Typography variant="h6">{resume.desiredPosition}</Typography>
        <Typography variant="subtitle2">{resume.desiredPay}&nbsp;руб.</Typography>
        <Typography variant="subtitle2">
          {`${resume.mainInfo.name} ${resume.mainInfo.secondName}`}
        </Typography>
        <Typography variant="subtitle2">{resume.mainInfo.email}</Typography>
        <Typography variant="subtitle2">{resume.education}</Typography>
        <div>
          <div>
            <Typography color="textSecondary" gutterBottom>
              Опубликовано: <br />
              {new Date(resume.date).toLocaleString()}
            </Typography>
          </div>
          <Button color="primary" variant="outlined">
            Контакты
          </Button>
        </div>
      </Box>
      <Box>
        {resume.mainInfo.avatar ? (
          <Box m={2}>
            <Image
              className={classes.avatar}
              src={`http://localhost:5000/${resume.mainInfo.avatar}`}
              layout="intrinsic"
              width={100}
              height={100}
            />
          </Box>
        ) : (
          <Avatar />
        )}
      </Box>
    </Paper>
  );
};

export default Resume;
