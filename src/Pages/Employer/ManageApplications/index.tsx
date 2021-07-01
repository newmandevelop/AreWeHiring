import React, { useEffect } from 'react';
import styles from './index.module.scss';
import JobListing from '../../../Components/JobListing';
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
  const { approvedApplicationsSuccess, approvedApplicationsData } = useSelector(
    (state: IRootState) => state.approvedApplications,
  );

  const { archivedApplicationsSuccess, archivedApplicationsData } = useSelector(
    (state: IRootState) => state.archivedApplications,
  );

  const { deletedApplicationsSuccess, deletedApplicationsData } = useSelector(
    (state: IRootState) => state.deletedApplications,
  );

  const { draftApplicationsSuccess, draftApplicationsData } = useSelector(
    (state: IRootState) => state.draftApplications,
  );

  const { rejectedApplicationsSuccess, rejectedApplicationsData } = useSelector(
    (state: IRootState) => state.rejectedApplications,
  );

  // interface IJob {
  //   id?: string;
  //   nameOfJob?: string;
  //   status?: string;
  //   datePosted?: string;
  //   employer?: boolean;
  //   expiryDate?: string;
  //   dateDeleted?: string;
  //   dateArchived?: string;
  //   dateApproved?: string;
  // }

  const data = [
    {
      id: '12321',
      nameOfJob: 'Software Developer',
      status: 'Draft',
      datePosted: '23 Jun 2021',
      employer: 'Apple',
      expiryDate: '23 July 2021',
      dateDeleted: '25 July 2021',
      dateArchived: '25 July 2021',
      dateApproved: '20 July 2021',
    },
    {
      id: '4567865',
      nameOfJob: 'Web Developer',
      status: 'Draft',
      datePosted: '23 Jun 2021',
      employer: 'Samsung',
      expiryDate: '23 July 2021',
      dateDeleted: '25 July 2021',
      dateArchived: '25 July 2021',
      dateApproved: '20 July 2021',
    },
  ];
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
  }, []);

  useEffect(() => {
    approvedApplicationsData &&
      console.log('approved jobs', approvedApplicationsData);
  }, [approvedApplicationsSuccess]);

  useEffect(() => {
    archivedApplicationsData &&
      console.log('archived jobs', archivedApplicationsData);
  }, [archivedApplicationsSuccess]);

  useEffect(() => {
    deletedApplicationsData &&
      console.log('deleted jobs', deletedApplicationsData);
  }, [deletedApplicationsSuccess]);

  useEffect(() => {
    draftApplicationsData && console.log('draft jobs', draftApplicationsData);
  }, [draftApplicationsSuccess]);

  return (
    <div className={styles.manageJobsWrapper}>
      <div className={styles.draftJobs}>
        <JobListing
          data={data}
          number={Object.keys(data).length}
          heading="Draft Applications"
          approve
          delete
          archive
        />
      </div>
      <div className={styles.approveJobs}>
        <JobListing
          data={data}
          number={Object.keys(data).length}
          heading="Approved Applications"
          delete
          archive
        />
      </div>
      <div className={styles.archiveJobs}>
        <JobListing
          data={data}
          number={Object.keys(data).length}
          heading="Archived Applications"
          approve
          delete
        />
      </div>
      <div className={styles.deleteJobs}>
        <JobListing
          data={data}
          number={Object.keys(data).length}
          heading="Deleted Applications"
        />
      </div>
      <div className={styles.deleteJobs}>
        <JobListing
          data={data}
          number={Object.keys(data).length}
          heading="Rejected Applications"
        />
      </div>
    </div>
  );
};

export default ManageApplications;
