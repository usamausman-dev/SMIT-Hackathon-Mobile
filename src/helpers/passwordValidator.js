export function passwordValidator(password) {
  if (!password) return 'Field Required !!'
  if (password.length < 4) return 'Input must be at least 5 characters long.'
  return ''
}
