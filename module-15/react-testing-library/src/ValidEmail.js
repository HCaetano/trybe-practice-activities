import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Value: ${email}`}</h2>
      <h3>{(verifyEmail(email) ? 'Valid Email' : 'Not Valid Email')}</h3>
    </div>
  );
};

export default ValidEmail;
