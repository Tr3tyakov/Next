import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { IUseStylesIndex } from '../../styles/index.style';
import FilterListIcon from '@material-ui/icons/FilterList';
import FilterModal from './FilterModal';
interface IFilterVacanciesProps {
  classes: IUseStylesIndex;
  setFilter: any;
  title: string;
}

const FilterVacancies: React.FC<IFilterVacanciesProps> = ({ classes, setFilter, title }) => {
  const [input, setInput] = React.useState<string>('');
  const [modal, setModal] = React.useState<boolean>(false);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
  };

  const enterKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setFilter(input);
    }
  };
  const changeFilter = () => {
    setFilter(input);
  };

  const opendModalFilter = () => {
    setModal(true);
  };
  const closeModalFilter = React.useCallback(() => {
    setModal(false);
  }, []);
  return (
    <>
      <form onKeyPress={enterKeyPress} className={classes.form}>
        <TextField
          variant="filled"
          value={input}
          label={title}
          fullWidth
          onChange={changeInput}></TextField>
        <Button size="small" className={classes.positionBtn} onClick={opendModalFilter}>
          <FilterListIcon />
        </Button>
      </form>
      <FilterModal classes={classes} modal={modal} closeModalFilter={closeModalFilter} />

      <Button
        className={classes.filterBtn}
        variant="contained"
        color="primary"
        onClick={changeFilter}>
        Найти
      </Button>
    </>
  );
};

export default FilterVacancies;
