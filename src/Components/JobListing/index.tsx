import React from 'react';
import moment from 'moment';
import { Typography, List, Modal } from 'antd';
import styles from './index.module.scss';
import { BiArchiveOut } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { AiFillRightCircle } from 'react-icons/ai';
import { getUserSession } from '../../utils/sessionStorage';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Actions as ApproveJobAction } from '../../Pages/Employer/ManageJobs/ApproveJob/actions';
import { Actions as ArchiveJobAction } from '../../Pages/Employer/ManageJobs/ArchiveJob/actions';
import { Actions as DeleteJobAction } from '../../Pages/Employer/ManageJobs/DeleteJob/actions';
import { useHistory } from 'react-router-dom';

const { Text, Link } = Typography;
const { confirm } = Modal;
interface IData {
  nameOfJob?: string;
  employer?: string;
  datePosted?: string;
  expiryDate?: string;
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
}

const JobListing = (props: IProps) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const doAction = (type: string, id?: string) => {
    let user = getUserSession();
    if (user)
      switch (type) {
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
                    {props.archive && item && (
                      <BiArchiveOut
                        size="30px"
                        title="Archive"
                        cursor="pointer"
                        className={styles.archive}
                        onClick={() => doAction('Archive', item.id)}
                      />
                    )}
                    {props.approve && item && (
                      <TiTick
                        className={styles.approve}
                        size="30px"
                        title="Approve"
                        cursor="pointer"
                        onClick={() => doAction('Approve', item.id)}
                      />
                    )}
                    {props.delete && item && (
                      <MdDelete
                        className={styles.delete}
                        size="30px"
                        title="Delete"
                        cursor="pointer"
                        onClick={() => doAction('Delete', item.id)}
                      />
                    )}
                    {item && (
                      <AiFillRightCircle
                        size="30px"
                        title="View Applications"
                        cursor="pointer"
                        onClick={() => {
                          history.push({
                            pathname: '/dashboard/employee/manage-jobs/applications',
                            state: {jobId: item.id}
                          });
                        }}
                      />
                    )}
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
