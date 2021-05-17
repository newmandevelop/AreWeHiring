import axios from './axiosConfig';

export const allCompaniesSearch = async () => {
    try {
      const response = await axios().get(`companies/all`);
      if (response && response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      throw error.response;
    }
  };