import React from 'react';
import styles from './index.module.scss';
import { Typography, Row, Col, Input } from 'antd';
import PrimaryButton from '../../../Components/PrimaryButton';
const { Text, Title, Link } = Typography;

interface IProps {
  name?: any;
}

const JobSearch = () => {
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
              />
            </Col>
          </Row>
          <PrimaryButton name="Search" />
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
