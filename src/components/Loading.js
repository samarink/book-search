import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <Container>
    <Loader
      type="TailSpin"
      color={theme.colors.lightblue}
      height="100"
      width="100"
    />
  </Container>
);

export default Loading;
