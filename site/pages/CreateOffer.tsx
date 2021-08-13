import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/createOffer.style';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import MainLayouts from '../Components/layouts/MainLayouts';
import { Divider, TextareaAutosize } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextFieldVacancy from '../Components/vacancies/TextFieldVacancy';
import CheckBoxVacancy from '../Components/vacancies/CheckBoxVacancy';

import KeySkills from '../Components/vacancies/KeySkills';
import ModalVacancy from '../Components/vacancies/ModalVacancy';

const typeCategory = ['A', 'B', 'C', 'D', 'E', 'BE', 'CE', 'DE', 'TM', 'TB'];

const workExperiences = ['Нет опыта', 'От 1 года до 3 лет', 'От 3 до 6 лет', 'Более 6 лет'];

const schedule = [
  'Полный день',
  'Сменный график',
  'Гибкий график',
  'Удаленная работа',
  'Вахтовый метод',
];

const typeEmployment = [
  'Полная занятость',
  'Частичная занятость',
  'Проектная/Временная работа',
  'Волонтерство',
  'Стажировка',
];

const currencies = [
  {
    value: 'RUB',
    label: '₽',
  },
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
];

const createOffer: React.FC = () => {
  const [vacancy, setVacancy] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [textArea, setTextArea] = React.useState<string>('');
  const [specialization, setSpecialization] = React.useState<string[]>([]);
  const [modal, setModal] = React.useState<boolean>(false);

  const [firstSalary, setFirstSalary] = React.useState<string>('');
  const [secondSalary, setSecondSalary] = React.useState<string>('');
  const [currency, setCurrency] = React.useState<string>('');
  const [statusSalary, setStatusSalary] = React.useState<string>('');

  const [skills, setSkills] = React.useState<string[]>([]);
  const [category, setCategory] = React.useState<string[]>([]);

  //checkbox
  const [experiences, setExperiences] = React.useState<string[]>([]);
  const [workSchedule, setWorkSchedule] = React.useState<string[]>([]);
  const [employment, setEmployment] = React.useState<string[]>([]);

  const classes = useStyles();

  //typeCategory
  const addCategory = (currentCategory: string) => {
    if (category.includes(currentCategory)) {
      return setCategory(category.filter((element) => element !== currentCategory));
    }
    setCategory([...category, currentCategory]);
  };
  const changeStatus = (title: string) => {
    setStatusSalary(title);
  };

  //textArea
  const changeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setTextArea(value);
  };

  //salary
  const changeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCurrency(value);
  };
  const changeFirstSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFirstSalary(value);
  };
  const changeSecondSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSecondSalary(value);
  };

  //modal
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const createNewVacancy = () => {
    console.log(
      vacancy,
      city,
      address,
      specialization,
      textArea,
      category,
      firstSalary,
      secondSalary,
      currency,
      skills,
      experiences,
      workSchedule,
      employment,
    );
  };
  return (
    <MainLayouts>
      <Typography variant="h4" gutterBottom>
        Новая вакансия
      </Typography>
      <TextFieldVacancy
        classes={classes}
        title="Название вакансии"
        label="Вакансия"
        value={vacancy}
        change={setVacancy}
      />
      <TextFieldVacancy
        classes={classes}
        title="Вакансия в городе"
        label="Город"
        value={city}
        change={setCity}
      />
      <TextFieldVacancy
        classes={classes}
        title="Адрес офиса"
        label="Адрес"
        value={address}
        change={setAddress}
      />
      <div className={classes.graph}>
        <Typography variant="subtitle1">Специализации</Typography>
        <div className={classes.maxWidth}>
          <Typography className={classes.cursor} color="primary" onClick={openModal}>
            {specialization.length ? 'Изменить специализации' : 'Указать специализации'}
          </Typography>
          {specialization.length ? (
            <div className={classes.skills}>
              {specialization.map((element, index) => (
                <div className={classes.skill} key={index}>
                  {element}
                </div>
              ))}
            </div>
          ) : (
            ''
          )}

          <ModalVacancy
            classes={classes}
            modal={modal}
            closeModal={closeModal}
            setState={setSpecialization}
          />
        </div>
      </div>
      <div className={classes.graph}>
        <Typography gutterBottom>Предполагаемый уровень месячного дохода</Typography>
        <div>
          <div style={{ justifyContent: 'space-evenly', width: '100%' }}>
            <TextField
              variant="filled"
              label="От"
              value={firstSalary}
              size="small"
              onChange={changeFirstSalary}></TextField>
            <TextField
              variant="filled"
              label="До"
              size="small"
              value={secondSalary}
              onChange={changeSecondSalary}></TextField>
            <TextField
              className={classes.currency}
              variant="filled"
              size="small"
              value={currency}
              select
              onChange={changeCurrency}>
              {currencies.map((element) => (
                <MenuItem key={element.value} value={element.value}>
                  {element.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.checkbox}>
            <Checkbox
              checked={statusSalary.includes('до вычеты НДФЛ')}
              color="primary"
              onClick={() => changeStatus('до вычеты НДФЛ')}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography>До вычеты НДФЛ</Typography>
          </div>
          <div className={classes.checkbox}>
            <Checkbox
              checked={statusSalary.includes('На руки')}
              color="primary"
              onClick={() => changeStatus('На руки')}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography>На руки</Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography gutterBottom>Описание вакансии</Typography>
        <TextareaAutosize className={classes.textArea} value={textArea} onChange={changeTextArea} />
      </div>
      <KeySkills classes={classes} stateSkills={skills} setSkills={setSkills} />
      <div className={classes.graph}>
        <Typography>Категория прав</Typography>
        <div className={classes.typeCategory}>
          {typeCategory.map((element) => (
            <Button
              key={element}
              color="primary"
              variant={category.includes(element) ? 'contained' : 'outlined'}
              onClick={() => addCategory(element)}>
              {element}
            </Button>
          ))}
        </div>
      </div>
      <Divider />

      <CheckBoxVacancy
        classes={classes}
        title={'Опыт работы'}
        array={workExperiences}
        state={experiences}
        setChange={setExperiences}
      />
      <CheckBoxVacancy
        classes={classes}
        title={'График работы'}
        array={schedule}
        state={workSchedule}
        setChange={setWorkSchedule}
      />
      <CheckBoxVacancy
        classes={classes}
        title={'Тип занятости'}
        array={typeEmployment}
        state={employment}
        setChange={setEmployment}
      />

      <div className={classes.btns}>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={createNewVacancy}>
          Разместить вакансию
        </Button>
        <Button className={classes.btn} variant="outlined" color="primary">
          Предварительный просмотр
        </Button>
      </div>
    </MainLayouts>
  );
};

export default createOffer;
