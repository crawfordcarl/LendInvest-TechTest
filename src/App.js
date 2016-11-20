import React, { Component } from 'react';
import LoanList from './components/LoanList';
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
  }

  render() {
    return (
      <div className="App">
        <LoanList loans={this.state.loans} />
      </div>
    );
  }
}

export default App;
