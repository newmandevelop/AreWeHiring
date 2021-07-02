import React, { useEffect } from 'react';
import ApplicationListing from '../../../../Components/ApplicationListing';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../reducers';
import { Actions as approveJobActions } from '../ApproveJob/actions';

const ApplicationsForJob = (props: any) => {
  let dispatch = useDispatch();
  const {
    applicationsDataForThisJob,
    applicationsForThisJobSuccess,
  } = useSelector((state: IRootState) => state.approveJob);
  useEffect(() => {
    dispatch(
      approveJobActions.getApplicationsForThisJobProgress({
        jobId: props.location.state.jobId,
      }),
    );
  }, []);

  return (
    <div>
          <div>
            <ApplicationListing
              data={applicationsDataForThisJob}
              number={Object.keys(applicationsDataForThisJob).length}
              heading="Applications"
            />
          </div>
    </div>
  );
};

export default ApplicationsForJob;
