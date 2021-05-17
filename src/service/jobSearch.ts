import axios from './axiosConfig';

export const jobSearchById = async (id: any) => {
  try {
    const response = await axios().get(`jobs/byid?id=${id}`);
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

export const allJobsSearch = async () => {
  try {
    const response = await axios().get(`jobs/all`);
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

interface findJob {
  what?: string;
  where?: string;
}

export const findJob = async (data: findJob) => {
  try {
    const response = await axios().post(
      `jobs/find?what=${data.what}&where=${data.where}`,
    );
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};
