import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CheckOut from '../../components/checkout/checkout.component';

import './checkout-page.styles.scss';

const CheckOutPage = ({ history }) => {
  
  const closePage = () => {
    history.push('/');
  }

  return (
  <div className='checkout-page'>
    <CheckOut closeCheckOut={() => closePage()} />
  </div>
)}

const mapStateToProps = createStructuredSelector({

});

export default withRouter(connect(mapStateToProps)(CheckOutPage));