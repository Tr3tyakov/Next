import React from 'react';
import Button from '@material-ui/core/Button';
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
import CloseIcon from '@material-ui/icons/Close';

interface AccountProps {
  modal: boolean;
  closeModalSkills: any;
}

const AccountModal: React.FC<AccountProps> = ({ modal, closeModalSkills }) => {
  const [input, setInput] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);
  const [skills, setSkills] = React.useState<string[]>([]);
  const classes = useStyles();

  //input
  const changeInputValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const check = RegExp(/\d/gi).test(value);
    setInput(value);
    setError(false);
    if (check) {
      setError(true);
    }
  };
  const deleteSkill = (title: string) => {
    setSkills(skills.filter((element) => element !== title));
  };
  const addSkill = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSkills([...skills, input]);
      setInput('');
    }
  };
  return (
    <Modal open={modal} onClose={closeModalSkills} className={classes.modal}>
      <Fade in={modal}>
        <Paper className={classes.paperModal}>
          <div>
            <Typography align="center" color="primary" variant="h5" gutterBottom>
              Ключевые навыки
            </Typography>
            <form onKeyPress={addSkill}>
              <TextField
                margin="dense"
                variant="standard"
                label="Добавить навык"
                error={error}
                helperText={error && 'Навыки не должны содержать цифры'}
                fullWidth
                value={input}
                onChange={changeInputValidation}></TextField>
            </form>
          </div>
          <div className={classes.skills}>
            {skills.map((element, index) => {
              return (
                <div className={classes.skill} key={index}>
                  {element}

                  <CloseIcon
                    cursor="pointer"
                    fontSize="small"
                    onClick={() => deleteSkill(element)}
                  />
                </div>
              );
            })}
          </div>
          <Button
            className={classes.outlineBtn}
            // onClick={saveChanges}
            variant="outlined"
            disabled={error}
            color="primary">
            Сохранить навыки
          </Button>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default AccountModal;
