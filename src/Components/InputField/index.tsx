import React from 'react';
import { Typography, Input } from 'antd';
import styles from './index.module.scss';
const { Text } = Typography;
interface IProps {
  name?: any;
  value?: any;
  onChange?: any;
  optional?: true | false;
  placeholder?: any;
  type?: 'text';
  label?: String;
}

const InputField = (props: IProps) => {
  return (
    <div className={styles.inputFieldWrapper}>
      <Text className={styles.label}>{props.label}</Text>
      {props.optional && <Text className={styles.optional}>(Optional)</Text>}
      <Input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={styles.input}
      />
    </div>
  );
};
export default InputField;
