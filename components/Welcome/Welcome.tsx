import { Title, Text, List, ThemeIcon, Container } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <Container>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to the{' '}
        <Text inherit variant="gradient" component="span">
          Pocket Planner
        </Text>
      </Title>

      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }
      >
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed size="1rem" />
            </ThemeIcon>
          }
        >
          Hero
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed size="1rem" />
            </ThemeIcon>
          }
        >
          Pathos
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed size="1rem" />
            </ThemeIcon>
          }
        >
          Logos
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed size="1rem" />
            </ThemeIcon>
          }
        >
          Social Proof
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed size="1rem" />
            </ThemeIcon>
          }
        >
          Call To Action
        </List.Item>
      </List>
    </Container>
  );
}
