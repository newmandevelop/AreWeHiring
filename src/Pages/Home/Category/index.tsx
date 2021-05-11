import React from 'react';
import styles from './index.module.scss';
import { Row, Col, Typography } from 'antd';
import data from './category.json';
import PrimaryButton from '../../../Components/PrimaryButton';
const { Text } = Typography;

interface IProps {
  name?: string;
  number?: Number;
  link?: string;
}

const Category = () => {
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
        {data.categories.map((d, i) => {
          return (
            <Col style={{ marginTop: '1rem' }} key={i} sm={12} xs={24}>
              <CategoryItem name={d.name} number={d.number} />
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
