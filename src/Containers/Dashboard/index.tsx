import React from 'react';
import styles from './index.module.scss';
import { Typography, Breadcrumb } from 'antd';
const { Title, Paragraph, Link } = Typography;
const { Item } = Breadcrumb;

interface IProps {
  children?: any;
  dashboardName?: string;
}

const Dashboard = (props: IProps) => {
  return (
    <div className={styles.dashboard}>
      <div>
        <Title className={styles.title}>{props.dashboardName} Dashboard</Title>
        <Breadcrumb separator=">">
          <Item>Home</Item>
          <Item>{props.dashboardName}</Item>
        </Breadcrumb>{' '}
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
      </div>
      <div>
        {props.children}
        {/* <Candidate></Candidate> */}
      </div>
    </div>
  );
};

export default Dashboard;
