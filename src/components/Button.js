import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../theme';

const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: ${theme.colors.lightblue};
  border: none;
  width: 50%;
  color: ${theme.colors.white};
  padding: ${theme.paddings.small} ${theme.paddings.normal};
  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.normal};
  border-radius: ${theme.borderRadius.normal};
  transition-duration: 0.4s;
  cursor: pointer;
  margin-bottom: ${theme.margins.large};

  &:focus,
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.lightgray};
      cursor: not-allowed;
      box-shadow: none !important;
    `}

  @media ${theme.devices.desktop} {
    paddings: ${theme.paddings.normal} ${theme.paddings.big};
    width: 10%;
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
