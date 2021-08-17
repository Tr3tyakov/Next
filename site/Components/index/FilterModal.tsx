import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../styles/index.style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import { useActions } from '../Hooks/useAction';
import { IUseStylesIndex } from '../../styles/index.style';
import { currencies } from '../../pages/CreateVacancy';
import { MenuItem } from '@material-ui/core';
interface IFilterModalProps {
  classes: IUseStylesIndex;
  closeModalFilter: any;
  modal: boolean;
}

const FilterModal: React.FC<IFilterModalProps> = React.memo(
  ({ classes, modal, closeModalFilter }) => {
    const [position, setPosition] = React.useState<string>('');
    const [currency, setCurrency] = React.useState<string>('');

    const setExample = () => {
      setPosition('Специалист по тестированию');
    };
    const changePosition = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPosition(value);
    };
    const changeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setCurrency(value);
    };
    return (
      <Modal open={modal} onClose={closeModalFilter} className={classes.modal}>
        <Fade in={modal}>
          <Paper className={classes.paper}>
            <div>
              <Typography variant="h5" color="primary" gutterBottom>
                Поиск вакансий
              </Typography>
              <Box margin={'5px 0'}>
                <TextField
                  label="Желаемая вакансия"
                  fullWidth
                  value={position}
                  onChange={changePosition}
                  helperText={
                    <div className={classes.flex}>
                      <p className={classes.p}>Например: &nbsp;</p>
                      <p className={classes.example} onClick={setExample}>
                        Специалист по тестированию
                      </p>
                    </div>
                  }></TextField>
              </Box>
              <TextField label="Город" fullWidth></TextField>
              <div>
                <TextField label="Начальная зарплата"></TextField>
                <TextField
                  //   className={classes.currency}
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
              <Box mt={2}>
                <Button variant="contained" color="primary" fullWidth>
                  Найти
                </Button>
              </Box>
            </div>
          </Paper>
        </Fade>
      </Modal>
    );
  },
);

export default FilterModal;
