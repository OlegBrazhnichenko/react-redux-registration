export const name = value => {
  if (value && value.length > 15) {

    return 'Must be 15 characters or less'
  } else if (!/^[a-z ,.'-]+$/i.test(value)) {

    return 'Name must contain only a-z , . - or \' characters.'
  } else {

    return undefined;
  }
};

export const surname = value =>
  value && !/^[a-z ,.'-]+$/i.test(value) ?
    'Second name must contain only a-z , . - or \' characters.' : undefined;

export const shortPassword = value =>
  value && value.length < 6 ?
    'Your password to weak.' : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;
