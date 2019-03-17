import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => {
  return {
    '@global': {
      html: {
        'font-family': 'sans-serif',
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
        'font-size': '16px',
        padding: theme.spacing.unit * 2
      },
      a: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  };
});

export default function GlobalStyles() {
  useStyles();
  return null;
}
