import { createStyles, Header, Container, Group, Burger, rem, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import NextLink from '../../../elements/NextLink';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
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
        <div>Logo</div>
        <Group spacing={5} className={classes.links}>
          {items}
          {user ? (
            <Button color="red" component={NextLink} href="/api/auth/logout">
              Log Out
            </Button>
          ) : (
            <Button component={NextLink} href="/api/auth/login">
              Log In
            </Button>
          )}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
};

export default CustomHeader;
