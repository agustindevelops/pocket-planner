import { Container, Group, Title, Button, Card, Image, Text, Flex, Stack } from '@mantine/core';
import { BsFillPeopleFill, BsCalendar, BsGeoAlt } from 'react-icons/bs';
import { FC } from 'react';
import { format } from 'date-fns';
import Layout from '../../components/Layout';
import { TEST_DATA } from '../../utils/constants';
import NextLink from '../../elements/NextLink';

const { v4: uuidv4 } = require('uuid');

type Event = {
  id: string;
  image: string;
  name: string;
  address: {
    street: string;
    unit: string;
    city: string;
    state: string;
    zip: string;
  };
  time: {
    start: Date;
    end: Date;
  };
  guests: number;
};

const EventCard: FC<Event> = (props) => {
  const { id, name, address, time, guests, image } = props;
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      href={`/event/${id}`}
      component={NextLink}
    >
      <Card.Section>
        <Flex align="center">
          <Image src={image} height={280} width={200} alt="Norway" mr="md" />
          <Stack>
            <Text weight={500} size={36}>
              {name}
            </Text>
            <Group>
              <BsCalendar />
              <Group>
                <Text weight={500}>Start:</Text>
                <Text>{format(time.start, 'MMMM do, yyyy, h:mm a')}</Text>
              </Group>
              <Group>
                <Text weight={500}>End:</Text>
                <Text>{format(time.end, 'MMMM do, yyyy, h:mm a')}</Text>
              </Group>
            </Group>
            <Group>
              <BsGeoAlt />
              <Flex justify="center" align="flex-start" direction="column" wrap="wrap">
                <Text>
                  {address.street} {address.unit}
                </Text>
                <Text>
                  {address.city}, {address.state} {address.zip}
                </Text>
              </Flex>
            </Group>
            <Group>
              <BsFillPeopleFill />
              <Text>{guests} Guests</Text>
            </Group>
          </Stack>
        </Flex>
      </Card.Section>
    </Card>
  );
};

const Events = () => (
  <Layout>
    <Container>
      <Group position="apart">
        <Title>List of Your Events</Title>
        <Group position="apart">
          <Button component={NextLink} href={`/event/${uuidv4()}`}>
            Create New Event
          </Button>
        </Group>
      </Group>
      <Stack>
        {TEST_DATA.EVENTS.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </Stack>
    </Container>
  </Layout>
);

export default Events;
