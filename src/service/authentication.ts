import Password from 'antd/lib/input/Password';
import { setToken, setUserSession, setRole } from '../utils/sessionStorage';
import axios from './axiosConfig';

export const login = async (loginData: any) => {
  if (loginData) {
    const { email, password } = loginData;
    try {
      const response = await axios().post('/users/login', {
        email,
        password,
      });
      if (response) {
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('user', response.data.token);
        setUserSession(response.data.id);
        setRole(response.data.userRole);
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

export const forgetPassword = async (email: any) => {
  if (email) {
    try {
      const response = await axios().get(`/users/resetuserpassword?email=${email}`);
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
};

export const resetPassword = async (data: any) => {
  const email = localStorage.getItem('email')
  if (data) {
    const{currentPassword, newPassword} = data
    try {
      const response = await axios().get(`/users/chagepasswordbyuser?email=${email}&oldPassword=${currentPassword}&newPassword=${newPassword}`);
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error.message)
      return error;
    }
  }
};

export const changePasswordByAdmin = async (data: any) => {
  if (data) {
    const{email, password} = data
    try {
      const response = await axios().get(`/users/changepasswordbyadmin?email=${email}&newPassword=${password}`);
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error.message)
      return error;
    }
  }
};