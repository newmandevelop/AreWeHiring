import axios from './axiosConfig';

export const applicationsInDraft = async (userId: string) => {
  try {
    const response = await axios().get(`/appplications/applicationsindraft?userId=${userId}`);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
export const approvedApplications = async (userId: string) => {
  try {
    const response = await axios().get(`/applications/applicationsapproved?userId=${userId}`);
    console.log(response)
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error)
    throw error.response;
  }
};

// export const approveJob = async (userId: string, jobId: string) => {
//   try {
//     const response = await axios().get(
//       `/jobs/approve?jobId=${jobId}&userId=${userId}`,
//     );
//     if (response) {
//       return response;
//     }
//   } catch (error) {
//     throw error.response;
//   }
// };
export const archivedApplications = async (userId: string) => {
  try {
    const response = await axios().get(`/applications/applicationsarchived?userId=${userId}`);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
// export const archiveJob = async (userId: string, jobId: string) => {
//   try {
//     const response = await axios().get(
//       `/jobs/archive?jobId=${jobId}&userId=${userId}`,
//     );
//     if (response) {
//       return response;
//     }
//   } catch (error) {
//     throw error.response;
//   }
// };
export const deletedApplications = async (userId: string) => {
  try {
    const response = await axios().get(`/applications/applicationsdeleted?userId=${userId}`);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const rejectedApplications = async (userId: string) => {
    try {
      const response = await axios().get(`/applications/applicationsrejected?userId=${userId}`);
      if (response) {
        return response;
      }
    } catch (error) {
      throw error.response;
    }
  };
// export const deleteJob = async (userId: string, jobId: string) => {
//   try {
//     const response = await axios().get(
//       `/jobs/delete?jobId=${jobId}&userId=${userId}`,
//     );
//     if (response) {
//       return response;
//     }
//   } catch (error) {
//     throw error.response;
//   }
// };
