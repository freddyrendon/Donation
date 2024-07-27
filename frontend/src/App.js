import React, { useState } from "react";
import DonationForm from "./components/DonationForm";
import DonationList from "./components/DonationList";

function App() {
  const [donations, setDonations] = useState([]);

  const handleAddDonation = (newDonation) => {
    setDonations([...donations, newDonation]);
  };

  return (
    <div>
      <DonationForm onAdd={handleAddDonation} />
      <DonationList />
    </div>
  );
}

export default App;
