import React from 'react';
import axios from 'axios';
import './Header.css';
import './Channels.css';
import './App.css';
import './Sidebar.css';
import './Summary.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Summary from './components/Summary';
import Channels from './components/Channels';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: 'pk_9c26d67afb414a17970abd9dc9d43e6b',
      tokenSandbox: 'Tpk_8da1b7b6e0d04690b4ba478326fadc03',
      symbol: 'TSLA',
      urlCompany: '',
      urlLogo: '',
      urlBalanceSheet: '',
      articlesCompany: [],
      articlesLogo: [],
      articlesBalanceSheet: [],
    };
  }

  async fetchArticles() {
    await this.setState({
      urlCompany:
        'https://cloud.iexapis.com/stable/stock/' +
        this.state.symbol +
        '/company/?token=' +
        this.state.token,
      urlLogo:
        'https://cloud.iexapis.com/stable/stock/' +
        this.state.symbol +
        '/logo/?token=' +
        this.state.token,
      urlBalanceSheet:
        'https://sandbox.iexapis.com/stable/stock/' +
        this.state.symbol +
        '/balance-sheet/?token=' +
        this.state.tokenSandbox,
    });
    axios
      .all([
        axios.get(this.state.urlCompany),
        axios.get(this.state.urlLogo),
        axios.get(this.state.urlBalanceSheet),
      ])
      .then(
        axios.spread((companyRes, logoRes, balancesheetRes) => {
          this.setState({
            articlesCompany: companyRes.data,
            articlesLogo: logoRes.data,
            articlesBalanceSheet: balancesheetRes.data.balancesheet[0],
          });
        })
      );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }

  render() {
    console.log(this.state.articlesBalanceSheet);
    return (
      <div className='body-grid'>
        <Header />
        <Sidebar />
        <Summary
          articlesCompany={this.state.articlesCompany}
          articlesLogo={this.state.articlesLogo}
          articlesBalanceSheet={this.state.articlesBalanceSheet}
        />
      </div>
    );
  }
}
