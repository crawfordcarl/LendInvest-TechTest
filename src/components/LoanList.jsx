import React, { PropTypes } from 'react';
import LoanItem from './LoanItem';

const propTypes = {
  loans: PropTypes.array,
  onClickInvestLoan: PropTypes.func.isRequired,
};

function LoanList(props) {
  const loanItems = props.loans.map(item => (
    <LoanItem
      {...item}
      key={item.id}
      onClickInvestLoan={props.onClickInvestLoan}
    />
  ));

  return (
    <div className="loan-list">
      <h2>Current Loans</h2>
      {loanItems}
    </div>
  );
}

LoanList.propTypes = propTypes;

export default LoanList;
