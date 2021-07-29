import React from 'react';

import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
import TextEditor from '../../Components/TextEditor';
import TagsField from '../../Components/InputFieldsWithTags';
import Label from '../../Components/Label';
import { Form, Select, Upload } from 'antd';
const { Item } = Form;
const { Option } = Select;
interface IProps {
  name?: string | any;
  value?: any;
  onChange?: any;
  optional?: true | false;
  placeholder?: any;
  type?: 'text' | 'date';
  label?: String | any;
  textarea?: boolean;
  onClick?: any;
  fileProps?: any;
  icon?: any;
  fileType?: 'picture' | 'text';
  options?: string[];
  btnType?: boolean;
  rules?: [] | any;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  btnName?: string;
  fieldType?:
  | 'button'
  | 'input'
  | 'editor'
  | 'tagField'
  | 'dropDown'
  | 'upload';
  fieldKey?: any;
  initialValue?: string;
}
export const FormItem = (props: IProps) => {
  switch (props.fieldType) {
    case 'input':
      return (
        <Item fieldKey={props.fieldKey} name={props.name} rules={props.rules}>
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
            optional={props.optional}
            placeholder={props.placeholder}
          />
        </Item>
      );
    case 'dropDown':
      return (
        <div style={{ marginTop: '2rem' }}>
          <Label optional={props.optional} label={props.label} />
          <Item name={props.name} rules={props.rules} initialValue={props.initialValue}>
            <Select
              style={{ marginTop: '0.3rem' }}
              placeholder={props.placeholder}
              allowClear
              onChange={props.onChange}
            >
              {props.options?.map((d, i) => {
                return (
                  <Option key={i} value={d}>
                    {d}
                  </Option>
                );
              })}
            </Select>
          </Item>
        </div>
      );
    case 'upload':
      return (
        <Item name={props.name}>
          <Upload
            name={props.name}
            {...props.fileProps}
            listType={props.fileType}
          >
            <Button
              icon={props.icon}
              placeholder={props.placeholder}
              label={props.label}
              optional
              name={props.btnName}
            />{' '}
          </Upload>
        </Item>
      );
    default:
      return <></>;
  }
};
