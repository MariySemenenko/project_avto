import styled from "styled-components";

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
`
export const CarBrand = styled.div`
    width: 224px;
    height: 74px;
    margin-right: 8px;
`
export const Price = styled.div`
   width: 125px;
    height: 74px; 
    margin-right: 8px;
`
export const Mileage = styled.div`
  width: 320px;
  height: 74px;
  margin-right: 8px;
  display: flex;
  flex-direction: column; /* Змініть спрямування на колонку */
  justify-content: flex-start; /* Зверху вниз */
  align-items: flex-start; /* Зліва направо */
    `
    export const Input = styled.div`
        display: flex;
    `

