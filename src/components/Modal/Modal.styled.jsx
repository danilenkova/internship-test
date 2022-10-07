import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: 110;
`;

export const ModalImage = styled.img`
  display: block;
  max-width: 85vw;
  max-height: 85vh;
`;
