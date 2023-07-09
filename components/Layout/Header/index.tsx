import { Header, Container, Group, Burger, Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import NextLink from '../../../elements/NextLink';
import { NAV } from '../../../utils/constants';
import useStyles from './styles';
import Dev from './Dev';

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
        <Link href="/">
          <Text className={classes.title} inherit variant="gradient" component="span">
            Pocket Planner
          </Text>
        </Link>

        <Group spacing={5} className={classes.links}>
          {items}
          <Dev />
          {user ? (
            <Button color="red" component={NextLink} href={NAV.AUTHENTICATED_USER.AUTH.link}>
              {NAV.AUTHENTICATED_USER.AUTH.name}
            </Button>
          ) : (
            <Button component={NextLink} href={NAV.UNAUTHENTICATED_USER.AUTH.name}>
              {NAV.UNAUTHENTICATED_USER.AUTH.name}
            </Button>
          )}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
};

export default CustomHeader;
