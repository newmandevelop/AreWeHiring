import React from 'react';
import moment from 'moment';
import { Typography, List, Tag } from 'antd';
import styles from './index.module.scss';
import { BiArchiveOut } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
const { Text, Link } = Typography;
interface IData {
  title?: string;
  postedBy?: string;
  date?: string;
  expiry?: string;
  message?: string;
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
  return (
    <div className={styles.jobListing}>
      {console.log(props.data)}
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
                        {moment(item.date).format('MMM DD, YYYY')}
                      </Text>
                      <Text className={styles.expiry}>
                        Expiry {moment(item.expiry).format('MMM DD, YYYY')}
                      </Text>
                    </div>
                    <div className={styles.title}>
                      <Link className={styles.link}>{item.title}</Link>
                      <Text className={styles.message}>
                        Posted By: {item.postedBy}
                      </Text>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    {props.archive && (
                      <BiArchiveOut
                        size="30px"
                        title="Archive"
                        cursor="pointer"
                        className={styles.archive}
                      />
                    )}
                    {props.approve && (
                      <TiTick
                        className={styles.approve}
                        size="30px"
                        title="Approve"
                        cursor="pointer"
                      />
                    )}
                    {props.delete && (
                      <MdDelete
                        className={styles.delete}
                        size="30px"
                        title="Delete"
                        cursor="pointer"
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
