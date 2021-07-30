import React from 'react';
import styles from './index.module.scss';
import { Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { logoutUser, removeRole } from '../../utils/sessionStorage';
const { Title, Paragraph, Link } = Typography;
// const { Item } = Breadcrumb;
interface IProps {
  children?: any;
  dashboardName?: string;
}

const Dashboard = (props: IProps) => {
  const history = useHistory();
  const handleLogout = () => {
    logoutUser();
    removeRole();
    history.push('/');
  };
  return (
    <div className={styles.dashboard}>
      <div>
        <Title className={styles.title}>{props.dashboardName} Dashboard</Title>
        {/* <Breadcrumb separator=">">
          <Item>Home</Item>
          <Item>{props.dashboardName}</Item>
        </Breadcrumb>{' '} */}
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
            <Link onClick={() => handleLogout()} className={styles.signout}>Signout</Link>
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
