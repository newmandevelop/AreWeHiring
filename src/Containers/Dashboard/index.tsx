import React from 'react';
import styles from './index.module.scss';
import { Typography, Breadcrumb } from 'antd';
const { Text, Title, Paragraph } = Typography;
const { Item } = Breadcrumb;
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div>
        <Title className={styles.title}>Candidate Dashboard</Title>
        <Breadcrumb separator=">">
          <Item>Home</Item>
          <Item>Dashboard Name</Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Dashboard;
