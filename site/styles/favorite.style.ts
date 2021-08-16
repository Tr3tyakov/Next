import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    height: '80vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  img: {
    width: '150px',
    height: '150px',
    margin: '0 0 20px 0',
  },
  cardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flex: {
    margin: '10px 0 20px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btns: {
    margin: '5px 0',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: '5px 5px',
  },
});
