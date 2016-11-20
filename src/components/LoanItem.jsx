import React, { PropTypes } from 'react';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tranche: PropTypes.string.isRequired,
  available: PropTypes.number.isRequired,
  annualised_return: PropTypes.number.isRequired,
  term_remaining: PropTypes.number.isRequired,
  ltv: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

function LoanItem(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>Loan details, amounts and values</div>
      <div>Invested (or not)</div>
      <button>Invest in Loan</button>
    </div>
  );
}

LoanItem.propTypes = propTypes;

export default LoanItem;
