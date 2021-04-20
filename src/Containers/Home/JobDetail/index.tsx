import React from "react";
import styles from "./index.module.scss";
import { StarOutlined, BellOutlined } from "@ant-design/icons";

import { Button, Typography } from "antd";
const JobApply = () => {
  const { Title, Text } = Typography;
  return (
    <div className={styles.jobApplyFieldsWrapper}>
      <div className={styles.jobApplyFields}>
        <Title level={4} className={styles.jobContetHeading}>
          Job Title
        </Title>
        <Text className={styles.jobContetPara}>Job Title</Text>
        <Title level={4} className={styles.jobContetHeading}>
          Location
        </Title>
        <Text className={styles.jobContetPara}>Address, State, Country</Text>
        <Title level={4} className={styles.jobContetHeading}>
          Employer
        </Title>
        <Text className={styles.jobContetPara}>We are hiring</Text>
        <Title level={4} className={styles.jobContetHeading}>
          Industry
        </Title>
        <Text className={styles.jobContetPara}>healthcare</Text>
        <Title level={4} className={styles.jobContetHeading}>
          Rate
        </Title>
        <Text className={styles.jobContetPara}>$15-$25</Text>
        <Title level={4} className={styles.jobContetHeading}>
          Salary
        </Title>
        <Text className={styles.jobContetPara}>$40,000-$50,000</Text>
        <Title level={4} className={styles.jobContetHeading}>
          Date Posted
        </Title>
        <Text className={styles.jobContetPara}>2020/04/01</Text>
      </div>
      <Button block icon={<StarOutlined />} size="large" className={styles.buttonAlignmant}>
        Bookmark
      </Button>{" "}
      <Button block icon={<BellOutlined />} size="large" className={styles.buttonAlignmant}>
        Alert
      </Button>
      <Button block size="large" className={styles.buttonAlignmant} type="primary">
        Apply
      </Button>
    </div>
  );
};

export default JobApply;
