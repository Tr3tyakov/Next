import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

interface ITextFieldProps {
  classes: {
    flex: string;
    maxWidth: string;
  };
  label: string;
  title: string;
  value: string | string[];
  change: any;
}

const TextFieldVacancy: React.FC<ITextFieldProps> = React.memo(
  ({ classes, title, label, value, change }) => {
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      change(inputValue);
    };
    return (
      <div className={classes.flex}>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <TextField
          className={classes.maxWidth}
          variant="filled"
          color="primary"
          label={label}
          value={value}
          size="small"
          onChange={changeValue}></TextField>
      </div>
    );
  },
);

export default TextFieldVacancy;
