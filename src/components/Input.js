import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const StyledInput = styled.input`
  display: block;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding: ${theme.paddings.small} ${theme.paddings.medium};
  margin-top: ${theme.margins.normal};
  margin-bottom: ${theme.margins.normal};
  margin-left: auto;
  margin-right: auto;
  border: 2px solid ${theme.colors.lightgray};
  border-radius: ${theme.borderRadius.normal};
  box-shadow: 5px 5px 18px #888888;
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeights.bold}

  transition: border 0.2s ease;
  &:focus,
  &:hover {
    border: 2px solid ${theme.colors.lightblue};
  }

  @media ${theme.devices.desktop} {
    width: 60%;
  }
`;

const Input = ({ ...props }) => <StyledInput {...props} />;

export default Input;
