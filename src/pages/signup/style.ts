import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormStyled = styled.form`
  max-width: 400px;
  border: 1px solid #8a8a8a;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 6px 40px rgb(155, 169, 232);
  padding: 20px 10px;

`

export const InputWrapperStyled = styled.div`
  padding: 0 20px;

  input {
    width: 250px;
    height: 40px;
    margin: 6px 0;
    border-radius: 4px;
    outline-color: rgb(56, 97, 251);
    padding: 0 6px;
    &::placeholder {
      color: rgb(56, 97, 251);
    }
  }
`

export const TitleStyled = styled.h3`
  color: rgb(56, 97, 251);
  font-size: 16px;
  margin: 4px 0 10px 0;
  letter-spacing: 0.5px;
`

export const ButtonWrapperStyled = styled.div`
  margin: 5px 0;


  button {
    width: 90%;
    cursor: pointer;
    margin: 0 auto;
    font-weight: bold;
    height: 30px;
    color: rgb(56,97,251);
    letter-spacing: 0.5px;
    background-color: rgb(235 238 255);
    border-radius: 5px;
  }
`
