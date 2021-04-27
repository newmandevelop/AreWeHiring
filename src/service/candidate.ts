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
    // resumeCategory,
    minimumRate,
    // resumeContent,
    skills,
    profileUrls,
    education,
    experienceList,
    resumeFile,
  } = data;
  interface IProps {
    url: string;
  }
  interface IProps2 {
    education: string;
  }
  const urls = <Array<string>>[];
  profileUrls &&
    profileUrls.map((url: IProps) => {
      urls.push(url['url']);
    });
  const educationList = <Array<string>>[];
  education &&
    education.map((edu: IProps2) => {
      educationList.push(edu.education);
    });

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
      resumeCategory: [''],
      minimumRate,
      resumeContent: '',
      skills,
      profileUrls: urls ? urls : '',
      education: educationList ? educationList : '',
      experienceList,
      resumeFile: resumeFile ? resumeFile[0].name : '',
    });

    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
