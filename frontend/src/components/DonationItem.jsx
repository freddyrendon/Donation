import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateDonation, deleteDonation } from '../store/donations';

const DonationItem = ({ donation }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [donorFirstName, setDonorFirstName] = useState(donation.donor_first_name);
  const [donorLastName, setDonorLastName] = useState(donation.donor_last_name);
  const [donorEmail, setDonorEmail] = useState(donation.donor_email);
  const [donationType, setDonationType] = useState(donation.donation_type);
  const [donationQuantity, setDonationQuantity] = useState(donation.donation_quantity);
  const [donationDate, setDonationDate] = useState(donation.donation_date);

  const handleSave = () => {
    const updatedDonation = {
      donor_first_name: donorFirstName,
      donor_last_name: donorLastName,
      donor_email: donorEmail,
      donation_type: donationType,
      donation_quantity: donationQuantity,
      donation_date: donationDate,
    };
    dispatch(updateDonation(donation.id, updatedDonation));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteDonation(donation.id));
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <div className="mb-3">
            <label htmlFor="edit-first-name" className="form-label">First Name*</label>
            <input
              type="text"
              className="form-control"
              id="edit-first-name"
              value={donorFirstName}
              onChange={(e) => setDonorFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edit-last-name" className="form-label">Last Name*</label>
            <input
              type="text"
              className="form-control"
              id="edit-last-name"
              value={donorLastName}
              onChange={(e) => setDonorLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edit-email" className="form-label">Email Address*</label>
            <input
              type="email"
              className="form-control"
              id="edit-email"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edit-donation-type" className="form-label">Donation Type*</label>
            <input
              type="text"
              className="form-control"
              id="edit-donation-type"
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edit-donation-quantity" className="form-label">Quantity*</label>
            <input
              type="number"
              className="form-control"
              id="edit-donation-quantity"
              value={donationQuantity}
              onChange={(e) => setDonationQuantity(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edit-donation-date" className="form-label">Donation Date*</label>
            <input
              type="date"
              className="form-control"
              id="edit-donation-date"
              value={donationDate}
              onChange={(e) => setDonationDate(e.target.value)}
              required
            />
          </div>
          <button onClick={handleSave} className="btn btn-primary me-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
        </div>
      ) : (
        <div>
          <div className="mb-2">
            <strong>{donation.donor_first_name} {donation.donor_last_name}</strong>
          </div>
          <div className="mb-2">
            <span>Email: {donation.donor_email}</span>
          </div>
          <div className="mb-2">
            <span>Type: {donation.donation_type}</span>
          </div>
          <div className="mb-2">
            <span>Quantity: {donation.donation_quantity}</span>
          </div>
          <div className="mb-2">
            <span>Date: {donation.donation_date}</span>
          </div>
          <button onClick={() => setIsEditing(true)} className="btn btn-warning me-2">Edit</button>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      )}
    </div>
  );
};

export default DonationItem;
