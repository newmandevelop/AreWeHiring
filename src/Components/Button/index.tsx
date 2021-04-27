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
  type?: boolean;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
}

const InputField = (props: IProps) => {
  return (
    <div className={styles.buttonFieldWrapper}>
      <Text className={styles.label}>{props.label}</Text>
      {props.optional && <Text className={styles.optional}>(Optional)</Text>}
      <div>
        {!props.type && (
          <Button
            onClick={props.onClick}
            icon={props.icon}
            className={styles.button}
            disabled={props.disabled}
          >
            {props.name}
          </Button>
        )}
        {props.type && (
          <Button
            onClick={props.onClick}
            icon={props.icon}
            size="large"
            disabled={props.disabled}
            className={styles.btnWithType}
            htmlType={props.htmlType}
            loading={props.loading}
          >
            {props.name}
          </Button>
        )}
        <Text className={styles.buttonPlaceholder}>{props.placeholder}</Text>
      </div>
    </div>
  );
};
export default InputField;
