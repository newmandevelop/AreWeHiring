/* eslint-disable */

export function setUserSession(email: string) {
  return sessionStorage.setItem('shell_user', email)
}

export function isUserLoggedIn() {
  const user = sessionStorage.getItem('shell_user')
  return user !== null
}

export function logoutUser() {
  return sessionStorage.removeItem('shell_user')
}
/* eslint-enable */
