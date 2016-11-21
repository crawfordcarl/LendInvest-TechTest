import React, { Component } from 'react';
import { numberWithCommas } from './Constants';
import LoanList from './components/LoanList';
import LoanInvestForm from './components/LoanInvestForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loans: [
        {
          id: 1,
          title: 'Voluptate et sed tempora qui quisquam.',
          tranche: 'A',
          available: 11959,
          annualised_return: 8.60,
          term_remaining: 86400,
          ltv: 48.80,
          amount: 85754,
        },
        {
          id: 5,
          title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
          tranche: 'B',
          available: 31405,
          annualised_return: 7.10,
          term_remaining: 1620000,
          ltv: 48.80,
          amount: 85754,
        },
        {
          id: 12,
          title: 'Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.',
          tranche: 'C',
          available: 12359,
          annualised_return: 4.80,
          term_remaining: 879000,
          ltv: 48.80,
          amount: 85754,
        }
      ],
      investments: [],
    };

    this.openInvestLoanForm = this.openInvestLoanForm.bind(this);
    this.closeInvestLoanForm = this.closeInvestLoanForm.bind(this);
    this.invest = this.invest.bind(this);
  }

  openInvestLoanForm(loanItemId) {
    this.setState({
      showModal: true,
      selectedId: loanItemId,
    });
  }

  closeInvestLoanForm() {
    this.setState({
      showModal: false,
    });
  }

  invest(loanId, amount) {
    let loans = this.state.loans.slice();
    let loanIndex = loans.findIndex(item => item.id === loanId);

    let total =  loans[loanIndex].amount + loans[loanIndex].available;
    loans[loanIndex].amount = amount;
    loans[loanIndex].available = total - amount;
    this.setState({ loans });
  }

  render() {
    const selectedItem = this.state.showModal ?
      this.state.loans.find(item => item.id === this.state.selectedId) :
      {};
    const totalAvailable = this.state.loans.reduce((acc, curr) => {
      const nextAcc = acc + curr.available;
      return nextAcc;
    }, 0);
    return (
      <div className="App">
        <LoanList
          loans={this.state.loans}
          onClickInvestLoan={this.openInvestLoanForm}
        />
        <LoanInvestForm
          showModal={this.state.showModal}
          loan={selectedItem}
          closeModal={this.closeInvestLoanForm}
          invest={this.invest}
        />
        <div>
          Total amount available for investments: <span className="bold">£{numberWithCommas(totalAvailable)}</span>
        </div>
      </div>
    );
  }
}

export default App;
