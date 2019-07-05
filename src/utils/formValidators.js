// Field is required
export const required = value => value ? undefined : 'Required';

// Passwords match
export const passwordsMustMatch = (value, allValues) => {
    if (allValues['password']) {
        return value !== allValues['password'] ? "Passwords Don't Match" : undefined;
    } else {
        return undefined;
    }
};

// User input exceeds maximum length
export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);

// User input is shorter than minimum length
export const minLength = min => value =>
    value && value.length < min ? `Must be at least ${min} characters` : undefined;

export const minLength6 = minLength(6);

// Validates email addresses
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;