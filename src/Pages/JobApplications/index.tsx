import React, { useEffect } from 'react';
import ApplicationListing from '../../Components/ApplicationListing';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';
import { getUserSession } from '../../utils/sessionStorage';
import {Actions} from './actions'
const JobApplications = () => {
  let dispatch = useDispatch();
  const { fetchApplicationsData } = useSelector(
    (state: IRootState) => state.fetchApplications,
  );

useEffect(() => {
  let user = getUserSession()
  dispatch(
    Actions.fetchApplicationsProgress({
      userId: user,
    }),
  );
}, [])
  return (
    <div>
      <div>
        <ApplicationListing
          data={fetchApplicationsData}
          number={Object.keys(fetchApplicationsData).length}
          heading="Job Applications"
        />
      </div>
    </div>
  );
};

export default JobApplications;
