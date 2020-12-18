import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('send email page', () => {
  it('check if there is an email input', () => {
    const { getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.type).toBe('email');
  });
  
  // it('check if there is a button', () => {
  //   const { getByRole } = render(<App />);
  //   const button = getByRole('button');
  //   expect(button).toBeInTheDocument();
  // });
  
  it('check if there are two buttons', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });
  
  it('check if there is a send button', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');
    expect(button).toHaveValue('Send');
  });
  
  it('check if button and email field are working', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Value:');
  
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Value: ${EMAIL_USER}`);
  });
});
