import React from 'react';

import { Container } from '@arch-ui/layout';
import { Title } from '@arch-ui/typography';

const About = ({ ...config }) => {
  console.log(config.filter({ status: 'asda' }));
  return (
    <Container>
      <Title as="h1" margin="both">
        About
      </Title>
      <p>This is a custom page in the Blog demo project Admin UI.</p>
      <p>
        It demonstrates the ability to add navigation routes that render custom React components,
        and use the KeystoneJS Design System.
      </p>
    </Container>
  );
};

export default About;
