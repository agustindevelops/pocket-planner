export const NAV = {
  AUTHENTICATED_USER: {
    AUTH: {
      name: 'Log Out',
      link: '/api/auth/logout',
    },
    HOME: {
      label: 'Home',
      link: '/dashboard',
    },
    INITIATION: {
      CREATE_EVENT: {
        label: 'Create Event',
        link: '/dashboard',
      },
    },
  },
  UNAUTHENTICATED_USER: {
    AUTH: {
      name: 'Log In',
      link: '/api/auth/login',
    },
    HOME: {
      name: 'Landing Page',
      link: '/',
    },
  },
} as const;

export const TEST_DATA = {
  EVENTS: [
    {
      id: '5f4d3c2b-ec69-4d7b-b8c9-9f6d9a1e9e3c',
      name: "Agustin's Birthday Party",
      address: {
        street: '8446 Country Village',
        unit: 'APT 1603',
        city: 'San Antonio',
        state: 'TX',
        zip: '77038',
      },
      time: {
        start: new Date('2023-05-23T23:00:00Z'),
        end: new Date('2023-05-24T07:00:00Z'),
      },
      guests: 20,
      image:
        'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    },
    {
      id: '8a7e9d0f-6f4e-42a5-a4f8-2f7b4c7d8a7d',
      name: "Lila's Graduation Party",
      address: {
        street: '1234 Main Street',
        unit: '',
        city: 'Austin',
        state: 'TX',
        zip: '78701',
      },
      time: {
        start: new Date('2023-06-10T21:00:00Z'),
        end: new Date('2023-06-11T03:00:00Z'),
      },
      guests: 50,
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGlvbiUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'c2b1f3d6-3a1f-4e2b-b6d0-8a5c9f3a6b5e',
      name: "Mia's Baby Shower",
      address: {
        street: '5678 Elm Street',
        unit: '',
        city: 'Dallas',
        state: 'TX',
        zip: '75201',
      },
      time: {
        start: new Date('2023-07-15T18:00:00Z'),
        end: new Date('2023-07-16T00:00:00Z'),
      },
      guests: 25,
      image:
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHNob3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'f9e8d7c5-2a0e-49b9-94c3-7d6b5a4b3c2d',
      name: "Carlos' Retirement Party",
      address: {
        street: '9101 Oak Lane',
        unit: '',
        city: 'Houston',
        state: 'TX',
        zip: '77002',
      },
      time: {
        start: new Date('2023-08-01T22:00:00Z'),
        end: new Date('2023-08-02T04:00:00Z'),
      },
      guests: 40,
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmV0aXJlbWVudCUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ],
} as const;
