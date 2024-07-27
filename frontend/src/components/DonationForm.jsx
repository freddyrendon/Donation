import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDonation } from '../store/donations';

const DonationForm = () => {
  const dispatch = useDispatch();
  const [donorFirstName, setDonorFirstName] = useState('');
  const [donorLastName, setDonorLastName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationType, setDonationType] = useState('');
  const [donationQuantity, setDonationQuantity] = useState('');
  const [donationDate, setDonationDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDonation = {
      donor_first_name: donorFirstName,
      donor_last_name: donorLastName,
      donor_email: donorEmail,
      donation_type: donationType,
      donation_quantity: donationQuantity,
      donation_date: donationDate,
    };
    
    dispatch(createDonation(newDonation));
    setDonorFirstName('');
    setDonorLastName('');
    setDonorEmail('');
    setDonationType('');
    setDonationQuantity('');
    setDonationDate('');
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center mb-4">Online Donation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">First Name*</label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="First Name"
              value={donorFirstName}
              onChange={(e) => setDonorFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">Last Name*</label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Last Name"
              value={donorLastName}
              onChange={(e) => setDonorLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address*</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="donation-type" className="form-label">Donation Type*</label>
            <input
              type="text"
              className="form-control"
              id="donation-type"
              placeholder="Donation Type"
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="donation-quantity" className="form-label">Quantity*</label>
            <input
              type="number"
              className="form-control"
              id="donation-quantity"
              placeholder="Quantity"
              value={donationQuantity}
              onChange={(e) => setDonationQuantity(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="donation-date" className="form-label">Donation Date*</label>
            <input
              type="date"
              className="form-control"
              id="donation-date"
              value={donationDate}
              onChange={(e) => setDonationDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Donation</button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;