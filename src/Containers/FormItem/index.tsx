import React from 'react';

import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
import TextEditor from '../../Components/TextEditor/index';
import TagsField from '../../Components/InputFieldsWithTags/index';
import { Form } from 'antd';
const { Item } = Form;
interface IProps {
  name?: string;
  value?: any;
  onChange?: any;
  optional?: true | false;
  placeholder?: any;
  type?: 'text' | 'date';
  label?: String | any;
  textarea?: boolean;
  onClick?: any;
  icon?: any;
  btnType?: boolean;
  rules?: [];
  loading?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  fieldType?: 'button' | 'input' | 'editor' | 'tagField' | 'textArea';
}
export const FormItem = (props: IProps) => {
  switch (props.fieldType) {
    case 'input':
      return (
        <Item name={props.name}>
          <InputField
            label={props.label}
            name={props.name}
            onChange={props.onChange}
            optional={props.optional}
            placeholder={props.placeholder}
            textarea={props.textarea}
            value={props.value}
            type={props.type}
          />
        </Item>
      );
    case 'button':
      return (
        <Item name={props.name}>
          <Button
            disabled={props.disabled}
            loading={props.loading}
            label={props.label}
            name={props.name}
            onClick={props.onClick}
            placeholder={props.placeholder}
            type={props.btnType}
            htmlType={props.htmlType}
            optional={props.optional}
            icon={props.icon}
          />
        </Item>
      );
    case 'editor':
      return (
        <Item name={props.name}>
          <TextEditor label={props.label} />
        </Item>
      );
    case 'tagField':
      return (
        <Item name={props.name}>
          <TagsField
            label={props.label}
            name={props.name}
            placeholder={props.placeholder}
          />
        </Item>
      );
    default:
      return <></>;
  }
};
