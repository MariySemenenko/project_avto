import styled from 'styled-components';

// export const Container = styled.div`
//     display: flex;
//   flex-direction: row;
// `

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px; /* Додайте бажаний відступ між рядками */
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 10px; /* Додайте бажаний відступ між елементами */
  }
  & label {
    align-self: flex-start;
  }
  & select,
  & input {
    width: 100%;
  }
  & button {
    align-self: flex-start;
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  margin-left: 400px;
`;
export const CarBrand = styled.div`
  width: 224px;
  height: 74px;
  margin-right: 8px;
`;
export const Price = styled.div`
  width: 125px;
  height: 74px;
  margin-right: 8px;
`;
export const Mileage = styled.div`
  width: 320px;
  height: 74px;
  margin-right: 8px;
  display: flex;
  flex-direction: column; /* Змініть спрямування на колонку */
  justify-content: flex-start; /* Зверху вниз */
  align-items: flex-start; /* Зліва направо */
`;
export const Input = styled.div`
  display: flex;
`;
export const Button = styled.button`
  border-radius: 12px;
  background: #3470ff;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  color: var(--White, #fff);
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  margin-top: 28px;
  margin-top: auto;
  width: 136px;
  height: 48px;
  margin-bottom: 6px;
`;
export const Select = styled.select`
     border-radius: 14px;
  background: rgba(247, 247, 251, 1);
  padding: 14px 18px 14px 18px;
  justify-content: center;
  align-items: center;
  color: rgba(18, 20, 23, 1);
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; 
`
export const InputNumber = styled.input`
       border-radius: 14px;
  background: rgba(247, 247, 251, 1);
  padding: 14px 18px 14px 18px;
  justify-content: center;
  align-items: center;
  color: rgba(18, 20, 23, 1);
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`