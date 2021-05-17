import React, { useEffect } from 'react';
import JobSearch from './JobSearch';
import Category from './Category';
import RecentJobs from './RecentJobs';
import styles from './index.module.scss';
import { Typography, Divider, Row, Col } from 'antd';
import JobCard from '../../Components/JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';
import JobSpotlight from './JobSpotlight';
import { Actions as jobCategoryAction } from './Category/actions';
import { Actions as recentJobs } from './RecentJobs/actions';
import Reviews from './Reviews';
import emoji from '../../assets/in-love.svg';
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
          <div id="searchedJobs" className={styles.homePadding}>
            <Title className={styles.homeCategoryText}>Searched Jobs</Title>
            <Row justify="space-around">
              {Object.values(jobData).map(job => {
                return (
                  <Col
                    key={job.id}
                    className={styles.column}
                    md={9}
                    lg={7}
                    sm={22}
                    xs={22}
                  >
                    <JobCard
                      name={job.nameOfJob}
                      type={job.jobType}
                      location={job.location}
                      employer={job.employer}
                      currencySymbol={job.currencySymbol}
                      datePosted={job.datePosted}
                      description={job.description}
                      id={job.id}
                      salaryLowerLimit={job.salaryLowerLimit}
                      salaryUpperLimit={job.salaryUpperLimit}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </>
      )}
      <div className={styles.homePadding}>
        <Title className={styles.homeCategoryText}>Job Spotlight</Title>
        <JobSpotlight />
      </div>
      <div className={styles.users}>
        <div className={styles.reviewHeading}>
          <Text className={styles.homeUserReview}>What Our Users Say</Text>
          <img
            draggable={false}
            className={styles.emojiImage}
            src={emoji}
            alt="emoji"
          ></img>
        </div>
        <Text className={styles.reviewDetail}>
          We collect reviews from our users so you can get an honest opinion of
          what an experience with our website are really like!
        </Text>
        <Reviews />
      </div>
    </div>
  );
};
export default Home;
