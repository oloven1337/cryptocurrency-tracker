import styled from "styled-components";

export const TableStyled = styled.table`
  max-width: 900px;
  margin: 0 auto;

  th {
    padding: 10px 20px;
  }

  td {
    text-align: center;
    padding: 4px;
    border-bottom: 1px solid rgb(239, 242, 245);
  }
`

export const TbodyStyled = styled.tbody`

  tr {
    td:first-child {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-weight: bold;
    }
  }
`

export const PercentTdStyled = styled.td`
  span {
    padding: 4px;
    background-color: ${props => props.color};
    //#5CEF6A
    //#5CEF6A
    border-radius: 4px;
  }
`
