import axios from './axiosConfig';

export const addCandidate = async (data: any) => {
  console.log('from axios', data);
  const {
    email,
    firstName,
    lastName,
    middleName,
    professionalTitle,
    location,
    photo,
    video,
    resumeCategory,
    minimumRate,
    resumeContent,
    skills,
    profileUrls,
    education,
    experienceList,
    resumeFile,
  } = data;
  interface IProps {
    url: string;
  }
  const urls = <Array<string>>[];
  profileUrls &&
    (await profileUrls.map((url: IProps) => {
      console.log(url.url);
      urls.push(url['url']);
    }));
  console.log(urls);
  try {
    const response = await axios().post('candidates/save', {
      email,
      firstName,
      lastName,
      middleName,
      professionalTitle,
      location,
      photo: photo ? photo[0].name : '',
      video,
      resumeCategory: '',
      minimumRate,
      resumeContent: null,
      skills,
      profileUrls: urls ? urls : '',
      education: education ? education[0].education : '',
      experienceList,
      resumeFile: resumeFile ? resumeFile[0].name : '',
    });

    if (response && response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error.response;
  }
};
