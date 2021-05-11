import React from 'react';
import styles from './index.module.scss';
import Company from '../../../assets/companyName.png';
import Tag from '../../../Components/Tag';
import { Row, Col, Typography } from 'antd';
import {
  DollarCircleOutlined,
  CalendarOutlined,
  CarryOutOutlined,
} from '@ant-design/icons';
const { Title, Text, Paragraph } = Typography;
const RecentJobs = () => {
  return (
    <div className={styles.recent_jobs_Wrapper}>
      <div className={styles.recentJobCard}>
        <Row
          style={{ borderBottom: '1px solid #e0e0e0' }}
          gutter={20}
          justify="center"
        >
          <Col lg={4} md={6} sm={12} xs={12}>
            <img className={styles.recentJobImage} src={Company} alt="" />
          </Col>
          <Col md={20} sm={24} xs={24}>
            <div className={styles.infoContainer}>
              <Title className={styles.title}>
                Physician Assistant – Neurosurgical Critical Care
              </Title>
              <Tag />
              <div className={styles.jobDetail}>
                <div className={styles.detail1}>
                  <Paragraph className={styles.firstDetail}>
                    <CarryOutOutlined />
                    <span className={styles.span}>{`${'Recruiter'}`}</span>
                  </Paragraph>
                </div>
                <div className={styles.detail2}>
                  {' '}
                  <Paragraph className={styles.secondDetail}>
                    <CarryOutOutlined />
                    <span className={styles.span}>44</span>
                  </Paragraph>
                </div>
                <div className={styles.detail3}>
                  {' '}
                  <Paragraph className={styles.secondDetail}>
                    <DollarCircleOutlined />
                    <span className={styles.span}>4</span>
                  </Paragraph>
                </div>
                <div className={styles.detail4}>
                  {' '}
                  <Paragraph className={styles.secondDetail}>
                    <CalendarOutlined />
                    <span className={styles.span}>44</span>
                  </Paragraph>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          style={{ borderBottom: '1px solid #e0e0e0', marginTop: '1rem' }}
          gutter={20}
          justify="center"
        >
          <Col lg={4} md={6} sm={12} xs={12}>
            <img className={styles.recentJobImage} src={Company} alt="" />
          </Col>
          <Col md={20} sm={24} xs={24}>
            <div className={styles.infoContainer}>
              <Title className={styles.title}>
                Physician Assistant – Neurosurgical Critical Care
              </Title>
              <Tag />
              <div className={styles.jobDetail}>
                <div className={styles.detail1}>
                  <Paragraph className={styles.firstDetail}>
                    <CarryOutOutlined />
                    <span className={styles.span}>{`${'Recruiter'}`}</span>
                  </Paragraph>
                </div>
                <div className={styles.detail2}>
                  {' '}
                  <Paragraph className={styles.secondDetail}>
                    <CarryOutOutlined />
                    <span className={styles.span}>44</span>
                  </Paragraph>
                </div>
                <div className={styles.detail3}>
                  {' '}
                  <Paragraph className={styles.secondDetail}>
                    <DollarCircleOutlined />
                    <span className={styles.span}>4</span>
                  </Paragraph>
                </div>
                <div className={styles.detail4}>
                  {' '}
                  <Paragraph className={styles.secondDetail}>
                    <CalendarOutlined />
                    <span className={styles.span}>44</span>
                  </Paragraph>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default RecentJobs;
