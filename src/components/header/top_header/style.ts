import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgb(239, 242, 245);
`
export const WrapperItemsStyled = styled.div`
  font-size: 14px;
  padding: 3px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
  color: rgb(88, 102, 126);

  b {
    color: #3861FB;
    margin-left: 2px;
  }

  span {
    &:nth-child(2) {
      b {
        color: #5CEF6A;
      }
    }
  }
`

export const WrapperProfileStyled = styled(WrapperItemsStyled)`
  justify-content: right;
  span {
    cursor: pointer;
    margin: 0 10px;
  }
`
