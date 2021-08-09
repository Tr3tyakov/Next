import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0 20px 0',
  },
  userIcon: {
    margin: '0 20px',
    height: '150px',
    width: '150px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePhoto: {
    cursor: 'pointer',
  },
  mainInfo: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0 0 0',
  },
  name: {
    display: 'flex',
    flex: 1,
    margin: '0 10px',
    flexDirection: 'column',
  },
  secondInfo: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'column',
  },
});
