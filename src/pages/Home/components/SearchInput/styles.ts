import styled from "styled-components";

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
    &:disabled {
      cursor: not-allowed;
    }
  }
`;
