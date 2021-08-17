import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
  title: {
    margin: '70px 0 20px',
    fontStyle: 'Bold',
    fontSize: '64px',
    fontWeight: '500' as any,
    lineHeight: '75px',
    textAlign: 'center',
    color: 'white',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '700px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  subTitle: {
    textAlign: 'center',
    fontStyle: 'Regular',
    fontSize: '24px',
    lineHeight: '28px',
    color: 'white',
  },
  btn: {
    width: '250px',
    height: '50px',
    margin: '22px auto 0 auto!important',
    borderRadius: '20px!important',
  },
  black: {
    padding: '20px 0 150px',
    width: '100%',
    backgroundColor: '#1E1B1B',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0 5px 0',
  },
  input: {
    outline: 'none',
    border: '1px solid white',
    width: '100%',
    height: '60px',
    padding: '10px 20px',
    fontSize: '20px',
    fontWeight: '500' as any,
    backgroundColor: '#C4C4C4',
    borderRadius: '4px',
  },
  gray: {
    padding: '0 0 60px 0',
    width: '100%',
    backgroundColor: '#5C5C5C',
  },
  inputSub: {
    color: 'white',
  },
  inputTarget: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline',
  },
  a: {
    textDecoration: 'none',
  },
});
