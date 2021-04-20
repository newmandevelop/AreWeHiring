import React from "react";
import { Row, Col, Typography } from "antd";
import styles from "./index.module.scss";
import { RouteComponentProps } from "react-router-dom";
import JobDescription from "./JobDescription/index";
import JobApply from "./JobDetail";

const Home = ({ history }: RouteComponentProps) => {
  const { Title } = Typography;
  return (
    <>
      <Title level={4} style={{ marginTop: "2rem" }}>
        Job Overview
      </Title>
      <div className={styles.home}>
        <Row>
          <Col md={18} sm={24} xs={24}>
            <JobDescription />
          </Col>
          <Col md={6} sm={24} xs={24}>
            <JobApply />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
