import React, { useEffect } from 'react';
import Dashboard from '../../Containers/Dashboard';
import { Divider, Form, Upload, notification, Typography, Space } from 'antd';
import styles from './index.module.scss';
import Rules from './rules.json';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  UploadOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { FormItem } from '../../Containers/FormItem/index';
import { IRootState } from '../../reducers';
import { Actions } from './actions';
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
interface IRoles {
  role: string;
}
const PostJob = () => {
  let dispatch = useDispatch();
  const [form] = Form.useForm();
  let formData = new FormData();

  const {
    addJobErrorMessage,
    addJobFailure,
    addJobSuccess,
    addJobProgress,
  } = useSelector((state: IRootState) => state.job);

  const onFinish = (values: any) => {
    let roles: string[] = [];
    if (values.rolesAndResponsibilities)
      values.rolesAndResponsibilities.map((d: IRoles) => {
        roles.push(d.role);
      });
    let valueForApi = {
      nameOfJob: values.jobTitle,
      company: values.company,
      description: '',
      location: values.location,
      jobType: values.jobType,
      currencySymbol: '$',
      salaryLowerLimit: values.minimumSalary,
      salaryUpperLimit: values.maximumSalary,
      recruiterType: values.recruiterType,
      rateLowerLimit: values.minimumRate,
      rateUpperLimit: values.maximumRate,
      employer: values.employer,
      industry: values.industry,
      rolesAndResponsibilities: roles,
      datePosted: values.openingDate,
      expiryDate: values.closingDate,
      jobCategory: values.jobCategory,
      jobTags: ['Java'],
      jobUrl: values.application,
      hoursPerWeek: values.hours,
      externalLink: values.external,
    };
    formData.append('job', JSON.stringify(valueForApi));
    dispatch(
      Actions.addJobProgress({
        data: formData,
      }),
    );
  };

  const logoProps = {
    beforeUpload: (file: Blob) => {
      formData.append('jobLogo', file);
      return false;
    },
  };
  const headerProps = {
    beforeUpload: (file: any) => {
      formData.append('headerImage', file);
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
    if (addJobSuccess) {
      onReset();
      openNotificationWithIcon('success', 'Job Added Successfully');
    } else if (addJobFailure) {
      openNotificationWithIcon('error', addJobErrorMessage);
    }
  }, [addJobSuccess, addJobFailure, addJobErrorMessage]);

  return (
    <Dashboard dashboardName="Employee">
      <Form
        {...formItemLayout}
        form={form}
        onKeyDown={e => (e.keyCode == 13 ? e.preventDefault() : '')}
        name="addCandidate"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Title ellipsis={false} level={4}>
          Job Details
        </Title>
        <main className={styles.jobPostFieldWrapper}>
          {/*Company Name Field */}
          {FormItem({
            name: 'company',
            label: 'Company',
            placeholder: 'Select Company',
            fieldType: 'dropDown',
            options: ['Amazon Inc'],
          })}
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
            optional: true,
            placeholder: 'e.g London',
            fieldType: 'input',
          })}
          {/*Job Type Field */}
          {FormItem({
            name: 'jobType',
            label: 'Job Type',
            type: 'text',
            placeholder: 'FULL TIME',
            fieldType: 'dropDown',
            options: ['FULLTIME'],
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
            fieldType: 'dropDown',
            options: ['EMPLOYER', 'AGENCY'],
          })}
          {/* Recruiter Type Input Field */}
          {FormItem({
            name: 'employer',
            label: 'Employer',
            optional: true,
            placeholder: 'Enter Employer',
            fieldType: 'dropDown',
            options: ['Amazon Inc'],
          })}
          {/*Industry Input Field */}
          {FormItem({
            name: 'industry',
            label: 'Industry',
            optional: true,
            placeholder: 'Enter Industry',
            fieldType: 'dropDown',
            options: [
              'Computer Software',
              'Accounting',
              'Banking',
              'Biotechnology',
            ],
          })}
          {/* Description Fields */}
          {FormItem({
            name: 'description',
            label: 'Description',

            fieldType: 'editor',
          })}
          {/* Roles and Responsibilities */}
          <Form.List name="rolesAndResponsibilities">
            {(fields, { add, remove }) => (
              <>
                {FormItem({
                  icon: <PlusCircleOutlined />,
                  label: 'Add Roles and Responsibility',
                  optional: true,
                  onClick: () => add(),
                  name: 'Add Role and Responsibility',
                  fieldType: 'button',
                })}

                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Space key={key} className={styles.space}>
                    {FormItem({
                      name: [name, 'role'],
                      type: 'text',
                      placeholder: 'Enter Role',
                      fieldType: 'input',
                      fieldKey: [fieldKey, 'role'],
                    })}

                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
              </>
            )}
          </Form.List>
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
            name: 'closingDate',
            label: 'Expiry Date',
            type: 'date',
            optional: true,
            placeholder: 'e.g 20',
            fieldType: 'input',
          })}
          {/* Minimum rate Field */}
          {FormItem({
            name: 'openingDate',
            label: 'Opening Date',
            type: 'date',
            optional: true,
            placeholder: 'e.g 20',
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
          {/* Upload Logo Image Button */}
          {FormItem({
            name: 'jobLogo',
            fileProps: { ...logoProps },
            label: 'Logo',
            icon: <UploadOutlined />,
            optional: true,
            placeholder: 'Maximum file size: 50 MB.',
            fieldType: 'upload',
            btnName: 'Browse',
          })}

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
          {/* Upload Header Image Button */}
          {FormItem({
            name: 'headerImage',
            fileProps: { ...headerProps },
            label: 'Header Image',
            optional: true,
            icon: <UploadOutlined />,
            placeholder: 'The header image size should be atleast 1750x425',
            fieldType: 'upload',
            btnName: 'Browse',
          })}

          <ReCAPTCHA theme="light" sitekey={TEST_SITE_KEY} />
          <Divider />
        </main>
        <div style={{ display: 'flex' }}>
          <Button
            loading={addJobProgress}
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
