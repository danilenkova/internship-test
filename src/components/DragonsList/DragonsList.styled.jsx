import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const List = styled.ul`
  max-width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ListItem = styled.li`
  overflow: hidden;
  margin-bottom: 30px;
  max-width: 100%;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
    margin-bottom: 0;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: block;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 450px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
  @media (min-width: 768px) {
    height: 600px;
  }
`;

export const Name = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-top: 0;
  bottom: 0;
  height: 70px;
  margin-bottom: 0;
  width: 100%;
  text-transform: uppercase;
  background-color: rgba(47, 48, 58, 0.8);
  color: #fff;
`;
