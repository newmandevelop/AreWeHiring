import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Row, Col, Typography, List, Avatar, Tag, Pagination } from 'antd';
import {
  activeListings,
  timeBookmarked,
  totalApplication,
  totalJobViews,
} from '../../../service/dashboard';
import { getUserSession } from '../../../utils/sessionStorage';
const { Text, Title, Link } = Typography;
interface IProps {
  name?: string;
  number?: Number;
  link?: string;
  color?: string;
  id: string;
}

const recentActivities = [
  {
    listing: 'Listing',
    link: 'Physician Assistant – Neurosurgical Critical Care',
    message: 'was updated',
    time: '1 week ago',
  },
  {
    listing: 'Listing',
    link: 'Hematology Oncology PA / Nurse Practitioner (APRN)',
    message: 'was removed',
    time: '4 week ago',
  },
  {
    listing: 'Listing',
    link: 'Hematology Oncology PA / Nurse Practitioner (APRN)',
    message: 'was removed',
    time: '4 week ago',
  },
  {
    listing: 'Listing',
    link: 'Physician Assistant – Neurosurgical Critical Care',
    message: 'was updated',
    time: '1 week ago',
  },
  {
    listing: 'Listing',
    link: 'Physician Assistant – Neurosurgical Critical Care',
    message: 'was approved',
    time: '4 week ago',
  },
];
const data = [
  {
    number: 0,
    name: 'Active Job Listing',
    id: 'activeJob',
    color: '#26ae60',
  },
  {
    number: 0,
    name: 'Total Jobs Views',
    id: 'totalJob',
    color: '#363841',
  },
  {
    number: 0,
    name: 'Total Applications',
    id: 'totalApplication',
    color: '#117bbf',
  },
  {
    number: 0,
    name: 'Times Bookmarked',
    id: 'timesBookmarked',
    color: '#ffae00',
  },
];
const packages = [
  {
    title: 'Free 1',
  },
  {
    title: 'Free 2',
  },
  {
    title: 'Free 3',
  },
  {
    title: 'Free 4',
  },
];
const Employer = () => {
  const [categoryData, setCategoryData] = useState(data);

  useEffect(() => {
    let user = getUserSession();

    const activeListing = user && activeListings(user);
    activeListing &&
      activeListing.then(data => {
        const changeData = [...categoryData];
        const activeData = changeData.filter(({ id }) => id === 'activeJob');
        const updated = { ...activeData[0], number: data };
        const index = categoryData.findIndex(el => el.id === 'activeJob');
        categoryData[index] = { ...updated };
        setCategoryData([...categoryData]);
      });

    const totalApplicationAmount = user && totalApplication(user);
    totalApplicationAmount &&
      totalApplicationAmount.then(data => {
        const changeData = [...categoryData];
        const activeData = changeData.filter(
          ({ id }) => id === 'totalApplication',
        );
        const updated = { ...activeData[0], number: data };
        const index = categoryData.findIndex(
          el => el.id === 'totalApplication',
        );
        categoryData[index] = { ...updated };
        setCategoryData([...categoryData]);
      });

    const timeBookmarkedAmount = user && timeBookmarked(user);
    timeBookmarkedAmount &&
      timeBookmarkedAmount.then(data => {
        const changeData = [...categoryData];
        const activeData = changeData.filter(
          ({ id }) => id === 'timesBookmarked',
        );
        const updated = { ...activeData[0], number: data };
        const index = categoryData.findIndex(el => el.id === 'timesBookmarked');
        categoryData[index] = { ...updated };
        setCategoryData([...categoryData]);
      });

    const totalJobAmount = user && totalJobViews(user);
    totalJobAmount &&
      totalJobAmount.then(data => {
        const changeData = [...categoryData];
        const activeData = changeData.filter(({ id }) => id === 'totalJob');
        const updated = { ...activeData[0], number: data };
        const index = categoryData.findIndex(el => el.id === 'totalJob');
        categoryData[index] = { ...updated };
        setCategoryData([...categoryData]);
      });
  }, []);

  const CategoryItem = (props: IProps) => {
    return (
      <div
        style={{ backgroundColor: props.color }}
        className={styles.category_box}
      >
        <div className={styles.category_box_items}>
          <div className={styles.category_box_content}>
            <Title level={2} className={styles.categoryNumber}>
              {props.number}
            </Title>
            <Text className={styles.categoryText}>{props.name}</Text>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.employerWrapper}>
      <div className={styles.categoriesWrapper}>
        <Row gutter={20} justify="space-between">
          {categoryData.map((data, index) => {
            return (
              <Col style={{ marginTop: '1rem' }} key={index} sm={12} xs={24}>
                <CategoryItem
                  id={data.id}
                  color={data.color}
                  name={data.name}
                  number={data.number}
                />
              </Col>
            );
          })}
        </Row>
      </div>

      <div className={styles.recentActivities}>
        <List
          header={
            <div className={styles.heading}>
              <Text>Recent Activities</Text>
              <Tag className={styles.clear}>Clear All</Tag>
            </div>
          }
          bordered
          dataSource={recentActivities}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>A</Avatar>}
                description={
                  <React.Fragment>
                    <Text className={styles.listing}>{item.listing}</Text>
                    <Link className={styles.link}>{item.link}</Link>
                    <Text className={styles.message}>{item.message}</Text>
                    <Tag className={styles.time}>{item.time}</Tag>
                  </React.Fragment>
                }
              />
            </List.Item>
          )}
        />
      </div>

      <div className={styles.pagination}>
        <Pagination
          pageSize={6}
          responsive={true}
          showQuickJumper={false}
          showLessItems
          total={500}
        />
      </div>
      <div className={styles.recentActivities}>
        <List
          header={
            <div className={styles.heading}>
              <Text>Your Listing Packages</Text>
            </div>
          }
          bordered
          dataSource={packages}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>M</Avatar>}
                title={<a href="https://ant.design">{item.title}</a>}
                description="You have 2 listings posted, listed for 30 days"
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Employer;
