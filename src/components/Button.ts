import styled from "styled-components";

interface ButtonProps {
  $danger?: boolean;
}

export default styled.button<ButtonProps>`
  height: 52px;
  padding: 0 16px;
  border: none;
  background-color: ${({ theme, $danger }) =>
    $danger ? theme.colors.danger.main : theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background 0.2s ease-in;

  &:hover {
    background-color: ${({ theme, $danger }) =>
      $danger ? theme.colors.danger.light : theme.colors.primary.light};
  }
  &:active {
    background-color: ${({ theme, $danger }) =>
      $danger ? theme.colors.danger.dark : theme.colors.primary.dark};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    cursor: default;
  }
`;
