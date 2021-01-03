import React from 'react';

const ToastNotification = ({ message, closeToast, toastProps }) => (
  <div>
    {message}
    <p onClick={console.log('undo')}>Undo</p>
  </div>
);

export default ToastNotification;