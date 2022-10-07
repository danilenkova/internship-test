import styled from "styled-components";

export const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: calc(100vw - 30px);
  @media (min-width: 481px) {
    max-width: 480px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
