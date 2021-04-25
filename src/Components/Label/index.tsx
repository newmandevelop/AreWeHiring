import React from 'react';
import { Typography } from 'antd';
import styles from './index.module.scss';

const { Text } = Typography;
interface IProps {
  optional?: true | false;

  label?: String;
}
const Label = (props: IProps) => {
  return (
    <React.Fragment>
      <Text className={styles.label}>{props.label}</Text>
      {props.optional && <Text className={styles.optional}>(Optional)</Text>}
    </React.Fragment>
  );
};
export default Label;
