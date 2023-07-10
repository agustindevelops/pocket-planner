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
              <Text inherit variant="gradient" component="span">
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
              This starter Next.js project includes a minimal setup for server side rendering, if
              you want to learn more on Mantine + Next.js integration follow{' '}
              <Anchor href="https://mantine.dev/guides/next/" size="lg">
                this guide
              </Anchor>
              . To get started edit index.tsx file.
            </Text>
          </div>
          <div className={classes.col2}>
            <div className="emailList">
              <div className="form-container">
                <p className="sign-in-txt">
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
