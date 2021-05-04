import axios from './axiosConfig';

export const login = (loginData: any) => {
  return axios()
    .get('/login')
    .then(response => {
      if (response && response.data) {
        const responseData = response.data;
        const loginExist = responseData.find(
          (item: any) =>
            item.email === loginData.email &&
            item.password === loginData.password,
        );
        console.log('loginExit', loginExist);
        return loginExist;
      }
    })
    .catch(error => {
      throw error.response;
    });
};

export const signUp = async (signUp: any) => {
  if (signUp) {
    const { email, firstName, lastName, password } = signUp;
    console.log(signUp);
    try {
      const response = await axios().post('/users/signup', {
        email,
        firstName,
        lastName,
        password,
      });

      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
};
