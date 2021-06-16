import React, { useEffect } from 'react';
import styles from './index.module.scss';
import JobListing from '../../../Components/JobListing';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../reducers';
import { Actions as draftJobActions } from './DraftJobs/actions';
import { Actions as approveJobActions } from './ApproveJob/actions';
import { Actions as archiveJobActions } from './ArchiveJob/actions';
import { Actions as deleteJobActions } from './DeleteJob/actions';

import { getUserSession } from '../../../utils/sessionStorage';

const ManageJobs = () => {
  let dispatch = useDispatch();
  const { draftJobsData } = useSelector((state: IRootState) => state.draftJob);
  const { jobApprovedSuccess, approvedJobsData } = useSelector(
    (state: IRootState) => state.approveJob,
  );
  const { jobArchivedSuccess, archivedJobsData } = useSelector(
    (state: IRootState) => state.archiveJob,
  );
  const { jobDeletedSuccess, deleteJobData } = useSelector(
    (state: IRootState) => state.deleteJob,
  );
  useEffect(() => {
    let user = getUserSession();
    if (user) {
      dispatch(draftJobActions.jobsInDraftProgress({ userId: user }));
      dispatch(approveJobActions.jobsInApproveProgress({ userId: user }));
      dispatch(archiveJobActions.jobsInArchiveProgress({ userId: user }));
      dispatch(deleteJobActions.jobsInDeleteProgress({ userId: user }));
      dispatch(approveJobActions.approveJobFailure(''));
    }
    jobApprovedSuccess && dispatch(approveJobActions.approveJobFailure(''));
    jobArchivedSuccess && dispatch(archiveJobActions.archiveJobFailure(''));
    jobDeletedSuccess && dispatch(deleteJobActions.deleteJobFailure(''));
  }, [jobApprovedSuccess, jobArchivedSuccess, jobDeletedSuccess]);

  return (
    <div className={styles.manageJobsWrapper}>
      <div className={styles.draftJobs}>
        {Object.keys(draftJobsData).length > 0 && (
          <JobListing
            data={draftJobsData}
            number={Object.keys(draftJobsData).length}
            heading="Draft Jobs"
            approve
            delete
            archive
          />
        )}
      </div>
      <div className={styles.approveJobs}>
        {Object.keys(approvedJobsData).length > 0 && (
          <JobListing
            data={approvedJobsData}
            number={Object.keys(approvedJobsData).length}
            heading="Approved Jobs"
            delete
            archive
          />
        )}
      </div>
      <div className={styles.archiveJobs}>
        {Object.keys(archivedJobsData).length > 0 && (
          <JobListing
            data={archivedJobsData}
            number={Object.keys(archivedJobsData).length}
            heading="Archived Jobs"
            approve
            delete
          />
        )}
      </div>
      <div className={styles.deleteJobs}>
        {Object.keys(deleteJobData).length > 0 && (
          <JobListing
            data={deleteJobData}
            number={Object.keys(deleteJobData).length}
            heading="Deleted Jobs"
          />
        )}
      </div>
    </div>
  );
};

export default ManageJobs;
