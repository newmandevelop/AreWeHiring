import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { Carousel } from 'antd';
import { Actions } from './actions';
import JobCard from '../../../Components/JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../reducers';

const JobSpotlight = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.jobSpotlightProgress());
  }, [dispatch]);
  const {
    jobSpotlightData,
    jobSpotlightSuccess,
    jobSpotlightFailure,
    jobSpotlightErrorMessage,
  } = useSelector((state: IRootState) => state.jobSpotlight);

  const LeftArrow = ({ onClick }: any) => (
    <div className={styles.leftArrowContainer} onClick={onClick}>
      <i className="fal fa-chevron-left"></i>
    </div>
  );
  const RightArrow = ({ onClick }: any) => (
    <div className={styles.rightArrowContainer} onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );

  return (
    <div className={styles.jobSpotlightWrapper}>
      {jobSpotlightSuccess && (
        <Carousel
          arrows
          prevArrow={<LeftArrow type="left" />}
          nextArrow={<RightArrow type="right" />}
          dots={false}
          slidesToShow={4}
          autoplay
          autoplaySpeed={2000}
        >
          {jobSpotlightData.map((job: any) => {
            return (
              <div key={job.id}>
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
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};
export default JobSpotlight;
