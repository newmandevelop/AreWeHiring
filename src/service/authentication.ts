import { setToken, setUserSession, setRole } from '../utils/sessionStorage';
import axios from './axiosConfig';

export const login = async (loginData: any) => {
  if (loginData) {
    const { email, password } = loginData;
    try {
      console.log(loginData);
      const response = await axios().post('/users/login', {
        email,
        password,
      });
      if (response) {
        localStorage.setItem('user', response.data.token);
        setRole(response.data.userRole);
        setUserSession(response.data.email);
        setToken(response.data.token, response.data.type);
        return response;
      }
    } catch (error) {
      throw error;
    }
  }
};

export const signUp = async (signUp: any) => {
  if (signUp) {
    const { email, firstName, lastName, password, roles } = signUp;
    console.log(signUp);
    try {
      const response = await axios().post('/users/signup', {
        email,
        firstName,
        lastName,
        password,
        userRole: roles,
      });

      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
};
