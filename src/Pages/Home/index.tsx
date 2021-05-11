import React from 'react';
import JobSearch from './JobSearch';
import Category from './Category';
import RecentJobs from './RecentJobs';
import styles from './index.module.scss';
import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;
interface IProps {
  name: string;
  link: string;
  number: Number;
}
const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <JobSearch />
      <div className={styles.homePadding}>
        <Title className={styles.homeCategoryText}>Popular Categories</Title>
        <Category />
      </div>
      <Divider plain />
      <div className={styles.homePadding}>
        <Title className={styles.homeCategoryText}>Recent Jobs</Title>
        <RecentJobs />
      </div>
    </div>
  );
};
export default Home;
