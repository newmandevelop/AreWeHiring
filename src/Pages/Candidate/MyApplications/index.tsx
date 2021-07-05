import React, { useEffect, useState } from 'react';
// import styles from './index.module.scss';
import ApplicationListing from '../../../Components/ApplicationListing';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../reducers';
import { Actions } from '../actions';
import { getUserSession } from '../../../utils/sessionStorage';

const MyApplications = () => {
  let dispatch = useDispatch();
  const { candidateApplicationsData, getApplicationsSuccess } = useSelector(
    (state: IRootState) => state.candidate,
  );

  useEffect(() => {
    let user = getUserSession();
    const email = localStorage.getItem('email')
    if (email) {
      dispatch(
        Actions.getCandidateApplicationsProgress({
          email: email,
        }),
      );
    }
  }, []);

  useEffect(() => {
console.log("gotcha", candidateApplicationsData)
if(getApplicationsSuccess) console.log("length", candidateApplicationsData.length)
  },[candidateApplicationsData, getApplicationsSuccess])

  return (
    <div>
      <div>
        <ApplicationListing
          data={candidateApplicationsData}
          number={getApplicationsSuccess ? Object.keys(candidateApplicationsData).length : 0}
          heading="My Applications"
        />
      </div>
    </div>
  );
};

export default MyApplications;
