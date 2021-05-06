import React from 'react';
import { Select } from 'antd';
import styles from './index.module.scss';
import Label from './../Label';
const { Option } = Select;
interface IProps {
  onChange?: any;
  optional?: true | false;
  placeholder?: any;
  label?: String;
  options?: string[];
}
const DropDown = (props: IProps) => {
  return (
    <div className={styles.dropDownWrapper}>
      <Label optional={props.optional} label={props.label} />
      <Select
        className={styles.DropDown}
        placeholder={props.placeholder}
        allowClear
      >
        {props.options?.map((d, i) => {
          return (
            <Option className={styles.option} value={d}>
              {d}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default DropDown;
