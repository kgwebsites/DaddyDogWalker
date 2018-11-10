import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  padding: 8px 30px;
  height: 30px;
  max-width: calc(100% - 60px);
  margin-top: 18px;
  background: #b3e5fc;
  border: 0;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  box-shadow: 0px 10px 5px -10px #333;
  &:hover,
  &:focus {
    background: #9edaf6;
    box-shadow: 0px 0px 5px -2px #333;
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
