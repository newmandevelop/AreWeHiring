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

export const popularCategories = async () => {
  try {
    const response = await axios().get(`jobs/popularCategories`);
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

export const recentJobsSearch = async () => {
  try {
    const response = await axios().get(`jobs/recentJobs`);
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};
