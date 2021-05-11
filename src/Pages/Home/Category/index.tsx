import React from 'react';
import styles from './index.module.scss';
import { Row, Col, Typography } from 'antd';
import data from './category.json';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../../Components/PrimaryButton';
import { IRootState } from '../../../reducers';
const { Text } = Typography;

interface IProps {
  name?: string;
  number?: Number;
  link?: string;
}

const Category = () => {
  const { jobCategoriesData } = useSelector(
    (state: IRootState) => state.jobCategory,
  );
  const CategoryItem = (props: IProps) => {
    return (
      <div className={styles.category_box}>
        <div className={styles.category_box_items}>
          <div className={styles.category_box_content}>
            <Text className={styles.categoryText}>{props.name}</Text>
          </div>
          <div className={styles.category_number}>
            <Text className={styles.categoryNumber}>{props.number}</Text>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.categoriesWrapper}>
      <Row gutter={20} justify="space-between">
        {jobCategoriesData &&
          Object.keys(jobCategoriesData).map((data, index) => {
            return (
              <Col style={{ marginTop: '1rem' }} key={index} sm={12} xs={24}>
                <CategoryItem name={data} number={jobCategoriesData[data]} />
              </Col>
            );
          })}
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PrimaryButton name="Browse All Categories" />
      </div>
    </div>
  );
};
export default Category;
