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

export const allJobsSearch = async (limit: number) => {
  try {
    const response = await axios().get(`jobs/allpaginated/10/${limit}`);
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
  limit?: any
}

export const findJob = async (data: findJob) => {
  try {
    const response = await axios().post(
      `jobs/findpaginated/5/${data.limit}?what=${data.what}&where=${data.where}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const jobsInDraft = async (userId: string) => {
  try {
    const response = await axios().get(`/jobs/jobsindraft?userId=${userId}`);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
export const jobsInApprove = async (userId: string) => {
  try {
    const response = await axios().get(`/jobs/jobsapproved?userId=${userId}`);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};

export const approveJob = async (userId: string, jobId: string) => {
  try {
    const response = await axios().get(
      `/jobs/approve?jobId=${jobId}&userId=${userId}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
export const jobsInArchive = async (userId: string) => {
  try {
    const response = await axios().get(`/jobs/jobsarchived?userId=${userId}`);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
export const archiveJob = async (userId: string, jobId: string) => {
  try {
    const response = await axios().get(
      `/jobs/archive?jobId=${jobId}&userId=${userId}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
export const jobsInDelete = async (userId: string) => {
  try {
    const response = await axios().get(`/jobs/jobsdeleted?userId=${userId}`);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
export const deleteJob = async (userId: string, jobId: string) => {
  try {
    const response = await axios().get(
      `/jobs/delete?jobId=${jobId}&userId=${userId}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw error.response;
  }
};
