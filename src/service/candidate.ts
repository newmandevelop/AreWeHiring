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

export const applyJob = async (data: any) => {
  try {
    const response = await axios().post('candidates/applyjob',data);
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const searchCandidate = async (data: any) => {
  const {email} = data
  console.log(email)
  try {
    const response = await axios().get(`candidates/findbyemail?email=${email}`);
    console.log(response)
    if (response) {
      console.log(response)
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
};