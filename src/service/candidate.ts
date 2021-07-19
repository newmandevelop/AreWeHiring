import axios from './axiosConfig';
import { getUserSession } from '../utils/sessionStorage';

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
    const response = await axios().post('candidates/applyjob', data);
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const searchCandidate = async (data: any, limit: number) => {
  const { email, where } = data;
  const postData: any = { email: email };
  try {
    const response = await axios().post(
      `candidates/find/5/${limit}?what=${where}`,
      postData,
    );
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const getNotifications = async () => {
  let userId = getUserSession();
  try {
    const response = await axios().get(`notifications/byuser?userId=${userId}`);
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
