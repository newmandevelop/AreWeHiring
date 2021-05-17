import React from 'react';
import styles from './index.module.scss';
import { Tooltip } from 'antd';
const Reviews = () => {
  return (
    <div>
      <Tooltip
        title="I have already heard back about the internship I applied through Are We Hiring, that’s the fastest
job reply I’ve ever gotten and it’s so much better than waiting weeks to hear back."
      >
        <span>Mouse over Here</span>
      </Tooltip>
    </div>
  );
};

export default Reviews;
