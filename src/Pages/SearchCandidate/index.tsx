// import React, { useEffect, useState } from 'react';
import {
  // Form,
  notification,
  Typography,
  Descriptions,
  Avatar,
  // Input,
  Pagination,
} from 'antd';
// import { useSelector, useDispatch } from 'react-redux';
// import { IRootState } from '../../reducers';
// import { Actions } from './actions';
// import Button from '../../Components/Button';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

// const { Title } = Typography;

// const SearchCandidate = () => {
//   let dispatch = useDispatch();
//   const [form] = Form.useForm();
//   const [limit, setLimit] = useState(0);

//   const {
//     candidateSearchErrorMessage,
//     candidateSearchFailure,
//     candidateSearchSuccess,
//     candidateSearchProgress,
//     candidateData,
//     candidateCount,
//   } = useSelector((state: IRootState) => state.searchCandidate);

//   const onFinish = (values: object) => {
//     dispatch(
//       Actions.candidateSearchProgress({
//         data: values,
//         limit: limit,
//       }),
//     );
//   };

//   const openNotificationWithIcon = (
//     type: 'success' | 'error',
//     description: String | null,
//   ) => {
//     notification[type]({
//       message: 'Notification Title',
//       description: description,
//     });
//   };

//   useEffect(() => {
//     if (candidateSearchSuccess) {
//       openNotificationWithIcon('success', 'Candidates Fetched Successfully');
//     } else if (candidateSearchFailure) {
//       openNotificationWithIcon('error', candidateSearchErrorMessage);
//     }
//   }, [
//     candidateSearchSuccess,
//     candidateSearchFailure,
//     candidateSearchErrorMessage,
//   ]);

//   return (
//     <div>
//       <Form
//         style={{ paddingTop: '1rem' }}
//         form={form}
//         name="SearchCandidate"
//         layout="vertical"
//         onFinish={onFinish}
//       >
//         <Title ellipsis={false} level={4}>
//           Candidate Search
//         </Title>
//         <Form.Item
//           label="Candidate Email"
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: 'This field is required!',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="Where"
//           name="where"
//           rules={[
//             {
//               required: true,
//               message: 'This field is required!',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <div>
//           <Button
//             loading={candidateSearchProgress}
//             htmlType="submit"
//             name="Search"
//             type
//           />
//           <Button htmlType="button" />
//         </div>
//       </Form>

//       <Pagination
//         defaultCurrent={1}
//         total={candidateCount}
//         onChange={e => {
//           setLimit(e * 5 - 5);
//         }}
//       />
//       {candidateData &&
//         candidateData.map((candidate: any) => {
//           return (
//             <div className = {styles.description}>
//               <div style={{padding:'1rem'}}>
//                 <Avatar
//                   className={`ant-dropdown-link`}
//                   size={50}
//                   icon={<UserOutlined />}
//                 />
//                 <Descriptions
//                   title={
//                     candidate.content.firstName +
//                     ' ' +
//                     candidate.content.lastName
//                   }
//                 >
//                   <Descriptions.Item>
//                     {candidate.content.minimumRate}$/hr
//                   </Descriptions.Item>
//                   <Descriptions.Item>
//                     {candidate.content.professionalTitle}
//                   </Descriptions.Item>
//                   <Descriptions.Item label="Live">
//                     {candidate.content.location}
//                   </Descriptions.Item>
//                   {/* <Descriptions.Item>{candidate.description}</Descriptions.Item> */}
//                 </Descriptions>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };
// export default SearchCandidate;
import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Input } from 'antd';
import Button from '../../Components/Button';
import { FormItem } from '../../Containers/FormItem/index';


