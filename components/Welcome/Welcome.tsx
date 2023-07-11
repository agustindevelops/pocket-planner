//stuff
import { Title, Text, Anchor, Button } from '@mantine/core';
import useStyles from './Welcome.styles';

//components

export function Welcome() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.col1}>
            <Title className={classes.title} align="center" mt={100}>
              The Best Way to{' '}
              <Text component="span" className={classes.title2}>
                Plan Events
              </Text>
            </Title>
            <Text
              className={classes.subtitle}
              color="dimmed"
              align="center"
              size="lg"
              sx={{ maxWidth: 580 }}
              mx="auto"
              mt="xl"
            >
              Pocket Planner. Events, trips, and get-togethers all made easier.
            </Text>
          </div>
          <div className={classes.col2}>
            <div className="emailList">
              <div className="form-container">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.x561WNnZoegyNzRxVIauEwHaE8&pid=Api"
                  alt="Picnic"
                  width="100%"
                  height="auto"
                  style={{ borderRadius: '14px' }}
                />
                <p className={classes.body}>
                  Join our Mailling List to get Notified When the App is Available
                </p>
                <a href="http://pocketplannerapp.com/" rel="noreferrer" target="_blank">
                  <Button>Join</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
