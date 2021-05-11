import React, { useEffect } from 'react';
import JobSearch from './JobSearch';
import Category from './Category';
import RecentJobs from './RecentJobs';
import styles from './index.module.scss';
import { Typography, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { Actions as jobCategoryAction } from './Category/actions';
import { Actions as recentJobs } from './RecentJobs/actions';
const { Title, Text } = Typography;
const Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobCategoryAction.jobCategoriesProgress());
    dispatch(recentJobs.recentJobsProgress());
  }, []);

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
