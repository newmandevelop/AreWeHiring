import React, { useEffect, useState } from 'react';
import {
  Form,
  notification,
  Typography,
  Descriptions,
  Avatar,
  Input,
  Pagination,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../reducers';
import { Actions } from './actions';
import Button from '../../Components/Button';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const { Title } = Typography;

const SearchCandidate = () => {
  let dispatch = useDispatch();
  const [form] = Form.useForm();
  const [limit, setLimit] = useState(0);

  const {
    candidateSearchErrorMessage,
    candidateSearchFailure,
    candidateSearchSuccess,
    candidateSearchProgress,
    candidateData,
    candidateCount,
  } = useSelector((state: IRootState) => state.searchCandidate);

  const onFinish = (values: object) => {
    dispatch(
      Actions.candidateSearchProgress({
        data: values,
        limit: limit,
      }),
    );
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

  useEffect(() => {
    if (candidateSearchSuccess) {
      openNotificationWithIcon('success', 'Candidates Fetched Successfully');
    } else if (candidateSearchFailure) {
      openNotificationWithIcon('error', candidateSearchErrorMessage);
    }
  }, [
    candidateSearchSuccess,
    candidateSearchFailure,
    candidateSearchErrorMessage,
  ]);

  return (
    <div>
      <Form
        style={{ paddingTop: '1rem' }}
        form={form}
        name="SearchCandidate"
        layout="vertical"
        onFinish={onFinish}
      >
        <Title ellipsis={false} level={4}>
          Candidate Search
        </Title>
        <Form.Item
          label="Candidate Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'This field is required!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Where"
          name="where"
          rules={[
            {
              required: true,
              message: 'This field is required!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div>
          <Button
            loading={candidateSearchProgress}
            htmlType="submit"
            name="Search"
            type
          />
          <Button htmlType="button" />
        </div>
      </Form>

      <Pagination
        defaultCurrent={1}
        total={candidateCount}
        onChange={e => {
          setLimit(e * 5 - 5);
        }}
      />
      {candidateData &&
        candidateData.map((candidate: any) => {
          return (
            <div className = {styles.description}>
              <div style={{padding:'1rem'}}>
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
                  {/* <Descriptions.Item>{candidate.description}</Descriptions.Item> */}
                </Descriptions>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default SearchCandidate;
