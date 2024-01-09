import styled from "styled-components";

export const ErrorContainer = styled.div`
  margin-top: 50px;
  display: flex;

  align-items: center;
  justify-content: center;

  img {
    width: 84px;
    height: 84px;
  }

  .details {
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 12px;
    }
  }
`;
