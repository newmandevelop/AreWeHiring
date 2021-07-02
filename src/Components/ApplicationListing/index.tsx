import React from 'react';
import moment from 'moment';
import { Typography, List, Modal } from 'antd';
import styles from './index.module.scss';
import { BiArchiveOut } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { AiFillCloseCircle } from 'react-icons/ai';
import { getUserSession } from '../../utils/sessionStorage';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Actions as ApproveApplicationActions } from '../../Pages/Employer/ManageApplications/ApproveApplications/actions';
import { Actions as ArchiveApplicationActions } from '../../Pages/Employer/ManageApplications/ArchiveApplications/actions';
import { Actions as DeleteApplicationActions } from '../../Pages/Employer/ManageApplications/DeleteApplications/actions';
import { Actions as RejectApplicationActions } from '../../Pages/Employer/ManageApplications/RejectApplications/actions';

const { Text, Link } = Typography;
const { confirm } = Modal;
interface IData {
  jobName?: string;
  email?: string;
  dateApplied?: string;
  salaryExpected?: string;
  messageToClient?: string;
  id?: string;
}

interface IProps {
  data: any;
  heading?: string;
  number?: number;
  delete?: boolean;
  approve?: boolean;
  archive?: boolean;
  reject?: boolean
}

const ApplicationListing = (props: IProps) => {
  let dispatch = useDispatch();
  const doAction = (type: string, id?: string) => {
    let user = getUserSession();
    if (user)
      switch (type) {
        case 'Approve':
          return confirm({
            title: 'Do you Want to Approve this Application',
            icon: <ExclamationCircleOutlined />,
            content: 'This application will be approved and show in Approve Applications List',
            onOk() {
              dispatch(
                ApproveApplicationActions.applicationApproveProgress({
                  applicationId: id,
                }),
              );
            },
            onCancel() {
              console.log('');
            },
          });
        case 'Archive':
          return confirm({
            title: 'Do you Want to Archive this Application',
            icon: <ExclamationCircleOutlined />,
            content: 'This application will be archived and show in Archive Applications List',
            onOk() {
              dispatch(
                ArchiveApplicationActions.sendApplicationToArchiveProgress({
                  applicationId: id,
                }),
              );
            },
            onCancel() {
              console.log('');
            },
          });
        case 'Delete':
          return confirm({
            title: 'Do you Want to Delete this Application',
            icon: <ExclamationCircleOutlined />,
            content: 'This application will be deleted and show in Delete Applications List',
            onOk() {
              dispatch(
                DeleteApplicationActions.applicationDeleteProgress({
                  applicationId: id
                }),
              );
            },
            onCancel() {
              console.log('');
            },
          });
          case 'Reject':
          return confirm({
            title: 'Do you Want to Reject this Application',
            icon: <ExclamationCircleOutlined />,
            content: 'This application will be rejected and show in Rejected Applications List',
            onOk() {
              dispatch(
                RejectApplicationActions.applicationRejectProgress({
                  applicationId: id
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
                        {item.messageToClient}{' '}
                        <br/>
                        {moment(item.dateApplied).format('MMM DD, YYYY')}
                      </Text>
                      <Text className={styles.expiry}>
                        Expected Salary {item.salaryExpected}
                      </Text>
                    </div>
                    <div className={styles.title}>
                      <Link className={styles.link}>{item.jobName}</Link>
                      <Text className={styles.message}>
                        Applied By: {item.email}
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
                    {props.reject && item && (
                      <AiFillCloseCircle
                        className={styles.delete}
                        size="30px"
                        title="Reject"
                        cursor="pointer"
                        onClick={() => doAction('Reject', item.id)}
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
export default ApplicationListing;
