import React, { PropTypes } from 'react';
import LoanItem from './LoanItem';

const propTypes = {
  loans: PropTypes.array,
};

function LoanList(props) {
  const loanItems = props.loans.map(item => <LoanItem {...item} key={item.id} />)

  return (
    <div className="loan-list">
      <h2>Current Loans</h2>
      {loanItems}
    </div>
  );
}

LoanList.propTypes = propTypes;

export default LoanList;
