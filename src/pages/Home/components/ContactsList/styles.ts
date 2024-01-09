import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-bottom: 16px;
  }

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
