import React from 'react';
import JobSearch from './JobSearch';
import styles from './index.module.scss';
import { Typography } from 'antd';

const { Title, Text } = Typography;
const Home = () => {
  return (
    <>
      <JobSearch />
      <div className={styles.popularCategories}>
        <Title className={styles.categoryText}>Popular Categories</Title>
      </div>
    </>
  );
};
export default Home;
