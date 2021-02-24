import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HcqGzDrYBbskMLPLDxnOQNFMZ0izsHqSyrRr4AcFkz7TMOmexuDNjiRdXJY0FupvPxjpt9pQ9UGZYv66GCBwAq300NcTRI4Jj';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
  };

  return (
    <StripeCheckout 
      name='Ecommerce Company'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >
        <CustomButton className='checkout-button'>Process Order</CustomButton>
      </StripeCheckout>
  );
};

export default StripeCheckoutButton;