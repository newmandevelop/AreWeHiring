/* eslint-disable */

export function setUserSession(email: string) {
  return sessionStorage.setItem('hiring_user', email);
}

export function isUserLoggedIn() {
  const user = sessionStorage.getItem('hiring_user');
  return user !== null;
}

export function logoutUser() {
  return sessionStorage.removeItem('token');
}

export function setToken(token: string, type: string) {
  return sessionStorage.setItem('token', type + ' ' + token);
}

export function getToken() {
  return sessionStorage.getItem('token');
}
export function setRole(role: string) {
  return sessionStorage.setItem('role', role);
}

export function getRole() {
  return sessionStorage.getItem('role');
}
export function removeRole() {
  return sessionStorage.removeItem('role');
}
/* eslint-enable */
