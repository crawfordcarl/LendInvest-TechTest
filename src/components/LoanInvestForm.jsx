import React, { PropTypes } from 'react';
import Modal from './Modal';
import { numberWithCommas, secondsToReadable } from '../Constants';

const propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  loan: PropTypes.object,
  children: PropTypes.any,
  invest: PropTypes.func,
};

class LoanInvestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      investInputValue: 1000,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.investClicked = this.investClicked.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loan.amount) {
      this.setState({ investInputValue: nextProps.loan.amount });
    }
  }

  handleInputChange(e) {
    this.setState({ investInputValue: e.target.value });
  }

  investClicked() {
    this.props.invest(this.props.loan.id, this.state.investInputValue);
    this.props.closeModal();
  }

  render() {
    const showModal = this.props.showModal ? this.props.showModal : false;
    const loanAvailable = this.props.loan.available ?
      numberWithCommas(this.props.loan.available):
      'None available';
    const termRemaining = secondsToReadable(this.props.loan.term_remaining);

    return (
      <Modal
        open={showModal}
        closeModal={this.props.closeModal}
      >
        <div className="bold">Invest in Loan</div>
        <div>{this.props.loan.title}</div>
        <br />
        <div>Amount available: £{loanAvailable}</div>
        <div>Loan ends in: {termRemaining}</div>
        <br />
        <div>Investment amount (£)</div>
        <div>
          <input
            type="number"
            value={this.state.investInputValue}
            onChange={this.handleInputChange}
          />
          <button
            className="invest-btn"
            onClick={this.investClicked}
          >
            { this.props.loan.amount > 0 ? 'Change Investment' : 'Invest Now' }
          </button>
        </div>
      </Modal>
    );
  }
}

LoanInvestForm.propTypes = propTypes;

export default LoanInvestForm;
