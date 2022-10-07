import styled from "styled-components";

export const Gallery = styled.div`
  @media (max-width: 480px) {
    max-width: 440px;
    height: auto;
  }
  @media (min-width: 768px) {
    max-width: 350px;
    height: auto;
  }
  @media (min-width: 1200px) {
    max-width: 600px;
    height: 600px;
  }
`;
