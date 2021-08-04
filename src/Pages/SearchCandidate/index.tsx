import {
  notification,
  Descriptions,
  Avatar,
  Pagination,
  Row,
  Col,
  Form,
  Input
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../reducers';
import { Actions } from './actions';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import React, { useState, useEffect } from 'react'
import Button from '../../Components/Button';


export default function SearchCandidate() {
  const [state, setState] = useState({})
  let dispatch = useDispatch();
  const [limit, setLimit] = useState(0);

  const {
    candidateSearchErrorMessage,
    candidateSearchFailure,
    candidateSearchSuccess,
    candidateSearchProgress,
    candidateData,
    candidateCount,
  } = useSelector((state: IRootState) => state.searchCandidate);

  const openNotificationWithIcon = (
    type: 'success' | 'error',
    description: String | null,
  ) => {
    notification[type]({
      message: 'Notification Title',
      description: description,
    });
  };

  const searchCandidates = () => {
    dispatch(
      Actions.candidateSearchProgress({
        data: state,
        limit: limit,
      }),
    );
  }
  useEffect(() => {
    if (candidateSearchSuccess) {
      if (candidateData.length === 0) openNotificationWithIcon('success', 'No Data Available');
      else openNotificationWithIcon('success', 'Candidates Fetched Successfully');
    } else if (candidateSearchFailure) {
      openNotificationWithIcon('error', candidateSearchErrorMessage);
    }
  }, [
    candidateSearchSuccess,
    candidateSearchFailure,
    candidateSearchErrorMessage,
  ]);
  const candidateDataDummy = [
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
              <Input onChange={(e) => setState({ ...state, location: e.target.value })} />
            </Form.Item>
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
              <Input onChange={(e) => setState({ ...state, professionalTitle: e.target.value })} />
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
              loading={candidateSearchProgress}
              htmlType="submit"
              name="Search"
              type
              onClick={() => searchCandidates()}
            />
            <Button htmlType="button" />

          </Col>
        </Row>
        <Row justify="space-around">
          {candidateData && <Pagination
            defaultCurrent={1}
            total={candidateCount}
            onChange={e => {
              setLimit(e * 5 - 5);
            }}
          />}
          {candidateData &&
            candidateDataDummy.map((candidate: any) => {
              return (
                <div className={styles.description}>
                  <div style={{ padding: '1rem' }}>
                    <Descriptions.Item>
                      <Avatar
                        className={`ant-dropdown-link`}
                        size={50}
                        icon={<UserOutlined />}
                      />
                      <div style={{ marginLeft: '5px', display: 'inline' }}>
                        <strong>{candidate.content.firstName +
                          ' ' +
                          candidate.content.lastName}</strong>
                      </div>
                    </Descriptions.Item>

                    <Descriptions style={{ marginTop: '1rem' }}>
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
        </Row>
      </Col>
    </Row>
  )
}