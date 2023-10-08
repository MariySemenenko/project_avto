import styled from 'styled-components';

export const Avtopark = styled.img`
  width: 100%;
`;

export const P = styled.p`
 width: 50%;
  padding: 60px 24px;
  border-radius: 12px;
  margin-top: 48px;
  background-image: url(${Avtopark});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #ffffff;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
