import React from 'react';
import './toast-notification.styles.scss';

const ToastNotification = ({ message, closeToast, toastProps }) => (
  <div className='toast-container'>
    {message}
    <p onClick={console.log('undo')}>Undo</p>
  </div>
);

export default ToastNotification;