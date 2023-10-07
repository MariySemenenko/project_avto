import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background: #fff;
  padding: 40px;
  margin-left: auto;
    margin-right: auto;
`;
export const CloseButton = styled.button`
    fill: black;
`
export const cancelButton = styled.button`
    display: none;
`