import React from 'react';
import styles from './index.module.scss';
import { Typography, Breadcrumb } from 'antd';
import Candidate from '../../Pages/Candidate/index';
import CustomLayout from './../../Containers/Layout';
const { Title, Paragraph, Link } = Typography;
const { Item } = Breadcrumb;

interface IProps {
  children?: any;
  dashboardName?: string;
}

const Dashboard = (props: IProps) => {
  return (
    <CustomLayout>
      <div className={styles.dashboard}>
        <div>
          <Title className={styles.title}>
            {props.dashboardName} Dashboard
          </Title>
          <Breadcrumb separator=">">
            <Item>Home</Item>
            <Item>Candidate</Item>
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
    </CustomLayout>
  );
};

export default Dashboard;
