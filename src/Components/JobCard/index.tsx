import React from 'react';
import { Card, Typography, Button } from 'antd';
import moment from 'moment';
import styles from './index.module.scss';
import { dateFormat } from '../../utils/general';
import {
  DollarCircleOutlined,
  CalendarOutlined,
  CarryOutOutlined,
} from '@ant-design/icons';
const { Title, Paragraph } = Typography;

interface IJob {
  name: string;
  type: string;
  employer: string;
  location: string;
  currencySymbol: string;
  salaryLowerLimit: string;
  salaryUpperLimit: string;
  datePosted: string;
  description: string;
  id: any;
}

const JobCard = (job: IJob) => {
  return (
    <main className={styles.JobCardWrapper}>
      <Card style={{ backgroundColor: '#fdfdfd' }} hoverable>
        <Title className={styles.jobTitle} title="JobTitle">
          {job.name}
        </Title>
        <Button className={styles.typeBtn} type="primary">
          {job.type}
        </Button>
        <Paragraph className={styles.firstDetail}>
          <CarryOutOutlined />
          <span className={styles.span}>{`${
            job.employer ? job.employer : 'Recruiter'
          }`}</span>
        </Paragraph>
        <Paragraph className={styles.secondDetail}>
          <CarryOutOutlined />
          <span className={styles.span}>{job.location}</span>
        </Paragraph>
        <Paragraph className={styles.secondDetail}>
          <DollarCircleOutlined />
          <span className={styles.span}>
            {job.currencySymbol}
            {job.salaryLowerLimit}-{job.currencySymbol}
            {job.salaryUpperLimit}
          </span>
        </Paragraph>
        <Paragraph className={styles.secondDetail}>
          <CalendarOutlined />
          <span className={styles.span}>
            {moment(job.datePosted).format(dateFormat)}
          </span>
        </Paragraph>
        <Paragraph className={styles.jobDescription}>
          {job.description}
        </Paragraph>
        <Button
          href={`/jobs/${job.id}`}
          className={styles.applyBtn}
          type="primary"
          size="small"
        >
          Apply
        </Button>
      </Card>
    </main>
  );
};

export default JobCard;
