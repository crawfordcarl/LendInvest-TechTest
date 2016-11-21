import React, { PropTypes } from 'react';
import { secondsToReadable, numberWithCommas } from '../Constants';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tranche: PropTypes.string.isRequired,
  available: PropTypes.number.isRequired,
  annualised_return: PropTypes.number.isRequired,
  term_remaining: PropTypes.number.isRequired,
  ltv: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onClickInvestLoan: PropTypes.func,
};

function LoanItem(props) {
  const termRemaining = secondsToReadable(props.term_remaining);
  const amountInvested = numberWithCommas(props.amount);

  return (
    <div className="loan-item">
      <div>
        <span className="bold">{props.title}</span>
      </div>
      <div>
        <div>Annualised Return: { props.annualised_return }%</div>
        <div>Term remaining: { termRemaining }</div>
        {
          props.amount > 0 ? (<div>£{amountInvested} invested</div>) : null
        }
      </div>
      <button
        className="invest-btn"
        onClick={() => {props.onClickInvestLoan(props.id)}}
      >
        { props.amount > 0 ? 'Change Investment' : 'Invest in Loan' }
      </button>

      {/* absolute positioned items */}
      {
        props.amount > 0 ?
          <div className="invested-tag">Invested</div>
        : null
      }
    </div>
  );
}

LoanItem.propTypes = propTypes;

export default LoanItem;
