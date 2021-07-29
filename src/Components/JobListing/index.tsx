import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Typography, List, Modal } from 'antd';
import styles from './index.module.scss';
import { CheckOutlined, EditOutlined } from '@ant-design/icons'
import { getUserSession } from '../../utils/sessionStorage';
import { ExclamationCircleOutlined, DeleteOutlined, RightOutlined, ToTopOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Actions as ApproveJobAction } from '../../Pages/Employer/ManageJobs/ApproveJob/actions';
import { Actions as ArchiveJobAction } from '../../Pages/Employer/ManageJobs/ArchiveJob/actions';
import { Actions as DeleteJobAction } from '../../Pages/Employer/ManageJobs/DeleteJob/actions';
import { Actions as EditJobAction } from '../../Pages/Employer/ManageJobs/EditJob/actions';
import { useHistory } from 'react-router-dom';
import { editJob } from '../../service/jobs';


const { Text, Link } = Typography;
const { confirm } = Modal;
interface IData {
  nameOfJob?: string;
  employer?: string;
  datePosted?: string;
  expiryDate?: Date;
  message?: string;
  id?: string;
}

interface IProps {
  data: any;
  heading?: string;
  number?: number;
  delete?: boolean;
  approve?: boolean;
  archive?: boolean;
  edit?: boolean
}

const JobListing = (props: IProps) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const todaysDate = Date.now();
  const formatedTodayDate = moment(todaysDate).format('MMM DD, YYYY')
  const userId = getUserSession()

  const isJobExpired = (job: any) => {
    return new Date(moment(job.expiryDate).format('MMM DD, YYYY')) < new Date(formatedTodayDate) ?
      true : false
  }

  const renewJob = (jobId: any) => {
    dispatch(ApproveJobAction.renewJobProgress({ jobId: jobId, userId: userId }),)
  }
  const doAction = (type: string, id?: string) => {
    let user = getUserSession();
    if (user)
      switch (type) {
        case 'Edit':
          return confirm({
            title: 'Do you Want to Edit this Job',
            icon: <ExclamationCircleOutlined />,
            // content: 'This job will be approved and show in Approve Jobs List',
            onOk() {
              dispatch(
                EditJobAction.editJobProgress({
                  jobId: id,
                }),
              );
              history.push('/dashboard/employee/edit-job')
            },
            onCancel() {
              console.log('');
            },
          });
        case 'Approve':
          return confirm({
            title: 'Do you Want to Approve this Job',
            icon: <ExclamationCircleOutlined />,
            content: 'This job will be approved and show in Approve Jobs List',
            onOk() {
              dispatch(
                ApproveJobAction.approveJobProgress({
                  userId: user,
                  jobId: id,
                }),
              );
            },
            onCancel() {
              console.log('');
            },
          });
        case 'Archive':
          return confirm({
            title: 'Do you Want to Archive this Job',
            icon: <ExclamationCircleOutlined />,
            content: 'This job will be archived and show in Archive Jobs List',
            onOk() {
              dispatch(
                ArchiveJobAction.archiveJobProgress({
                  userId: user,
                  jobId: id,
                }),
              );
            },
            onCancel() {
              console.log('');
            },
          });
        case 'Delete':
          return confirm({
            title: 'Do you Want to Delete this Job',
            icon: <ExclamationCircleOutlined />,
            content: 'This job will be deleted and show in Delete Jobs List',
            onOk() {
              dispatch(
                DeleteJobAction.deleteJobProgress({
                  userId: user,
                  jobId: id,
                }),
              );
            },
            onCancel() {
              console.log('');
            },
          });
      }
    else {
      alert('No user Present');
    }
  };
  console.log(`props.data`, props.data);
  return (
    <div className={styles.jobListing}>
      <List
        header={
          <div className={styles.heading}>
            <Text>
              {props.heading}
              &nbsp;
              {props.number && `(${props.number})`}
            </Text>
          </div>
        }
        bordered
        dataSource={props.data}
        renderItem={(item: IData) => (
          <List.Item>
            <List.Item.Meta
              description={
                <div className={styles.listItem}>
                  <div className={styles.content}>
                    <div className={styles.date}>
                      <Text className={styles.posting}>
                        {item.message}{' '}
                        {moment(item.datePosted).format('MMM DD, YYYY')}
                      </Text>
                      <Text className={styles.expiry}>
                        Expiry {moment(item.expiryDate).format('MMM DD, YYYY')}
                        {/* {
                          item && isJobExpired(item) &&
                          (<p className={styles.link}
                            style={{ cursor: 'pointer' }}
                            onClick={() => { renewJob(item.id) }}
                          >
                            <span style={{ color: 'red' }}>Expired!</span> Click to renew</p>)
                        } */}
                      </Text>
                    </div>
                    <div className={styles.title}>
                      <Link className={styles.link}>{item.nameOfJob}</Link>
                      <Text className={styles.message}>
                        Posted By: {item.employer}
                      </Text>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    {props.edit && item && (
                      <EditOutlined
                        className={`${styles.archive} ${styles.icon}`}
                        title="Edit"
                        onClick={() => doAction('Edit', item.id)}
                      />
                    )}
                    {props.archive && item && (
                      <ToTopOutlined
                        className={`${styles.archive} ${styles.icon}`}
                        title="Archive"
                        onClick={() => doAction('Archive', item.id)}
                      />
                    )}
                    {props.approve && item && (
                      <CheckOutlined
                        className={`${styles.approve} ${styles.icon}`}
                        title="Approve"
                        // cursor="pointer"
                        onClick={() => doAction('Approve', item.id)}
                      />
                    )}
                    {props.delete && item && (
                      <DeleteOutlined
                        className={`${styles.delete} ${styles.icon}`}
                        title="Delete"
                        onClick={() => doAction('Delete', item.id)}
                      />
                    )}
                    {item && (
                      <RightOutlined
                        className={`${styles.view} ${styles.icon}`}
                        title="View Applications"
                        onClick={() => {
                          history.push({
                            pathname: '/dashboard/employee/manage-jobs/applications',
                            state: { jobId: item.id }
                          });
                        }}
                      />
                    )}

                    {
                      item && isJobExpired(item) &&
                      (<p className={styles.link}
                        style={{ cursor: 'pointer', marginTop: '1rem' }}
                        onClick={() => { renewJob(item.id) }}
                      >
                        <span style={{ color: 'red' }}>Expired!</span> Click to renew</p>)
                    }

                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default JobListing;
