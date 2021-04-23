import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./actions";
import { IRootState } from "../../reducers";
import moment from "moment";
import {
  DollarCircleOutlined,
  CalendarOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { Row, Col, Card, Typography, Button } from "antd";
import jobSearchSaga from "../JobOverview/saga";
const { Title, Paragraph } = Typography;
const AllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.allJobsProgress());
  }, [dispatch]);
  const { allJobsSuccess, allJobsData, allJobsFailure } = useSelector(
    (state: IRootState) => state.allJobsSearch
  );

  return (
    <div className={styles.AllJobsFieldWrapper}>
      {console.log(allJobsData)}
      {allJobsSuccess && (
        <Row justify="space-around">
          {allJobsData.map((job: any) => {
            return (
              <Col
                key={job.id}
                className={styles.column}
                md={9}
                lg={7}
                sm={22}
                xs={22}
              >
                <Card style={{ borderRadius: "10px" }} hoverable>
                  <Title className={styles.jobTitle} title="JobTitle">
                    {job.nameOfJob}
                  </Title>
                  <Button className={styles.typeBtn} type="primary">
                    {job.jobType}
                  </Button>
                  <Paragraph className={styles.firstDetail}>
                    <CarryOutOutlined />
                    <span className={styles.span}>{`${
                      job.employer ? job.employer : "Recruiter"
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
                      {" "}
                      {moment(job.datePosted).format("MMM Do YYYY")}
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
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default AllJobs;
