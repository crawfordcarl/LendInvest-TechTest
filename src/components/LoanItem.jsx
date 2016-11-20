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
  investment: PropTypes.object,
};

function LoanItem(props) {
  return (
    <div className="loan-item">
      <div>
        <span className="bold">{props.title}</span>
      </div>
      <div>Loan details, amounts and values</div>
      <div>
        {
          props.investment ?
            <span>Invested</span>
          : null
        }
      </div>
      <button className="invest-btn">Invest in Loan</button>
    </div>
  );
}

LoanItem.propTypes = propTypes;

export default LoanItem;
