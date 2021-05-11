import React from 'react';
import { Button } from 'antd';
import styles from './index.module.scss';

interface IProps {
  name?: String;

  onClick?: any;
  icon?: any;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
}

const PrimaryButton = (props: IProps) => {
  return (
    <Button
      type="primary"
      size="large"
      icon={props.icon}
      disabled={props.disabled}
      onClick={props.onClick}
      className={styles.searchBtn}
    >
      {props.name}
    </Button>
  );
};
export default PrimaryButton;
