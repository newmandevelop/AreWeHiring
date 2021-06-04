import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Actions } from './actions';

import { Typography, Row, Col, Input, notification } from 'antd';
import PrimaryButton from '../../../Components/PrimaryButton';
import { getToken } from '../../../utils/sessionStorage';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../reducers';
const { Text, Title, Link } = Typography;

interface IProps {
  name?: any;
}

const JobSearch = () => {
  const [what, setWhat] = useState('Security Chief');
  const [where, setWhere] = useState('Seattle');
  let dispatch = useDispatch();

  const {
    jobSearchProgress,
    jobSearchSuccess,
    jobSearchErrorMessage,
    jobSearchFailure,
  } = useSelector((state: IRootState) => state.findJob);
  const Label = (props: IProps) => {
    return (
      <div className={styles.label}>
        <div className={styles.labelBG}></div>
        <div className={styles.labelFG}>
          <Text className={styles.labelText}>{props.name}</Text>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (jobSearchSuccess) {
      const element: any = document.getElementById('searchedJobs');
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [jobSearchSuccess]);

  useEffect(() => {
    if (jobSearchFailure) {
      notification.error({ message: jobSearchErrorMessage });
    }
  }, [jobSearchFailure]);

  const handleSubmit = () => {
    dispatch(
      Actions.jobSearchProgress({
        findJob: { what, where },
      }),
    )
  };

  return (
    <div className={styles.jobSearchWrapper}>
      <div className={styles.jobSearchContainer}>
        <div className={styles.containerFields}>
          <Title className={styles.title}>Find Job</Title>

          <Row>
            <Col md={6} xs={24} sm={24}>
              <Text className={styles.hiringText}>
                Hire experts or be hired in accounting & fina
              </Text>
            </Col>
          </Row>
          <Row>
            <Label
              name="What job are you looking for?
"
            />
            <Col span={24}>
              <Input
                className={styles.jobSearchField}
                placeholder="Job title, Skill, Industry"
                type="text"
                value={what}
                onChange={e => {
                  setWhat(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Label name="Where?" />
            <Col span={24}>
              <Input
                className={styles.jobSearchField}
                placeholder="City, State or Zip"
                type="text"
                value={where}
                onChange={e => {
                  setWhere(e.target.value);
                }}
              />
            </Col>
          </Row>
          <PrimaryButton
            htmlType="submit"
            onClick={handleSubmit}
            name="Search"
            loading={jobSearchProgress}
          />

          <Text className={styles.titleText}>
            Need more search options?
            <Link style={{ color: '#3489cf', marginLeft: '0.5rem' }}>
              Advanced Search
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};
export default JobSearch;
