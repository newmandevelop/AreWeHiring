import React from 'react';
import { Typography, Button } from 'antd';
import styles from './index.module.scss';
const { Text } = Typography;
interface IProps {
  name?: String;

  onClick?: any;
  optional?: true | false;
  placeholder?: any;
  label?: String;
  icon?: any;
}

const InputField = (props: IProps) => {
  return (
    <div className={styles.buttonFieldWrapper}>
      <Text className={styles.label}>{props.label}</Text>
      {props.optional && <Text className={styles.optional}>(Optional)</Text>}
      <div>
        <Button icon={props.icon} className={styles.button}>
          {props.name}
        </Button>
        <Text className={styles.buttonPlaceholder}>{props.placeholder}</Text>
      </div>
    </div>
  );
};
export default InputField;