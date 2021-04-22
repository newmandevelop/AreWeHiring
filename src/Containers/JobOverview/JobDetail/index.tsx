import React from "react";
import styles from "./index.module.scss";
import { StarOutlined, BellOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import moment from "moment";
const JobApply = (data: any) => {
  const { Title, Text } = Typography;
  const {
    nameOfJob,
    location,
    recruiterType,
    currencySymbol,
    salaryLowerLimit,
    salaryUpperLimit,
    datePosted,
  } = data.data;
  return (
    <>
      {console.log(data.data)}
      <div className={styles.jobApplyFieldsWrapper}>
        <div className={styles.jobApplyFields}>
          <Title level={4} className={styles.jobContetHeading}>
            Job Title
          </Title>
          {console.log(nameOfJob)}
          <Text className={styles.jobContetPara}>{nameOfJob}</Text>
          <Title level={4} className={styles.jobContetHeading}>
            Location
          </Title>
          <Text className={styles.jobContetPara}>{location}</Text>
          <Title level={4} className={styles.jobContetHeading}>
            Employer
          </Title>
          <Text className={styles.jobContetPara}>{recruiterType}</Text>
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
          <Text className={styles.jobContetPara}>
            {currencySymbol}
            {salaryLowerLimit}-{currencySymbol}
            {salaryUpperLimit}
          </Text>
          <Title level={4} className={styles.jobContetHeading}>
            Date Posted
          </Title>
          <Text className={styles.jobContetPara}>
            {moment(datePosted).format("MMM Do YYYY")}
          </Text>
        </div>
        <Button
          block
          icon={<StarOutlined />}
          size="large"
          className={styles.buttonAlignmant}
        >
          Bookmark
        </Button>{" "}
        <Button
          block
          icon={<BellOutlined />}
          size="large"
          className={styles.buttonAlignmant}
        >
          Alert
        </Button>
        <Button
          block
          size="large"
          className={styles.buttonAlignmant}
          type="primary"
        >
          Apply
        </Button>
      </div>
      )
    </>
  );
};

export default JobApply;
