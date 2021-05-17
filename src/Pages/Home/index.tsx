import React, { useEffect } from 'react';
import JobSearch from './JobSearch';
import Category from './Category';
import RecentJobs from './RecentJobs';
import styles from './index.module.scss';
import { Typography, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';

import { Actions as jobCategoryAction } from './Category/actions';
import { Actions as recentJobs } from './RecentJobs/actions';
const { Title, Text } = Typography;
const Home = () => {
  let dispatch = useDispatch();
  const { jobData, jobSearchSuccess } = useSelector(
    (state: IRootState) => state.findJob,
  );

  useEffect(() => {
    dispatch(jobCategoryAction.jobCategoriesProgress());
    dispatch(recentJobs.recentJobsProgress());
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <JobSearch />
      {console.log(jobSearchSuccess)}
      {!jobSearchSuccess && (
        <>
          <div className={styles.homePadding}>
            <Title className={styles.homeCategoryText}>
              Popular Categories
            </Title>
            <Category />
          </div>
          <Divider plain />
          <div className={styles.homePadding}>
            <Title className={styles.homeCategoryText}>Recent Jobs</Title>
            <RecentJobs />
          </div>
        </>
      )}
      {jobSearchSuccess && (
        <>
          <div className={styles.homePadding}>
            <Title className={styles.homeCategoryText}>Searched Jobs</Title>
            {/* <Category /> */}
          </div>
        </>
      )}
    </div>
  );
};
export default Home;
