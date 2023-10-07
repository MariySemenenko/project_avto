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

    /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end; */
  position: relative;
`;
export const CloseButton = styled.button`
    fill: black;
    position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`
export const cancelButton = styled.button`
    display: none;
`
export const A = styled.a`
    border-radius: 12px;
  background: rgba(52, 112, 255, 1);
  padding: 10px 90px;
  justify-content: center;
  align-items: center;
  color: var(--White, #fff);
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  margin-top: 28px;
  margin-top: auto;
`
export const Ul = styled.ul`
    margin-bottom: 20px;
`

