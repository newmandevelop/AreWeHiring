import React, { useEffect } from 'react';
import Dashboard from '../../../Containers/Dashboard';
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
import { FormItem } from '../../../Containers/FormItem/index';
import { IRootState } from '../../../reducers';
import { Actions } from './actions';
import Button from '../../../Components/Button';
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
const AddCompany = () => {
  let dispatch = useDispatch();
  const [form] = Form.useForm();
  let formData = new FormData();

  const {
    addCompanyErrorMessage,
    addCompanyFailure,
    addCompanySuccess,
    addCompanyProgress,
  } = useSelector((state: IRootState) => state.company);

  const onFinish = (values: any) => {
    let valueForApi = {
      name: values.name,
      companyEmail: values.companyEmail,
      phoneNumber: values.phoneNumber,
      tagLine: values.tagLine,
      website: values.website,
      industry: values.industry,
      companySize: values.companySize,
      companyType: values.companyType,
      dateFounded: values.dateFounded,
      location: values.location,
    };
    formData.append('company', JSON.stringify(valueForApi));
    dispatch(
      Actions.addCompanyProgress({
        data: formData,
      }),
    );
  };

  const logoProps = {
    beforeUpload: (file: Blob) => {
      formData.append('companyLogo', file);
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
    if (addCompanySuccess) {
      onReset();
      openNotificationWithIcon('success', 'Company Added Successfully');
    } else if (addCompanyFailure) {
      openNotificationWithIcon('error', addCompanyErrorMessage);
    }
  }, [addCompanySuccess, addCompanyFailure, addCompanyErrorMessage]);

  return (
    <>
      <h1 className={styles.logo} >AreWeHiring</h1>
      <Dashboard dashboardName="Company">
        <Form
          {...formItemLayout}
          form={form}
          onKeyDown={e => (e.keyCode == 13 ? e.preventDefault() : '')}
          name="addCompany"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Title ellipsis={false} level={4}>
            Company Details
          </Title>
          <main className={styles.jobPostFieldWrapper}>
            {/*Company Name Field */}
            {FormItem({
              name: 'name',
              label: 'Name',
              type: 'text',
              placeholder: 'Enter Name',
              fieldType: 'input',
            })}

            {/* Company Email */}
            {FormItem({
              name: 'companyEmail',
              label: 'Email',
              type: 'text',
              placeholder: 'Enter Email',
              fieldType: 'input',
            })}

            {/* Company Phone Number*/}
            {FormItem({
              name: 'phoneNumber',
              label: 'Phone',
              type: 'text',
              placeholder: 'Enter Phone Number',
              fieldType: 'input',
            })}


            {/* TagLine Field */}
            {FormItem({
              name: 'tagLine',
              label: 'TagLine Title',
              type: 'text',
              placeholder: 'Enter Tag Line',
              fieldType: 'input',
            })}
            {/* Website Field */}
            {FormItem({
              name: 'website',
              label: 'Website',
              type: 'text',
              optional: true,
              placeholder: 'e.g www.google.com',
              fieldType: 'input',
            })}

            {/** industry */}
            {FormItem({
              name: 'industry',
              label: 'Industry',
              optional: true,
              placeholder: 'Select Industry',
              fieldType: 'dropDown',
              options: ['Staffing & Recruiting', 'Logistics', 'Accounting', 'Automototives', 'Banking'],
            })}

            {/** companySize */}
            {FormItem({
              name: 'companySize',
              label: 'Company Size',
              optional: true,
              placeholder: 'Select Company Size',
              fieldType: 'dropDown',
              options: ['201-500 Employees', '501-1000 Employees', '1001-5000 Employees'],
            })}

            {/** companyType */}
            {FormItem({
              name: 'companyType',
              label: 'Company Type',
              optional: true,
              placeholder: 'Select Company Type',
              fieldType: 'dropDown',
              options: ['Public Company', 'Self Employed', 'Government Agency', 'Nonprofit', 'Sole Proprietorship', 'Privately Held', 'Partnership'],
            })}


            {/** dateFounded */}
            {FormItem({
              name: 'dateFounded',
              label: 'Date Founded',
              type: 'date',
              optional: true,
              placeholder: 'e.g 10/10/2008',
              fieldType: 'input',
            })}

            {/** specialities */}
            {/** location */}
            {FormItem({
              name: 'location',
              label: 'Location',
              type: 'text',
              optional: true,
              placeholder: 'e.g Chicago, Illinois',
              fieldType: 'input',
            })}

            {/* Upload Logo Image Button */}
            {FormItem({
              name: 'companyLogo',
              fileProps: { ...logoProps },
              label: 'Logo',
              icon: <UploadOutlined />,
              optional: true,
              fileType: 'picture',
              placeholder: 'Maximum file size: 50 MB.',
              fieldType: 'upload',
              btnName: 'Browse',
            })}
            <ReCAPTCHA theme="light" sitekey={TEST_SITE_KEY} />
            <Divider />
          </main>
          <div style={{ display: 'flex' }}>
            <Button
              loading={addCompanyProgress}
              htmlType="submit"
              name="Save Changes"
              type
            />
            <Button htmlType="button" onClick={onReset} name="Reset" />
          </div>
        </Form>{' '}
      </Dashboard>
    </>
  );
};
export default AddCompany;