import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import companyLogo from '../../../assets/companyName.png';
import styles from './index.module.scss';

const JobDescription = (data: any) => {
  const { Title, Text, Paragraph } = Typography;
  const {
    nameOfJob,
    company,
    location,
    description,
    rolesAndResponsibilities,
  } = data.data;
  return (
    <div className={styles.JobDescriptionWrapper}>
      <Row className={styles.introWrapper}>
        <Col md={5}>
          <img className={styles.logoImg} src={companyLogo} alt="Logo here" />
        </Col>
        <Col offset={1} md={18}>
          <Title level={4} className={styles.noMargin}>
            Job Title
          </Title>
          <Text>{nameOfJob}</Text>

          <Title level={4} className={styles.noMargin}>
            Company{' '}
          </Title>
          <Text> {company} </Text>
          <Title level={4} className={styles.noMargin}>
            Location
          </Title>
          <Text> {location} </Text>
        </Col>
      </Row>
      <Divider style={{ marginTop: '2rem' }} />
      <Row justify="end" style={{ marginTop: '2rem' }}>
        <Col span={23}>
          <Title level={4}>Job Summary</Title>
          <Typography style={{ width: '90%' }}>{description}</Typography>
        </Col>
        <Divider style={{ marginTop: '2rem' }} />

        <Col span={23}>
          <Title level={4}>In this role you will</Title>
          <Paragraph ellipsis={false}>{rolesAndResponsibilities}</Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default JobDescription;
