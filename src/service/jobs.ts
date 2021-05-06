import axios from './axiosConfig';

export const addJob = async (data: any) => {
  console.log('from axios', data);

  try {
    // const response = await axios().post('jobs/save', {
    //   nameOfJob: data.jobTitle,
    //   company: data.company,
    //   description: '',
    //   location: data.location,
    //   jobType: data.jobType,
    //   currencySymbol: '$',
    //   salaryLowerLimit: data.minmumSalary,
    //   salaryUpperLimit: data.maximumSalary,
    //   recruiterType: data.recruiterType,
    //   rateLowerLimit: data.minimumRate,
    //   rateUpperLimit: data.maximumRate,
    //   employer: data.employer,
    //   industry: data.industry,
    //   rolesAndResponsibilities: [],
    //   datePosted: '',
    //   expiryDate: '',
    // });
    // if (response) {
    //   return response;
    // } else {
    //   return null;
    // }
  } catch (error) {
    throw error;
  }
};
