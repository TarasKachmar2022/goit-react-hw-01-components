import styled from 'styled-components';

export const TransactionsTable = styled.table`
  border-collapse: collapse;
  min-width: 288px;
  @media screen and (min-width: 768px) {
    min-width: 736px;
  }
`;

export const TransactionsTableHead = styled.thead`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.lightBlue};
`;

export const TransactionsTh = styled.th`
  padding: 20px;
`;

export const TransactionsTd = styled.td`
  color: ${p => p.theme.colors.darkGrey};
  text-align: center;
  width: 500px;
  padding: 10px;
`;

export const TransactionsTableBodyTr = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.lightGrey};
  }
`;
