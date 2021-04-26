import React from 'react';
import { Input } from 'antd';
import styles from './index.module.scss';
import Label from './../Label/index';
const { TextArea } = Input;
interface IProps {
  name?: any;
  value?: any;
  onChange?: any;
  optional?: true | false;
  placeholder?: any;
  type?: 'text';
  label?: String;
  textarea?: boolean;
}

const InputField = (props: IProps) => {
  return (
    <div className={styles.inputFieldWrapper}>
      <Label optional={props.optional} label={props.label} />
      {!props.textarea && (
        <Input
          allowClear
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          className={styles.input}
        />
      )}

      {props.textarea && (
        <TextArea
          allowClear
          name={props.name}
          placeholder={props.placeholder}
          rows={3}
          onChange={props.onChange}
          value={props.value}
          className={styles.textArea}
        />
      )}
    </div>
  );
};
export default InputField;
