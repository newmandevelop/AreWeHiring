import React from 'react';
import styles from './index.module.scss';
import { Row, Col, Typography, List, Avatar, Tag, Pagination } from 'antd';
const { Text, Title, Link } = Typography;
interface IProps {
  name?: string;
  number?: Number;
  link?: string;
  color?: string;
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
    number: 26,
    name: 'Active Job Listing',
    color: '#26ae60',
  },
  {
    number: 156,
    name: 'Total Jobs Views',
    color: '#363841',
  },
  {
    number: 0,
    name: 'Total Applications',
    color: '#117bbf',
  },
  {
    number: 0,
    name: 'Times Bookmarked',
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
          {data.map((data, index) => {
            return (
              <Col style={{ marginTop: '1rem' }} key={index} sm={12} xs={24}>
                <CategoryItem
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
