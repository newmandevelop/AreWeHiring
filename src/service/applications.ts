import axios from './axiosConfig';

export const applicationsInDraft = async (userId: string) => {
  try {
    const response = await axios().get(
      `/appplications/applicationsindraft?userId=${userId}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const approvedApplications = async (userId: string) => {
  try {
    const response = await axios().get(
      `/applications/applicationsapproved?userId=${userId}`,
    );
    console.log(response);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error.response;
  }
};

export const doApplicationApprove = async (applicationId: string) => {
  try {
    const response = await axios().get(
      `applications/approve?applicationId=${applicationId}`,
    );
    console.log(response);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error.response;
  }
};

export const archivedApplications = async (userId: string) => {
  try {
    const response = await axios().get(
      `/applications/applicationsarchived?userId=${userId}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const sendApplicationToArchive = async (applicationId: string) => {
  try {
    const response = await axios().get(
      `applications/archive?applicationId=${applicationId}`,
    );
    console.log(response);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error.response;
  }
};

export const deletedApplications = async (userId: string) => {
  try {
    const response = await axios().get(
      `/applications/applicationsdeleted?userId=${userId}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const doApplicationDelete = async (applicationId: string) => {
  try {
    const response = await axios().get(
      `applications/delete?applicationId=${applicationId}`,
    );
    console.log(response);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error.response;
  }
};

export const rejectedApplications = async (userId: string) => {
  try {
    const response = await axios().get(
      `/applications/applicationsrejected?userId=${userId}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const doApplicationReject = async (applicationId: string) => {
  try {
    const response = await axios().get(
      `applications/reject?applicationId=${applicationId}`,
    );
    console.log(response);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error.response;
  }
};

export const applicationsPostedByUser = async (userId: string) => {
  try {
    const response = await axios().get(
      `/applications/userjobapplications?userId=${userId}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const applicationsSearchByJobId = async (jobId: string) => {
  try {
    const response = await axios().get(`applications/byjobid?jobId=${jobId}`);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const applicationsSearchByEmail = async (email: string) => {
  console.log('got this email', email);
  try {
    const response = await axios().get(`applications/byemail?email=${email}`);
    console.log(response);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
