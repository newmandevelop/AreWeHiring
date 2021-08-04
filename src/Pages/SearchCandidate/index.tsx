import {
  notification,
  Descriptions,
  Avatar,
  Pagination,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Slider
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
  const [annualSalaryChecked, setAnnualSalaryChecked] = useState(false)
  const [hourlyRateChecked, setHourlyRateChecked] = useState(false)

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
  useEffect(() => { console.log(candidateData) }, [candidateData])
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
        <Row>
          <Col span={20}>
            <Checkbox onChange={(e) => setAnnualSalaryChecked(e.target.checked)}>Filter by Annual Salary</Checkbox>
            <Slider defaultValue={30} disabled={!annualSalaryChecked} />
          </Col>
        </Row>
        <Row style={{ marginTop: '1rem' }}>
          <Col span={20}>
            <Checkbox onChange={(e) => setHourlyRateChecked(e.target.checked)}>Filter by Hourly Rate</Checkbox>
            <Slider defaultValue={30} disabled={!hourlyRateChecked} />
          </Col>
        </Row>
      </Col>
      <Col span={18} style={{ backgroundColor: 'white', minHeight: '100vh' }}>
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
            candidateData.map((candidate: any) => {
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

                      {candidate.content.skills && <Descriptions.Item label="Skills">{candidate.content.skills}</Descriptions.Item>}

                      {candidate.content.education && <Descriptions.Item label="Education"><ul>{candidate.content.education.map((data: string) => {
                        return <li>{data}</li>
                      })}</ul>
                      </Descriptions.Item>}
                    </Descriptions>
                    {/* {
                      candidate.content.experienceList && <Descriptions title="Experience">
                        {candidate.content.experienceList.map((experience: any) => {
                          return <><Descriptions.Item label="Employer">
                            {experience.employer}
                          </Descriptions.Item>

                            <Descriptions.Item label="Job Title">
                              {experience.jobTitle}
                            </Descriptions.Item>

                            <Descriptions.Item label="Duration">
                              {experience.startEndDate}
                            </Descriptions.Item>

                            <Descriptions.Item label="Notes">
                              {experience.notes}
                            </Descriptions.Item>
                          </>
                        })}
                      </Descriptions>
                    } */}
                  </div>
                </div>
              );
            })}
        </Row>
      </Col>
    </Row>
  )
}