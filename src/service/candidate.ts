import axios from './axiosConfig';

export const addCandidate = async (data: any) => {
  try {
    const response = await axios().post('candidates/save', data);

    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
