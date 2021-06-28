import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './actions';
import { IRootState } from '../../reducers';
import { Row, Col, Typography } from 'antd';
import JobCard from '../../Components/JobCard';
import Dashboard from '../../Containers/Dashboard';
import { Pagination } from 'antd';

const { Title, Paragraph } = Typography;
const AllJobs = () => {
  const [limit, setLimit] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.allJobsProgress({ limit: limit }));
  }, [dispatch]);
  const { allJobsSuccess, allJobsData, allJobsCount } = useSelector(
    (state: IRootState) => state.allJobsSearch,
  );
  useEffect(() => {
    dispatch(Actions.allJobsProgress({ limit: limit }));
  }, [limit]);
  return (
    <Dashboard dashboardName="All Jobs">
      <div className={styles.AllJobsFieldWrapper}>
        <Pagination
          defaultCurrent={1}
          total={allJobsCount}
          onChange={e => {
            setLimit(e * 10 - 10);
          }}
        />
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
