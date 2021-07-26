import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Typography, Button } from 'antd';
import moment from 'moment';
import axios from '../../service/axiosConfig';
import { countJobView } from '../../service/jobs'
import styles from './index.module.scss';
import { getUserSession } from '../../utils/sessionStorage';
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
  let history = useHistory();
  let user = getUserSession();

  const handleClick = async () => {
    const response = await countJobView(job.id, user)
    if (response)
      history.push(`/jobs/${job.id}`);
  };

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
          <span className={styles.span}>{`${job.employer ? job.employer : 'Recruiter'
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
          onClick={() => { handleClick() }}
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
