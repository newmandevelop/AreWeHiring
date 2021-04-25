import React, { useState, useRef } from 'react';
import { Tag, Input, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
const { Text } = Typography;

interface IProps {
  name?: any;
  placeholder?: any;
  label?: String;
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
      <Text className={styles.label}>{props.label}</Text>

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
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={inputKeyDown}
              type="text"
              placeholder={props.placeholder}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TagsField;
