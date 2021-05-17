import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './actions';
import { IRootState } from '../../reducers';
import { Row, Col, Typography } from 'antd';
import JobCard from '../../Components/JobCard';
import Dashboard from '../../Containers/Dashboard';

const { Title, Paragraph } = Typography;

const AllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.allJobsProgress());
  }, [dispatch]);
  const { allJobsSuccess, allJobsData } = useSelector(
    (state: IRootState) => state.allJobsSearch,
  );

  return (
    <Dashboard dashboardName="All Jobs">
      <div className={styles.AllJobsFieldWrapper}>
        {console.log(allJobsData)}
        {allJobsSuccess && (
          <Row justify="space-around">
            {allJobsData.map((job: any) => {
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
        )}
      </div>
    </Dashboard>
  );
};

export default AllJobs;
