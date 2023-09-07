import { styled } from 'styled-components';
export const StyledTable = styled.table`
  width: 600px;
  margin: 0 auto;
  text-align: center;
`;
export const StyledThead = styled.thead``;
export const StyledHeadTr = styled.tr`
  background-color: lightseagreen;
  color: #fff;
`;
export const StyledTh = styled.th`
  padding: 10px;
  text-transform: uppercase;
  font-weight: 600;
  width: 200px;
`;
export const StyledTbody = styled.tbody`
  color: grey;
`;
export const StyledBodyTr = styled.tr`
  background-color: ${props =>
    props.$idx % 2 === 0 ? '#fff' : 'lightsteelblue'};
`;
export const StyledTd = styled.td`
  padding: 10px;
  text-transform: capitalize;

  &:first-child {
    text-align: start;
    padding-left: 80px;
  }
`;
