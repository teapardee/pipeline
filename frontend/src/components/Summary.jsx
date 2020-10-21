import React from 'react';
import NumberFormat from 'react-number-format';

export default class Summary extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    let company = this.props.articlesCompany;
    let logo = this.props.articlesLogo;
    let balanceSheet = this.props.articlesBalanceSheet;

    return (
      <div className='summary-maincontainer'>
        <div className='title-container'>
          <img className='logo' src={logo.url}></img>

          <div className='titlebox'>
            {company.companyName} [${company.symbol}]
          </div>
        </div>
        <div className='boxes'>
          <table className='table'>
            <tbody>
              <tr className='profile-row'>
                <td className='profile-cell-label'>COMPANY NAME</td>
                <td className='profile-cell-data'>{company.companyName}</td>
              </tr>
              <tr className='profile-row'>
                <td className='profile-cell-label'>SYMBOL</td>
                <td className='profile-cell-data'>{company.symbol}</td>
              </tr>
              <tr className='profile-row'>
                <td className='profile-cell-label'>EXCHANGE</td>
                <td className='profile-cell-data'>{company.exchange}</td>
              </tr>
              <tr className='profile-row'>
                <td className='profile-cell-label'>ADDRESS</td>
                <td className='profile-cell-data'>
                  {company.address}, {company.city}, {company.state},{' '}
                  {company.country}, {company.zip}
                </td>
              </tr>
              <tr className='profile-row'>
                <td className='profile-cell-label'>PHONE</td>
                <td className='profile-cell-data'>{company.phone}</td>
              </tr>
              <tr className='profile-row'>
                <td className='profile-cell-label'>WEBSITE</td>
                <td className='profile-cell-data'>
                  <a href={company.website}>{company.website}</a>
                </td>
              </tr>
              <tr className='profile-row'>
                <td className='profile-cell-label'>SECTOR</td>
                <td className='profile-cell-data'>{company.sector}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='boxes'>
          <table className='table'>
            <tbody>
              <tr className='profile-row'>
                <td className='profile-cell-label'>DESCRIPTION</td>
                <td className='profile-cell-data'>{company.description}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='boxes'>
          <table className='table'>
            <tbody>
              <tr className='profile-row'>
                <td className='profile-cell-label'>CURRENT CASH</td>
                <NumberFormat
                  className='profile-cell-data'
                  value={7583651}
                  thousandSeparator={true}
                ></NumberFormat>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
