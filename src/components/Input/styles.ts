import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  color: #666360;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}



  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  /* Cor de fundo do autocomplete */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #232129 inset;
  }

  /* Cor do texto do autocomplete */
  input:-webkit-autofill {
    -webkit-text-fill-color: #f4ede8;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
