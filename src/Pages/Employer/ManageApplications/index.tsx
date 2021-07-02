import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import ApplicationListing from '../../../Components/ApplicationListing';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../reducers';
import { Actions as approvedApplicationsActions } from './ApproveApplications/actions';
import { Actions as archivedApplicationsActions } from './ArchiveApplications/actions';
import { Actions as deletedApplicationsActions } from './DeleteApplications/actions';
import { Actions as draftApplicationsActions } from './DraftApplications/actions';
import { Actions as rejectedApplicationsActions } from './RejectApplications/actions';
import { getUserSession } from '../../../utils/sessionStorage';

const ManageApplications = () => {
  let dispatch = useDispatch();
  const { approvedApplicationsSuccess, approvedApplicationsData, applicationApproveSuccess } = useSelector(
    (state: IRootState) => state.approvedApplications,
  );

  const { archivedApplicationsSuccess, archivedApplicationsData, sendApplicationToArchiveSuccess } = useSelector(
    (state: IRootState) => state.archivedApplications,
  );

  const { deletedApplicationsSuccess, deletedApplicationsData, applicationDeleteSuccess } = useSelector(
    (state: IRootState) => state.deletedApplications,
  );

  const { draftApplicationsSuccess, draftApplicationsData } = useSelector(
    (state: IRootState) => state.draftApplications,
  );

  const { rejectedApplicationsSuccess, rejectedApplicationsData } = useSelector(
    (state: IRootState) => state.rejectedApplications,
  );

  useEffect(() => {
    let user = getUserSession();
    if (user) {
      dispatch(
        approvedApplicationsActions.approvedApplicationsProgress({
          userId: user,
        }),
      );
      dispatch(
        archivedApplicationsActions.archivedApplicationsProgress({
          userId: user,
        }),
      );
      dispatch(
        deletedApplicationsActions.deletedApplicationsProgress({
          userId: user,
        }),
      );
      dispatch(
        draftApplicationsActions.draftApplicationsProgress({
          userId: user,
        }),
      );
      dispatch(
        rejectedApplicationsActions.rejectedApplicationsProgress({
          userId: user,
        }),
      );
    }
  }, [applicationApproveSuccess, sendApplicationToArchiveSuccess, applicationDeleteSuccess]);

  return (
    <div className={styles.manageJobsWrapper}>
      <div className={styles.draftJobs}>
        <ApplicationListing
          data={draftApplicationsData}
          number={Object.keys(draftApplicationsData).length}
          heading="Draft Applications"
          approve
          delete
          archive
          reject
        />
      </div>
      <div className={styles.approveJobs}>
        <ApplicationListing
          data={approvedApplicationsData}
          number={Object.keys(approvedApplicationsData).length}
          heading="Approved Applications"
          delete
          archive
          reject
        />
      </div>
      <div className={styles.archiveJobs}>
        <ApplicationListing
          data={archivedApplicationsData}
          number={Object.keys(archivedApplicationsData).length}
          heading="Archived Applications"
          approve
          delete
          reject
        />
      </div>
      <div className={styles.deleteJobs}>
        <ApplicationListing
          data={deletedApplicationsData}
          number={Object.keys(deletedApplicationsData).length}
          heading="Deleted Applications"
        />
      </div>
      <div className={styles.deleteJobs}>
        <ApplicationListing
          data={rejectedApplicationsData}
          number={Object.keys(rejectedApplicationsData).length}
          heading="Rejected Applications"
        />
      </div>
    </div>
  );
};

export default ManageApplications;
