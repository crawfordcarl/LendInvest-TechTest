import React, { PropTypes } from 'react';
import Modal from './Modal';

const propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  loan: PropTypes.object,
  children: PropTypes.any,
};

function LoanInvestForm(props) {
  const showModal = props.showModal ? props.showModal : false;
  return (
    <Modal
      open={showModal}
      closeModal={props.closeModal}
    >
      <div>Invest in Loan</div>
      <div>{props.loan.title}</div>
      <div>Amount available: £NNNNNN</div>
      <div>Loan ends in: N month N days</div>
      <div>Investment amount (£)</div>
      <div><input /><button>Invest Now</button></div>
    </Modal>
  );
}

LoanInvestForm.propTypes = propTypes;

export default LoanInvestForm;
