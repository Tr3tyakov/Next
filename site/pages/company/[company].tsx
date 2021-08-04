import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useRouter } from 'next/dist/client/router';
import { useStyles } from './company.style';
import Image from 'next/image';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Divider } from '@material-ui/core';
import MainLayouts from '../../Components/layouts/MainLayouts';

const Company: React.FC = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <MainLayouts>
      <Breadcrumbs className={classes.nav}>
        <Link href="/">
          <a className={classes.textDecoration}>Home</a>
        </Link>
        <Link href="/currentWork/ee">
          <a className={classes.textDecoration}>Начинающий специалист с бесплатным обучением</a>
        </Link>
        <Typography color="textPrimary">{router.query.company}</Typography>
      </Breadcrumbs>
      {/* <Image
          src={'https://www.alltime.ru/obj/catalog/jewellary/sokolov/img/big/94024794_s.jpg'}
          alt="Company Picture"
          width={300}
          height={300}
        /> */}
      <div className={classes.check}>
        <Typography className={classes.gutterBottom} color="textSecondary">
          Проверенный работадатель
        </Typography>
        <CheckCircleOutlineIcon />
      </div>
      <Typography className={classes.gutterBottom} variant="h4">
        ЕЦН ТРЕНД
      </Typography>
      <Typography gutterBottom>Санкт-Петербург</Typography>
      <Divider />
      <div className={classes.flexBetween}>
        <Typography>Активные вакансии</Typography>
        <ArrowForwardIosIcon />
      </div>
      <Divider />
      <div>
        <Typography>
          С 2010 года компания ОнлайнТрейд занимается полной организацией, подготовкой, поставкой,
          закупой и продажей одежды Классический текст-«рыба». Является искажённым отрывком из
          философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45
          году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку.
          Распространился в 1970-х годах из-за трафаретов компании Letraset, a затем - из-за того,
          что служил примером текста в программе PageMaker. Испорченный текст, вероятно, происходит
          от его издания в Loeb Classical Library 1914 года, в котором слово dolorem разбито
          переносом так,
        </Typography>
      </div>
    </MainLayouts>
  );
};

export default Company;
