import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    font-size: 24px;
    color: #222;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.lighter};
    }
  }
`;
export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

interface ListHeaderProps {
  $orderBy: string;
}

export const ListHeader = styled.header<ListHeaderProps>`
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
export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    .contact-name {
      display: flex;
      align-items: center;
      small {
        margin-left: 8px;
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        border-radius: 4px;
        font-size: 12px;
        padding: 6px 3px;
        text-transform: uppercase;
      }
    }
    span {
      color: ${({ theme }) => theme.colors.gray[200]};
      font-size: 14px;
    }
  }
  .buttons {
    button,
    img {
      width: 20px;
      height: 20px;
    }
    button {
      background: transparent;
      border: none;
      margin-left: 10px;
    }
  }
`;
