import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  heading: {
    marginTop: '15px',
    color: '#0D47A1'
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));