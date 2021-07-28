import axios from './axiosConfig';

export const allUsersSearch = async () => {
  try {
    const response = await axios().get(`users/all`);
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

export const addStaff = async (data: any) => {
  try {
    const response = await axios().post('users/addstaff', data);
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
