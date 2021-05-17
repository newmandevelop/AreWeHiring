import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './actions';
//import { IRootState } from '../../reducers';
import moment from 'moment';
import { Row, Col, Card, Typography } from 'antd';
import { dateFormat } from '../../utils/general';
import {
  CalendarOutlined,
  CarryOutOutlined,
} from '@ant-design/icons';
import Dashboard from '../../Containers/Dashboard';
import { IRootState } from '../../reducers';

const { Title, Paragraph } = Typography;

const AllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.allCompaniesProgress());
  }, [dispatch]);
  const { allCompaniesSuccess, allCompaniesData } = useSelector(
    (state: IRootState) => state.allCompaniesSearch,
  );

  return (
    <Dashboard  dashboardName="All Companies">
    <div className={styles.AllCompaniesFieldWrapper}>
      {allCompaniesSuccess && (
        <Row justify="space-around">
          {allCompaniesData.map((company: any) => {
            return (
              <Col
                key={company.id}
                className={styles.column}
                md={9}
                lg={7}
                sm={22}
                xs={22}
              >
                <Card style={{ borderRadius: '10px' }} hoverable>
                  <Title className={styles.companyName} title="Company Name">
                    {company.name}
                  </Title>

                  <Paragraph className={styles.firstDetail}>
                    <CarryOutOutlined />
                    <span className={styles.span}>{`${
                      company.location ? company.location : 'No Location'
                    }`}</span>
                  </Paragraph>
                  <Paragraph className={styles.secondDetail}>
                    <CarryOutOutlined />
                    <span className={styles.span}>{company.tagline}</span>
                  </Paragraph>
                  <Paragraph className={styles.secondDetail}>
                    <CarryOutOutlined />
                    <span className={styles.span}>{company.website}</span>
                  </Paragraph>
                  <Paragraph className={styles.secondDetail}>
                    <CalendarOutlined />
                    <span className={styles.span}>
                      {moment(company.dateFounded).format(dateFormat)}
                    </span>
                  </Paragraph>
                  <Paragraph className={styles.companySize}>
                    {company.companySize}
                  </Paragraph>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
    </Dashboard>
  );
};

export default AllCompanies;
