import React, { useRef } from 'react';
import Dashboard from '../../Containers/Dashboard';
import { Divider, Form, Upload, Space, notification, Typography } from 'antd';
import styles from './index.module.scss';
import Rules from './rules.json';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  UploadOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import TagsField from '../../Components/InputFieldsWithTags/index';
import Label from '../../Components/Label/index';
import TextEditor from '../../Components/TextEditor/index';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
const { Item, List } = Form;
const { Title } = Typography;
const TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
const DELAY = 1500;
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {/*First Name Field */}
          <Item name="company" rules={name}>
            <InputField
              label="Company"
              name="company"
              type="text"
              placeholder="Select Company"
            />
          </Item>
          {/*Last Name Field */}
          <Item name="jobTitle" rules={name}>
            <InputField
              label="Job Title"
              name="jobTitle"
              type="text"
              placeholder="Enter Job Title"
            />
          </Item>
          {/* Location Field */}
          <Item name="location">
            <InputField
              label="Location"
              optional
              name="location"
              type="text"
              placeholder="e.g London"
            />
          </Item>
          {/*Middle Name Field */}
          <Item name="jobType">
            <InputField
              label="Job Type"
              name="jobType"
              type="text"
              placeholder="FULL TIME"
            />
          </Item>
          {/* Professional Title Field */}
          <Item name="jobCategory" rules={professionalTitle}>
            <InputField
              label="Job Category"
              name="jobCategory"
              type="text"
              placeholder="Choose a Category"
            />
          </Item>
          {/* Tags Input Field */}
          <Item name="jobTags">
            <TagsField
              name="jobTags"
              placeholder="e.g PHP, Social Media Management"
              label="Job Tags"
            />
          </Item>
          {/* Resume Content Fields */}
          <Item name="description">
            <TextEditor label="Description" />
          </Item>
          {/* Minimum rate Field */}
          <Item name="applicationEmail_Url">
            <InputField
              label="Application Email/URL"
              type="text"
              name="application"
              placeholder="j.borchardt2021@gmail.com"
            />
          </Item>
          {/* Minimum rate Field */}
          <Item name="minimumRate">
            <InputField
              label="Minimum rate/h ($)"
              optional={true}
              type="text"
              name="rate"
              placeholder="e.g 20"
            />
          </Item>
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
          {/* Minimum rate Field */}
          <Item name="maximumRate">
            <InputField
              label="Maximum rate/h ($)"
              optional={true}
              type="text"
              name="rate"
              placeholder="e.g 50"
            />
          </Item>
          {/* Minimum rate Field */}
          <Item name="minimumSalary">
            <InputField
              label="Minimum Salary/h ($)"
              optional={true}
              type="text"
              name="rate"
              placeholder="e.g 20000"
            />
          </Item>
          {/* Minimum rate Field */}
          <Item name="maximumSalary">
            <InputField
              label="Maximum Salary/h ($)"
              optional={true}
              type="text"
              name="rate"
              placeholder="e.g 50000"
            />
          </Item>
          {/* Minimum rate Field */}
          <Item name="hours">
            <InputField
              label="Hours Per Week"
              optional={true}
              type="text"
              name="hours"
              placeholder="e.g 40"
            />
          </Item>
          {/* Minimum rate Field */}
          <Item name="external">
            <InputField
              label='External "Apply For Job" Link'
              optional={true}
              type="text"
              name="external"
              placeholder="http://"
            />
          </Item>
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
