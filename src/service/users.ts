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