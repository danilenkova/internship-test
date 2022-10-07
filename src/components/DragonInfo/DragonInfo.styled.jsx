import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Info = styled.div`
  margin-top: 30px;
  max-width: 450px;
  @media (min-width: 768px) {
    max-width: 720px;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;

export const InfoContent = styled.div`
  margin-top: 30px;
  max-width: 450px;
  @media (min-width: 768px) {
    margin-left: 30px;
    width: 350px;
  }
`;
export const Param = styled.div`
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const DescriptionBox = styled.div`
  width: 100%;
`;
