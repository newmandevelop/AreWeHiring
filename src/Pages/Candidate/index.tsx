import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Form, Upload, Space, notification } from 'antd';
import InputField from '../../Components/InputField/index';
import styles from './index.module.scss';
import { Actions } from './actions';
import { IRootState } from '../../reducers';
import Button from '../../Components/Button/index';
import Dashboard from '../../Containers/Dashboard';
import TagsField from '../../Components/InputFieldsWithTags/index';
import { FormItem } from '../../Containers/FormItem';
import {
  UploadOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import Label from '../../Components/Label/index';
import TextEditor from '../../Components/TextEditor/index';
import Rules from './rules.json';
interface IProps {
  url: string;
}
interface IProps2 {
  education: string;
}
const { Item, List } = Form;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};

const Candidate = () => {
  let dispatch = useDispatch();
  var formData = new FormData();
  const {
    addCandidateErrorMessage,
    addCandidateProgress,
    addCandidateFailure,
    addCandidateSuccess,
  } = useSelector((state: IRootState) => state.candidate);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const urls: string[] = [];
    const educationList: string[] = [];

    if (values.url)
      values.url.map((url: IProps) => {
        urls.push(url.url);
      });
    if (values.education)
      values.education.map((edu: IProps2) => {
        educationList.push(edu.education);
      });

    let valueForApi = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      middleName: values.middleName,
      professionalTitle: values.professionalTitle,
      location: values.location,
      photo: '',
      video: '',
      resumeCategory: [],
      minimumRate: values.minimumRate,
      resumeContent: '',
      skills: values.skills,
      profileUrls: urls,
      education: educationList,
      experienceList: values.experienceList,
      resumeFile: '',
    };
    formData.append('candidate', JSON.stringify(valueForApi));
    dispatch(
      Actions.addCandidateProgress({
        data: formData,
      }),
    );
  };
  const logoProps = {
    beforeUpload: (file: Blob) => {
      formData.append('photoFile', file);
      return false;
    },
  };
  const resumeProps = {
    beforeUpload: (file: Blob) => {
      formData.append('resumeFile', file);
      return false;
    },
  };
  const openNotificationWithIcon = (
    type: 'success' | 'error',
    description: String | null,
  ) => {
    notification[type]({
      message: 'Notification Title',
      description: description,
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (addCandidateSuccess) {
      onReset();
      openNotificationWithIcon('success', 'Candidate Added Successfully');
    } else if (addCandidateFailure) {
      openNotificationWithIcon('error', addCandidateErrorMessage);
    }
  }, [
    addCandidateSuccess,
    addCandidateFailure,
    onReset,
    addCandidateErrorMessage,
  ]);
  const { name, professionalTitle, location } = Rules;
  return (
    <Dashboard dashboardName="Candidate">
      <React.Fragment>
        <Form
          {...formItemLayout}
          form={form}
          name="addCandidate"
          onFinish={onFinish}
          scrollToFirstError
        >
          <main className={styles.candidateFieldWrapper}>
            {/*First Name Field */}
            <Item name="firstName" rules={name}>
              <InputField
                label="First Name"
                name="name"
                type="text"
                placeholder="Jonathan Palmeri"
              />
            </Item>
            {/*Last Name Field */}
            <Item name="lastName" rules={name}>
              <InputField
                label="Last Name"
                name="name"
                type="text"
                placeholder="Jonathan Palmeri"
              />
            </Item>
            {/*Middle Name Field */}
            <Item name="middleName">
              <InputField
                label="Middle Name"
                name="name"
                type="text"
                optional
                placeholder="Jonathan Palmeri"
              />
            </Item>
            {/* Email Field */}
            <Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'The input is not valid E-mail!',
                },
              ]}
            >
              <InputField
                label="Your Email"
                name="email"
                type="text"
                placeholder="Jon@RexRecruiting.com"
              />
            </Item>
            {/* Professional Title Field */}
            <Item name="professionalTitle" rules={professionalTitle}>
              <InputField
                label="Professional Title"
                name="professionalTitle"
                type="text"
                placeholder="Recruiter"
              />
            </Item>
            {/* Location Field */}
            <Item name="location" rules={location}>
              <InputField
                label="Location"
                name="location"
                type="text"
                placeholder="United States"
              />
            </Item>
            {/* Upload Logo Image Button */}
            {FormItem({
              name: 'photo',
              fileProps: logoProps,
              label: 'Photo',
              icon: <UploadOutlined />,
              optional: true,
              fileType: 'picture',
              placeholder: 'Maximum file size: 50 MB.',
              fieldType: 'upload',
              btnName: 'Browse',
            })}

            {/* Video Field */}
            <Item name="video">
              <InputField
                label="Video"
                optional={true}
                type="text"
                name="video"
                placeholder="A link to a video about yourself"
              />
            </Item>
            {/* Tags Input Field */}
            <Item name="resumeCategory">
              <TagsField
                name="resumeCategory"
                placeholder="Enter Keyword"
                label="Resume category"
              />
            </Item>
            {/* Minimum rate Field */}
            <Item name="minimumRate">
              <InputField
                label="Minimum rate/h ($)"
                optional={true}
                type="text"
                name="rate"
                placeholder="75"
              />
            </Item>
            {/* Resume Content Fields */}
            <Item name="resumeContent">
              <TextEditor label="Resume Content" />
            </Item>
            {/* Skills Field */}
            <Item name="skills">
              <InputField
                label="Skills"
                optional={true}
                type="text"
                name="skills"
                placeholder="Comma separate a list of relevant skills"
              />
            </Item>
            <Divider className={styles.divider} />
            {/*Video Url Field*/}
            <List name="profileUrls">
              {(fields, { add, remove }) => (
                <>
                  <Form.Item>
                    <Button
                      icon={<PlusCircleOutlined />}
                      placeholder="Optionally provide links to any of your websites or social network profiles"
                      label="URL(s)"
                      optional
                      disabled={fields.length > 1}
                      onClick={() => add()}
                      name="Add URL"
                    />
                  </Form.Item>{' '}
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space key={key} className={styles.space}>
                      <Form.Item
                        {...restField}
                        className={styles.formItem}
                        name={[name, 'url']}
                        fieldKey={[fieldKey, 'url']}
                      >
                        <InputField
                          type="text"
                          name="url"
                          placeholder="links to any of your websites"
                        />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                </>
              )}
            </List>
            <Divider className={styles.divider} />
            {/*Education Field*/}
            <List name="education">
              {(fields, { add, remove }) => (
                <>
                  <Form.Item>
                    <Button
                      onClick={() => add()}
                      disabled={fields.length > 1}
                      icon={<PlusCircleOutlined />}
                      label="Education"
                      optional
                      name="Add Education"
                    />
                  </Form.Item>{' '}
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space key={key} className={styles.space}>
                      <Form.Item
                        {...restField}
                        style={{ width: '100%' }}
                        name={[name, 'education']}
                        fieldKey={[fieldKey, 'education']}
                      >
                        <InputField
                          type="text"
                          name="education"
                          placeholder="Add Video Url if any"
                        />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                </>
              )}
            </List>
            <Divider className={styles.divider} />
            {/*Experience Fields*/}
            <Label label="Experience" optional />
            <List name="experienceList">
              {(fields, { add, remove }) => (
                <>
                  {' '}
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space key={key} className={styles.space}>
                      <div className={styles.experience}>
                        <Form.Item
                          {...restField}
                          style={{ width: '100%' }}
                          name={[name, 'employer']}
                          fieldKey={[fieldKey, 'employer']}
                        >
                          <InputField
                            label="Employer"
                            name="employer"
                            type="text"
                            placeholder="Rex Recruiting"
                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          style={{ width: '100%' }}
                          name={[name, 'jobTitle']}
                          fieldKey={[fieldKey, 'jobTitle']}
                        >
                          <InputField
                            label="Job Title"
                            name="jobtitle"
                            type="text"
                            placeholder="Job Title"
                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          style={{ width: '100%' }}
                          name={[name, 'startEndDate']}
                          fieldKey={[fieldKey, 'startEndDate']}
                        >
                          <InputField
                            label="Start/End date"
                            name="date"
                            type="text"
                            placeholder="2019 - Present"
                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          style={{ width: '100%' }}
                          name={[name, 'notes']}
                          fieldKey={[fieldKey, 'notes']}
                        >
                          <InputField
                            label="Notes"
                            name="notes"
                            optional
                            type="text"
                            placeholder="Jonathon founded Rex Recruiting to leverage his Insurance, Finance, Healthcare, and Manufacturing staf ng experience to grow, staff and innovate the
            technology companies that are reshaping these industries. (Fintech, Insurtech, Healthcare Technology, Robotics Process Automation, Compliance &
            26
            Cybersecurity)"
                            textarea
                          />
                        </Form.Item>
                      </div>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      onClick={() => add()}
                      icon={<PlusCircleOutlined />}
                      name="Add Experience"
                    />
                  </Form.Item>
                </>
              )}
            </List>
            <Divider className={styles.divider} />
            {/* Upload Resume Button */}
            {FormItem({
              name: 'resumeFile',
              fileProps: resumeProps,
              label: 'Resume File',
              icon: <UploadOutlined />,
              optional: true,
              fileType: 'text',
              placeholder:
                'Optionally upload your resume for employers to view. Max. file size: 50 MB',
              fieldType: 'upload',
              btnName: 'Browse',
            })}
          </main>
          <div style={{ display: 'flex' }}>
            <Button
              loading={addCandidateProgress}
              htmlType="submit"
              name="Save Changes"
              type
            />
            <Button htmlType="button" onClick={onReset} name="Reset" />
          </div>
        </Form>
      </React.Fragment>
    </Dashboard>
  );
};

export default Candidate;
