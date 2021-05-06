import React, { useRef } from 'react';
import Dashboard from '../../Containers/Dashboard';
import { Divider, Form, Upload, notification, Typography } from 'antd';
import styles from './index.module.scss';
import Rules from './rules.json';
import ReCAPTCHA from 'react-google-recaptcha';
import { UploadOutlined } from '@ant-design/icons';
import { FormItem } from '../../Containers/FormItem/index';
import Button from '../../Components/Button';
const { Item, List } = Form;
const { Title } = Typography;
const TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};
const PostJob = () => {
  let reCaptchaRef = useRef();
  // let dispatch = useDispatch();
  // const {
  //   addCandidateErrorMessage,
  //   addCandidateProgress,
  //   addCandidateFailure,
  //   addCandidateSuccess,
  // } = useSelector((state: IRootState) => state.candidate);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  // const openNotificationWithIcon = (
  //   type: 'success' | 'error',
  //   description: String | null,
  // ) => {
  //   notification[type]({
  //     message: 'Notification Title',
  //     description: description,
  //   });
  // };
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onReset = () => {
    form.resetFields();
  };
  const { name, professionalTitle, location } = Rules;

  return (
    <Dashboard dashboardName="Employee">
      <Form
        {...formItemLayout}
        form={form}
        name="addCandidate"
        onFinish={onFinish}
        scrollToFirstError
      >
        <main className={styles.jobPostFieldWrapper}>
          <Title ellipsis={false} level={4}>
            Job Details
          </Title>{' '}
          {/*Company Name Field */}
          {FormItem({
            name: 'company',
            label: 'Company',
            type: 'text',
            placeholder: 'Select Company',
            fieldType: 'input',
          })}
          {/*JobTitle Field */}
          {FormItem({
            name: 'jobTitle',
            label: 'Job Title',
            type: 'text',
            placeholder: 'Enter Job Title',
            fieldType: 'input',
          })}
          {/* Location Field */}
          {FormItem({
            name: 'location',
            label: 'Location',
            type: 'text',
            placeholder: 'e.g London',
            fieldType: 'input',
          })}
          {/*Job Type Field */}
          {FormItem({
            name: 'jobType',
            label: 'Job Type',
            type: 'text',
            placeholder: 'FULL TIME',
            fieldType: 'input',
          })}
          {/* Job Category Field */}
          {FormItem({
            name: 'jobCategory',
            label: 'Job Category',
            type: 'text',
            placeholder: 'Choose a Category',
            fieldType: 'input',
          })}
          {/* Job Tags Input Field */}
          {FormItem({
            name: 'jobTags',
            label: 'Job Tags',
            optional: true,
            placeholder: 'e.g PHP, Social Media Management',
            fieldType: 'tagField',
          })}
          {/* Recruiter Type Input Field */}
          {FormItem({
            name: 'recruiterType',
            label: 'Recruiter Type',
            optional: true,
            placeholder: 'Enter Recruiter Type',
            fieldType: 'input',
          })}
          {/* Recruiter Type Input Field */}
          {FormItem({
            name: 'employer',
            label: 'Employer',
            optional: true,
            placeholder: 'Enter Employer',
            fieldType: 'input',
          })}
          {/*Industry Input Field */}
          {FormItem({
            name: 'industry',
            label: 'Industry',
            optional: true,
            placeholder: 'Enter Industry',
            fieldType: 'input',
          })}
          {/* Description Fields */}
          {FormItem({
            name: 'description',
            label: 'Description',

            fieldType: 'editor',
          })}
          {/*Application Field */}
          {FormItem({
            name: 'application',
            label: 'Application Email/URL',
            type: 'text',
            placeholder: 'j.borchardt2021@gmail.com',
            fieldType: 'input',
          })}
          {/* Minimum rate Field */}
          {FormItem({
            name: 'minimumRate',
            label: 'Minimum rate/h ($)',
            type: 'text',
            optional: true,
            placeholder: 'e.g 20',
            fieldType: 'input',
          })}
          {/* Upload Image Button */}
          <Item
            name="logo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button
                icon={<UploadOutlined />}
                placeholder="Maximum file size: 50 MB."
                label="Logo"
                optional
                name="Browse"
              />{' '}
            </Upload>
          </Item>
          {/* Maximum rate Field */}
          {FormItem({
            name: 'maximumRate',
            label: 'Maximum rate/h ($)',
            type: 'text',
            optional: true,
            placeholder: 'e.g 50',
            fieldType: 'input',
          })}
          {/* Minimum Salary Field */}
          {FormItem({
            name: 'minimumSalary',
            label: 'Minimum Salary/h ($)',
            type: 'text',
            optional: true,
            placeholder: 'e.g 20000',
            fieldType: 'input',
          })}
          {/* Maximum Salary Field */}
          {FormItem({
            name: 'maximumSalary',
            label: 'Maximum Salary/h ($)',
            type: 'text',
            optional: true,
            placeholder: 'e.g 50000',
            fieldType: 'input',
          })}
          {/* Hours Per Week Field */}
          {FormItem({
            name: 'hours',
            label: 'Hours Per Week',
            type: 'text',
            optional: true,
            placeholder: 'e.g 40',
            fieldType: 'input',
          })}
          {/* External "Apply For Job" LinkField */}
          {FormItem({
            name: 'external',
            label: 'External "Apply For Job" Link',
            type: 'text',
            optional: true,
            placeholder: 'http://',
            fieldType: 'input',
          })}
          {/* Upload Image Button */}
          <Item
            name="header"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="headerImage" action="/upload.do" listType="picture">
              <Button
                icon={<UploadOutlined />}
                placeholder="The header image size should be atleast 1750x425"
                label="Header Image"
                optional
                name="Browse"
              />{' '}
            </Upload>
          </Item>{' '}
          <ReCAPTCHA
            // style={{ display: 'inline-block' }}
            theme="light"
            sitekey={TEST_SITE_KEY}
            // onChange={this.handleChange}
            // asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
          <Divider />
        </main>

        <div style={{ display: 'flex' }}>
          <Button
            // loading={addCandidateProgress}
            htmlType="submit"
            name="Save Changes"
            type
          />
          <Button htmlType="button" onClick={onReset} name="Reset" />
        </div>
      </Form>{' '}
    </Dashboard>
  );
};
export default PostJob;
