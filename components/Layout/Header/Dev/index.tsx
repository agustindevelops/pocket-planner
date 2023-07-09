import Menu from '../../../../elements/Menu';

const eventId = 1;

const Dev = () => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development') return <></>;

  return (
    <Menu
      label="All Pages"
      menuSections={[
        {
          label: 'Homepages',
          menuItems: [
            { label: 'List of Events', link: '/events' },
            { label: 'Landing Page', link: '/' },
          ],
        },
        {
          label: 'start',
          menuItems: [
            { label: 'Create Event', link: `/event/${eventId}/create` },
            { label: 'Invite Collaborators', link: `/event/${eventId}/create/collaborators` },
            { label: 'Add Budget Info', link: `/event/${eventId}/create/budget` },
            { label: 'Add Activities', link: `/event/${eventId}/create/activities` },
            { label: 'Time', link: `/event/${eventId}/create/time` },
            { label: 'To Do List', link: `/event/${eventId}/create/toDoList` },
            { label: 'Guest List', link: `/event/${eventId}/create/guestList` },
          ],
        },
        {
          label: 'iterative planning',
          menuItems: [
            { label: 'Event Hub', link: `/event/${eventId}` },
            { label: 'Activities', link: `/event/${eventId}/activities` },
            { label: 'Admin', link: `/event/${eventId}/admin` },
            { label: 'Budget', link: `/event/${eventId}/budget` },
            { label: 'Communication', link: `/event/${eventId}/communication` },
            { label: 'Guest List', link: `/event/${eventId}/guestList` },
            { label: 'Invite', link: `/event/${eventId}/invite` },
            { label: 'Locations', link: `/event/${eventId}/locations` },
            { label: 'To Do List', link: `/event/${eventId}/toDoList` },
          ],
        },
      ]}
    />
  );
};

export default Dev;
