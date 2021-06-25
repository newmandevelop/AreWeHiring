import axios from './axiosConfig';

export const addCompany = async (data: any) => {
  console.log('from axios', data);

  try {
    const response = await axios().post('companies/save', data);
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllCompanies = async () => {
  try {
    const response = await axios().get('companies/all');
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
