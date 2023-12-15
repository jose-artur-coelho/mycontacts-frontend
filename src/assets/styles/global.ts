import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Sora', sans-serif;

  }
  body {
    background: ${({ theme }) => theme.backGroundColor};
    font-size: 16px;
  }
  button {
    cursor: pointer;
    
  }
`;
