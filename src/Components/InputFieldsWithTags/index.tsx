import React, { useState } from 'react';
import { Tag, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import Label from './../Label/index';
interface IProps {
  name?: any;
  placeholder?: any;
  label?: String;
  optional?: boolean;
  initialValue?: string | [] | number
}
const TagsField = (props: IProps) => {
  const [tags, setTags] = useState<Array<string>>([]);

  const [inputText, setInputText] = useState<string>('');

  const inputKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      const tagValue = tags;
      if (tagValue.find(tag => tag.toLowerCase() === inputText.toLowerCase())) {
        setInputText('');
      } else {
        tagValue.push(inputText);
        setTags(tagValue);
        setInputText('');
      }
    }
  };

  return (
    <div className={styles.tagsInput}>
      <Label optional={props.optional} label={props.label} />
      <div className={styles.input_tag}>
        <ul className={styles.input_tags_list}>
          {tags &&
            tags.map((d: any) => {
              return (
                <li className={styles.tagItems} key={d}>
                  <Tag color="#3489cf">
                    {' '}
                    <CloseOutlined className={styles.deleteIcon} />
                    {d}
                  </Tag>
                </li>
              );
            })}
          <li>
            <Input
              className={styles.input}
              value={inputText !== '' ? inputText : props.initialValue}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={inputKeyDown}
              type="text"
              placeholder={props.placeholder}
              defaultValue="asdas"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TagsField;
