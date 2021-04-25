import React from 'react';
import InputField from './../../../Components/InputField/index';
import styles from './index.module.scss';
import Button from './../../../Components/Button/index';
import { UploadOutlined } from '@ant-design/icons';
const Candidate = () => {
  return (
    <div className={styles.candidateFieldWrapper}>
      <div>
        <InputField
          label="Your Name"
          name="name"
          type="text"
          placeholder="Jonathan Palmeri"
        ></InputField>
        <InputField
          label="Your Email"
          name="email"
          type="text"
          placeholder="Jon@RexRecruiting.com"
        ></InputField>
        <InputField
          label="Professional Title"
          name="professionalTitle"
          type="text"
          placeholder="Recruiter"
        ></InputField>
        <InputField
          label="Location"
          name="location"
          type="text"
          placeholder="United States"
        ></InputField>
        <InputField
          label="Photo"
          optional={true}
          type="text"
          name="photo"
          placeholder="Maximum file size: 50 MB."
        ></InputField>
        <Button
          icon={<UploadOutlined />}
          placeholder="Maximum file size: 50 MB."
          label="Photo"
          optional
          name="Browse"
        />
      </div>
    </div>
  );
};

export default Candidate;
