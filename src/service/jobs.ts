import axios from './axiosConfig';

export const addJob = async (data: any) => {
  console.log('from axios', data);

  try {
    const response = await axios().post('jobs/save', data);
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
