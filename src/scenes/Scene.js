import React from 'react';
import { Container, Content } from 'native-base';

import FooterMenu from '.././components/FooterMenu';

const Scene = ({ children }) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>

      <FooterMenu />
    </Container>
  );
};

export default Scene;
