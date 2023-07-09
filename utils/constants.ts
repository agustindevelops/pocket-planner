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
