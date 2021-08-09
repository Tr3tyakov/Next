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
    maxHeight: '950px',
  },
  paperSkill: {
    padding: '20px',
    maxWidth: '450px',
    width: '100%',
    minWidth: '250px',
  },
  outlineBtn: {
    flex: 1,
    margin: '10px 10px 0 0',
  },
  skills: {
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
  cancel: {},
  specializationWrapper: {
    height: '300px',
    width: '100%',
    overflow: 'auto',
  },
  specialization: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
