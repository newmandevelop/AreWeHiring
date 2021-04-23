import React, { useEffect } from "react";
import { Row, Col, Typography, Button } from "antd";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { RouteComponentProps, useParams } from "react-router-dom";
import JobDescription from "./JobDescription/index";
import JobApply from "./JobDetail";
import { Actions } from "./actions";

import { IRootState } from "../../reducers";
const JobOverview = ({ history }: RouteComponentProps) => {
  const { Title } = Typography;
  const { jobData, jobByIdSuccess, jobByIdFailure } = useSelector((state: IRootState) => state.jobSearch);
  const dispatch = useDispatch();

  interface ParamTypes {
    id: any;
  }
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    if (id)
      dispatch(
        Actions.jobByIdProgress({
          id: id,
        })
      );
  }, [dispatch, id]);

  return (
    <>
      <Button type="link" href={`/jobs/536f8504-b8df-4e06-9863-4fb08d51e781`}>
        Click here to view job details (Testing)
      </Button>
      {jobByIdSuccess && !jobByIdFailure && (
        <>
          <Title level={4} style={{ marginTop: "2rem" }}>
            Job Overview
          </Title>
          <div className={styles.home}>
            <Row>
              <Col md={18} sm={24} xs={24}>
                <JobDescription data={jobData} />
              </Col>
              <Col md={6} sm={24} xs={24}>
                <JobApply data={jobData} />
              </Col>
            </Row>
          </div>
        </>
      )}
      {jobByIdFailure && <h1 style={{ textAlign: "center" }}>Job Not Found With this ID</h1>}
    </>
  );
};

export default JobOverview;