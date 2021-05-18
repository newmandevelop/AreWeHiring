import React from 'react';
import styles from './index.module.scss';
const Reviews = () => {
  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.reviewBox}>
        <div className={styles.review}>
          <p>
            I have already heard back about the internship I applied through Are
            We Hiring, that’s the fastest job reply I’ve ever gotten and it’s so
            much better than waiting weeks to hear back.
          </p>
        </div>
      </div>

      {/* <div className={styles.authorBox}>
        <img
          className={styles.authorImage}
          src="https://www.arewehiring.com/wp-content/uploads/2015/10/John-Smith-780x430.jpg"
          alt=""
        />
        <h4 className={styles.authorName}>
          {' '}
          <span></span>
        </h4>
      </div> */}
    </div>
  );
};

export default Reviews;
