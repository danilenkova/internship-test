import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const GoBack = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 12px;
  font-weight: 500;
  width: 100px;
  height: 30px;
  color: #000;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: rgba(47, 48, 58, 0.2);
  & svg {
    width: 20px;
    height: 14px;
    color: currentColor;
  }
`;
