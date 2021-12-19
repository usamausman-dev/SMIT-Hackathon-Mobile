export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Enter Your Email !!"
  if (!re.test(email)) return 'Ooops! Not Valid.'
  return ''
}
