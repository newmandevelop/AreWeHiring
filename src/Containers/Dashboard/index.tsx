import React from 'react';
import styles from './index.module.scss';
import { Typography, Breadcrumb } from 'antd';
import Candidate from './Candidate/index';
const { Title, Paragraph, Link } = Typography;
const { Item } = Breadcrumb;
const Dashboard = (props: any) => {
  return (
    <div className={styles.dashboard} {...props}>
      <div>
        <Title className={styles.title}>Candidate Dashboard</Title>
        <Breadcrumb separator=">">
          <Item>Home</Item>
          <Item>Candidate Name</Item>
          <div className={styles.alert}>
            <div>
              <Paragraph
                style={{ fontWeight: 'bold' }}
                className={styles.alertMessage}
              >
                Welcome to Are We Hiring
              </Paragraph>
              <Paragraph className={styles.alertMessage}>
                You are currently signed in as userName
              </Paragraph>
            </div>
            <div>
              <Link className={styles.signout}>Signout</Link>
            </div>
          </div>
          <Candidate></Candidate>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Dashboard;
