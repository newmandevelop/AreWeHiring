import React from 'react';
import { Typography, Input } from 'antd';
import styles from './index.module.scss';
import Label from './../Label/index';
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
      <Label optional={props.optional} label={props.label} />
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
