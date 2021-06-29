import React, { useEffect, useState } from 'react';
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
import { Pagination } from 'antd';

const { Title, Text } = Typography;
const Home = () => {
  let dispatch = useDispatch();
  const { jobData, jobSearchSuccess, jobCount } = useSelector(
    (state: IRootState) => state.findJob,
  );
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    dispatch(jobCategoryAction.jobCategoriesProgress());
    dispatch(recentJobs.recentJobsProgress());
  }, []);
  return (
    <div className={styles.homeWrapper}>
      <JobSearch limit={limit} />
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
              <Pagination
                defaultCurrent={1}
                total={jobCount}
                pageSize={5}
                onChange={e => {
                  setLimit(5 * e - 5);
                }}
              />
              {Object.values(jobData).map(job => {
                return (
                  <Col
                    key={job.content.id}
                    className={styles.column}
                    md={9}
                    lg={7}
                    sm={22}
                    xs={22}
                  >
                    <JobCard
                      name={job.content.nameOfJob}
                      type={job.content.jobType}
                      location={job.content.location}
                      employer={job.content.employer}
                      currencySymbol={job.content.currencySymbol}
                      datePosted={job.content.datePosted}
                      description={job.content.description}
                      id={job.id}
                      salaryLowerLimit={job.content.salaryLowerLimit}
                      salaryUpperLimit={job.content.salaryUpperLimit}
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
