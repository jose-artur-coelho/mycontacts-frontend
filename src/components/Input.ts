import styled, { css } from "styled-components";

interface InputProps {
  $error?: boolean;
}

export default styled.input<InputProps>`
  box-sizing: border-box;
  width: 100%;
  border: 2px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    cursor: auto;
  }

  ${({ theme, $error }) =>
    $error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}
`;
