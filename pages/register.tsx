import {
  Container,
  Card,
  TextInput,
  PasswordInput,
  Button,
  Grid,
  Col,
  Title,
  Anchor,
  Text,
  Center,
} from '@mantine/core';
import React, { forwardRef } from 'react';
import { useForm } from '@mantine/form';
import Image from 'next/image';
import Link from 'next/link';
import { DatePickerInput } from '@mantine/dates';
import Layout from '../components/Layout/Layout';

export const NextLink = forwardRef(
  (
    { href, ...others }: React.ComponentPropsWithoutRef<typeof Link>,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <Link href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <span {...others} ref={ref} />
    </Link>
  )
);

const Register = () => {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      dateOfBirth: undefined,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <Layout>
      <Container>
        <Card shadow="sm" padding="xl" style={{ display: 'flex' }}>
          <Grid columns={12} style={{ flex: '1' }}>
            <Col span={5} style={{ display: 'flex' }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src="/register/Rectangle1.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Landscape to show where the user can go"
                />
              </div>
            </Col>
            <Col span={7}>
              <Title weight={100} align="center">
                Welcome to Pocket Planner
              </Title>
              <Title weight={100} align="center">
                Get ready to invite, plan, and go!
              </Title>
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Grid columns={12} justify="center">
                  <Col span={6}>
                    <TextInput
                      withAsterisk
                      label="First Name"
                      placeholder="John"
                      {...form.getInputProps('firstName')}
                    />
                  </Col>
                  <Col span={6}>
                    <TextInput
                      withAsterisk
                      label="Last Name"
                      placeholder="Doe"
                      {...form.getInputProps('lastName')}
                    />
                  </Col>
                  <Col span={6}>
                    <TextInput
                      withAsterisk
                      label="Email"
                      placeholder="your@email.com"
                      {...form.getInputProps('email')}
                    />
                  </Col>
                  <Col span={6}>
                    <DatePickerInput
                      label="Birthday"
                      placeholder="Pick date"
                      {...form.getInputProps('dateOfBirth')}
                    />
                  </Col>
                  <Col span={6}>
                    <PasswordInput
                      withAsterisk
                      label="Password"
                      placeholder="********"
                      {...form.getInputProps('password')}
                    />
                  </Col>
                  <Col span={6}>
                    <PasswordInput
                      withAsterisk
                      label="Confirm Password"
                      placeholder="********"
                      {...form.getInputProps('confirmPassword')}
                    />
                  </Col>
                  <Col span={12}>
                    <Center>
                      <Button type="submit">Register</Button>
                    </Center>
                  </Col>
                  <Col span={12}>
                    <Center>
                      <Anchor component={NextLink} href="/forgot-password" mx="auto">
                        Forgot Password
                      </Anchor>
                    </Center>
                  </Col>
                  <Col span={12}>
                    <Center>
                      <Text>
                        Already have an account?{' '}
                        <Button type="submit" mx="auto" variant="outline">
                          Login Here
                        </Button>
                      </Text>
                    </Center>
                  </Col>
                </Grid>
              </form>
            </Col>
          </Grid>
        </Card>
      </Container>
    </Layout>
  );
};

export default Register;
