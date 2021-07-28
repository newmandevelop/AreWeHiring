import axios from './axiosConfig';

export const allUsersSearch = async () => {
  try {
    const response = await axios().get(`users/all`);
    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};

export const addStaff = async (data: any) => {
  const postData = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    userRole: data.userRole,
    companyId: data.company,
  };
  console.log(postData);
  try {
    const response = await axios().post('users/addstaff', postData);
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
