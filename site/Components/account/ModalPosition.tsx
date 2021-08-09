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

import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

import { useStyles } from './Modal.style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { userActions } from '../Interfaces/IUser';

interface PositionProps {
  position: boolean;
  closeModalPosition: any;
  setSphere: any;
  sphereActivity: string[];
  desiredSalary: string;
  desiredPosition: string;
}

const specializations = [
  'Бухгалтерия',
  'Закупки',
  'Другое',
  'Рабочий персонал',
  'Добыча сырья',
  'Информационный технологии, Интернет, Мультимедия',
  'Искусство, Развлечение, Масс-медиа',
  'Маркетинг, реклама, PR',
  'Медицина, Фармацевтика',
  'Наука, Образование',
  'Производство, Технологии',
  'Страхование',
  'Строительство, Архитектура',
  'Транспорт, Логистика',
  'Туризм, Гостиницы, Рестораны',
  'Управление персоналом',
  'Финансы, Банки, Инвестиции',
  'Юристы',
  'Административный персонал',
  'Продажи',
  'Автомобильный бизнес',
  'Консултирование',
];

const ModalPosition: React.FC<PositionProps> = ({
  position,
  closeModalPosition,
  setSphere,
  desiredSalary,
  desiredPosition,
  sphereActivity,
}) => {
  const classes = useStyles();
  const [positionInput, setPositionInput] = React.useState<string>(desiredPosition);
  const [salary, setSalary] = React.useState<string>(desiredSalary);

  const [specializationInput, setSpecializationInput] = React.useState<string>('');
  const [currentTarget, setCurrentTarget] = React.useState<string[]>(sphereActivity);

  const changePositionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPositionInput(value);
  };

  const changeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSalary(value);
  };
  const findSpecialization = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSpecializationInput(value);
  };
  const addSpecialization = (title: string) => {
    if (currentTarget.includes(title)) {
      return setCurrentTarget(currentTarget.filter((element) => element !== title));
    }
    if (currentTarget.length === 3) {
      return;
    }
    setCurrentTarget([...currentTarget, title]);
  };
  const filterSpecialization = React.useMemo(() => {
    return specializations.filter((element) =>
      element.toLowerCase().includes(specializationInput.toLowerCase()),
    );
  }, [specializations, specializationInput]);

  const clearAll = () => {
    setPositionInput('');
    setSalary('');
    setCurrentTarget([]);
  };

  const saveSphereActivities = () => {
    setSphere(positionInput, salary, currentTarget);
    closeModalPosition();
  };

  return (
    <Modal open={position} onClose={closeModalPosition} className={classes.modal}>
      <Fade in={position}>
        <Paper className={classes.paperModal}>
          <div>
            <div className={classes.title}>
              <Typography align="center" color="primary" variant="h5" gutterBottom>
                Желаемая должность
              </Typography>
              <Button variant="outlined" color="primary" onClick={clearAll}>
                очистить
              </Button>
            </div>

            <TextField
              margin="dense"
              variant="standard"
              label="Должность"
              fullWidth
              value={positionInput}
              onChange={changePositionInput}></TextField>
            <TextField
              margin="dense"
              variant="standard"
              label="Уровень дохода"
              type="number"
              fullWidth
              value={salary}
              onChange={changeSalary}></TextField>
          </div>
          <div>
            <Typography color="primary" variant="h5">
              Специализация
            </Typography>
            <div className={classes.skills}>
              {currentTarget.map((element, index) => (
                <div className={classes.skill} key={index}>
                  {element}
                </div>
              ))}
            </div>
            <TextField
              margin="dense"
              variant="standard"
              label="Название сферы деятельности"
              fullWidth
              value={specializationInput}
              onChange={findSpecialization}></TextField>
            <div className={classes.specializationWrapper}>
              {filterSpecialization.map((element, index) => {
                return (
                  <div className={classes.specialization} key={index}>
                    <Checkbox
                      checked={currentTarget.includes(element)}
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                      onClick={() => addSpecialization(element)}
                    />
                    {element}
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            fullWidth
            className={classes.outlineBtn}
            variant="outlined"
            color="primary"
            onClick={saveSphereActivities}>
            Сохранить <br />
            Выбрано {currentTarget.length} из 3
          </Button>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default ModalPosition;
