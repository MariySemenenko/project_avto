import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;
export const Avtopark = styled.img`
  /* width: 100%; */
  /* height: auto; */
  /* position: relative; */
`;

export const P = styled.p`
  color: darkblue;
  position: absolute;
  top: 50px;
  left: 50%;
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 12px;
  right: 50px;

  max-height: 80vh;
  overflow-y: auto;
`;
