import { Autocomplete, Grid, createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.colorScheme === 'dark' ? '#F7EBDB' : '#FFF8EF',
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,
    fontFamily: 'Bree, Bree Light Oblique',

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  subtitle: {
    fontFamily: 'Merriweather, serif',
    fontSize: 24,
    fontWeight: 600,
  },
  heading: {
    fontFamily: 'Bree Light Oblique',
    fontSize: 50,
    fontWeight: 600,
  },
  body: {
    fontFamily: 'Urbanist Regular',
    fontSize: 20,
    fontWeight: 300,
  },
  container: {
    maxWidth: '1240px',
    padding: '0 1rem',
    margin: 'auto',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  col1: {
    padding: '1rem 1rem 1rem 0',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  col2: {
    padding: '1rem',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '.8rem',
  },
}));
