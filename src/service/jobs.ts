import axios from './axiosConfig';

export const addJob = async (data: any) => {
  try {
    const response = await axios().post('jobs/save', data);
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

export const jobSpotlight = async () => {
  try {
    const response = await axios().get(`jobs/spotLight`);
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

export const countJobView = async (jobId: any, userId: any) => {
  try {
    const response = await axios().get(
      `/jobs/view?jobId=${jobId}&userId=${userId}`,
    );
    if (response) {
      console.log('view counted successfully');
      return response;
    } else {
      console.log('Error occurred');
    }
  } catch (error) {
    throw error;
  }
};

export const renewJob = async (jobId: any, userId: any) => {
  try {
    const response = await axios().get(
      `jobs/renewjob?jobId=${jobId}&userId=${userId}`,
    );
    if (response) {
      return response;
    } else {
      console.log('Error occurred');
    }
  } catch (error) {
    console.error();
    throw error;
  }
};

export const editJob = async (jobId: any) => {
  try {
    const response = await axios().get(`jobs/byid?id=${jobId}`);
    if (response) {
      return response;
    } else {
      console.log('Error occurred');
    }
  } catch (error) {
    console.error();
    throw error;
  }
};

export const updateJob = async (jobId: any, data: any) => {
  try {
    const response = await axios().post(`jobs/update?id=${jobId}`, data);
    if (response) {
      return response;
    } else {
      console.log('Error occurred');
    }
  } catch (error) {
    console.error();
    throw error;
  }
};
