import styled from "styled-components";

export const WrapperItemsStyled = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;

  span {
    margin: 0 40px;
    padding: 20px 0;

    a {
      padding: 10px 0;
      text-decoration: none;
      color: #000;
      font-weight: 600;
      transition: all .2s;
      
      &:hover {
        color: #3861FB;
      }
    }
  }
`
