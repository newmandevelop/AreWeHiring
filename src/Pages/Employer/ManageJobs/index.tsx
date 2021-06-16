import React from 'react';
import styles from './index.module.scss';
import JobListing from '../../../Components/JobListing';
import { Row, Col, Typography, List, Avatar, Tag, Pagination } from 'antd';
const { Text, Title, Link } = Typography;

const draftJobs = [
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
];
const approveJobs = [
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
];
const archiveJobs = [
  {
    postedBy: 'EMPLOYER',
    message: 'Initiated',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Initiated',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Initiated',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Initiated',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
];
const deletedJobs = [
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
  {
    postedBy: 'EMPLOYER',
    message: 'Received',
    title: 'Physician Assistant – Neurosurgical Critical Care',
    date: new Date(),
    expiry: new Date(),
  },
];
const ManageJobs = () => {
  return (
    <div className={styles.manageJobsWrapper}>
      <div className={styles.draftJobs}>
        <JobListing
          data={draftJobs}
          number={draftJobs.length}
          heading="Draft Jobs"
          approve
          delete
          archive
        />
      </div>
      <div className={styles.approveJobs}>
        <JobListing
          data={approveJobs}
          number={approveJobs.length}
          heading="Approved Jobs"
          delete
          archive
        />
      </div>
      <div className={styles.archiveJobs}>
        <JobListing
          data={archiveJobs}
          number={archiveJobs.length}
          heading="Archived Jobs"
          approve
          delete
        />
      </div>
      <div className={styles.deleteJobs}>
        <JobListing
          data={deletedJobs}
          number={deletedJobs.length}
          heading="Deleted Jobs"
          delete
        />
      </div>
    </div>
  );
};

export default ManageJobs;
