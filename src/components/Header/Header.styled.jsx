import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoLink = styled(Link)`
  display: flex;
  width: 100%;
  padding: 15px 0;
  align-items: baseline;
  color: #000;
  &:hover {
    color: #000;
  }
`;

export const LogoThumbs = styled.div`
  display: block;
  width: 250px;
`;

export const LogoText = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
