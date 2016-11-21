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
  onClickInvestLoan: PropTypes.func,
};

function LoanItem(props) {
  return (
    <div className="loan-item">
      <div>
        <span className="bold">{props.title}</span>
      </div>
      <div>
        <div>Annualised Return: { props.annualised_return }</div>
        <div>Term remaining: { props.term_remaining }</div>
      </div>
      <div>
        {
          props.amount > 0 ?
            <span>Invested</span>
          : null
        }
      </div>
      <button
        className="invest-btn"
        onClick={() => {props.onClickInvestLoan(props.id)}}
      >
        Invest in Loan
      </button>
    </div>
  );
}

LoanItem.propTypes = propTypes;

export default LoanItem;
