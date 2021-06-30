import React, { useEffect, useState } from 'react';
import Dashboard from '../../Containers/Dashboard';
import {
  Divider,
  Form,
  Upload,
  notification,
  Typography,
  Space,
  Descriptions,
} from 'antd';
import { getAllCompanies } from '../../service/companies';
import styles from './index.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  UploadOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { getUserSession } from '../../utils/sessionStorage';
import { useSelector, useDispatch } from 'react-redux';
import { FormItem } from '../../Containers/FormItem/index';
import { IRootState } from '../../reducers';
import { searchCandidate } from '../../service/candidate';

// import { Actions } from './actions';
import Button from '../../Components/Button';
import { Candidate } from '../../service';
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
interface ICompanies {
  name: string;
}
const SearchCandidate = () => {
  // let dispatch = useDispatch();
  const [form] = Form.useForm();
  // const [companies, setCompanies] = useState<[]>([]);
  // let formData = new FormData();
  // const {
  //   addJobErrorMessage,
  //   addJobFailure,
  //   addJobSuccess,
  //   addJobProgress,
  // } = useSelector((state: IRootState) => state.job);

  const onFinish = (values: any) => {
    console.log(values);
    searchCandidate(values);
  };

  // const logoProps = {
  //   beforeUpload: (file: Blob) => {
  //     formData.append('jobLogo', file);
  //     return false;
  //   },
  // };
  // const headerProps = {
  //   beforeUpload: (file: any) => {
  //     formData.append('headerImage', file);
  //     return false;
  //   },
  // };
  // const openNotificationWithIcon = (
  //   type: 'success' | 'error',
  //   description: String | null,
  // ) => {
  //   notification[type]({
  //     message: 'Notification Title',
  //     description: description,
  //   });
  // };

  // const onReset = () => {
  //   form.resetFields();
  // };

  // useEffect(() => {
  //   if (addJobSuccess) {
  //     onReset();
  //     openNotificationWithIcon('success', 'Job Added Successfully');
  //   } else if (addJobFailure) {
  //     openNotificationWithIcon('error', addJobErrorMessage);
  //   }
  // }, [addJobSuccess, addJobFailure, addJobErrorMessage]);

  // useEffect(() => {
  //   const response = getAllCompanies();
  //   response.then(data => {
  //     const companies: any = [];
  //     data?.data.map((company: ICompanies) => {
  //       companies.push(company.name);
  //     });
  //     setCompanies(companies);
  //   });
  // }, []);
  const candidates = [
    {
      name: 'Zhou Maomao',
      earned: "$7K+ earned",
      netWorth: '$11.11/hr',
      country: 'China',
      description:
        'I am freelance writer from UK, now based in China.I have written hundreds of articles on a number of freelance writing websites and I currently write blogs on Chinese culture, history and travel.',
    },
    {
      name: 'John W. H',
      earned: "$60K+ earned",
      netWorth: '$35.00/hr',
      country: 'United States',
      description:
        'As a printer/photographer with 45 years of experience(26 years working on Mac with Photoshop, Indesign and Illustration doing digital for web and print), I have worked with hundreds of clients on thousands of different projects',
    },
  ];
  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="SearchCandidate"
        onFinish={onFinish}
      >
        <Title ellipsis={false} level={4}>
          Candidate Search
        </Title>
        <main className={styles.jobPostFieldWrapper}>
          {FormItem({
            name: 'email',
            label: 'Candidate Email',
            placeholder: 'Enter Candidate Email',
            fieldType: 'input',
          })}
        </main>
        <div>
          <Button
            // loading={addJobProgress}
            htmlType="submit"
            name="Search"
            type
          />
          <Button
            htmlType="button"
            // onClick={onReset}
            // name="Reset"
          />
        </div>
      </Form>
      {candidates.map(candidate => {
        return <div style={{ backgroundColor: 'white' }}>
          <div style={{ margin: '2rem' }}>
            <Descriptions title={candidate.name}>
              <Descriptions.Item>
                {candidate.earned}
              </Descriptions.Item>
              <Descriptions.Item>{candidate.netWorth}</Descriptions.Item>
              <Descriptions.Item label="Live">
                {candidate.country}
              </Descriptions.Item>
              <Descriptions.Item>
                {candidate.description}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>;
      })}
    </div>
  );
};
export default SearchCandidate;
