import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  container: {
    margin: '20px auto',
    position: 'relative',
  },
  backGround: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0E0E0',
    padding: '0 0 40px 0',
    boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)',
  },
  companyTag: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: '-85px',
    width: '200px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)',
  },
  titleTag: {
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyInfo: {
    margin: '40px 0',
  },
  flex: {
    cursor: 'pointer',
    padding: '5px 10px 5px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  city: {
    cursor: 'pointer',
    height: '45px',
    padding: '5px 10px 5px 0',
  },
  marginTop: {
    margin: '20px 0 0 0 ',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  skill: {
    margin: '5px 5px 0 0',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #CCCCCC ',
    backgroundColor: '#ECECEC',
  },
  moreVacancies: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btnVacancies: {
    margin: '20px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