export default function SearchJob() {
  const [state, setState] = useState({})
  const [message, setMessage] = useState("")
  const candidateData = [
    {
      content: {
        firstName: "Jackson",
        lastName: "Smith",
        minimumRate: "100",
        professionalTitle: 'Developer',
        location: 'United States',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget eleifend neque. Integer cursus nisi non laoreet interdum. Aenean in ex id nibh convallis aliquam eget mattis orci. Aliquam finibus semper rhoncus. Nulla facilisi. Suspendisse tristique egestas est, laoreet luctus ipsum feugiat ac. Quisque gravida blandit maximus. Nulla id lectus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;'
      }
    },
    {
      content: {
        firstName: "Harris",
        lastName: "Edwards",
        minimumRate: "80",
        professionalTitle: 'Bussiness Manager',
        location: 'United States',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget eleifend neque. Integer cursus nisi non laoreet interdum. Aenean in ex id nibh convallis aliquam eget mattis orci. Aliquam finibus semper rhoncus. Nulla facilisi. Suspendisse tristique egestas est, laoreet luctus ipsum feugiat ac. Quisque gravida blandit maximus. Nulla id lectus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;'
      }
    },
    {
      content: {
        firstName: "Liam",
        lastName: "Cole",
        minimumRate: "85",
        professionalTitle: 'Senior Executive',
        location: 'United States',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget eleifend neque. Integer cursus nisi non laoreet interdum. Aenean in ex id nibh convallis aliquam eget mattis orci. Aliquam finibus semper rhoncus. Nulla facilisi. Suspendisse tristique egestas est, laoreet luctus ipsum feugiat ac. Quisque gravida blandit maximus. Nulla id lectus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;'
      }
    }
  ]
  return (
    <Row style={{ margin: '1rem' }}>
      <Col span={6} style={{ backgroundColor: '' }}>
        <Row>
          <Col span={24}>
            <h6>Filter By</h6>
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Input onChange={(e) => setState({ ...state, firstName: e.target.value })} />
            </Form.Item>
            {/* {FormItem({
              name: 'company',
              label: 'Company',
              placeholder: 'Select Company',
              fieldType: 'dropDown',
              options: companies,
              onChange: (value: string) => { setState({ ...state, company: value }) },
              rules: [{ required: true, message: "This field is required" }]
            })} */}
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Input onChange={(e) => setState({ ...state, lastName: e.target.value })} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <Form.Item
              label="Location"
              name="location"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Input onChange={(e) => setState({ ...state, location: { location: e.target.value } })} />
            </Form.Item>
            {/* <p>Job Type:</p>
            {FormItem({
              name: 'jobType',
              // label: 'Job Type',
              type: 'text',
              placeholder: 'FULL TIME',
              fieldType: 'dropDown',
              options: ['FULLTIME', 'FREELANCE', 'INTERNSHIP', 'PARTTIME', 'TEMPORARY'],
              rules: [{ required: true, message: "This field is required" }],
              onChange: (value: string) => { setJobType(value) },
            })} */}
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <p>Category:</p>
            {FormItem({
              name: 'category',
              // label: 'Job Category',
              type: 'text',
              placeholder: 'Choose a Category',
              fieldType: 'dropDown',
              options: ['Accounting / Finance', 'Software', 'Automotive Jobs', 'Contruction',
                'Construction / Facilities', 'Education Training', 'Healthcare', 'Human Resource (HR)', 'Industrial Manufacturing & Engineering',
                'Insurance', 'Market and Customer Research', 'Program Management / Project Management',
                'Recruiting / Talent Acquisition', 'Restaurant / Food Service', 'Sales & Marketing',
                'Technology', 'Cyber Security', 'Software', 'Telecommunications', 'Transport and Logistics'],
              rules: [
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]
            })}
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Input onChange={(e) => setState({ ...state, title: e.target.value })} />
            </Form.Item>
          </Col>
        </Row>
      </Col>
      <Col span={18} style={{ backgroundColor: 'white' }}>
        <Row>
          <Col span={24} style={{ margin: '1rem' }}>
            <h4>
              Advanced Search
            </h4>
          </Col>
        </Row>

        <Row style={{ marginLeft: '1rem' }}>
          <Col span={20}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Input placeholder="Search for candidate" onChange={(e) => setState({ ...state, email: e.target.value })} />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ marginLeft: '1rem' }}>
          <Col span={20}>

            <Button
              // loading={candidateSearchProgress}
              htmlType="submit"
              name="Search"
              type
            />
            <Button htmlType="button" />

          </Col>
        </Row>
        <Row justify="space-around">
          {candidateData &&
            candidateData.map((candidate: any) => {
              return (
                <div className={styles.description}>
                  <div style={{ padding: '1rem' }}>
                    <Avatar
                      className={`ant-dropdown-link`}
                      size={50}
                      icon={<UserOutlined />}
                    />
                    <Descriptions
                      title={
                        candidate.content.firstName +
                        ' ' +
                        candidate.content.lastName
                      }
                    >
                      <Descriptions.Item>
                        {candidate.content.minimumRate}$/hr
                      </Descriptions.Item>
                      <Descriptions.Item>
                        {candidate.content.professionalTitle}
                      </Descriptions.Item>
                      <Descriptions.Item label="Live">
                        {candidate.content.location}
                      </Descriptions.Item>
                      <Descriptions.Item>{candidate.content.description}</Descriptions.Item>
                    </Descriptions>
                  </div>
                </div>
              );
            })}
          {
            message && <div>{message}</div>
          }
        </Row>
      </Col>
    </Row>
  )
}