import React from 'react';
import styles from './index.module.scss';
import { Typography, Breadcrumb } from 'antd';
import Candidate from './Candidate/index';
const { Title } = Typography;
const { Item } = Breadcrumb;
const Dashboard = (props: any) => {
  return (
    <div className={styles.dashboard} {...props}>
      <div>
        <Title className={styles.title}>Candidate Dashboard</Title>
        <Breadcrumb separator=">">
          <Item>Home</Item>
          <Item>Candidate Name</Item>
          <Candidate></Candidate>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Dashboard;
