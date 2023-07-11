import { Header, Container, Group, Burger, Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import NextLink from '../../../elements/NextLink';
import { Image } from 'next/image';

import PPlogo from '../../../public/assets/PPlogo1.png';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? '#FFF8EF' : '#FFF8EF',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
  logo: {
    backgroundColor: 'transparent',
    width: '20px',
    height: '20px',
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const LINKS: { label: string; link: string }[] = [];

const CustomHeader = () => {
  const { user } = useUser();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = LINKS.map((link, i) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: !i })}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <img className={classes.logo} src={PPlogo} alt="logo" />
        <Group spacing={5} className={classes.links}>
          {items}
          <Dev />
          {user ? (
            <Button color="red" component={NextLink} href={NAV.AUTHENTICATED_USER.AUTH.link}>
              {NAV.AUTHENTICATED_USER.AUTH.name}
            </Button>
          ) : (
            <Button component={NextLink} href={NAV.UNAUTHENTICATED_USER.AUTH.link}>
              {NAV.UNAUTHENTICATED_USER.AUTH.name}
            </Button>
          )}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          color="#62B2C2"
        />
      </Container>
    </Header>
  );
};

export default CustomHeader;
