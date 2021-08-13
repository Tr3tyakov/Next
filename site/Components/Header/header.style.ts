import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navigation: {
    display: 'flex',
    margin: '0 10px',
    color: 'white',
  },
  textDecortation: {
    textDecoration: 'none',
    color: 'black',
  },
  avatar: {
    borderRadius: '50%',
  },

  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperModal: {
    padding: '20px',
    minWidth: '200px',
    maxWidth: '500px',
    maxHeight: '350px',
  },
  btns: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  outlineBtn: {
    flex: 1,
    margin: '10px 10px 0 0',
  },
  btn: {
    margin: '10px 0 0 0',
  },
  forgotPassword: {
    margin: '35px 0 0 0',
    display: 'flex',
    justifyContent: 'flex-start',
  },
});
