import styled from "styled-components";

interface ListHeaderProps {
  $orderBy: string;
}

export const Header = styled.header<ListHeaderProps>`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
    img {
      transform: ${({ $orderBy }) =>
        $orderBy === "asc" ? "rotate(180deg)" : "rotate(0deg)"};
      transition: transform 0.2s ease-in;
    }
  }
`;
