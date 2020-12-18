import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('test component in case email is valid', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Valid Email');
  expect(isValid).toBeInTheDocument();
});

test('test component in case email is not valid', () => {
  const EMAIL_USER = 'wrongemail';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Not Valid Email');
  expect(isValid).toBeInTheDocument();
});