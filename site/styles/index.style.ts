import { IuseStyles } from './../Components/header/header.style';
import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperModal: {
    padding: '20px',
    maxWidth: '500px',
  },
  paper: {
    padding: '20px',
    maxWidth: '450px',
    width: '100%',
    minWidth: '250px',
  },
  p: {
    margin: 0,
  },
  example: {
    margin: '0',
    color: '#303f9f',
    cursor: 'pointer',
  },
  flex: {
    display: 'flex',
  },
  filterBtn: {
    marginLeft: '10px',
  },
  cardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  container: {
    margin: '20px auto',
  },
  form: {
    width: '100%',
    position: 'relative',
  },
  positionBtn: {
    position: 'absolute!important' as any,
    zIndex: 1000,
    top: '0',
    height: '55px',
    right: '0',
  },
});

export type IUseStylesIndex = ReturnType<typeof useStyles>;
