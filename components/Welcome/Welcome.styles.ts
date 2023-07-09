import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
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
}));
