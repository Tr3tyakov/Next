import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import React from 'react';
import { specializations } from '../account/ModalPosition';
import Box from '@material-ui/core/Box';

interface IModalVacancyProps {
  classes: {
    modal: string;
    specializationWrapper: string;
    specialization: string;
    paperModal: string;
    skills: string;
    skill: string;
    flex: string;
  };
  modal: boolean;
  closeModal: any;
  setState: any;
}

const ModalVacancy: React.FC<IModalVacancyProps> = ({ classes, modal, closeModal, setState }) => {
  const [input, setInput] = React.useState<string>('');
  const [currentSpecialization, setCurrentSpecialization] = React.useState<string[]>([]);

  const filterSpecialization = React.useMemo(() => {
    return specializations.filter((element) => element.toLowerCase().includes(input.toLowerCase()));
  }, [specializations, input]);

  const addSpecialization = (element: string) => {
    if (currentSpecialization.includes(element)) {
      return setCurrentSpecialization(
        currentSpecialization.filter((specialization) => specialization !== element),
      );
    }
    setCurrentSpecialization([...currentSpecialization, element]);
  };
  const findSpecialization = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
  };
  const saveSpecialization = () => {
    setState(currentSpecialization);
    closeModal();
  };
  const clearAll = () => {
    setCurrentSpecialization([]);
    setInput('');
  };
  return (
    <Modal open={modal} onClose={closeModal} className={classes.modal}>
      <Fade in={modal}>
        <Paper className={classes.paperModal}>
          <div className={classes.flex}>
            <Typography variant="h5" color="primary">
              Специализации
            </Typography>
            <Button variant="outlined" color="primary" onClick={clearAll}>
              Очистить
            </Button>
          </div>
          <div className={classes.skills}>
            {currentSpecialization.map((element, index) => (
              <div className={classes.skill} key={index}>
                {element}
              </div>
            ))}
          </div>
          <TextField
            margin="dense"
            variant="standard"
            label="Сфера деятельности"
            fullWidth
            value={input}
            onChange={findSpecialization}></TextField>
          <div className={classes.specializationWrapper}>
            {filterSpecialization.map((element) => {
              return (
                <div className={classes.specialization} key={element}>
                  <Checkbox
                    checked={currentSpecialization.includes(element)}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onClick={() => addSpecialization(element)}
                  />
                  {element}
                </div>
              );
            })}
          </div>
          <Box mt={2}>
            <Button variant="contained" color="primary" fullWidth onClick={saveSpecialization}>
              Сохранить
            </Button>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default ModalVacancy;