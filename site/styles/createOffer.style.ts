import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
  },
  maxWidth: {
    maxWidth: '700px',
    width: '100%',
  },
  cursor: {
    maxWidth: '200px',
    cursor: 'pointer',
  },
  graph: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '20px 0',
  },

  checkbox: {
    width: '500px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  btns: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btn: {
    margin: '20px 20px 0 0',
  },
  typeCategory: {
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  currency: {
    maxWidth: '100px',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px 0',
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
  column: {
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textArea: {
    width: '100%',
    maxHeight: '500px',
    minHeight: '200px',
    fontSize: '15px',
    borderRadius: '5px',
    overflow: 'auto',
    resize: 'none',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperModal: {
    padding: '20px',
    maxWidth: '500px',
    minWidth: '250px',
    maxHeight: '950px',
  },
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
});

export type IuseStylesCreateOffer = ReturnType<typeof useStyles>;
