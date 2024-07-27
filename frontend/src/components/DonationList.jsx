import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDonations } from '../store/donations';
import DonationItem from './DonationItem';

const DonationList = () => {
  const dispatch = useDispatch();
  const donations = useSelector(state => Object.values(state.donations));

  useEffect(() => {
    dispatch(fetchDonations());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <div className="row">
        {donations.map((donation) => (
          <div key={donation.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <DonationItem donation={donation} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationList;
