import React from 'react';
import { Divider, Typography } from 'antd';
import InputField from './../../../Components/InputField/index';
import styles from './index.module.scss';
import Button from './../../../Components/Button/index';
import TagsField from './../../../Components/InputFieldsWithTags/index';
import { UploadOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Label from './../../../Components/Label/index';
const Candidate = () => {
  return (
    <div className={styles.candidateFieldWrapper}>
      <div>
        <InputField
          label="Your Name"
          name="name"
          type="text"
          placeholder="Jonathan Palmeri"
        />
        <InputField
          label="Your Email"
          name="email"
          type="text"
          placeholder="Jon@RexRecruiting.com"
        />
        <InputField
          label="Professional Title"
          name="professionalTitle"
          type="text"
          placeholder="Recruiter"
        />
        <InputField
          label="Location"
          name="location"
          type="text"
          placeholder="United States"
        />
        <InputField
          label="Photo"
          optional={true}
          type="text"
          name="photo"
          placeholder="Maximum file size: 50 MB."
        />
        <Button
          icon={<UploadOutlined />}
          placeholder="Maximum file size: 50 MB."
          label="Photo"
          optional
          name="Browse"
        />{' '}
        <InputField
          label="Video"
          optional={true}
          type="text"
          name="video"
          placeholder="A link to a video about yourself"
        />
        <TagsField
          name="resumeCategory"
          placeholder="Enter Keyword"
          label="Resume category"
        />
        <InputField
          label="Minimum rate/h ($)"
          optional={true}
          type="text"
          name="rate"
          placeholder="75"
        />{' '}
        <InputField
          label="Skills"
          optional={true}
          type="text"
          name="skills"
          placeholder="Comma separate a list of relevant skills"
        />
        <Divider className={styles.divider} />
        <Button
          icon={<PlusCircleOutlined />}
          placeholder="Optionally provide links to any of your websites or social network profiles"
          label="URL(s)"
          optional
          name="Add URL"
        />
        <Divider className={styles.divider} />
        <Button
          icon={<PlusCircleOutlined />}
          label="Education"
          optional
          name="Add Education"
        />
        <Divider className={styles.divider} />
        <Label label="Experience" optional />
        <div className={styles.experience}>
          <InputField
            label="Employer"
            name="employer"
            type="text"
            placeholder="Rex Recruiting"
          />
          <InputField
            label="Job Title"
            name="jobtitle"
            type="text"
            placeholder="Job Title"
          />
          <InputField
            label="Start/End date"
            name="date"
            type="text"
            placeholder="2019 - Present"
          />
          <InputField
            label="Notes"
            name="notes"
            optional
            type="text"
            placeholder="Jonathon founded Rex Recruiting to leverage his Insurance, Finance, Healthcare, and Manufacturing staf ng experience to grow, staff and innovate the
            technology companies that are reshaping these industries. (Fintech, Insurtech, Healthcare Technology, Robotics Process Automation, Compliance &
            26
            Cybersecurity)"
            textarea
          />
        </div>
        <Button icon={<PlusCircleOutlined />} name="Add Experience" />
        <Divider className={styles.divider} />
        <Button
          icon={<UploadOutlined />}
          placeholder="Optionally upload your resume for employers to view. Max. file size: 50 MB"
          label="Resume File"
          optional
          name="Browse"
        />
      </div>
    </div>
  );
};

export default Candidate;
