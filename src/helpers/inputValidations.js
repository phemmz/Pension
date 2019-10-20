export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateLogin({ username, password }) {
  const errors = {};

  if (!username.trim()) {
    errors.username = 'Please fill in your Email/Phone Number/RSA PIN';
  }

  if (!password.trim()) {
    errors.password = 'Please fill in your Password';
  }

  if (password.trim() && password.trim().length <= 5) {
    errors.password = 'Password length must not be less than 6 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0 ? true : false,
  };
}

export function validateSignup({
  firstName, lastName, phoneNumber, email, bvn, password
}) {
  const errors = {};

  if (!firstName.trim()) {
    errors.firstName = 'Please fill in your First Name';
  }

  if (!lastName.trim()) {
    errors.lastName = 'Please fill in your Last Name';
  }

  if (!phoneNumber.trim()) {
    errors.phoneNumber = 'Please fill in your Phone Number';
  }

  if (!email.trim()) {
    errors.email = 'Please fill in your Email';
  }

  if (!bvn.trim()) {
    errors.bvn = 'Please fill in your BVN';
  }

  if (!password.trim()) {
    errors.password = 'Please fill in your Password';
  }

  if (phoneNumber.trim() && phoneNumber.length < 9) {
    errors.phoneNumber = 'Please enter a valid Phone Number';
  }

  if (email.trim() && !emailRegex.test(email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (bvn.trim() && bvn.length !== 11) {
    errors.bvn = 'Please enter a valid bvn';
  }

  if (password.trim() && password.trim().length <= 5) {
    errors.password = 'Password length must not be less than 6 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0 ? true : false,
  };
}

export function validateCardDetails({
  cardNumber, expDate, cvv
}) {
  const errors = {};

  if (!cardNumber.trim()) {
    errors.cardNumber = 'Please fill in Card Number';
  }

  if (!expDate.trim()) {
    errors.expDate = 'Please fill in Expiry Date';
  }

  if (!cvv.trim()) {
    errors.cvv = 'Please fill in cvv';
  }

  if (cardNumber.trim() && cardNumber.length !== 16) {
    errors.cardNumber = 'Please enter a valid Card Number';
  }

  if (expDate.trim() && !/(0[1-9]|10|11|12)\/(20[\d]{2})(?:[\d]{0,})/g.test(expDate.trim())) {
    errors.expDate = 'Please enter a valid Date';
  }

  if (cvv.trim() && cvv.length !== 3) {
    errors.cvv = 'Please enter a valid cvv';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0 ? true : false,
  };
}
