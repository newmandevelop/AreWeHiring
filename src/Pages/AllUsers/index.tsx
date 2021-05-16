import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './actions';
import { Row, Col, Card, Typography } from 'antd';
import {
  CarryOutOutlined,
} from '@ant-design/icons';
import Dashboard from '../../Containers/Dashboard';
import { IRootState } from '../../reducers';
//import { IRootState } from '../../reducers';

const { Title, Paragraph } = Typography;

const AllUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(Actions.allUsersProgress());
    }, [dispatch]);
    const { allUsersSuccess, allUsersData } = useSelector(
      (state: IRootState) => state.allUserSearch,
    );

  return (
    <Dashboard  dashboardName="All Users">
    <div className={styles.AllUsersFieldWrapper}>
      {allUsersSuccess && (
        <Row justify="space-around">
          {allUsersData.map((user: any) => {
            return (
              <Col
                key={user.id}
                className={styles.column}
                md={9}
                lg={7}
                sm={22}
                xs={22}
              >
                <Card style={{ borderRadius: '10px' }} hoverable>
                  <Title className={styles.name} title="Email">
                    {user.email}
                  </Title>

                  <Paragraph className={styles.name}>
                    <CarryOutOutlined />
                    <span className={styles.span}>{`${
                      user.firstName ? user.firstName : 'No First Name'
                    }`}</span>
                  </Paragraph>
                  <Paragraph className={styles.name}>
                    <CarryOutOutlined />
                    <span className={styles.span}>{user.lastName}</span>
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

export default AllUsers;