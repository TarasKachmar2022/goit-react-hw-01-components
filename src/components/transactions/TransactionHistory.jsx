import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TransactionsTableHead,
  TransactionsTh,
  TransactionsTd,
  TransactionsTableBodyTr,
} from './TransactionHistory.styled';

export const Transactions = ({ items }) => {
  return (
    <TransactionsTable>
      <TransactionsTableHead>
        <tr>
          <TransactionsTh>Type</TransactionsTh>
          <TransactionsTh>Amount</TransactionsTh>
          <TransactionsTh>Currency</TransactionsTh>
        </tr>
      </TransactionsTableHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionsTableBodyTr key={id}>
              <TransactionsTd>{type}</TransactionsTd>
              <TransactionsTd>{amount}</TransactionsTd>
              <TransactionsTd>{currency}</TransactionsTd>
            </TransactionsTableBodyTr>
          );
        })}
      </tbody>
    </TransactionsTable>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
