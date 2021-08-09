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
    flexDirection: 'column',
  },
  paper: {
    padding: '20px',
    margin: '5px',
    flex: 1,
  },
  info: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  btns: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btn: {
    margin: '10px 10px 0 0',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skills: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  spheres: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  skill: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 5px 0 0',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #CCCCCC ',
    backgroundColor: '#ECECEC',
  },
  gutterBottom: {
    margin: '0 0 1em 0',
  },
  lineHeight: {
    lineHeight: '2',
  },
  phone: {
    margin: 'auto',
    display: 'flex',
  },
});
