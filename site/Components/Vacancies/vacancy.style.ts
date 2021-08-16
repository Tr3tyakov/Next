import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '100%',
  },
  ownerCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    boxShadow: '0 4px 5px rgba(63, 81, 181, 1)',
    height: '100%',
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
    borderRadius: '4px',
    color: '#3f51b5',
    border: '1px solid rgba(63, 81, 181, 0.5)',
    fontWeight: 500,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 0 0 0',
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
  favoritePaper: {
    width: '100%',
    margin: '10px 0',
  },
  favoriteCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 5px rgba(63, 81, 181, 1)',
    height: '100%',
  },
  favoriteBtns: {
    margin: '0 0 20px 0',
    padding: '0 16px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  favoriteBtn: {
    margin: '5px',
  },
  justify: {
    maxWidth: '280px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export type IUseStylesVacancy = ReturnType<typeof useStyles>;
