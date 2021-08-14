import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
  },
  cardMainInfo: {
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    maxWidth: '230px',
  },
  cardTags: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  cardTag: {
    margin: '5px 5px 0 0',
    fontSize: '12px',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #CCCCCC ',
    backgroundColor: '#ECECEC',
  },
  favorite: {
    position: 'absolute',
    right: '5px',
    top: '4px',
  },
  starAdd: {
    color: '#FDBC23',
  },
  btns: {
    margin: '0 0 20px 0',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  date: {
    padding: '0 20px',
  },
  paper: {
    margin: '10px',
  },
  textDecoration: {
    textDecoration: 'none',
  },
  work: {
    lineHeight: '1.3 ',
  },
});

export type IUseStylesVacancy = ReturnType<typeof useStyles>;
