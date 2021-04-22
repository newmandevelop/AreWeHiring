import React from "react";
import styles from "./index.module.scss";
import {
  DollarCircleOutlined,
  CalendarOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { Row, Col, Card, Typography, Button } from "antd";
const { Title, Paragraph, Text } = Typography;
const AllJobs = () => {
  return (
    <div className={styles.AllJobsFieldWrapper}>
      <Row justify="space-around">
        {[1, 2, 3, 4, 5, 6].map((d) => {
          return (
            <Col
              key={d}
              className={styles.column}
              md={9}
              lg={7}
              sm={22}
              xs={22}
            >
              <Card style={{ borderRadius: "10px" }} hoverable>
                <Title className={styles.jobTitle} title="JobTitle">
                  Hematology Oncology PA/ Nurse Practitioner
                </Title>
                <Button className={styles.typeBtn} type="primary">
                  Full Time
                </Button>
                <Paragraph className={styles.firstDetail}>
                  <CarryOutOutlined />
                  <span className={styles.span}>Recruiter Here</span>
                </Paragraph>
                <Paragraph className={styles.secondDetail}>
                  <CarryOutOutlined />
                  <span className={styles.span}>Address</span>
                </Paragraph>
                <Paragraph className={styles.secondDetail}>
                  <DollarCircleOutlined />
                  <span className={styles.span}>$4000-$5000</span>
                </Paragraph>
                <Paragraph className={styles.secondDetail}>
                  <CalendarOutlined />
                  <span className={styles.span}>Date here</span>
                </Paragraph>
                <Paragraph className={styles.jobDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </Paragraph>
                <Button className={styles.applyBtn} type="primary" size="small">
                  Apply
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AllJobs;
