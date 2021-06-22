import axios from './axiosConfig';

export const activeListings = async (userId: string) => {
  try {
    const response = await axios().get(`/jobs/activelisting?userId=${userId}`);
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

export const totalJobViews = async (userId: string) => {
  try {
    // const response = await axios().get(`/jobs/myjobsviews?userId=${userId}`);
    const response = await axios().get(
      `/jobs/recentactivities?userId=${userId}`,
    );
    if (response) {
      return response.data ? response.data.length : 0;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

export const totalApplication = async (userId: string) => {
  try {
    const response = await axios().get(
      `/jobs/totalapplications?userId=${userId}`,
    );
    if (response) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

export const timeBookmarked = async (userId: string) => {
  try {
    const response = await axios().get(`/jobs/totalbookmarks?userId=${userId}`);
    if (response) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};
